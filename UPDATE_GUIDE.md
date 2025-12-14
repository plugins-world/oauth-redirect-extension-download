# 扩展自动更新配置指南

Chrome 扩展有多种方式实现更新通知，本文档介绍几种常见方案。

## 方案 1: Chrome Web Store 自动更新（推荐）

### 说明

这是最简单、最可靠的方式。Chrome 会自动检查并更新已安装的扩展。

### 优点

- 完全自动化，无需额外配置
- 用户无需手动操作
- Google 提供的官方机制，稳定可靠

### 缺点

- 需要通过审核才能发布
- 需要支付 $5 开发者注册费

### 实现步骤

1. 将扩展上架到 Chrome Web Store
2. 用户从 Web Store 安装扩展
3. Chrome 会自动检查更新（通常每隔几小时）

### 配置

无需任何配置，Chrome 自动处理。

---

## 方案 2: 自托管更新（适用于企业或内部分发）

### 说明

通过 `update_url` 字段指向自己托管的更新清单文件。

### 限制

⚠️ **重要**: 从 Chrome 33 开始，只有通过企业策略安装的扩展才能使用自托管更新。普通用户安装的扩展无法使用此功能。

### 适用场景

- 企业内部分发
- 通过 GPO (Group Policy) 部署
- 教育机构内部使用

### 实现步骤

#### 1. 创建更新清单 XML

在下载页面项目中创建 `updates.xml`:

```xml
<?xml version='1.0' encoding='UTF-8'?>
<gupdate xmlns='http://www.google.com/update2/response' protocol='2.0'>
  <app appid='YOUR_EXTENSION_ID'>
    <updatecheck
      codebase='https://plugins-world.github.io/oauth-redirect-extension-download/oauth-redirect-extension-v1.1.3.zip'
      version='1.1.3' />
  </app>
</gupdate>
```

说明:
- `appid`: 扩展 ID（在 chrome://extensions/ 中查看）
- `codebase`: 新版本 zip 文件的下载地址
- `version`: 新版本号

#### 2. 修改 manifest.json

在主项目的 `src/manifest.json` 中添加:

```json
{
  "name": "OAuth 地址重定向助手",
  "version": "1.1.3",
  "update_url": "https://plugins-world.github.io/oauth-redirect-extension-download/updates.xml",
  ...
}
```

#### 3. 更新清单文件

每次发布新版本时，更新 `updates.xml` 中的版本号和下载链接。

### 注意事项

- 更新清单必须通过 HTTPS 提供
- CRX 文件必须正确签名
- 只适用于企业部署场景

---

## 方案 3: 应用内版本检查（推荐用于开发版本）

### 说明

在扩展中添加代码，定期检查远程服务器的版本信息，提示用户手动更新。

### 优点

- 适用于任何安装方式
- 可以自定义提示内容和样式
- 不受 Chrome 策略限制

### 缺点

- 需要用户手动下载更新
- 需要额外开发

### 实现步骤

#### 1. 创建版本信息 API

在下载页面项目中创建 `version.json`:

```json
{
  "version": "1.1.3",
  "downloadUrl": "https://plugins-world.github.io/oauth-redirect-extension-download/oauth-redirect-extension-v1.1.3.zip",
  "releaseNotes": "- 新增工具栏图标点击功能\n- 优化配置页面",
  "releaseDate": "2024-12-14"
}
```

#### 2. 添加版本检查代码

在 `src/background.js` 中添加:

