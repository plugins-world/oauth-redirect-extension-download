import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Partners() {
  const partners = [
    {
      name: '爱湾医学',
      description: '以临床质谱技术为核心, 结合代谢与基因组学应用, 为医疗健康产业提供一体化服务平台',
      url: 'https://aonemed.com.cn/',
      tags: ['医疗健康', '质谱技术', '基因组学'],
      color: 'var(--cyber-primary)',
    },
    {
      name: '蝉印诊所管家',
      description: '开源的消费医疗 SaaS 管理系统, 专为私立诊所、连锁医疗机构、医美、口腔、眼科等提供全方位的数字化解决方案',
      url: 'https://www.yiliaocrm.com',
      tags: ['医疗 SaaS', '诊所管理', '开源系统'],
      color: 'var(--cyber-secondary)',
    },
    {
      name: '插件世界',
      description: '提供 AI 编程服务, 支持智能代码生成、代码审查、技术问答等功能, 提升开发效率',
      url: 'https://ai-router.plugins-world.cn/',
      tags: ['AI 编程', '代码生成', '智能开发'],
      color: 'var(--cyber-accent)',
    },
    {
      name: 'StarTeam',
      description: '新加坡数字企业服务提供商, 提供从公司注册、会计到持续合规的全套服务',
      url: 'https://starteam.sg/',
      tags: ['企业服务', '公司注册', '会计税务'],
      color: 'var(--cyber-warning)',
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
              <span className="text-xs font-bold tracking-widest uppercase mb-4 inline-block" style={{ color: 'var(--cyber-warning)' }}>
                [ PARTNERS ]
              </span>
              <h1 className="cyber-title text-4xl md:text-6xl mb-6">合作伙伴</h1>
              <p className="cyber-text-dim text-lg max-w-2xl mx-auto">
                感谢以下合作伙伴的支持 // 按字母排序
              </p>
            </div>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
              {partners.map((partner, index) => (
                <a
                  key={partner.name}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cyber-border stagger-fade-in rounded-lg overflow-hidden group hover:scale-105 transition-all"
                  style={{ background: 'var(--cyber-surface)' }}
                >
                  <div className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="flex-shrink-0 w-3 h-3 rounded-full mt-2 animate-pulse" style={{ background: partner.color }}></div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-4" style={{ color: partner.color }}>
                          {partner.name}
                        </h3>
                        <p className="leading-relaxed text-base" style={{ color: '#d1d5db' }}>
                          {partner.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 font-bold transition-all group-hover:gap-4" style={{ color: partner.color }}>
                      <span>访问网站</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                      </svg>
                    </div>
                  </div>

                  <div className="px-8 py-4 border-t-2" style={{ borderColor: 'var(--cyber-border)', background: 'var(--cyber-bg)' }}>
                    <div className="flex flex-wrap gap-2">
                      {partner.tags.map((tag) => (
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
                  期待与更多优秀伙伴合作...
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
