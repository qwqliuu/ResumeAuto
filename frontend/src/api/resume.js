import { http } from '@/utils/request'
import { API_CONFIG } from '@/config/api.config'
import { mockResumeService, mockAIService } from '@/mock/resumeService'

// 是否使用mock数据
const USE_MOCK = true

export const resumeApi = {
  // 获取简历列表
  getList() {
    return USE_MOCK 
      ? mockResumeService.getList()
      : http.get(API_CONFIG.RESUME.LIST)
  },

  // 创建新简历
  create(data) {
    return USE_MOCK
      ? mockResumeService.create(data)
      : http.post(API_CONFIG.RESUME.CREATE, data)
  },

  // 获取简历详情
  getById(id) {
    return USE_MOCK
      ? mockResumeService.getById(id)
      : http.get(API_CONFIG.RESUME.GET_BY_ID, { id })
  },

  // 更新简历
  update(id, data) {
    return USE_MOCK
      ? mockResumeService.update(id, data)
      : http.put(API_CONFIG.RESUME.UPDATE, data, { id })
  },

  // 删除简历
  delete(id) {
    return USE_MOCK
      ? mockResumeService.delete(id)
      : http.delete(API_CONFIG.RESUME.DELETE, { id })
  },

  // 导出PDF
  exportPDF(id) {
    return USE_MOCK
      ? mockResumeService.exportPDF(id)
      : http.get(API_CONFIG.RESUME.EXPORT_PDF, { id }, {
          responseType: 'blob'
        })
  }
}

// AI相关接口
export const aiApi = {
  // 获取AI建议
  getSuggestion(content, context) {
    return USE_MOCK
      ? mockAIService.getSuggestion(content)
      : http.post(API_CONFIG.AI.SUGGEST, { content, context })
  }
} 