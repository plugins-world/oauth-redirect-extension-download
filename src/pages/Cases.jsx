import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Cases() {
  const [activeTab, setActiveTab] = useState(0);

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

            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              {/* Tab 导航 */}
              <div className="flex border-b border-gray-200">
                {demos.map((demo, index) => (
                  <button
                    key={demo.title}
                    onClick={() => setActiveTab(index)}
                    className={`flex-1 px-6 py-4 text-center font-medium transition-colors ${
                      activeTab === index
                        ? 'text-purple-600 border-b-2 border-purple-600 bg-purple-50'
                        : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                    }`}
                  >
                    {demo.title}
                  </button>
                ))}
              </div>

              {/* Tab 内容 */}
              <div className="p-8">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {demos[activeTab].description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {demos[activeTab].tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* 视频容器 */}
                <div className="bg-black rounded-lg overflow-hidden">
                  <video
                    key={demos[activeTab].video}
                    className="w-full max-h-[600px] object-contain"
                    controls
                    preload="metadata"
                  >
                    <source src={demos[activeTab].video} type="video/mp4" />
                    您的浏览器不支持视频播放。
                  </video>
                </div>
              </div>
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
