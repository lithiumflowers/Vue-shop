import axios from 'axios'
import { ElNotification } from 'element-plus'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

service.interceptors.response.use(
  (response) => {
    console.log(response)
    const { data, meta } = response.data
    if (meta.status === 200 || meta.status === 201) {
      return data
    } else {
      ElNotification({
        title: 'Error',
        message: meta.msg,
        type: 'error'
      })
      return Promise.reject(new Error(meta.msg)).catch((error) => {
        console.log(error)
      })
    }
  },
  (error) => {
    error.response && ElNotification(error.response.data)
    return Promise.reject(new Error(error.response.data))
  }
)

service.interceptors.request.use(
  (config) => {
    config.headers.Authorization = localStorage.getItem('token')
    return config
  },
  (error) => {
    return Promise.reject(new Error(error))
  }
)
export default service
