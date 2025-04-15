// 简历模板配置
export const resumeTemplate = {
    basic_info: {
        chinese: '基本信息',
        data: {
            name: {
                chinese: '姓名',
                strategy: 'input',
                default: '张三',
                value: ''
            },
            gender: {
                chinese: '性别',
                strategy: 'select',
                options: [
                    { label: '男', value: 'male' },
                    { label: '女', value: 'female' }
                ],
                default: 'male'
            },
            birth_date: {
                chinese: '出生日期',
                strategy: 'date',
                default: '1990-01-01'
            },
            phone: {
                chinese: '手机号码',
                strategy: 'input',
                default: '13800138000'
            },
            email: {
                chinese: '电子邮箱',
                strategy: 'input',
                default: 'zhangsan@example.com'
            }
        }
    },
    education: {
        chinese: '教育经历',
        data: {
            school: {
                chinese: '学校名称',
                strategy: 'input',
                default: '清华大学'
            },
            major: {
                chinese: '专业',
                strategy: 'input',
                default: '计算机科学与技术'
            },
            degree: {
                chinese: '学历',
                strategy: 'select',
                options: [
                    { label: '本科', value: 'bachelor' },
                    { label: '硕士', value: 'master' },
                    { label: '博士', value: 'phd' }
                ],
                default: 'bachelor'
            },
            start_date: {
                chinese: '开始时间',
                strategy: 'date',
                default: '2010-09-01'
            },
            end_date: {
                chinese: '结束时间',
                strategy: 'date',
                default: '2014-07-01'
            }
        }
    },
    work_experience: {
        chinese: '工作经历',
        data: {
            company: {
                chinese: '公司名称',
                strategy: 'input',
                default: '门头沟'
            },
            position: {
                chinese: '职位',
                strategy: 'input',
                default: '门头沟'
            },
            start_date: {
                chinese: '开始时间',
                strategy: 'date',
                default: '2010-09-01'
            },
            end_date: {
                chinese: '结束时间',
                strategy: 'date',
                default: '2014-07-01'
            },
            description: {
                chinese: '工作描述',
                strategy: 'textarea',
                default: '负责公司核心产品的前端开发工作，使用 Vue.js 和 React 进行开发。'
            }
        }
    }
}

// 模拟简历数据
export const mockResumes = [
  {
    id: 1,
    title: '前端开发工程师简历',
    content: {
      basic_info: {
        data: {
          name: { value: '张三' },
          gender: { value: 'male' },
          birth_date: { value: '1990-01-01' },
          phone: { value: '13800138000' },
          email: { value: 'zhangsan@example.com' }
        }
      },
      education: {
        data: {
          school: { value: '清华大学' },
          major: { value: '计算机科学与技术' },
          degree: { value: 'bachelor' },
          start_date: { value: '2010-09-01' },
          end_date: { value: '2014-07-01' }
        }
      },
      work_experience: {
        data: {
          company: { value: '腾讯科技' },
          position: { value: '高级前端开发工程师' },
          start_date: { value: '2018-03-01' },
          end_date: { value: '2023-12-31' },
          description: { value: '负责公司核心产品的前端开发工作，使用 Vue.js 和 React 进行开发。' }
        }
      }
    },
    version: 1,
    updateTime: '2023-12-31T12:00:00Z'
  }
]

// 模拟AI建议
export const mockAISuggestions = {
  '工作描述': '建议使用 STAR 法则来描述工作经历，突出具体成果和贡献。',
  '项目经验': '建议详细描述项目规模、技术栈和个人贡献。',
  '技能特长': '建议按照熟练程度分类，并添加具体的使用场景。'
}