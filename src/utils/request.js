
import axios from 'axios'
import store from '@/store'
import qs from 'querystring'

const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
    timeout: 5000, // request timeout
})

service.interceptors.request.use(
    config => {
        if (config.method === 'post') {
            config.data = qs.stringify(config.data)
        }
        // if (store.state.login.user.token) {
        //     config.headers.authorization = store.state.login.user.token
        // }
        return config
    },
    error => {
        return Promise.reject(error)
    },
)

service.interceptors.response.use(
    response => {
        const res = response.status
        if (res !== 200) {
            return Promise.reject(new Error(res.message || 'Error'))
        } else {
            return Promise.resolve(response);
        }
    },
    error => {
        console.log('接口信息报错' + error)
        return Promise.reject(error)
    },
)

export default service
