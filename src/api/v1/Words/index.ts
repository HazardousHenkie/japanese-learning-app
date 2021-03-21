import Word from '@/types/words'
import Axios from '@/utils/axios'

type WordPostRequest = Word
type WordPatchRequest = Word

const Words = (baseUrl: string) => {
    const url = `${baseUrl}/words`
    return {
        getWords: async (accessToken: string) => {
            return await Axios(accessToken).get(url)
        },
        getSingleWord: async (accessToken: string, wordId: string) => {
            return await Axios(accessToken).get(`${url}/${wordId}`)
        },
        post: async (accessToken: string, data: WordPostRequest) => {
            return await Axios(accessToken).post(url, data)
        },
        patch: async (
            accessToken: string,
            requestParams: { id: string; data: WordPatchRequest }
        ) => {
            return await Axios(accessToken).patch(
                `${url}/${requestParams.id}`,
                requestParams.data
            )
        },
        delete: async (accessToken: string, wordId: string) => {
            return await Axios(accessToken).delete(`${url}/${wordId}`)
        }
    }
}

export default Words
