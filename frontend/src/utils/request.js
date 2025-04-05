import axios from 'axios'
import { API_CONFIG } from '@/config/api.config'

// 创建axios实例
const request = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: API_CONFIG.TIMEOUT
})

// 请求拦截器
request.interceptors.request.use(
  config => {
    // 这里可以添加token等认证信息
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
request.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    // 统一错误处理
    console.error('请求错误:', error)
    return Promise.reject(error)
  }
)

// 替换URL中的参数
const replaceUrlParams = (url, params) => {
  let result = url
  for (const key in params) {
    result = result.replace(`{${key}}`, params[key])
  }
  return result
}

export const http = {
  get: (url, params = {}, config = {}) => {
    const finalUrl = replaceUrlParams(url, params)
    return request.get(finalUrl, { 
      params: Object.keys(params).reduce((acc, key) => {
        if (!url.includes(`{${key}}`)) {
          acc[key] = params[key]
        }
        return acc
      }, {}),
      ...config 
    })
  },

  post: (url, data = {}, config = {}) => {
    return request.post(url, data, config)
  },

  put: (url, data = {}, params = {}, config = {}) => {
    const finalUrl = replaceUrlParams(url, params)
    return request.put(finalUrl, data, config)
  },

  delete: (url, params = {}, config = {}) => {
    const finalUrl = replaceUrlParams(url, params)
    return request.delete(finalUrl, config)
  }
} 