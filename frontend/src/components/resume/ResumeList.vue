<template>
  <div class="resume-list">
    <div class="header">
      <h2>我的简历</h2>
      <button class="create-btn" @click="createNewResume">新建简历</button>
    </div>
    
    <div class="resume-grid">
      <div v-for="resume in resumes" :key="resume.id" class="resume-card">
        <div class="resume-info">
          <h3>{{ resume.title }}</h3>
          <p>最后更新: {{ formatDate(resume.updateTime) }}</p>
          <p>版本: {{ resume.version }}</p>
        </div>
        <div class="resume-actions">
          <button @click="editResume(resume.id)">编辑</button>
          <button @click="exportPDF(resume.id)">导出PDF</button>
          <button @click="deleteResume(resume.id)" class="delete-btn">删除</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { resumeApi } from '@/api/resume'

export default {
  name: 'ResumeList',
  data() {
    return {
      resumes: []
    }
  },
  methods: {
    async fetchResumes() {
      try {
        const data = await resumeApi.getList()
        this.resumes = data
      } catch (error) {
        console.error('获取简历列表失败:', error)
      }
    },
    formatDate(date) {
      return new Date(date).toLocaleString()
    },
    async createNewResume() {
      try {
        await resumeApi.create({
          title: '新简历',
          content: '',
          version: 1
        })
        this.fetchResumes()
      } catch (error) {
        console.error('创建简历失败:', error)
      }
    },
    editResume(id) {
      this.$router.push(`/resume/edit/${id}`)
    },
    async deleteResume(id) {
      if (confirm('确定要删除这份简历吗？')) {
        try {
          await resumeApi.delete(id)
          this.fetchResumes()
        } catch (error) {
          console.error('删除简历失败:', error)
        }
      }
    },
    async exportPDF(id) {
      try {
        const data = await resumeApi.exportPDF(id)
        const url = window.URL.createObjectURL(new Blob([data]))
        const link = document.createElement('a')
        link.href = url
        link.download = '简历.pdf'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      } catch (error) {
        console.error('导出PDF失败:', error)
      }
    }
  },
  mounted() {
    this.fetchResumes()
  }
}
</script>

<style scoped>
.resume-list {
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.create-btn {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.resume-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.resume-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  background-color: white;
}

.resume-info h3 {
  margin: 0 0 10px 0;
}

.resume-info p {
  color: #666;
  margin: 5px 0;
}

.resume-actions {
  display: flex;
  gap: 10px;
  margin-top: 15px;
}

.resume-actions button {
  padding: 5px 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
}

.delete-btn {
  background-color: #ff4444;
  color: white;
  border: none !important;
}
</style> 