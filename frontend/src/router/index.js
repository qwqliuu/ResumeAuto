import { createRouter, createWebHistory } from 'vue-router'
import ResumeList from '@/components/resume/ResumeList.vue'
import ResumeEditor from '@/components/resume/ResumeEditor.vue'

const routes = [
  {
    path: '/',
    redirect: '/resume/list'
  },
  {
    path: '/resume',
    children: [
      {
        path: 'list',
        name: 'ResumeList',
        component: ResumeList
      },
      {
        path: 'editor/:id?',
        name: 'ResumeEditor',
        component: ResumeEditor
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router