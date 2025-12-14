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
- oauth-redirect-extension/src/manifest.json ✅ 已配置
- oauth-redirect-extension-download/updates.xml ✅ 已更新路径

### 扩展 ID 固定方案

#### 问题
通过 zip 安装的扩展，每次安装路径不同会导致扩展 ID 变化，无法实现自动更新

#### 解决方案
使用私钥打包生成固定的扩展 ID

#### 操作步骤

1. **首次打包生成私钥**
   ```
   chrome://extensions/
   → 开启开发者模式
   → 点击 "打包扩展程序"
   → 扩展根目录: 选择 oauth-redirect-extension/src
   → 私钥文件: 留空 (首次)
   → 点击 "打包扩展程序"
   ```

   打包完成后会生成:
   - oauth-redirect-extension.crx (扩展包)
   - oauth-redirect-extension.pem (私钥文件，重要!)

2. **记录扩展 ID**
   - 打包完成后，Chrome 会显示生成的扩展 ID
   - 或者安装后在 chrome://extensions/ 查看
   - 格式类似: `abcdefghijklmnopqrstuvwxyzabcdef`

3. **更新 updates.xml**
   ```xml
   <app appid='你的实际扩展ID'>
   ```

4. **后续版本更新打包**
   ```
   chrome://extensions/
   → 打包扩展程序
   → 扩展根目录: oauth-redirect-extension/src
   → 私钥文件: 选择之前生成的 .pem 文件
   → 打包
   ```

   使用同一个 .pem 私钥，每次生成的扩展 ID 都相同

5. **私钥文件管理**
   - .pem 文件非常重要，丢失后无法生成相同的扩展 ID
   - 建议将 .pem 文件加入 .gitignore (安全考虑)
   - 妥善备份 .pem 文件

#### 自动更新工作流程

1. 用户安装扩展 (通过 .crx 或解压 zip)
2. Chrome 定期检查 manifest.json 中的 update_url
3. 访问 updates.xml 获取最新版本信息
4. 如果有新版本，自动下载并提示用户更新

#### 当前配置状态

- [x] manifest.json 添加 update_url
- [x] updates.xml 更新下载路径
- [ ] 使用私钥打包生成固定 ID
- [ ] 更新 updates.xml 中的 appid

### 注意事项
- 私钥(.pem)文件必须妥善保管
- 每次发布新版本都要使用同一个私钥打包
- updates.xml 和 version.json 的版本号要保持一致
- zip 文件路径要与 updates.xml 中的 codebase 一致

