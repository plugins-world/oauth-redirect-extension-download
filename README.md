# OAuth 地址重定向助手 - 下载页面

这是 OAuth 地址重定向助手的官方下载页面，提供最新版本的扩展下载和详细的安装说明。

## 项目结构

```
oauth-redirect-extension-download/
├── index.html                          # 下载页面
├── oauth-redirect-extension-v1.1.3.zip # 扩展安装包
├── assets/
│   └── images/
│       ├── icon.png                    # 扩展图标
│       └── screenshots/                # 截图目录
│           └── options-page.png        # 配置页面截图
├── package.json                        # 项目配置
└── README.md                          # 说明文档
```

## 本地预览

### 方式 1: 直接打开 HTML 文件

直接在浏览器中打开 `index.html` 文件即可预览。

### 方式 2: 使用开发服务器 (推荐)

```bash
# 安装依赖
bun install

# 启动开发服务器
bun run dev

# 在浏览器访问 http://localhost:5173
```

## 部署到 GitHub Pages

### 步骤 1: 创建 GitHub 仓库

1. 在 GitHub 创建新仓库 `oauth-redirect-extension-download`
2. 将本地代码推送到仓库

```bash
git init
git add .
git commit -m "feat: 初始化下载页面项目"
git branch -M main
git remote add origin git@github.com:YOUR_USERNAME/oauth-redirect-extension-download.git
git push -u origin main
```

### 步骤 2: 启用 GitHub Pages

1. 进入仓库的 Settings
2. 在左侧菜单找到 "Pages"
3. Source 选择 "main" 分支
4. 文件夹选择 "/ (root)"
5. 点击 Save

### 步骤 3: 访问页面

等待几分钟后，访问：
```
https://YOUR_USERNAME.github.io/oauth-redirect-extension-download/
```

## 更新版本

当有新版本发布时：

1. 将新的 zip 文件复制到项目根目录
2. 更新 `index.html` 中的版本号和下载链接
3. 更新版本信息部分的更新日志
4. 提交并推送更改

```bash
# 复制新版本
cp ../oauth-redirect-extension/oauth-redirect-extension-v1.x.x.zip .

# 更新 index.html 中的版本信息
# ...

# 提交更改
git add .
git commit -m "chore: 更新到 v1.x.x 版本"
git push
```

## 技术栈

- HTML5 - 页面结构
- Tailwind CSS (CDN) - 样式框架
- Google Fonts (Inter) - 字体
- GitHub Pages - 静态网站托管

## 特性

- 响应式设计，支持移动端访问
- 现代化 UI，渐变色主题
- 功能特性展示
- 配置页面截图预览
- 详细的安装步骤说明
- 使用场景介绍
- 版本信息和更新日志

## 维护

- 定期更新扩展版本
- 更新截图和功能说明
- 优化页面性能和 SEO
- 保持与主项目文档的一致性

## 许可证

Copyright © 2024 Plugins World. All rights reserved.
