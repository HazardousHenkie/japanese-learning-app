import { reactive } from 'vue'

import { authPlugin } from '@/Auth'

import { AxiosError } from 'axios'

const doApiCall = async <DataType>(
    apiCall: Function,
    requestData?: DataType
) => {
    interface GetApiState {
        data: DataType | undefined
        loading: boolean
        errored: boolean | AxiosError
    }

    const state: GetApiState = reactive({
        data: undefined,
        loading: true,
        errored: false
    })

    try {
        const accessToken = await authPlugin.getTokenSilently()
        const response = await apiCall(
            accessToken,
            (requestData as DataType) && (requestData as DataType)
        )

        state.data = response.data
    } catch (error) {
        state.errored = error
    } finally {
        state.loading = false
    }

    return state
}

export default doApiCall
