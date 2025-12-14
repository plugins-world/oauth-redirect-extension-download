import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Cases() {
  const demos = [
    {
      title: '管理后台演示',
      description: '多企业内部管理系统管理后台功能演示，展示回款发票、财务管理、资金流水等核心业务功能的操作流程。',
      video: '/manage-admin-demo.mp4',
      tags: ['管理后台', '财务管理', '数据统计'],
    },
    {
      title: 'PC 端演示',
      description: '多企业内部管理系统 PC 端功能演示，展示企业用户日常办公、业务协作、数据查询等核心功能的使用场景。',
      video: '/manage-pc-demo.mp4',
      tags: ['PC 端', '业务协作', '日常办公'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">产品案例演示</h2>
              <p className="text-lg text-gray-600">观看实际操作演示，了解产品功能</p>
            </div>

            <div className="space-y-12">
              {demos.map((demo, index) => (
                <div
                  key={demo.title}
                  className="bg-white rounded-xl shadow-md overflow-hidden"
                >
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800">{demo.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {demo.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {demo.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gray-900 p-4">
                    <video
                      className="w-full rounded-lg"
                      controls
                      preload="metadata"
                      poster=""
                    >
                      <source src={demo.video} type="video/mp4" />
                      您的浏览器不支持视频播放。
                    </video>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-500 text-sm">
                如需了解更多产品功能，欢迎访问
                <a
                  href="https://manage.plugins-world.cn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-700 font-medium ml-1"
                >
                  多企业内部管理系统
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
