# 美容工作室官网 - Step 1 MVP

## 项目概述

这是一个基于 Next.js 14 + App Router 构建的美容工作室官网，采用现代化的技术栈和设计理念，专注于移动端体验和转化优化。

## 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **组件库**: shadcn/ui
- **动画**: framer-motion
- **部署**: Vercel (推荐)

## 项目结构

```
beauty-landing/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # 全局布局
│   ├── page.tsx           # 首页
│   └── globals.css        # 全局样式
├── components/            # React 组件
│   ├── Hero.tsx          # 首屏标语
│   ├── ServiceGrid.tsx   # 服务展示
│   ├── PortfolioGrid.tsx # 作品展示
│   ├── MapEmbed.tsx      # 地图嵌入
│   ├── FAQ.tsx           # 常见问题
│   ├── StickyCTA.tsx     # 悬浮CTA
│   ├── NavBar.tsx        # 导航栏
│   ├── Footer.tsx        # 页脚
│   └── ui/               # shadcn/ui 组件
├── lib/                  # 工具库
│   ├── config.ts         # 品牌配置
│   ├── seo.ts           # SEO 配置
│   └── utm.ts           # UTM 处理
├── content/             # 内容数据
│   ├── services.json    # 服务数据
│   ├── portfolio.json   # 作品数据
│   └── faq.json         # FAQ 数据
└── public/              # 静态资源
    └── images/          # 图片资源
```

## 功能特性

### ✅ 已实现 (Step 1)

- **响应式设计**: 移动端优先，支持桌面端
- **品牌色系**: 疗愈色系 (#F6EDEA, #9C7E6C)
- **核心区块**:
  - Hero 首屏标语与主 CTA
  - 4项服务展示 (美睫/脸部保养/育发/美甲)
  - 作品展示网格 (6张占位图片)
  - Google 地图嵌入
  - FAQ 手风琴
  - 悬浮加 LINE 按钮
- **SEO 优化**: 
  - 结构化数据 (JSON-LD)
  - 元数据配置
  - 语义化 HTML
- **无障碍**: 键盘导航、焦点管理、alt 属性
- **性能优化**: 图片懒加载、代码分割

### 🔄 待实现 (Step 2-3)

- **作品互动**: Before/After 滑杆、分类筛选
- **评价模块**: 真实评价展示
- **关于页面**: 品牌故事、师资证照
- **A/B 测试**: Hero 变体测试
- **数据分析**: GA4 事件追踪
- **CMS 集成**: Supabase 数据管理

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看效果。

### 3. 构建生产版本

```bash
npm run build
npm start
```

## 配置说明

### 品牌配置 (`lib/config.ts`)

```typescript
export const BRAND = {
  name: "美容工作室（待定）",        // 店名
  lineJoinUrl: "LINE链接占位",      // LINE 官方账号
  address: "新竹市東區（詳細地址待確認）", // 地址
  colors: { /* 品牌色系 */ },
  // ... 其他配置
}
```

### 环境变量

创建 `.env.local` 文件：

```env
NEXT_PUBLIC_LINE_JOIN_URL=https://line.me/ti/p/your-line-id
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX  # 可选，Step 3 使用
```

## 内容管理

### 服务数据 (`content/services.json`)

```json
{
  "id": "lash",
  "title": "美睫",
  "tagline": "自然到濃密，多款捲翹與長度可選",
  "priceRange": "NT$ 799–1,599（含稅）",
  "duration": "60–90 分",
  "badge": "招牌"
}
```

### 作品数据 (`content/portfolio.json`)

```json
{
  "id": "lash-001",
  "category": "美睫",
  "cover": "/images/portfolio/lash-natural-1200.webp",
  "before": "/images/portfolio/lash-before-1200.webp",
  "after": "/images/portfolio/lash-after-1200.webp",
  "alt": "新竹東區美睫｜自然款前後對比"
}
```

## 部署指南

### Vercel 部署 (推荐)

1. 推送代码到 GitHub
2. 在 Vercel 导入项目
3. 配置环境变量
4. 绑定自定义域名

### 其他平台

项目支持任何支持 Next.js 的平台：
- Netlify
- AWS Amplify
- Railway
- 自建服务器

## 性能指标

- **Lighthouse 目标**: Mobile ≥ 90 (Performance/SEO/Accessibility)
- **首屏加载**: < 2.5s
- **图片优化**: WebP 格式，懒加载
- **代码分割**: 按路由自动分割

## 浏览器支持

- Chrome (最新 2 版本)
- Firefox (最新 2 版本)
- Safari (最新 2 版本)
- Edge (最新 2 版本)

## 开发规范

### 代码风格

- 使用 TypeScript 严格模式
- 遵循 ESLint 规则
- 组件使用函数式 + Hooks
- 样式使用 Tailwind CSS

### 提交规范

```
feat: 新功能
fix: 修复问题
docs: 文档更新
style: 样式调整
refactor: 代码重构
test: 测试相关
chore: 构建/工具相关
```

## 待办事项

### Step 1 ✅ 完成
- [x] 项目初始化
- [x] 核心组件开发
- [x] 响应式布局
- [x] SEO 基础配置
- [x] 本地测试验收

### Step 2 🔄 进行中
- [ ] 作品互动功能
- [ ] 评价模块
- [ ] 关于页面
- [ ] 真实素材替换
- [ ] 本地 SEO 优化

### Step 3 📋 计划中
- [ ] A/B 测试框架
- [ ] GA4 事件追踪
- [ ] 性能优化
- [ ] Supabase 集成
- [ ] LINE OA 自动化

## 联系方式

如有问题或建议，请通过以下方式联系：

- 项目 Issues: [GitHub Issues]
- 技术咨询: [联系方式]

---

**注意**: 当前版本为 Step 1 MVP，使用占位内容。请根据实际需求更新品牌信息、图片素材和联系方式。