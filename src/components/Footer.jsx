export default function Footer() {
  return (
    <footer className="relative border-t-2 py-16" style={{ background: 'var(--cyber-surface)', borderColor: 'var(--cyber-border)' }}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--cyber-primary)' }}>
              Plugins World
            </h3>
            <p className="cyber-text-dim leading-relaxed mb-4">
              为开发者打造的浏览器扩展工具 // 提升开发效率 // 解决实际问题
            </p>
            <div className="flex gap-3">
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--cyber-primary)' }}></div>
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--cyber-secondary)', animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--cyber-accent)', animationDelay: '0.4s' }}></div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: 'var(--cyber-secondary)' }}>
              [ QUICK LINKS ]
            </h4>
            <div className="space-y-3">
              {[
                { label: '官网', href: 'https://ai-router.plugins-world.cn' },
                { label: 'GitHub', href: 'https://github.com/plugins-world/oauth-redirect-extension-download' },
                { label: '反馈问题', href: 'https://discuss.plugins-world.cn/' }
              ].map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block cyber-text-dim hover:translate-x-2 transition-all font-mono"
                  style={{ color: 'var(--cyber-text-dim)' }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--cyber-primary)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--cyber-text-dim)'}
                >
                  → {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: 'var(--cyber-accent)' }}>
              [ TECH STACK ]
            </h4>
            <div className="space-y-2 font-mono text-sm cyber-text-dim">
              <div>React + Vite</div>
              <div>Tailwind CSS</div>
              <div>Chrome Extension API</div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t-2 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderColor: 'var(--cyber-border)' }}>
          <p className="text-sm font-mono cyber-text-dim">
            © 2024 Plugins World // All rights reserved
          </p>
          <div className="flex items-center gap-2 text-xs font-mono" style={{ color: 'var(--cyber-primary)' }}>
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--cyber-primary)' }}></div>
            <span>SYSTEM ONLINE</span>
          </div>
        </div>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 opacity-30" style={{ borderColor: 'var(--cyber-primary)' }}></div>
      <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 opacity-30" style={{ borderColor: 'var(--cyber-secondary)' }}></div>
    </footer>
  );
}
