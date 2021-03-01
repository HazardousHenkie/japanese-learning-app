import axios from 'axios'

const Axios = (accessToken: string) => {
    return axios.create({
        baseURL: process.env.VUE_APP_API_URL,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`
        }
    })
}

export default Axios
