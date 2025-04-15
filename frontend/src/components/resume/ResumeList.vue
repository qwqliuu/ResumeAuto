<template>
  <div class="resume-list">
    <div class="header">
      <h2>我的简历</h2>
      <el-button type="primary" @click="createNewResume">
        <el-icon><Plus /></el-icon>新建简历
      </el-button>
    </div>
    
    <div class="resume-grid">
      <el-card 
        v-for="resume in resumes" 
        :key="resume.id" 
        class="resume-card"
        @click="openResume(resume.id)"
      >
        <div class="resume-info">
          <h3>{{ resume.title }}</h3>
          <p class="update-time">最后更新：{{ formatDate(resume.updateTime) }}</p>
        </div>
        <div class="resume-actions">
          <el-button type="text" @click.stop="exportPDF(resume.id)">
            导出PDF
          </el-button>
          <el-button type="text" class="delete-btn" @click.stop="confirmDelete(resume.id)">
            删除
          </el-button>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage, ElMessageBox } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
import { resumeService } from '@/services/resumeService'
import { THEME_CONFIG } from '@/config/theme.config'

const router = useRouter()
const resumes = ref([])

// 获取简历列表
const fetchResumes = async () => {
  try {
    const data = await resumeService.getList()
    resumes.value = data
  } catch (error) {
    ElMessage.error('获取简历列表失败')
    console.error(error)
  }
}

// 新建简历
const createNewResume = async () => {
  try {
    const newResumeId = await resumeService.create()
    console.log('createNewResumeId', newResumeId)
    router.push(`/resume/editor/${newResumeId}`)
  } catch (error) {
    ElMessage.error('创建简历失败')
    console.error(error)
  }
}

// 打开简历
const openResume = (id) => {
  router.push(`/resume/editor/${id}`)
}

// 导出PDF
const exportPDF = async (id) => {
  try {
    const blob = await resumeService.exportPDF(id)
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = '简历.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)
  } catch (error) {
    ElMessage.error('导出PDF失败')
    console.error(error)
  }
}

// 删除简历
const confirmDelete = (id) => {
  ElMessageBox.confirm('确定要删除这份简历吗？', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(async () => {
    try {
      await resumeService.delete(id)
      ElMessage.success('删除成功')
      fetchResumes()
    } catch (error) {
      ElMessage.error('删除失败')
      console.error(error)
    }
  })
}

// 格式化日期
const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  })
}

onMounted(fetchResumes)
</script>

<style scoped>
.resume-list {
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.header h2 {
  color: v-bind('THEME_CONFIG.TEXT_PRIMARY');
  margin: 0;
}

.resume-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.resume-card {
  cursor: pointer;
  transition: all 0.3s;
}

.resume-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.resume-info {
  margin-bottom: 16px;
}

.resume-info h3 {
  color: v-bind('THEME_CONFIG.TEXT_PRIMARY');
  margin: 0 0 8px 0;
}

.update-time {
  color: v-bind('THEME_CONFIG.TEXT_HINT');
  font-size: 14px;
  margin: 0;
}

.resume-actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}

.delete-btn {
  color: v-bind('THEME_CONFIG.DANGER');
}
</style>
