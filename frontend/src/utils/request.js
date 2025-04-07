import axios from 'axios'
import { API_CONFIG } from '@/config/api.config'
import { auth } from '@/utils/auth'
import { ElMessage } from 'element-plus'

// 创建axios实例
const request = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: API_CONFIG.TIMEOUT
})

// 请求拦截器
request.interceptors.request.use(
  config => {
    // 添加token
    const token = auth.getToken()
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
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
    if (error.response) {
      switch (error.response.status) {
        case 401:
          ElMessage.error('未授权，请重新登录')
          // 可以在这里处理登录过期逻辑
          auth.removeToken()
          break
        case 403:
          ElMessage.error('拒绝访问')
          break
        case 404:
          ElMessage.error('请求错误，未找到该资源')
          break
        case 500:
          ElMessage.error('服务器错误')
          break
        default:
          ElMessage.error('未知错误')
      }
    } else {
      ElMessage.error('网络错误，请稍后重试')
    }
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