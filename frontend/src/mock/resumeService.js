import { mockResumes, mockAISuggestions } from './resumeData'

// 模拟延迟
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

// 生成新ID
const generateId = () => Math.max(...mockResumes.map(r => r.id), 0) + 1

export const mockResumeService = {
  // 获取简历列表
  async getList() {
    await delay(300)
    return [...mockResumes]
  },

  // 获取单个简历
  async getById(id) {
    await delay(200)
    const resume = mockResumes.find(r => r.id === Number(id))
    if (!resume) throw new Error('简历不存在')
    return { ...resume }
  },

  // 创建简历
  async create(data) {
    await delay(300)
    const newResume = {
      ...data,
      id: generateId(),
      updateTime: new Date().toISOString(),
      version: 1
    }
    mockResumes.push(newResume)
    return { ...newResume }
  },

  // 更新简历
  async update(id, data) {
    await delay(300)
    const index = mockResumes.findIndex(r => r.id === Number(id))
    if (index === -1) throw new Error('简历不存在')
    
    const updatedResume = {
      ...mockResumes[index],
      ...data,
      content: JSON.parse(JSON.stringify(data.content)), // 确保深拷贝
      version: mockResumes[index].version + 1,
      updateTime: new Date().toISOString()
    }
    
    mockResumes[index] = updatedResume
    console.log('保存的简历数据:', JSON.stringify(updatedResume, null, 2))
    return { ...updatedResume }
  },

  // 删除简历
  async delete(id) {
    await delay(200)
    const index = mockResumes.findIndex(r => r.id === Number(id))
    if (index === -1) throw new Error('简历不存在')
    mockResumes.splice(index, 1)
    return { success: true }
  },

  // 导出PDF（模拟）
  async exportPDF(id) {
    await delay(500)
    const resume = mockResumes.find(r => r.id === Number(id))
    if (!resume) throw new Error('简历不存在')
    // 这里返回一个空的Blob，实际项目中应该返回真实的PDF数据
    return new Blob(['PDF content'], { type: 'application/pdf' })
  }
}

export const mockAIService = {
  // 获取AI建议
  async getSuggestion(content) {
    await delay(1000)
    const type = Object.keys(mockAISuggestions).find(key => content.includes(key))
    return {
      suggestion: type ? mockAISuggestions[type] : '抱歉，我暂时无法为这部分内容提供建议。'
    }
  }
} 