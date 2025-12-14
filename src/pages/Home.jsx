import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

export default function Home() {
  const [versionInfo, setVersionInfo] = useState({
    version: '1.1.4',
    downloadUrl: '/releases/oauth-redirect-extension-v1.1.4.zip',
    releaseNotes: '',
    releaseDate: '2024-12-15',
    changes: []
  });

  useEffect(() => {
    fetch('/version.json')
      .then(res => res.json())
      .then(data => {
        const latest = data.changelog?.[0] || {};
        setVersionInfo({
          version: data.version,
          downloadUrl: data.downloadUrl,
          releaseNotes: data.releaseNotes,
          releaseDate: data.releaseDate,
          changes: latest.changes || []
        });
      })
      .catch(err => {
        console.error('加载版本信息失败:', err);
      });
  }, []);

  return (
    <div className="bg-gray-50">
      <Header />

      {/* Hero Section with Screenshot */}
      <section className="bg-white border-b border-gray-200 py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* 左侧: 下载信息 */}
            <div className="flex flex-col">
              <h2 className="text-4xl font-bold mb-5 text-gray-900">下载浏览器扩展</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                自动重定向 OAuth 回调地址，支持配置多条域名映射规则，解决网络隔离环境下的授权问题
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={versionInfo.downloadUrl}
                  className="download-btn bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium inline-flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                  </svg>
                  下载 v{versionInfo.version}
                </a>
                <a
                  href="https://github.com/plugins-world/oauth-redirect-extension-download"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 px-6 py-3 rounded-lg font-medium inline-flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                  </svg>
                  GitHub
                </a>
              </div>
            </div>

            {/* 右侧: 配置页面预览 */}
            <div className="screenshot-container">
              <img src="/assets/images/screenshots/options-page.png" alt="配置页面截图" className="w-full rounded-lg shadow-lg"/>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">核心特性</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/>,
                title: '多规则配置',
                desc: '支持配置多个域名重定向规则，满足不同场景需求'
              },
              {
                icon: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></>,
                title: '可视化界面',
                desc: '直观的配置界面，无需手动编辑代码，轻松管理规则'
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>,
                title: '实时生效',
                desc: '配置保存后立即生效，无需重启浏览器'
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>,
                title: '参数完整性',
                desc: '保持 URL 参数完整性，只替换域名部分'
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>,
                title: '隐私安全',
                desc: '所有数据本地存储，不收集任何用户信息'
              },
              {
                icon: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></>,
                title: '灵活控制',
                desc: '可单独启用/禁用每条规则，灵活应对不同场景'
              }
            ].map((feature, index) => (
              <div key={index} className="feature-card bg-white p-6 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {feature.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">安装方法</h2>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {/* 方法一: 快速安装 */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 border-2 border-gray-900">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gray-900 text-white rounded-lg flex items-center justify-center font-bold">
                  ⚡
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">快速安装（推荐）</h3>
                  <p className="text-sm text-gray-600">无需解压，直接拖拽</p>
                </div>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-7 h-7 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700">下载扩展 zip 文件</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-7 h-7 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 mb-2">打开 Chrome 扩展管理页面：</p>
                    <div className="flex items-center gap-2">
                      <code className="bg-white px-3 py-1.5 rounded border border-gray-300 text-gray-800 font-mono text-xs flex-1">
                        chrome://extensions/
                      </code>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText('chrome://extensions/');
                          alert('已复制到剪贴板');
                        }}
                        className="px-3 py-1.5 bg-gray-900 hover:bg-gray-800 text-white rounded text-xs font-medium whitespace-nowrap"
                      >
                        复制
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-7 h-7 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700">开启右上角的"开发者模式"</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-7 h-7 bg-green-600 text-white rounded-full flex items-center justify-center text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 font-semibold">直接拖动 zip 文件到页面</p>
                    <p className="text-sm text-gray-600 mt-1">Chrome 会自动解压并安装</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 方法二: 标准安装 */}
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gray-700 text-white rounded-lg flex items-center justify-center font-bold">
                  📁
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">标准安装</h3>
                  <p className="text-sm text-gray-600">手动解压安装</p>
                </div>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-7 h-7 bg-gray-700 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700">下载扩展 zip 文件</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-7 h-7 bg-gray-700 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700">解压 zip 文件到本地目录</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-7 h-7 bg-gray-700 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 mb-2">打开 Chrome 扩展管理页面：</p>
                    <div className="flex items-center gap-2">
                      <code className="bg-white px-3 py-1.5 rounded border border-gray-300 text-gray-800 font-mono text-xs flex-1">
                        chrome://extensions/
                      </code>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText('chrome://extensions/');
                          alert('已复制到剪贴板');
                        }}
                        className="px-3 py-1.5 bg-gray-700 hover:bg-gray-600 text-white rounded text-xs font-medium whitespace-nowrap"
                      >
                        复制
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-7 h-7 bg-gray-700 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    4
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700">开启右上角的"开发者模式"</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-7 h-7 bg-green-600 text-white rounded-full flex items-center justify-center text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 font-semibold">点击"加载已解压的扩展程序"</p>
                    <p className="text-sm text-gray-600 mt-1">选择解压后的文件夹</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">使用场景</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { emoji: '🏢', title: '网络隔离环境', desc: '内外网隔离，OAuth 服务只能配置内网回调地址，但开发者在外网无法访问' },
              { emoji: '💻', title: '开发环境切换', desc: '需要在不同环境（开发/测试/生产）之间快速切换 API 地址' },
              { emoji: '🔐', title: '第三方服务回调', desc: '第三方服务只允许配置一个回调地址，需要重定向到本地开发环境' }
            ].map((useCase, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-4xl mb-4">{useCase.emoji}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Version Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">版本信息</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">v{versionInfo.version}</h3>
                  <p className="text-gray-600">最新版本 - {versionInfo.releaseDate.replace(/-/g, '年').replace(/年(\d+)$/, '年$1日').replace(/年(\d+)年/, '年$1月')}</p>
                </div>
                <a
                  href={versionInfo.downloadUrl}
                  className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                  </svg>
                  下载
                </a>
              </div>
              <ul className="space-y-2 text-gray-700">
                {versionInfo.changes.map((note, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-300">
                <Link to="/changelog" className="text-gray-700 hover:text-gray-900 font-medium inline-flex items-center gap-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                  查看完整更新日志
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
