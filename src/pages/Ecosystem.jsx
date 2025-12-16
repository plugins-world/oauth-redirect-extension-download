import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Ecosystem() {
  const tools = [
    {
      name: 'AI 网关',
      company: '插件世界',
      description: '统一的 AI 服务网关, 支持多种 AI 模型接口聚合, 提供负载均衡、接口管理等功能, 帮助开发者快速接入和管理各类 AI 服务',
      url: 'https://ai-router.plugins-world.cn/',
      color: 'var(--cyber-primary)',
      tags: ['API 聚合', '负载均衡', '接口管理'],
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    },
    {
      name: '聚合支付',
      company: '插件世界',
      description: '整合多种主流支付渠道的聚合支付解决方案, 提供统一的支付接口和管理后台, 简化支付集成流程, 降低开发成本',
      url: 'https://pay.plugins-world.cn/',
      color: 'var(--cyber-secondary)',
      tags: ['多渠道支付', '统一接口', '管理后台'],
      badge: '费率低至千分之八',
      icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
    },
    {
      name: '多企业内部管理系统',
      company: '插件世界',
      description: '面向集团化企业的内部管理平台, 涵盖回款发票、财务管理、资金流水等核心业务, 支持多企业统一管理和独立核算',
      url: 'https://manage.plugins-world.cn/',
      color: 'var(--cyber-accent)',
      tags: ['多企业', '财务管理', '资金流水', '内部协作'],
      icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
    },
    {
      name: 'Fresns',
      company: 'Fresns',
      description: '一款免费开源的社交网络服务软件, 专为跨平台打造的通用型社区产品, 支持灵活多样的内容形态, 可满足多种运营场景',
      url: 'https://fresns.cn/',
      color: 'var(--cyber-warning)',
      tags: ['开源社区', '跨平台', '内容管理', '社交网络'],
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
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
              <span className="text-xs font-bold tracking-widest uppercase mb-4 inline-block" style={{ color: 'var(--cyber-secondary)' }}>
                [ ECOSYSTEM TOOLS ]
              </span>
              <h1 className="cyber-title text-4xl md:text-6xl mb-6">生态工具</h1>
              <p className="cyber-text-dim text-lg max-w-2xl mx-auto">
                为开发者打造的专业工具集合 // 提升效率 // 降低成本
              </p>
            </div>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
              {tools.map((tool, index) => (
                <a
                  key={tool.name}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cyber-border stagger-fade-in rounded-lg overflow-hidden group hover:scale-105 transition-all"
                  style={{ background: 'var(--cyber-surface)' }}
                >
                  <div className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="flex-shrink-0 w-16 h-16 rounded-lg flex items-center justify-center" style={{ background: `${tool.color}20`, border: `2px solid ${tool.color}` }}>
                        <svg className="w-8 h-8" fill="none" stroke={tool.color} viewBox="0 0 24 24" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d={tool.icon}/>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 flex-wrap mb-2">
                          <h3 className="text-2xl font-bold" style={{ color: tool.color }}>{tool.name}</h3>
                          {tool.badge && (
                            <span className="px-3 py-1 text-xs font-bold rounded animate-pulse" style={{ background: 'var(--cyber-accent)', color: 'var(--cyber-bg)' }}>
                              {tool.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-sm cyber-text-dim font-mono">{tool.company}</p>
                      </div>
                    </div>

                    <p className="cyber-text leading-relaxed mb-6">
                      {tool.description}
                    </p>

                    <div className="flex items-center gap-2 font-bold transition-all group-hover:gap-4" style={{ color: tool.color }}>
                      <span>访问服务</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                      </svg>
                    </div>
                  </div>

                  <div className="px-8 py-4 border-t-2" style={{ borderColor: 'var(--cyber-border)', background: 'var(--cyber-bg)' }}>
                    <div className="flex flex-wrap gap-2">
                      {tool.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 rounded text-xs font-mono" style={{ background: 'var(--cyber-surface)', color: 'var(--cyber-text-dim)', border: '1px solid var(--cyber-border)' }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-16 text-center">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-lg" style={{ background: 'var(--cyber-surface)', border: '2px solid var(--cyber-border)' }}>
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--cyber-primary)' }}></div>
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--cyber-secondary)', animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--cyber-accent)', animationDelay: '0.4s' }}></div>
                </div>
                <p className="cyber-text-dim font-mono text-sm">
                  MORE TOOLS IN DEVELOPMENT...
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
