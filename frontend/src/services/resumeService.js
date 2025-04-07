import { http } from '@/utils/request'
import { API_CONFIG } from '@/config/api.config'
import { mockResumeService, mockAIService } from '@/mock/resumeService'

// 是否使用mock数据，可以通过环境变量或配置文件控制
const bUseMock = process.env.VUE_APP_USE_MOCK === 'true'

class ResumeService {
  // 获取简历列表
  async getList() {
    if (bUseMock) {
      return mockResumeService.getList()
    }
    return http.get(API_CONFIG.RESUME.LIST)
  }

  // 获取单个简历
  async getById(id) {
    if (bUseMock) {
      return mockResumeService.getById(id)
    }
    return http.get(API_CONFIG.RESUME.GET_BY_ID, { id })
  }

  // 创建简历
  async create(data) {
    if (bUseMock) {
      return mockResumeService.create(data)
    }
    return http.post(API_CONFIG.RESUME.CREATE, data)
  }

  // 更新简历
  async update(id, data) {
    if (bUseMock) {
      return mockResumeService.update(id, data)
    }
    return http.put(API_CONFIG.RESUME.UPDATE, data, { id })
  }

  // 删除简历
  async delete(id) {
    if (bUseMock) {
      return mockResumeService.delete(id)
    }
    return http.delete(API_CONFIG.RESUME.DELETE, { id })
  }

  // 导出PDF
  async exportPDF(id) {
    if (bUseMock) {
      return mockResumeService.exportPDF(id)
    }
    return http.get(API_CONFIG.RESUME.EXPORT_PDF, { id }, {
      responseType: 'blob'
    })
  }
}

// AI服务类
class AIService {
  // 获取AI建议
  async getSuggestion(content, context) {
    if (bUseMock) {
      return mockAIService.getSuggestion(content)
    }
    return http.post(API_CONFIG.AI.SUGGEST, { content, context })
  }
}

export const resumeService = new ResumeService()
export const aiService = new AIService() 