```javascript
// 版本检查配置
const VERSION_CHECK_URL = 'https://plugins-world.github.io/oauth-redirect-extension-download/version.json';
const CHECK_INTERVAL = 24 * 60 * 60 * 1000; // 24 小时检查一次

// 获取当前版本
const CURRENT_VERSION = chrome.runtime.getManifest().version;

// 比较版本号
function compareVersions(v1, v2) {
  const parts1 = v1.split('.').map(Number);
  const parts2 = v2.split('.').map(Number);

  for (let i = 0; i < Math.max(parts1.length, parts2.length); i++) {
    const part1 = parts1[i] || 0;
    const part2 = parts2[i] || 0;

    if (part1 > part2) return 1;
    if (part1 < part2) return -1;
  }

  return 0;
}

// 检查更新
async function checkForUpdates() {
  try {
    const response = await fetch(VERSION_CHECK_URL);
    const data = await response.json();

    if (compareVersions(data.version, CURRENT_VERSION) > 0) {
      // 发现新版本
      console.log(`发现新版本: ${data.version}`);

      // 显示通知
      chrome.notifications.create({
        type: 'basic',
        iconUrl: 'icon.png',
        title: '发现新版本',
        message: `OAuth 地址重定向助手 v${data.version} 已发布！\n\n${data.releaseNotes}`,
        buttons: [
          { title: '立即下载' },
          { title: '稍后提醒' }
        ],
        requireInteraction: true
      });

      // 保存更新信息
      await chrome.storage.local.set({
        latestVersion: data.version,
        updateInfo: data
      });
    }
  } catch (error) {
    console.error('检查更新失败:', error);
  }
}

// 处理通知点击
chrome.notifications.onButtonClicked.addListener((notificationId, buttonIndex) => {
  if (buttonIndex === 0) {
    // 打开下载页面
    chrome.tabs.create({
      url: 'https://plugins-world.github.io/oauth-redirect-extension-download/'
    });
  }

  chrome.notifications.clear(notificationId);
});

// 定期检查更新
chrome.alarms.create('checkUpdates', {
  periodInMinutes: CHECK_INTERVAL / 60000
});

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'checkUpdates') {
    checkForUpdates();
  }
});

// 扩展安装或更新时检查一次
chrome.runtime.onInstalled.addListener(() => {
  checkForUpdates();
});
```

#### 3. 添加权限

在 `manifest.json` 中添加必要权限:

```json
{
  "permissions": [
    "storage",
    "notifications",
    "alarms"
  ]
}
```

#### 4. 在配置页面显示更新提示

在 `src/options.js` 中添加:

```javascript
// 检查是否有可用更新
async function checkUpdateNotification() {
  const result = await chrome.storage.local.get(['latestVersion', 'updateInfo']);

  if (result.latestVersion && result.updateInfo) {
    const currentVersion = chrome.runtime.getManifest().version;

    if (result.latestVersion !== currentVersion) {
      // 显示更新提示
      const banner = document.createElement('div');
      banner.className = 'bg-blue-50 border-l-4 border-blue-500 p-4 mb-6';
      banner.innerHTML = `
        <div class="flex items-center">
          <div class="flex-1">
            <p class="font-semibold text-blue-700">发现新版本 v${result.latestVersion}</p>
            <p class="text-sm text-blue-600">${result.updateInfo.releaseNotes}</p>
          </div>
          <a href="${result.updateInfo.downloadUrl}"
             target="_blank"
             class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            立即下载
          </a>
        </div>
      `;

      document.querySelector('.container').prepend(banner);
    }
  }
}

// 页面加载时检查
document.addEventListener('DOMContentLoaded', checkUpdateNotification);
```

---

## 推荐方案

### 开发阶段

使用 **方案 3**（应用内版本检查）:
- 灵活可控
- 适用于任何安装方式
- 可以自定义更新提示

### 正式发布

使用 **方案 1**（Chrome Web Store）:
- 用户体验最好
- 完全自动化
- 最稳定可靠

---

## 文件更新流程

### 每次发布新版本时

1. **更新主项目**:
   ```bash
   # 更新 package.json 和 manifest.json 中的版本号
   # 提交并推送代码
   ```

2. **更新下载页面项目**:
   ```bash
   # 复制新的 zip 文件
   cp ../oauth-redirect-extension/oauth-redirect-extension-v1.x.x.zip .

   # 更新 version.json
   {
     "version": "1.x.x",
     "downloadUrl": "https://plugins-world.github.io/oauth-redirect-extension-download/oauth-redirect-extension-v1.x.x.zip",
     "releaseNotes": "...",
     "releaseDate": "2024-12-14"
   }

   # 更新 updates.xml (如果使用方案 2)
   # 更新 index.html 中的版本号和下载链接

   # 提交并推送
   git add .
   git commit -m "chore: 更新到 v1.x.x"
   git push
   ```

3. **GitHub Actions 自动部署**:
   - 推送后自动部署到 GitHub Pages
   - 用户访问下载页面即可获取最新版本

---

## 相关链接

- [Chrome 扩展自动更新文档](https://developer.chrome.com/docs/extensions/mv3/hosting/)
- [更新清单格式](https://developer.chrome.com/docs/extensions/reference/manifest)
- [Chrome Notifications API](https://developer.chrome.com/docs/extensions/reference/notifications/)
