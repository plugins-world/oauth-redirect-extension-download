import { useState, useEffect } from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

export default function Changelog() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function loadChangelog() {
      try {
        const response = await fetch('/version.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (err) {
        console.error('Error loading changelog:', err);
        setError(err.message);
        setLoading(false);
      }
    }

    loadChangelog();
  }, []);

  return (
    <div className="bg-gray-50">
      <Header />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Loading State */}
            {loading && (
              <div className="loading text-center py-12">
                <div className="inline-block w-8 h-8 border-4 border-gray-300 border-t-gray-900 rounded-full animate-spin"></div>
                <p className="mt-4 text-gray-600">加载中...</p>
              </div>
            )}

            {/* Error State */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
                <svg className="w-12 h-12 text-red-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <h3 className="text-lg font-semibold text-red-800 mb-2">加载失败</h3>
                <p className="text-red-600">加载版本信息失败: {error}</p>
              </div>
            )}

            {/* Changelog List */}
            {!loading && !error && data && (
              <div className="space-y-6">
                {data.changelog && data.changelog.length > 0 ? (
                  data.changelog.map((version, index) => (
                    <div key={index} className="version-card bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl font-bold text-gray-900">v{version.version}</span>
                            {index === 0 && (
                              <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                                最新版本
                              </span>
                            )}
                          </div>
                          <span className="text-sm text-gray-500">{version.date}</span>
                        </div>

                        <div className="space-y-2">
                          {version.changes.map((change, changeIndex) => (
                            <div key={changeIndex} className="flex items-start gap-2">
                              <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                              </svg>
                              <span className="text-gray-700">{change}</span>
                            </div>
                          ))}
                        </div>

                        {index === 0 && (
                          <div className="mt-6 pt-6 border-t border-gray-200">
                            <a
                              href={data.downloadUrl}
                              className="download-btn bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                              </svg>
                              下载此版本
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-12 text-gray-500">
                    暂无版本更新记录
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
