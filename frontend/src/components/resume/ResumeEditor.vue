<template>
  <div class="resume-editor">
    <div class="editor-header">
      <div class="title-section">
        <el-input
          v-model="resume.title"
          placeholder="我的简历"
          class="title-input"
        />
      </div>
      <div class="actions">
        <el-button @click="goBack">返回</el-button>
        <el-button type="primary" @click="saveResume">保存</el-button>
      </div>
    </div>

    <div class="editor-content">
      <el-tabs v-model="activeTab" class="section-tabs">
        <el-tab-pane 
          v-for="(section, key) in resumeSections" 
          :key="key"
          :label="section.title"
          :name="key"
        >
          <div class="section-content">
            <template v-for="(field, fieldKey) in section.fields" :key="fieldKey">
              <!-- 输入框 -->
              <template v-if="field.strategy === 'input'">
                <el-form-item :label="field.chinese">
                  <el-input 
                    v-model="resume.content[key].data[fieldKey].value"
                    :placeholder="'请输入' + field.chinese"
                  />
                </el-form-item>
              </template>

              <!-- 日期选择器 -->
              <template v-else-if="field.strategy === 'date'">
                <el-form-item :label="field.chinese">
                  <el-date-picker
                    v-model="resume.content[key].data[fieldKey].value"
                    type="date"
                    :placeholder="'请选择' + field.chinese"
                  />
                </el-form-item>
              </template>

              <!-- 选择器 -->
              <template v-else-if="field.strategy === 'select'">
                <el-form-item :label="field.chinese">
                  <el-select
                    v-model="resume.content[key].data[fieldKey].value"
                    :placeholder="'请选择' + field.chinese"
                  >
                    <el-option
                      v-for="option in field.options"
                      :key="option.value"
                      :label="option.label"
                      :value="option.value"
                    />
                  </el-select>
                </el-form-item>
              </template>

              <!-- 文本域 -->
              <template v-else-if="field.strategy === 'textarea'">
                <el-form-item :label="field.chinese">
                  <el-input
                    v-model="resume.content[key].data[fieldKey].value"
                    type="textarea"
                    :rows="4"
                    :placeholder="'请输入' + field.chinese"
                  />
                </el-form-item>
              </template>
            </template>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { resumeService } from '@/services/resumeService'
import { THEME_CONFIG } from '@/config/theme.config'

export default {
  name: 'ResumeEditor',

  setup() {
    const route = useRoute()
    const router = useRouter()
    const resumeId = route.params.id
    const activeTab = ref('basic_info')

    // 简历数据
    const resume = reactive({
      id: null,
      title: '',
      content: {},
      version: 1
    })

    // 简历各部分配置
    const resumeSections = reactive({
      basic_info: {
        title: '基本信息',
        fields: {}
      },
      education: {
        title: '教育背景',
        fields: {}
      },
      work_experience: {
        title: '工作经验',
        fields: {}
      },
      // ... 其他部分
    })

    // 获取简历模板
    const fetchTemplate = async () => {
      try {
        // 这里应该从后端获取模板配置
        // 暂时使用 mock 数据
        const template = await resumeService.getTemplate()
        Object.keys(template).forEach(key => {
          if (resumeSections[key]) {
            resumeSections[key].fields = template[key]
          }
        })
      } catch (error) {
        ElMessage.error('获取模板配置失败')
        console.error(error)
      }
    }

    // 获取简历数据
    const fetchResumeData = async () => {
      if (!resumeId) return
      
      try {
        const data = await resumeService.getById(resumeId)
        Object.assign(resume, data)
      } catch (error) {
        ElMessage.error('获取简历数据失败')
        console.error(error)
      }
    }

    // 保存简历
    const saveResume = async () => {
      try {
        if (resumeId) {
          await resumeService.update(resumeId, resume)
        } else {
          await resumeService.create(resume)
        }
        ElMessage.success('保存成功')
        goBack()
      } catch (error) {
        ElMessage.error('保存失败')
        console.error(error)
      }
    }

    // 返回列表页
    const goBack = () => {
      router.push('/resume/list')
    }

    onMounted(async () => {
      await fetchTemplate()
      if (resumeId) {
        await fetchResumeData()
      }
    })

    return {
      resume,
      activeTab,
      resumeSections,
      saveResume,
      goBack,
      THEME_CONFIG
    }
  }
}
</script>

<style scoped>
.resume-editor {
  padding: 20px;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.editor-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding: 16px;
  background-color: v-bind('THEME_CONFIG.BACKGROUND_LIGHT');
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.title-section {
  flex: 1;
  margin-right: 24px;
}

.title-input {
  width: 300px;
}

.actions {
  display: flex;
  gap: 12px;
}

.editor-content {
  flex: 1;
  overflow-y: auto;
  background-color: v-bind('THEME_CONFIG.BACKGROUND_LIGHT');
  border-radius: 8px;
  padding: 24px;
}

.section-content {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 16px;
}

:deep(.el-form-item__label) {
  color: v-bind('THEME_CONFIG.TEXT_PRIMARY');
}

:deep(.el-input__inner) {
  border-color: v-bind('THEME_CONFIG.BORDER');
}

:deep(.el-tabs__item) {
  color: v-bind('THEME_CONFIG.TEXT_SECONDARY');
}

:deep(.el-tabs__item.is-active) {
  color: v-bind('THEME_CONFIG.PRIMARY');
}

:deep(.el-tabs__active-bar) {
  background-color: v-bind('THEME_CONFIG.PRIMARY');
}
</style>
