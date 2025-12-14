# 项目改造任务

## Vite 项目改写

### 目标
将当前静态 HTML 项目改写为 Vite 项目，实现更好的开发体验和代码组织

### 任务详情

#### 1. 项目结构调整
- 创建 src 目录存放源代码
- 移动 index.html 到根目录作为入口文件
- 移动页面组件到 src/pages/
  - src/pages/index/
  - src/pages/changelog/
- 移动静态资源到 src/assets/
- 移动公共配置到 public/
  - version.json
  - updates.xml

#### 2. Vite 配置
- 初始化 package.json
- 安装 Vite 及相关依赖
- 配置 vite.config.js
  - 多页面构建配置
  - 静态资源处理
  - 构建输出目录配置

#### 3. 开发环境
- 配置开发服务器
- 支持热更新
- 配置 proxy (如需要)

#### 4. 构建配置
- 生产环境构建优化
- 资源压缩和优化
- 输出到 dist 目录
- 保持与当前部署结构一致

#### 5. 脚本命令
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

### 预期目录结构
```
oauth-redirect-extension-download/
├── src/
│   ├── pages/
│   │   ├── index/
│   │   │   ├── index.html
│   │   │   └── main.js
│   │   └── changelog/
│   │       ├── index.html
│   │       └── main.js
│   ├── assets/
│   │   └── images/
│   └── styles/
│       └── global.css
├── public/
│   ├── version.json
│   ├── updates.xml
│   └── releases/
├── dist/              (构建输出)
├── vite.config.js
├── package.json
└── task.md
```

### 技术栈
- Vite 5.x
- Tailwind CSS (保持现有)
- Vanilla JavaScript (保持现有)

### 注意事项
- 保持现有的 HTML 结构和样式
- 构建输出需要与当前 GitHub Pages 部署兼容
- version.json 和 updates.xml 需要在构建后可访问
- releases 目录需要保留在输出目录

### 优先级
中等 - 不影响当前功能使用

### 预计工作量
2-3 小时

---

## 扩展更新配置任务

### 目标
配置 Chrome 扩展自动更新功能，让用户可以从在线网站检测更新

### 相关文件
- oauth-redirect-extension/src/manifest.json
- oauth-redirect-extension-download/updates.xml

### 任务待定
需要进一步了解现有配置后制定详细方案
