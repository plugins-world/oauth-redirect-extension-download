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
    <div className="relative" style={{ background: 'var(--cyber-bg)', minHeight: '100vh' }}>
      <div className="cyber-grid"></div>
      <div className="relative z-10">
        <Header />

        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <span className="text-xs font-bold tracking-widest uppercase mb-4 inline-block" style={{ color: 'var(--cyber-primary)' }}>
                [ VERSION HISTORY ]
              </span>
              <h1 className="cyber-title text-4xl md:text-6xl">更新日志</h1>
            </div>

            <div className="max-w-4xl mx-auto">
              {loading && (
                <div className="text-center py-20">
                  <div className="inline-block w-16 h-16 border-4 rounded-full animate-spin" style={{ borderColor: 'var(--cyber-border)', borderTopColor: 'var(--cyber-primary)' }}></div>
                  <p className="mt-6 cyber-text font-mono">LOADING DATA...</p>
                </div>
              )}

              {error && (
                <div className="cyber-border rounded-lg p-8 text-center" style={{ background: 'var(--cyber-surface)', borderColor: 'var(--cyber-accent)' }}>
                  <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="var(--cyber-accent)" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--cyber-accent)' }}>ERROR // LOAD FAILED</h3>
                  <p className="cyber-text-dim font-mono text-sm">{error}</p>
                </div>
              )}

              {!loading && !error && data && (
                <div className="space-y-6">
                  {data.changelog && data.changelog.length > 0 ? (
                    data.changelog.map((version, index) => (
                      <div key={index} className="version-card stagger-fade-in rounded-lg p-6 md:p-8">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                          <div className="flex items-center gap-4">
                            <span className="text-3xl font-bold font-mono" style={{ color: 'var(--cyber-primary)' }}>
                              v{version.version}
                            </span>
                            {index === 0 && (
                              <span className="px-3 py-1 rounded text-xs font-bold uppercase tracking-wider" style={{ background: 'var(--cyber-primary)', color: 'var(--cyber-bg)' }}>
                                LATEST
                              </span>
                            )}
                          </div>
                          <span className="text-sm font-mono cyber-text-dim">{version.date}</span>
                        </div>

                        <div className="space-y-3">
                          {version.changes.map((change, changeIndex) => (
                            <div key={changeIndex} className="flex items-start gap-3 group">
                              <div className="flex-shrink-0 w-6 h-6 rounded flex items-center justify-center mt-0.5 transition-all group-hover:scale-110" style={{ background: 'var(--cyber-primary)' }}>
                                <svg className="w-4 h-4" fill="none" stroke="var(--cyber-bg)" viewBox="0 0 24 24" strokeWidth="3">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                                </svg>
                              </div>
                              <span className="cyber-text flex-1 leading-relaxed">{change}</span>
                            </div>
                          ))}
                        </div>

                        {index === 0 && (
                          <div className="mt-8 pt-6 border-t-2" style={{ borderColor: 'var(--cyber-border)' }}>
                            <a
                              href={data.downloadUrl}
                              className="download-btn px-6 py-3 rounded-lg font-bold inline-flex items-center gap-2"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                              </svg>
                              <span>DOWNLOAD</span>
                            </a>
                          </div>
                        )}
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-20">
                      <p className="cyber-text-dim font-mono">NO VERSION DATA FOUND</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
