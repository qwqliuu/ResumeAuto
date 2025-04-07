const TOKEN_KEY = 'resume_token'
const MOCK_TOKEN = 'mock_user_token_123' // 模拟用户token

export const auth = {
  getToken() {
    return localStorage.getItem(TOKEN_KEY) || MOCK_TOKEN
  },

  setToken(token) {
    localStorage.setItem(TOKEN_KEY, token)
  },

  removeToken() {
    localStorage.removeItem(TOKEN_KEY)
  },

  // 检查是否已登录
  isAuthenticated() {
    return !!this.getToken()
  }
} 