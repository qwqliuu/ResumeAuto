const STORAGE_PREFIX = 'resume_'

export const fileStorage = {
    // 读取JSON数据
    async readJSON(filename) {
        try {
            const key = STORAGE_PREFIX + filename
            const data = localStorage.getItem(key)
            return data ? JSON.parse(data) : null
        } catch (error) {
            console.error(`Error reading ${filename}:`, error)
            return null
        }
    },

    // 写入JSON数据
    async writeJSON(filename, data) {
        try {
            const key = STORAGE_PREFIX + filename
            localStorage.setItem(key, JSON.stringify(data))
            return true
        } catch (error) {
            console.error(`Error writing ${filename}:`, error)
            return false
        }
    }
} 