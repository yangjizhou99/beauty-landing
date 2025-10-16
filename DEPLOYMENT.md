# GitHub Pages 部署指南

## 🚀 自动部署已配置完成！

您的项目已经配置了GitHub Actions自动部署工作流。现在需要手动启用GitHub Pages来激活部署。

## 📋 启用GitHub Pages的步骤

### 1. 进入仓库设置
1. 访问您的仓库：https://github.com/yangjizhou99/beauty-landing
2. 点击 **Settings** 标签页
3. 在左侧菜单中找到 **Pages** 选项

### 2. 配置Pages源
1. 在 **Source** 部分，选择 **GitHub Actions**
2. 点击 **Save** 保存设置

### 3. 等待部署完成
- GitHub Actions工作流会自动运行
- 部署完成后，您的网站将可以通过以下地址访问：
  **https://yangjizhou99.github.io/beauty-landing/**

## 🔧 部署配置详情

### 技术栈
- **框架**: Next.js 15.5.5 (静态导出)
- **构建工具**: Turbopack
- **部署平台**: GitHub Pages
- **自动化**: GitHub Actions

### 构建配置
```typescript
// next.config.ts
const nextConfig: NextConfig = {
  output: 'export',           // 静态导出
  trailingSlash: true,        // URL末尾斜杠
  images: {
    unoptimized: true         // 图片优化禁用（Pages限制）
  },
  basePath: '/beauty-landing', // Pages子路径
  assetPrefix: '/beauty-landing/', // 静态资源前缀
};
```

### 工作流特性
- ✅ 自动触发：每次推送到main分支
- ✅ 手动触发：支持workflow_dispatch
- ✅ 权限配置：包含Pages写入权限
- ✅ 并发控制：防止重复部署
- ✅ 构建缓存：Node.js和npm缓存优化

## 🛠️ 本地开发

### 启动开发服务器
```bash
npm run dev
```
访问：http://localhost:3000

### 构建生产版本
```bash
npm run build
```
构建产物将输出到 `out/` 目录

### 预览构建结果
```bash
npm run build
npx serve out
```

## 📝 常用命令

### 推送更新
```bash
# 使用便捷脚本
gh-helper.bat push

# 或手动操作
git add .
git commit -m "更新描述"
git push
```

### 查看部署状态
```bash
# 查看工作流运行状态
gh run list

# 查看仓库信息
gh repo view

# 查看Pages设置
gh api repos/yangjizhou99/beauty-landing/pages
```

## 🔍 故障排除

### 常见问题

1. **构建失败**
   - 检查TypeScript错误
   - 运行 `npm run lint` 检查代码质量
   - 确保所有依赖已正确安装

2. **部署失败**
   - 检查GitHub Actions日志
   - 确认Pages源设置为 "GitHub Actions"
   - 验证仓库权限设置

3. **网站无法访问**
   - 等待部署完成（通常需要2-5分钟）
   - 检查URL是否正确：`https://yangjizhou99.github.io/beauty-landing/`
   - 清除浏览器缓存

### 调试命令
```bash
# 检查构建错误
npm run build

# 检查代码质量
npm run lint

# 查看工作流日志
gh run view [RUN_ID]
```

## 📊 性能优化

### 已实现的优化
- ✅ 静态导出（零服务器成本）
- ✅ 图片懒加载
- ✅ 代码分割
- ✅ CSS优化
- ✅ 构建缓存

### 监控指标
- **Lighthouse目标**: Mobile ≥ 90 (Performance/SEO/Accessibility)
- **首屏加载**: < 2.5s
- **构建时间**: < 3分钟

## 🔗 相关链接

- **仓库地址**: https://github.com/yangjizhou99/beauty-landing
- **部署地址**: https://yangjizhou99.github.io/beauty-landing/
- **Actions页面**: https://github.com/yangjizhou99/beauty-landing/actions
- **Pages设置**: https://github.com/yangjizhou99/beauty-landing/settings/pages

---

**注意**: 首次部署可能需要5-10分钟。部署完成后，您的网站将自动更新每次代码推送。
