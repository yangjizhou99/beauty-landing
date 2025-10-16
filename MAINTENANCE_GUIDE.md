# 🛠️ 美容工作室官网维护指南

## 📋 日常维护任务

### 🔄 内容更新

#### 1. 服务信息更新
**文件位置**: `content/services.json`
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

#### 2. 作品展示更新
**文件位置**: `content/portfolio.json`
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

#### 3. FAQ内容更新
**文件位置**: `content/faq.json`
```json
{
  "question": "常見問題？",
  "answer": "詳細回答內容"
}
```

### 🎨 品牌信息更新

#### 1. 基本配置
**文件位置**: `lib/config.ts`
```typescript
export const BRAND = {
  name: "您的美容工作室名稱",
  lineJoinUrl: "https://line.me/ti/p/your-line-id",
  address: "詳細地址",
  phone: "聯絡電話",
  email: "電子郵件",
  // ... 其他配置
}
```

#### 2. SEO信息
**文件位置**: `lib/seo.ts`
```typescript
export const SEO = {
  title: "您的工作室名稱 | 專業美容服務",
  description: "專業美容服務描述",
  keywords: "美容, 美睫, 護膚, 新竹",
  // ... 其他SEO配置
}
```

## 🖼️ 图片管理

### 图片上传步骤
1. **准备图片**:
   - 格式: WebP, PNG, JPG
   - 尺寸: 建议1200px宽度
   - 压缩: 使用在线工具压缩

2. **上传到项目**:
   ```
   public/images/
   ├── portfolio/          # 作品图片
   │   ├── lash-*.webp    # 美睫作品
   │   ├── facial-*.webp  # 脸部保养作品
   │   └── nail-*.webp    # 美甲作品
   ├── services/          # 服务图片
   └── about/             # 关于页面图片
   ```

3. **更新JSON文件**:
   在相应的JSON文件中更新图片路径

## 🚀 部署更新

### 快速更新流程
```bash
# 1. 更新内容
# 编辑相应的JSON文件或配置文件

# 2. 本地测试
npm run dev
# 访问 http://localhost:3000 检查效果

# 3. 构建测试
npm run build
# 确保构建成功

# 4. 提交并推送
git add .
git commit -m "更新内容描述"
git push
# 自动触发GitHub Actions部署
```

### 使用便捷脚本
```bash
# 使用项目提供的便捷脚本
gh-helper.bat push
```

## 📊 监控和维护

### 1. 检查网站状态
- **网站地址**: https://yangjizhou99.github.io/beauty-landing/
- **GitHub Actions**: https://github.com/yangjizhou99/beauty-landing/actions
- **部署状态**: 每次推送后检查Actions运行状态

### 2. 性能监控
- 使用Google PageSpeed Insights检查性能
- 定期检查Lighthouse评分
- 监控网站加载速度

### 3. SEO监控
- 使用Google Search Console
- 监控关键词排名
- 检查网站索引状态

## 🔧 故障排除

### 常见问题及解决方案

#### 1. 网站无法访问
**可能原因**:
- GitHub Pages设置问题
- DNS配置错误
- 构建失败

**解决方案**:
```bash
# 检查GitHub Actions状态
gh run list

# 查看构建日志
gh run view [RUN_ID] --log
```

#### 2. 图片不显示
**可能原因**:
- 图片路径错误
- 图片文件不存在
- 图片格式不支持

**解决方案**:
- 检查图片路径是否正确
- 确认图片文件已上传到public目录
- 使用支持的图片格式

#### 3. 内容更新不生效
**可能原因**:
- 缓存问题
- 构建失败
- 推送失败

**解决方案**:
```bash
# 清除浏览器缓存
# 检查Git状态
git status

# 重新推送
git push --force-with-lease
```

## 📈 优化建议

### 短期优化 (1-2周)
- [ ] **替换占位内容**: 使用真实的品牌信息、服务描述和作品照片
- [ ] **优化图片**: 压缩图片文件，提升加载速度
- [ ] **完善SEO**: 添加更多关键词和元数据

### 中期优化 (1-2月)
- [ ] **自定义域名**: 购买专业域名提升品牌形象
- [ ] **Google Analytics**: 添加访问统计和分析
- [ ] **客户评价**: 添加真实客户评价和反馈

### 长期规划 (3-6月)
- [ ] **在线预约**: 集成预约系统
- [ ] **会员系统**: 客户管理系统
- [ ] **多语言支持**: 中英文双语版本

## 🆘 技术支持

### 获取帮助的渠道
1. **项目文档**: 查看项目根目录的文档文件
2. **GitHub Issues**: 在项目仓库创建Issue
3. **技术社区**: Stack Overflow, GitHub Discussions

### 紧急联系
如果遇到紧急问题，可以：
1. 检查GitHub Actions日志
2. 回滚到上一个稳定版本
3. 联系技术支持

---

**提示**: 定期备份项目代码，确保重要数据安全。建议每月进行一次完整的项目备份。
