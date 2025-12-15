import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Partners() {
  const partners = [
    {
      name: '爱湾医学',
      description: '以临床质谱技术为核心，结合代谢与基因组学应用，为医疗健康产业提供一体化服务平台',
      url: 'https://aonemed.com.cn/',
      tags: ['医疗健康', '质谱技术', '基因组学'],
    },
    {
      name: '蝉印诊所管家',
      description: '开源的消费医疗 SaaS 管理系统，专为私立诊所、连锁医疗机构、医美、口腔、眼科等提供全方位的数字化解决方案',
      url: 'https://www.yiliaocrm.com',
      tags: ['医疗 SaaS', '诊所管理', '开源系统'],
    },
    {
      name: '插件世界',
      description: '提供 AI 编程服务，支持智能代码生成、代码审查、技术问答等功能，提升开发效率',
      url: 'https://ai-router.plugins-world.cn/',
      tags: ['AI 编程', '代码生成', '智能开发'],
    },
    {
      name: 'StarTeam',
      description: '新加坡数字企业服务提供商，提供从公司注册、会计到持续合规的全套服务',
      url: 'https://starteam.sg/',
      tags: ['企业服务', '公司注册', '会计税务'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">合作伙伴</h2>
              <p className="text-base md:text-lg text-gray-600">感谢以下合作伙伴的支持 (按字母排序)</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {partners.map((partner) => (
                <a
                  key={partner.name}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                >
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{partner.name}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{partner.description}</p>

                    <div className="text-blue-600 font-medium inline-flex items-center">
                      访问网站
                      <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                      </svg>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-gray-50 to-blue-50 px-8 py-4">
                    <div className="flex flex-wrap gap-2">
                      {partner.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-white text-gray-700 text-sm rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-16 text-center">
              <p className="text-gray-500 text-sm">
                期待与更多优秀伙伴合作...
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
