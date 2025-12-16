import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export default function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { path: '/', label: '首页' },
    { path: '/ecosystem', label: '生态工具' },
    { path: '/cases', label: '案例' },
    { path: '/partners', label: '合作伙伴' },
    { path: '/changelog', label: '更新日志' },
  ];

  return (
    <header className="relative border-b-2" style={{ background: 'var(--cyber-surface)', borderColor: 'var(--cyber-border)' }}>
      <div className="container mx-auto px-4 md:px-6 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-4 group">
            <div className="relative">
              <div className="absolute inset-0 rounded-lg opacity-50 blur-md group-hover:opacity-100 transition-opacity" style={{ background: 'var(--cyber-primary)' }}></div>
              <img
                src="/assets/images/logo.png"
                alt="OAuth Redirect Extension"
                className="relative w-12 h-12 rounded-lg"
              />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold" style={{ color: 'var(--cyber-primary)' }}>
                OAuth 地址重定向助手
              </h1>
              <p className="text-xs cyber-text-dim hidden sm:block">
                [ DEVELOPER TOOL // AUTO REDIRECT ]
              </p>
            </div>
          </Link>

          <div className="flex items-center gap-4">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded font-bold text-sm uppercase tracking-wider transition-all ${
                    location.pathname === link.path
                      ? 'cyber-active-link'
                      : 'cyber-link'
                  }`}
                  style={
                    location.pathname === link.path
                      ? { background: 'var(--cyber-primary)', color: 'var(--cyber-bg)' }
                      : { color: 'var(--cyber-text-dim)' }
                  }
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded transition-all hover:scale-110"
              style={{ color: 'var(--cyber-primary)' }}
              aria-label="切换主题"
              title={theme === 'cyber' ? '切换到浅色模式' : '切换到深色模式'}
            >
              {theme === 'cyber' ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
                </svg>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded transition-all hover:scale-110"
              style={{ color: 'var(--cyber-primary)' }}
              aria-label="菜单"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-6 pt-6 border-t-2" style={{ borderColor: 'var(--cyber-border)' }}>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-bold py-3 px-4 rounded transition-all ${
                    location.pathname === link.path ? 'scale-105' : ''
                  }`}
                  style={
                    location.pathname === link.path
                      ? { background: 'var(--cyber-primary)', color: 'var(--cyber-bg)' }
                      : { background: 'var(--cyber-bg)', color: 'var(--cyber-text)', border: '1px solid var(--cyber-border)' }
                  }
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
