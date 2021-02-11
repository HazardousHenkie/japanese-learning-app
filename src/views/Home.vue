<template>
    <div v-if="!$auth.loading.value">
        <button
            v-if="!$auth.isAuthenticated.value"
            @keyup.enter="login"
            @click="login"
        >
            Log in
        </button>

        <button
            v-if="$auth.isAuthenticated.value"
            @keyup.enter="logout"
            @click="logout"
        >
            Log out
        </button>
    </div>
</template>

<script lang="ts">
import { inject } from 'vue'
import { AuthPlugin } from '../components/templates/Auth'
import { useRouter } from 'vue-router'
import ROUTES from '@/utils/routes'

export default {
    name: 'Home',
    setup() {
        const auth = inject('Auth') as AuthPlugin
        const router = useRouter()

        if (auth.isAuthenticated.value) {
            router.push(ROUTES.DASHBOARD)
        }

        const login = () => {
            auth.loginWithRedirect()
        }
        const logout = () => {
            auth.logout({
                returnTo: window.location.origin
            })
        }

        return {
            login,
            logout
        }
    },
    methods: {}
}
</script>
