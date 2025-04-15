<template>
    <div class="resume-editor">
        <div v-if="loading" class="loading-container">
            <el-skeleton :rows="10" animated />
        </div>
        <template v-else>
            <div class="editor-header">
                <div class="left">
                    <h2 class="title-wrapper">
                        {{ resume?.title || '未命名简历' }}
                        <el-button class="edit-title-btn" type="primary" link @click="showEditTitleDialog">
                            <el-icon><Edit /></el-icon>
                        </el-button>
                    </h2>
                </div>
                <div class="right">
                    <el-button type="primary" @click="saveResume">
                        <el-icon><Check /></el-icon>保存
                    </el-button>
                    <el-button @click="exportPDF">
                        <el-icon><Download /></el-icon>导出PDF
                    </el-button>
                </div>
            </div>

            <!-- 标题编辑对话框 -->
            <el-dialog
                v-model="titleDialogVisible"
                title="修改简历标题"
                width="30%"
                :close-on-click-modal="false"
            >
                <el-input
                    v-model="editingTitle"
                    placeholder="请输入简历标题"
                    @keyup.enter="updateTitle"
                />
                <template #footer>
                    <span class="dialog-footer">
                        <el-button @click="titleDialogVisible = false">取消</el-button>
                        <el-button type="primary" @click="updateTitle">确定</el-button>
                    </span>
                </template>
            </el-dialog>

            <div class="editor-content">
                <div v-for="(section, sectionKey) in resume.content" :key="sectionKey" class="form-section">
                    <h3>{{ section.chinese }}</h3>
                    <el-form label-width="120px">
                        <div v-for="(field, fieldKey) in section.data" :key="fieldKey" class="field-item">
                            <el-form-item :label="field.chinese">
                                <!-- 普通输入框 -->
                                <el-input 
                                    v-if="field.strategy === 'input'"
                                    v-model="field.value"
                                    :placeholder="field.chinese"
                                    @change="updateFieldValue(section, fieldKey, $event)"
                                />
                                
                                <!-- 下拉选择框 -->
                                <el-select 
                                    v-if="field.strategy === 'select'"
                                    v-model="field.value"
                                    :placeholder="field.chinese"
                                    @change="updateFieldValue(section, fieldKey, $event)"
                                >
                                    <el-option
                                        v-for="option in field.options"
                                        :key="option.value"
                                        :label="option.label"
                                        :value="option.value"
                                    />
                                </el-select>
                                
                                <!-- 日期选择器 -->
                                <el-date-picker
                                    v-if="field.strategy === 'date'"
                                    v-model="field.value"
                                    type="date"
                                    :placeholder="field.chinese"
                                    format="YYYY-MM-DD"
                                    value-format="YYYY-MM-DD"
                                    @change="updateFieldValue(section, fieldKey, $event)"
                                />
                                
                                <!-- 文本域 -->
                                <el-input
                                    v-if="field.strategy === 'textarea'"
                                    v-model="field.value"
                                    type="textarea"
                                    :rows="3"
                                    :placeholder="field.chinese"
                                    @change="updateFieldValue(section, fieldKey, $event)"
                                />
                            </el-form-item>
                        </div>
                    </el-form>
                </div>
            </div>
        </template>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { ArrowLeft, Check, Download, Edit } from '@element-plus/icons-vue'
import { resumeService } from '@/services/resumeService'

const route = useRoute()
const router = useRouter()
const resumeId = route.params.id
const resume = ref({
    title: '',
    content: {},
    id: null,
    updateTime: null
})
const loading = ref(true)

// 标题编辑相关
const titleDialogVisible = ref(false)
const editingTitle = ref('')

// 获取简历详情
const fetchResume = async () => {
    try {
        loading.value = true
        const data = await resumeService.getById(resumeId)
        // 处理每个字段的默认值
        Object.keys(data.content).forEach(sectionKey => {
            const section = data.content[sectionKey]
            Object.keys(section.data).forEach(fieldKey => {
                const field = section.data[fieldKey]
                field.value = field.value || field.default || ''
            })
        })
        resume.value = data
        console.log('获取简历详情', resume.value)
    } catch (error) {
        ElMessage.error('获取简历详情失败')
        console.error(error)
    } finally {
        loading.value = false
    }
}

// 更新字段值
const updateFieldValue = (section, fieldKey, value) => {
    section.data[fieldKey].value = value
}

// 保存简历
const saveResume = async () => {
    try {
        await resumeService.update(resumeId, resume.value)
        ElMessage.success('保存成功')
    } catch (error) {
        ElMessage.error('保存失败')
        console.error(error)
    }
}

// 导出PDF
const exportPDF = async () => {
    try {
        const blob = await resumeService.exportPDF(resumeId)
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

// 返回上一页
const goBack = () => {
    router.back()
}

// 获取表单组件
const getFormComponent = (strategy) => {
    switch (strategy) {
        case 'input':
            return 'el-input'
        case 'select':
            return 'el-select'
        case 'date':
            return 'el-date-picker'
        case 'textarea':
            return 'el-input'
        default:
            return 'el-input'
    }
}

// 显示标题编辑对话框
const showEditTitleDialog = () => {
    editingTitle.value = resume.value.title || ''
    titleDialogVisible.value = true
}

// 更新标题
const updateTitle = () => {
    if (!editingTitle.value.trim()) {
        ElMessage.warning('标题不能为空')
        return
    }
    resume.value.title = editingTitle.value.trim()
    titleDialogVisible.value = false
    ElMessage.success('标题修改成功')
}

onMounted(fetchResume)
</script>

<style scoped>
.resume-editor {
    padding: 20px;
}

.loading-container {
    padding: 20px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.editor-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
}

.editor-header .left {
    display: flex;
    align-items: center;
    gap: 16px;
}

.editor-header h2 {
    margin: 0;
}

.editor-header .right {
    display: flex;
    gap: 12px;
}

.editor-content {
    max-width: 800px;
    margin: 0 auto;
}

.form-section {
    margin-bottom: 32px;
    padding: 24px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.form-section h3 {
    margin-top: 0;
    margin-bottom: 24px;
    color: #303133;
}

.item-container {
    margin-bottom: 24px;
    padding: 16px;
    border: 1px solid #ebeef5;
    border-radius: 4px;
}

.item-container:last-child {
    margin-bottom: 16px;
}

.field-item {
    margin-bottom: 20px;
}

:deep(.el-form-item__label) {
    font-weight: 500;
    color: #606266;
}

:deep(.el-input), :deep(.el-select), :deep(.el-date-picker) {
    width: 100%;
}

.right {
    display: flex;
    gap: 12px;
}

.title-wrapper {
    display: flex;
    align-items: center;
    gap: 8px;
}

.edit-title-btn {
    padding: 2px;
    font-size: 16px;
}

:deep(.el-dialog__body) {
    padding: 20px;
}

.dialog-footer {
    display: flex;
    justify-content: flex-end;
    gap: 12px;
}
</style>
