import { createRouter, createWebHistory } from 'vue-router'
import ResumeList from '@/components/resume/ResumeList.vue'
import ResumeEditor from '@/components/resume/ResumeEditor.vue'

const routes = [
  {
    path: '/',
    redirect: '/resumes'
  },
  {
    path: '/resumes',
    name: 'ResumeList',
    component: ResumeList
  },
  {
    path: '/resume/edit/:id',
    name: 'ResumeEditor',
    component: ResumeEditor
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router 