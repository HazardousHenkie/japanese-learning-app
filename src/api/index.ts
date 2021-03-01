import V1 from './v1'

const api = () => {
    const baseUrl = ''
    return {
        v1: V1(baseUrl)
    }
}

export default api
