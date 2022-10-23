import axios from '../utils/request'
import base from './base'

const api = {
    register(params) {
        return axios.post(base.baseUrl + base.register, params);
    },
    login(params) {
        return axios.post(base.baseUrl + base.login, params);
    }
}

export default api;