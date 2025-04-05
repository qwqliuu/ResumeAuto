# 求职管理系统

一个现代化的求职管理系统，帮助求职者管理简历、跟踪求职进度、记录面试经验。

## 功能特点

- 双重登录方式（账号密码/微信扫码）
- 多份简历管理
- 智能职位推荐
- 求职进度追踪
- 面试经验记录
- 数据可视化统计

## 技术栈

### 前端
- Vue.js 3
- TypeScript
- Element Plus
- Vuex
- Vue Router
- Axios

### 后端
- Spring Boot 2.7.0
- Spring Security
- Spring Data JPA
- PostgreSQL
- JWT认证

## 项目结构

```
.
├── frontend/                # Vue.js前端项目
│   ├── src/
│   │   ├── components/     # Vue组件
│   │   ├── views/         # 页面视图
│   │   ├── store/         # Vuex状态管理
│   │   ├── router/        # 路由配置
│   │   └── api/           # API服务
│   └── package.json       # 前端依赖配置
│
├── backend/                # Spring Boot后端项目
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/resumefill/
│   │   │   │       ├── config/     # 配置类
│   │   │   │       ├── controller/ # 控制器
│   │   │   │       ├── model/      # 数据模型
│   │   │   │       ├── repository/ # 数据访问层
│   │   │   │       ├── service/    # 业务逻辑层
│   │   │   │       └── security/   # 安全配置
│   │   │   └── resources/
│   │   │       └── application.yml # 应用配置
│   │   └── test/                   # 测试代码
│   └── pom.xml                    # Maven配置
│
└── README.md                      # 项目说明文档
```

## 环境要求

- Node.js >= 16.0.0
- Java >= 11
- Maven >= 3.6
- PostgreSQL >= 12

## 安装步骤

1. 克隆项目
```bash
git clone https://github.com/yourusername/resumefill.git
cd resumefill
```

2. 安装前端依赖
```bash
cd frontend
npm install
```

3. 安装后端依赖
```bash
cd backend
mvn clean install
```

4. 配置数据库
- 创建PostgreSQL数据库
- 修改 `backend/src/main/resources/application.yml` 中的数据库连接信息

## 运行项目

1. 启动后端服务
```bash
cd backend
mvn spring-boot:run
```

2. 启动前端服务
```bash
cd frontend
npm run dev
```

3. 访问应用
打开浏览器访问 http://localhost:5173

## API文档

启动后端服务后，访问 http://localhost:8080/swagger-ui.html 查看API文档。

## 开发指南

### 代码规范
- 使用ESLint进行前端代码检查
- 使用Prettier进行代码格式化
- 遵循阿里巴巴Java开发手册

### 提交规范
- feat: 新功能
- fix: 修复bug
- docs: 文档更新
- style: 代码格式调整
- refactor: 代码重构
- test: 测试相关
- chore: 构建过程或辅助工具的变动

## 部署

### 后端部署
1. 打包应用
```bash
cd backend
mvn clean package
```
2. 运行jar包
```bash
java -jar target/resume-fill-0.0.1-SNAPSHOT.jar
```

### 前端部署
1. 构建生产版本
```bash
cd frontend
npm run build
```
2. 部署到Nginx或其他Web服务器

## 贡献指南

1. Fork项目
2. 创建特性分支
3. 提交更改
4. 推送到分支
5. 创建Pull Request

## 许可证

MIT License 