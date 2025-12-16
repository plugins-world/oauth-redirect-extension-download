import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Cases() {
  const [activeTab, setActiveTab] = useState(0);

  const demos = [
    {
      title: '管理后台演示',
      description: '多企业内部管理系统管理后台功能演示, 展示回款发票、财务管理、资金流水等核心业务功能的操作流程',
      video: '/manage-admin-demo.mp4',
      tags: ['管理后台', '财务管理', '数据统计'],
    },
    {
      title: 'PC 端演示',
      description: '多企业内部管理系统 PC 端功能演示, 展示企业用户日常办公、业务协作、数据查询等核心功能的使用场景',
      video: '/manage-pc-demo.mp4',
      tags: ['PC 端', '业务协作', '日常办公'],
    },
  ];

  return (
    <div className="relative" style={{ background: 'var(--cyber-bg)', minHeight: '100vh' }}>
      <div className="cyber-grid"></div>
      <div className="relative z-10">
        <Header />

        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <span className="text-xs font-bold tracking-widest uppercase mb-4 inline-block" style={{ color: 'var(--cyber-accent)' }}>
                [ PRODUCT DEMOS ]
              </span>
              <h1 className="cyber-title text-4xl md:text-6xl mb-6">产品案例</h1>
              <p className="cyber-text-dim text-lg max-w-2xl mx-auto">
                观看实际操作演示 // 了解产品功能 // 体验真实场景
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="cyber-border rounded-lg overflow-hidden" style={{ background: 'var(--cyber-surface)' }}>
                {/* Tab Navigation */}
                <div className="flex border-b-2" style={{ borderColor: 'var(--cyber-border)' }}>
                  {demos.map((demo, index) => (
                    <button
                      key={demo.title}
                      onClick={() => setActiveTab(index)}
                      className={`flex-1 px-6 py-4 text-center font-bold uppercase tracking-wider transition-all ${
                        activeTab === index ? 'scale-105' : ''
                      }`}
                      style={
                        activeTab === index
                          ? { background: 'var(--cyber-primary)', color: 'var(--cyber-bg)', borderBottom: `4px solid var(--cyber-primary)` }
                          : { color: 'var(--cyber-text-dim)', background: 'var(--cyber-bg)' }
                      }
                    >
                      {demo.title}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <div className="p-8">
                  <p className="cyber-text leading-relaxed mb-6">
                    {demos[activeTab].description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {demos[activeTab].tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 rounded text-sm font-mono"
                        style={{ background: 'var(--cyber-bg)', color: 'var(--cyber-primary)', border: '1px solid var(--cyber-primary)' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Video Container */}
                  <div className="relative rounded-lg overflow-hidden" style={{ background: '#000', border: '3px solid var(--cyber-primary)', boxShadow: '0 0 30px var(--cyber-glow)' }}>
                    <video
                      key={demos[activeTab].video}
                      className="w-full max-h-[400px] md:max-h-[600px] object-contain"
                      controls
                      preload="metadata"
                    >
                      <source src={demos[activeTab].video} type="video/mp4" />
                      您的浏览器不支持视频播放
                    </video>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-lg" style={{ background: 'var(--cyber-surface)', border: '2px solid var(--cyber-border)' }}>
                  <span className="cyber-text-dim font-mono text-sm">
                    如需了解更多产品功能, 欢迎访问
                  </span>
                  <a
                    href="https://manage.plugins-world.cn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold transition-all hover:scale-105"
                    style={{ color: 'var(--cyber-primary)' }}
                  >
                    多企业内部管理系统 →
                  </a>
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
