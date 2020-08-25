import axios from 'axios'
import apiPath from './index'
import AllApi from '@/api/api'
import { Message } from 'element-ui'

const service = axios.create({
  baseURL: apiPath.baseUrl.dev,
  timeout: 5000
  // 这里还需要配置全局header
})

const Http = {}

for (const key in AllApi) {
  const curApi = AllApi[key]
  Http[key] = async function (params, config = {}, isFormData = false) {
    const { url, method } = curApi
    let newParams = null

    if (params && isFormData) {
      newParams = new FormData()

      for (const k in params) {
        newParams.append(k, params[k])
      }
    } else {
      newParams = params
    }
    let response = {}
    if (method === 'put' || method === 'patch' || method === 'post') {
      try {
        response = await service[method](url, newParams, config)
      } catch (err) {
        response = err
      }
    } else if (method === 'delete' || method === 'get') {
      try {
        config.params = newParams
        console.log(config, newParams, 'params')
        response = await service[method](url, config)
      } catch (err) {
        response = err
      }
    }

    return response
  }
}

// 配置axios 拦截器

service.interceptors.request.use(config => {
  return config
}, err => {
  // for debug
  console.log(err)
})

service.interceptors.response.use(res => {
  return res.data
}, err => {
  Message({
    message: err,
    type: 'error'
  })
})

export default Http
