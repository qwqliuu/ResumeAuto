import { resumeTemplate } from './resumeData'
import { fileStorage } from '../utils/fileStorage'

// 文件名常量
const FILES = {
    RESUMES: 'resumes.json',
    TEMPLATE: 'template.json'
}

// 模拟延迟
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

// 生成新ID
const generateId = async () => {
    const resumes = await loadResumes()
    return Math.max(...resumes.map(r => r.id), 0) + 1
}

// 加载简历列表
const loadResumes = async () => {
    const resumes = await fileStorage.readJSON(FILES.RESUMES)
    return resumes || []
}

// 保存简历列表
const saveResumes = async (resumes) => {
    await fileStorage.writeJSON(FILES.RESUMES, resumes)
}

// 初始化模板
const initializeTemplate = async () => {
    const template = await fileStorage.readJSON(FILES.TEMPLATE)
    if (!template) {
        await fileStorage.writeJSON(FILES.TEMPLATE, resumeTemplate)
    }
}

// 初始化
initializeTemplate()

export const mockResumeService = {
    // 获取模板
    async getTemplate() {
        const template = await fileStorage.readJSON(FILES.TEMPLATE)
        return template || resumeTemplate
    },

    // 获取简历列表
    async getList() {
        await delay(300)
        return await loadResumes()
    },

    // 获取单个简历
    async getById(id) {
        await delay(200)
        const resumes = await loadResumes()
        const resume = resumes.find(r => r.id === Number(id))
        if (!resume) throw new Error('简历不存在')
        return JSON.parse(JSON.stringify(resume))
    },

    // 创建简历
    async create() {
        await delay(300)
        const resumes = await loadResumes()
        const newResume = {
            title: '新建简历',
            content: await this.getTemplate(),
            id: await generateId(),
            updateTime: new Date().toISOString(),
            version: 1
        }
        resumes.push(newResume)
        await saveResumes(resumes)
        return newResume.id
    },

    // 更新简历
    async update(id, data) {
        await delay(300)
        const resumes = await loadResumes()
        const index = resumes.findIndex(r => r.id === Number(id))
        if (index === -1) throw new Error('简历不存在')
        
        const updatedResume = {
            ...resumes[index],
            ...data,
            content: JSON.parse(JSON.stringify(data.content)),
            version: resumes[index].version + 1,
            updateTime: new Date().toISOString()
        }
        
        resumes[index] = updatedResume
        await saveResumes(resumes)
        return { ...updatedResume }
    },

    // 删除简历
    async delete(id) {
        await delay(200)
        const resumes = await loadResumes()
        const index = resumes.findIndex(r => r.id === Number(id))
        if (index === -1) throw new Error('简历不存在')
        resumes.splice(index, 1)
        await saveResumes(resumes)
        return { success: true }
    },

    // 导出PDF（模拟）
    async exportPDF(id) {
        await delay(500)
        const resumes = await loadResumes()
        const resume = resumes.find(r => r.id === Number(id))
        if (!resume) throw new Error('简历不存在')
        return new Blob(['PDF content'], { type: 'application/pdf' })
    }
}

export const mockAIService = {
    // 获取AI建议
    async getSuggestion(content) {
        return content
    }
} 