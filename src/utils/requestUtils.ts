import { reactive } from 'vue'

import { authPlugin } from '@/components/templates/Auth'
import Word from '@/types/words'
import { AxiosError } from 'axios'

// TODO: Change any
// TODO: pass interface so it's generic
// TODO: Move this somewhere else?
export const createUpdateApiCall = async (
    apiCall: any,
    requestData?: Word | string
) => {
    interface GetApiState {
        data: Record<string, string | number> | null
        loading: boolean
        errored: boolean | AxiosError
    }

    const state: GetApiState = reactive({
        data: null,
        loading: true,
        errored: false
    })

    try {
        const accessToken = await authPlugin.getTokenSilently()

        const response = await apiCall(accessToken, requestData && requestData)
        state.data = response.data
    } catch (error) {
        state.errored = error
    } finally {
        state.loading = false
    }

    return state
}
