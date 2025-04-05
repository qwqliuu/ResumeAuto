<template>
  <div class="resume-editor">
    <div class="editor-header">
      <input v-model="resume.title" class="title-input" placeholder="简历标题" @change="saveResume" />
      <div class="actions">
        <button @click="toggleMode">{{ isMarkdown ? '切换富文本' : '切换Markdown' }}</button>
        <button @click="askAI">AI辅助</button>
        <button @click="saveResume">保存</button>
        <button @click="exportPDF">导出PDF</button>
      </div>
    </div>

    <div class="editor-container">
      <!-- 富文本编辑器 -->
      <QuillEditor
        v-if="!isMarkdown"
        v-model:content="resume.content"
        contentType="html"
        theme="snow"
        toolbar="full"
        @update:content="onEditorChange"
      />
      
      <!-- Markdown编辑器 -->
      <textarea
        v-else
        v-model="resume.content"
        class="markdown-editor"
        @input="onEditorChange"
      ></textarea>
    </div>

    <!-- AI助手对话框 -->
    <div v-if="showAIDialog" class="ai-dialog">
      <div class="ai-dialog-content">
        <h3>AI写作助手</h3>
        <div class="ai-suggestions">
          <button v-for="(prompt, index) in aiPrompts" 
                  :key="index"
                  @click="useAIPrompt(prompt)">
            {{ prompt.title }}
          </button>
        </div>
        <textarea
          v-model="aiInput"
          placeholder="描述你需要AI帮助的内容..."
        ></textarea>
        <div class="ai-actions">
          <button @click="submitToAI">获取建议</button>
          <button @click="showAIDialog = false">关闭</button>
        </div>
        <div v-if="aiResponse" class="ai-response">
          <p>AI建议：</p>
          <div v-html="aiResponse"></div>
          <button @click="applyAISuggestion">应用建议</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import { resumeApi, aiApi } from '@/api/resume'

export default {
  name: 'ResumeEditor',
  components: {
    QuillEditor
  },
  data() {
    return {
      resume: {
        id: null,
        title: '',
        content: '',
        version: 1
      },
      isMarkdown: false,
      showAIDialog: false,
      aiInput: '',
      aiResponse: '',
      aiPrompts: [
        { title: '优化工作经历', prompt: '请帮我优化以下工作经历的描述：' },
        { title: '改进技能描述', prompt: '请帮我改进以下技能描述：' },
        { title: '完善教育背景', prompt: '请帮我完善以下教育背景：' },
        { title: '项目经验提升', prompt: '请帮我提升以下项目经验的描述：' }
      ],
      saveTimeout: null
    }
  },
  methods: {
    async fetchResume() {
      try {
        const id = this.$route.params.id
        const data = await resumeApi.getById(id)
        this.resume = data
      } catch (error) {
        console.error('获取简历失败:', error)
      }
    },
    onEditorChange() {
      if (this.saveTimeout) {
        clearTimeout(this.saveTimeout)
      }
      this.saveTimeout = setTimeout(() => {
        this.saveResume()
      }, 1000)
    },
    async saveResume() {
      try {
        const response = await resumeApi.update(this.resume.id, this.resume)
        this.resume.version = response.version
      } catch (error) {
        console.error('保存简历失败:', error)
      }
    },
    toggleMode() {
      this.isMarkdown = !this.isMarkdown
    },
    askAI() {
      this.showAIDialog = true
      this.aiResponse = ''
      this.aiInput = ''
    },
    useAIPrompt(prompt) {
      this.aiInput = prompt.prompt
    },
    async submitToAI() {
      try {
        const response = await aiApi.getSuggestion(this.aiInput, this.resume.content)
        this.aiResponse = response.suggestion
      } catch (error) {
        console.error('获取AI建议失败:', error)
      }
    },
    applyAISuggestion() {
      if (this.aiResponse) {
        this.resume.content += '\n' + this.aiResponse
        this.showAIDialog = false
        this.saveResume()
      }
    },
    async exportPDF() {
      try {
        const element = document.querySelector('.ql-editor')
        const canvas = await html2canvas(element)
        const imgData = canvas.toDataURL('image/png')
        
        const pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'px',
          format: 'a4'
        })
        
        const imgProps = pdf.getImageProperties(imgData)
        const pdfWidth = pdf.internal.pageSize.getWidth()
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width
        
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
        pdf.save(`${this.resume.title || '简历'}.pdf`)
      } catch (error) {
        console.error('导出PDF失败:', error)
      }
    }
  },
  mounted() {
    if (this.$route.params.id) {
      this.fetchResume()
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
  margin-bottom: 20px;
}

.title-input {
  font-size: 24px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 300px;
}

.actions {
  display: flex;
  gap: 10px;
}

.actions button {
  padding: 8px 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  background-color: white;
}

.editor-container {
  flex: 1;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: auto;
}

.markdown-editor {
  width: 100%;
  height: 100%;
  padding: 20px;
  border: none;
  resize: none;
  font-family: monospace;
}

.ai-dialog {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.ai-dialog-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 600px;
  max-height: 80vh;
  overflow: auto;
}

.ai-suggestions {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
  flex-wrap: wrap;
}

.ai-suggestions button {
  padding: 8px 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  background-color: white;
}

.ai-dialog textarea {
  width: 100%;
  height: 100px;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: vertical;
}

.ai-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.ai-response {
  margin-top: 20px;
  padding: 15px;
  background-color: #f5f5f5;
  border-radius: 4px;
}

:deep(.ql-container) {
  height: calc(100vh - 200px);
}
</style> 