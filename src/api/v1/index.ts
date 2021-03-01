import Words from './Words'

const V1 = (baseUrl: string) => {
    const url = `${baseUrl}/v1`
    return {
        Words: Words(url)
    }
}

export default V1
