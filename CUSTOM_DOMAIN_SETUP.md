# 🌐 GitHub Pages 自定义域名配置指南

## 📋 概述

GitHub Pages 支持自定义域名，让您的美容工作室网站使用专业的域名（如 `www.yourbeautysalon.com`）而不是默认的 `yangjizhou99.github.io/beauty-landing`。

## 🔧 配置步骤

### 1. 购买域名
首先您需要购买一个域名，推荐的服务商：
- **国外**: GoDaddy, Namecheap, Cloudflare
- **国内**: 阿里云、腾讯云、万网

### 2. 在GitHub中配置自定义域名

#### 方法一：通过GitHub Web界面
1. 访问：https://github.com/yangjizhou99/beauty-landing/settings/pages
2. 在 **Custom domain** 部分输入您的域名
3. 点击 **Save**

#### 方法二：通过代码配置
在项目根目录创建 `CNAME` 文件：

```bash
# 创建CNAME文件
echo "www.yourbeautysalon.com" > public/CNAME
```

### 3. DNS配置

根据您选择的域名配置方式，需要在域名服务商处设置DNS记录：

#### 选项A：使用www子域名（推荐）
```
类型: CNAME
名称: www
值: yangjizhou99.github.io
TTL: 3600
```

#### 选项B：使用根域名
```
类型: A
名称: @
值: 185.199.108.153
TTL: 3600

类型: A
名称: @
值: 185.199.109.153
TTL: 3600

类型: A
名称: @
值: 185.199.110.153
TTL: 3600

类型: A
名称: @
值: 185.199.111.153
TTL: 3600
```

#### 选项C：同时支持根域名和www
```
类型: A
名称: @
值: 185.199.108.153

类型: CNAME
名称: www
值: yangjizhou99.github.io
```

## 🛠️ 自动配置脚本

让我为您创建一个自动配置脚本：

```bash
# 设置自定义域名
setup-custom-domain() {
    local domain=$1
    
    if [ -z "$domain" ]; then
        echo "用法: setup-custom-domain <域名>"
        echo "示例: setup-custom-domain www.yourbeautysalon.com"
        return 1
    fi
    
    # 创建CNAME文件
    echo "$domain" > public/CNAME
    
    # 提交更改
    git add public/CNAME
    git commit -m "添加自定义域名: $domain"
    git push
    
    echo "✅ 自定义域名已配置: $domain"
    echo "📝 请确保在域名服务商处设置正确的DNS记录"
}

# 使用示例
# setup-custom-domain www.yourbeautysalon.com
```

## 📊 域名配置示例

### 美容工作室域名建议

#### 专业域名示例：
- `www.beautysalon.com` - 通用美容沙龙
- `www.lashstudio.com` - 美睫工作室
- `www.skincareclinic.com` - 护肤诊所
- `www.nailartstudio.com` - 美甲工作室

#### 地区性域名示例：
- `www.xinzhubeauty.com` - 新竹美容
- `www.hsinchubeauty.com` - 新竹美容（英文）
- `www.taiwanlash.com` - 台湾美睫

### 完整配置示例

假设您的域名是 `www.yourbeautysalon.com`：

1. **GitHub配置**：
   ```
   自定义域名: www.yourbeautysalon.com
   ```

2. **DNS配置**（在域名服务商处）：
   ```
   类型: CNAME
   名称: www
   值: yangjizhou99.github.io
   ```

3. **CNAME文件内容**：
   ```
   www.yourbeautysalon.com
   ```

## 🔍 验证配置

### 检查DNS解析
```bash
# 检查域名解析
nslookup www.yourbeautysalon.com

# 检查GitHub Pages状态
gh api repos/yangjizhou99/beauty-landing/pages
```

### 测试访问
- 等待DNS传播（通常需要几分钟到几小时）
- 访问您的自定义域名
- 检查HTTPS是否正常工作

## ⚠️ 注意事项

### 重要提醒
1. **DNS传播时间**: 新配置的DNS记录可能需要几小时才能生效
2. **HTTPS证书**: GitHub会自动为自定义域名提供SSL证书
3. **CNAME文件**: 必须放在 `public/` 目录下
4. **域名验证**: GitHub会验证您对域名的所有权

### 常见问题
1. **DNS未生效**: 等待DNS传播，或清除DNS缓存
2. **HTTPS问题**: 确保在GitHub Pages设置中启用HTTPS
3. **域名冲突**: 确保域名未被其他服务使用

## 🚀 快速开始

如果您已经有域名，可以立即开始配置：

1. **在GitHub Pages设置中输入您的域名**
2. **在域名服务商处配置DNS记录**
3. **等待DNS传播**
4. **享受您的专业网站！**

---

**提示**: 如果您还没有域名，建议选择简洁易记的域名，如 `www.yourbeautysalon.com`，这样更容易被客户记住和分享。
