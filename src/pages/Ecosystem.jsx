import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Ecosystem() {
  const tools = [
    {
      name: 'AI 网关',
      company: '插件世界',
      description: '统一的 AI 服务网关，支持多种 AI 模型接口聚合，提供负载均衡、接口管理等功能，帮助开发者快速接入和管理各类 AI 服务。',
      url: 'https://ai-router.plugins-world.cn/',
      color: 'from-blue-500 to-indigo-600',
      textColor: 'text-indigo-600',
      bgColor: 'from-blue-50 to-indigo-50',
      tags: ['API 聚合', '负载均衡', '接口管理'],
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
      ),
    },
    {
      name: '聚合支付',
      company: '插件世界',
      description: '整合多种主流支付渠道的聚合支付解决方案，提供统一的支付接口和管理后台，简化支付集成流程，降低开发成本。',
      url: 'https://pay.plugins-world.cn/',
      color: 'from-green-500 to-emerald-600',
      textColor: 'text-emerald-600',
      bgColor: 'from-green-50 to-emerald-50',
      tags: ['多渠道支付', '统一接口', '管理后台'],
      badge: '费率低至千分之八',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
        </svg>
      ),
    },
    {
      name: '多企业内部管理系统',
      company: '插件世界',
      description: '面向集团化企业的内部管理平台，涵盖回款发票、财务管理、资金流水等核心业务，支持多企业统一管理和独立核算。',
      url: 'https://manage.plugins-world.cn/',
      color: 'from-purple-500 to-pink-600',
      textColor: 'text-purple-600',
      bgColor: 'from-purple-50 to-pink-50',
      tags: ['多企业', '财务管理', '资金流水', '内部协作'],
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
        </svg>
      ),
    },
    {
      name: 'Fresns',
      company: 'Fresns',
      description: '一款免费开源的社交网络服务软件，专为跨平台打造的通用型社区产品，支持灵活多样的内容形态，可满足多种运营场景。',
      url: 'https://fresns.cn/',
      color: 'from-orange-500 to-red-600',
      textColor: 'text-orange-600',
      bgColor: 'from-orange-50 to-red-50',
      tags: ['开源社区', '跨平台', '内容管理', '社交网络'],
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* 生态工具部分 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">插件世界生态工具</h2>
              <p className="text-lg text-gray-600">为开发者打造的专业工具集合</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {tools.map((tool) => (
                <a
                  key={tool.name}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white rounded-xl shadow-md overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="p-8 flex-1">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-14 h-14 bg-gradient-to-br ${tool.color} rounded-lg flex items-center justify-center`}>
                        {tool.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-2xl font-bold text-gray-800">{tool.name}</h3>
                          {tool.badge && (
                            <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full animate-pulse">
                              {tool.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-500">{tool.company}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {tool.description}
                    </p>
                    <div className={`flex items-center ${tool.textColor} font-medium`}>
                      访问服务
                      <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                      </svg>
                    </div>
                  </div>
                  <div className={`bg-gradient-to-r ${tool.bgColor} px-8 py-4`}>
                    <div className="flex flex-wrap gap-2">
                      {tool.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-white text-gray-700 text-sm rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-500 text-sm">
                更多工具正在开发中，敬请期待...
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
