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
    <div className="relative" style={{ background: 'var(--cyber-bg)', minHeight: '100vh' }}>
      <div className="cyber-grid"></div>
      <div className="relative z-10">
        <Header />

        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col space-y-8">
                <div className="inline-block">
                  <span className="text-xs font-bold tracking-widest uppercase" style={{ color: 'var(--cyber-primary)' }}>
                    [ DEVELOPER TOOL ]
                  </span>
                </div>

                <h1 className="cyber-title text-4xl md:text-6xl leading-tight">
                  OAuth Redirect
                  <br />
                  Extension
                </h1>

                <p className="cyber-text text-lg md:text-xl leading-relaxed">
                  自动重定向 OAuth 回调地址 // 支持多域名映射规则 // 解决网络隔离环境授权问题
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={versionInfo.downloadUrl}
                    className="download-btn px-8 py-4 rounded-lg font-bold inline-flex items-center justify-center gap-3 group"
                  >
                    <svg className="w-6 h-6 transition-transform group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                    </svg>
                    <span>Download v{versionInfo.version}</span>
                  </a>

                  <a
                    href="https://github.com/plugins-world/oauth-redirect-extension-download"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cyber-border px-8 py-4 rounded-lg font-bold inline-flex items-center justify-center gap-3 transition-all hover:scale-105"
                    style={{ background: 'var(--cyber-surface)', color: 'var(--cyber-text)' }}
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                    </svg>
                    <span>GitHub</span>
                  </a>
                </div>

                <div className="flex items-center gap-4 text-sm cyber-text-dim">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--cyber-primary)' }}></div>
                    <span>实时生效</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--cyber-secondary)' }}></div>
                    <span>本地存储</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--cyber-accent)' }}></div>
                    <span>开源免费</span>
                  </div>
                </div>
              </div>

              <div className="screenshot-container">
                <img src="/assets/images/screenshots/options-page.png" alt="配置页面截图" className="w-full"/>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <span className="text-xs font-bold tracking-widest uppercase mb-4 inline-block" style={{ color: 'var(--cyber-secondary)' }}>
                [ CORE FEATURES ]
              </span>
              <h2 className="cyber-title text-3xl md:text-5xl">核心特性</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
                  title: '多规则配置',
                  desc: '支持配置多个域名重定向规则, 满足不同场景需求',
                  color: 'var(--cyber-primary)'
                },
                {
                  icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
                  title: '可视化界面',
                  desc: '直观的配置界面, 无需手动编辑代码, 轻松管理规则',
                  color: 'var(--cyber-secondary)'
                },
                {
                  icon: "M13 10V3L4 14h7v7l9-11h-7z",
                  title: '实时生效',
                  desc: '配置保存后立即生效, 无需重启浏览器',
                  color: 'var(--cyber-accent)'
                },
                {
                  icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                  title: '参数完整性',
                  desc: '保持 URL 参数完整性, 只替换域名部分',
                  color: 'var(--cyber-warning)'
                },
                {
                  icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
                  title: '隐私安全',
                  desc: '所有数据本地存储, 不收集任何用户信息',
                  color: 'var(--cyber-primary)'
                },
                {
                  icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
                  title: '灵活控制',
                  desc: '可单独启用/禁用每条规则, 灵活应对不同场景',
                  color: 'var(--cyber-secondary)'
                }
              ].map((feature, index) => (
                <div key={index} className="feature-card stagger-fade-in p-6 rounded-lg">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: 'rgba(0, 255, 159, 0.1)', border: `2px solid ${feature.color}` }}>
                      <svg className="w-6 h-6" fill="none" stroke={feature.color} viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d={feature.icon}/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2" style={{ color: feature.color }}>{feature.title}</h3>
                    </div>
                  </div>
                  <p className="cyber-text-dim text-sm leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Installation Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <span className="text-xs font-bold tracking-widest uppercase mb-4 inline-block" style={{ color: 'var(--cyber-accent)' }}>
                [ INSTALLATION ]
              </span>
              <h2 className="cyber-title text-3xl md:text-5xl">安装方法</h2>
            </div>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
              {/* Quick Install */}
              <div className="cyber-border rounded-lg p-8 relative overflow-hidden group" style={{ background: 'var(--cyber-surface)' }}>
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10" style={{ background: 'radial-gradient(circle, var(--cyber-primary) 0%, transparent 70%)' }}></div>

                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-lg flex items-center justify-center text-2xl font-bold" style={{ background: 'linear-gradient(135deg, var(--cyber-primary), var(--cyber-secondary))', color: 'var(--cyber-bg)' }}>
                    ⚡
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold" style={{ color: 'var(--cyber-primary)' }}>快速安装</h3>
                    <p className="text-sm cyber-text-dim">推荐方式 // 无需解压</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {[
                    { step: '01', text: '下载扩展 zip 文件' },
                    { step: '02', text: '打开 Chrome 扩展管理页面', code: 'chrome://extensions/' },
                    { step: '03', text: '开启右上角的 "开发者模式"' },
                    { step: '04', text: '直接拖动 zip 文件到页面', highlight: true }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded flex items-center justify-center font-bold text-sm" style={{ background: item.highlight ? 'var(--cyber-primary)' : 'var(--cyber-border)', color: item.highlight ? 'var(--cyber-bg)' : 'var(--cyber-text)' }}>
                        {item.step}
                      </div>
                      <div className="flex-1 pt-2">
                        <p className="cyber-text mb-2">{item.text}</p>
                        {item.code && (
                          <div className="flex items-center gap-2 mt-2">
                            <code className="flex-1 px-4 py-2 rounded text-sm font-mono" style={{ background: 'var(--cyber-bg)', color: 'var(--cyber-primary)', border: '1px solid var(--cyber-border)' }}>
                              {item.code}
                            </code>
                            <button
                              onClick={() => {
                                navigator.clipboard.writeText(item.code);
                                alert('已复制到剪贴板');
                              }}
                              className="px-4 py-2 rounded text-sm font-bold transition-all hover:scale-105"
                              style={{ background: 'var(--cyber-primary)', color: 'var(--cyber-bg)' }}
                            >
                              复制
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Standard Install */}
              <div className="cyber-border rounded-lg p-8 relative overflow-hidden" style={{ background: 'var(--cyber-surface)' }}>
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10" style={{ background: 'radial-gradient(circle, var(--cyber-secondary) 0%, transparent 70%)' }}></div>

                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-lg flex items-center justify-center text-2xl font-bold" style={{ background: 'var(--cyber-border)', color: 'var(--cyber-text)' }}>
                    📁
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold" style={{ color: 'var(--cyber-secondary)' }}>标准安装</h3>
                    <p className="text-sm cyber-text-dim">传统方式 // 手动解压</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {[
                    { step: '01', text: '下载扩展 zip 文件' },
                    { step: '02', text: '解压 zip 文件到本地目录' },
                    { step: '03', text: '打开 Chrome 扩展管理页面', code: 'chrome://extensions/' },
                    { step: '04', text: '开启右上角的 "开发者模式"' },
                    { step: '05', text: '点击 "加载已解压的扩展程序"', highlight: true }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded flex items-center justify-center font-bold text-sm" style={{ background: item.highlight ? 'var(--cyber-secondary)' : 'var(--cyber-border)', color: item.highlight ? 'var(--cyber-bg)' : 'var(--cyber-text)' }}>
                        {item.step}
                      </div>
                      <div className="flex-1 pt-2">
                        <p className="cyber-text mb-2">{item.text}</p>
                        {item.code && (
                          <div className="flex items-center gap-2 mt-2">
                            <code className="flex-1 px-4 py-2 rounded text-sm font-mono" style={{ background: 'var(--cyber-bg)', color: 'var(--cyber-secondary)', border: '1px solid var(--cyber-border)' }}>
                              {item.code}
                            </code>
                            <button
                              onClick={() => {
                                navigator.clipboard.writeText(item.code);
                                alert('已复制到剪贴板');
                              }}
                              className="px-4 py-2 rounded text-sm font-bold transition-all hover:scale-105"
                              style={{ background: 'var(--cyber-secondary)', color: 'var(--cyber-bg)' }}
                            >
                              复制
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <span className="text-xs font-bold tracking-widest uppercase mb-4 inline-block" style={{ color: 'var(--cyber-warning)' }}>
                [ USE CASES ]
              </span>
              <h2 className="cyber-title text-3xl md:text-5xl">使用场景</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
                  title: '网络隔离环境',
                  desc: '内外网隔离, OAuth 服务只能配置内网回调地址, 但开发者在外网无法访问',
                  color: 'var(--cyber-primary)'
                },
                {
                  icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
                  title: '开发环境切换',
                  desc: '需要在不同环境 (开发/测试/生产) 之间快速切换 API 地址',
                  color: 'var(--cyber-secondary)'
                },
                {
                  icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
                  title: '第三方服务回调',
                  desc: '第三方服务只允许配置一个回调地址, 需要重定向到本地开发环境',
                  color: 'var(--cyber-accent)'
                }
              ].map((useCase, index) => (
                <div key={index} className="cyber-border rounded-lg p-8 group hover:scale-105 transition-all" style={{ background: 'var(--cyber-surface)' }}>
                  <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6 transition-all group-hover:scale-110" style={{ background: `${useCase.color}20`, border: `2px solid ${useCase.color}` }}>
                    <svg className="w-8 h-8" fill="none" stroke={useCase.color} viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d={useCase.icon}/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4" style={{ color: useCase.color }}>{useCase.title}</h3>
                  <p className="cyber-text-dim leading-relaxed">{useCase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Version Info Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <span className="text-xs font-bold tracking-widest uppercase mb-4 inline-block" style={{ color: 'var(--cyber-primary)' }}>
                [ LATEST RELEASE ]
              </span>
              <h2 className="cyber-title text-3xl md:text-5xl">版本信息</h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="version-card rounded-lg p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
                  <div>
                    <div className="flex items-baseline gap-4 mb-2">
                      <h3 className="text-4xl font-bold" style={{ color: 'var(--cyber-primary)' }}>v{versionInfo.version}</h3>
                      <span className="text-sm cyber-text-dim">LATEST</span>
                    </div>
                    <p className="cyber-text-dim">{versionInfo.releaseDate}</p>
                  </div>
                  <a
                    href={versionInfo.downloadUrl}
                    className="download-btn px-6 py-3 rounded-lg font-bold inline-flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                    </svg>
                    <span>DOWNLOAD</span>
                  </a>
                </div>

                {versionInfo.changes.length > 0 && (
                  <div className="space-y-3 mb-8">
                    {versionInfo.changes.map((note, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded flex items-center justify-center mt-0.5" style={{ background: 'var(--cyber-primary)' }}>
                          <svg className="w-4 h-4" fill="none" stroke="var(--cyber-bg)" viewBox="0 0 24 24" strokeWidth="3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                          </svg>
                        </div>
                        <span className="cyber-text flex-1">{note}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="pt-6 border-t" style={{ borderColor: 'var(--cyber-border)' }}>
                  <Link
                    to="/changelog"
                    className="inline-flex items-center gap-2 font-bold transition-all hover:gap-4"
                    style={{ color: 'var(--cyber-primary)' }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                    </svg>
                    <span>查看完整更新日志</span>
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
    </div>
  );
}
