import createAuth0Client, {
    Auth0Client,
    PopupLoginOptions,
    PopupConfigOptions,
    RedirectLoginOptions,
    GetIdTokenClaimsOptions,
    GetTokenSilentlyOptions,
    GetTokenWithPopupOptions,
    LogoutOptions,
    Auth0ClientOptions,
    RedirectLoginResult,
    IdToken
} from '@auth0/auth0-spa-js'
import { computed, ComputedRef, reactive, App } from 'vue'

interface Auth0ClientData {
    loading: boolean
    isAuthenticated: boolean
    user: {} | undefined
    popupOpen: boolean
    error: Error | null
}

let client: Auth0Client
const state: Auth0ClientData = reactive({
    loading: true,
    isAuthenticated: false,
    user: {},
    popupOpen: false,
    error: null
})

const loginWithPopup = async (
    options?: PopupLoginOptions,
    config?: PopupConfigOptions
) => {
    state.popupOpen = true

    try {
        await client.loginWithPopup(options, config)
        state.user = await client.getUser()
        state.isAuthenticated = await client.isAuthenticated()
        state.error = null
    } catch (error) {
        state.error = error
        // eslint-disable-next-line no-console
        console.error(error)
    } finally {
        state.popupOpen = false
    }

    state.user = await client.getUser()
    state.isAuthenticated = true
}

const handleRedirectCallback = async () => {
    state.loading = true

    try {
        await client.handleRedirectCallback()
        state.user = await client.getUser()
        state.isAuthenticated = true
        state.error = null
    } catch (e) {
        state.error = e
    } finally {
        state.loading = false
    }
}

const loginWithRedirect = (options?: RedirectLoginOptions) => {
    return client.loginWithRedirect(options)
}

const getIdTokenClaims = (options?: GetIdTokenClaimsOptions) => {
    return client.getIdTokenClaims(options)
}

const getTokenSilently = (options?: GetTokenSilentlyOptions) => {
    return client.getTokenSilently(options)
}

const getTokenWithPopup = (options?: GetTokenWithPopupOptions) => {
    return client.getTokenWithPopup(options)
}

const logout = (options?: LogoutOptions) => {
    return client.logout(options)
}

export interface AuthPlugin {
    isAuthenticated: ComputedRef<boolean>
    loading: ComputedRef<boolean>
    user: ComputedRef<{} | undefined>
    getIdTokenClaims: (options?: GetIdTokenClaimsOptions) => Promise<IdToken>
    getTokenSilently: (options?: GetTokenSilentlyOptions) => Promise<string>
    getTokenWithPopup: (options?: GetTokenWithPopupOptions) => Promise<string>
    handleRedirectCallback: () => Promise<void>
    loginWithRedirect: (options?: RedirectLoginOptions) => Promise<void>
    loginWithPopup: (
        options?: PopupLoginOptions,
        config?: PopupConfigOptions
    ) => Promise<void>
    logout: (options?: LogoutOptions) => void
}

export const authPlugin: AuthPlugin = {
    isAuthenticated: computed(() => state.isAuthenticated),
    loading: computed(() => state.loading),
    user: computed(() => state.user),
    getIdTokenClaims,
    getTokenSilently,
    getTokenWithPopup,
    handleRedirectCallback,
    loginWithRedirect,
    loginWithPopup,
    logout
}

const DEFAULT_REDIRECT_CALLBACK = () =>
    window.history.replaceState({}, document.title, window.location.pathname)

const setupAuth = async (
    onRedirectCallback: (
        appState: RedirectLoginResult['appState']
    ) => void = DEFAULT_REDIRECT_CALLBACK,
    options: Omit<Auth0ClientOptions, 'client_id' | 'domain'>
) => {
    const { redirectUri = window.location.origin } = options

    client = await createAuth0Client({
        ...options,
        domain: process.env.VUE_APP_AUTH0_DOMAIN,
        client_id: process.env.VUE_APP_AUTH0_CLIENT_ID,
        redirect_uri: redirectUri ?? window.location.origin,
        useRefreshTokens: true
    })

    try {
        if (
            window.location.search.includes('code=') &&
            window.location.search.includes('state=')
        ) {
            const { appState } = await client.handleRedirectCallback()
            state.error = null
            onRedirectCallback(appState)
        }
    } catch (error) {
        state.error = error
    } finally {
        state.isAuthenticated = await client.isAuthenticated()
        state.user = await client.getUser()
        state.loading = false
    }

    return {
        install: (app: App) => {
            app.config.globalProperties.$auth = authPlugin
            app.provide('Auth', authPlugin)
        }
    }
}

export default setupAuth
