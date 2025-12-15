import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="/assets/images/logo.png"
              alt="OAuth Redirect Extension"
              className="w-12 h-12 rounded-lg"
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">OAuth 地址重定向助手</h1>
              <p className="text-sm text-gray-600">自动重定向 OAuth 回调地址</p>
            </div>
          </div>
          <nav className="flex items-center gap-6">
            <Link
              to="/"
              className={`font-medium transition ${
                location.pathname === '/'
                  ? 'text-gray-900 border-b-2 border-gray-900 pb-1'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              首页
            </Link>
            <Link
              to="/ecosystem"
              className={`font-medium transition ${
                location.pathname === '/ecosystem'
                  ? 'text-gray-900 border-b-2 border-gray-900 pb-1'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              生态工具
            </Link>
            <Link
              to="/cases"
              className={`font-medium transition ${
                location.pathname === '/cases'
                  ? 'text-gray-900 border-b-2 border-gray-900 pb-1'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              案例
            </Link>
            <Link
              to="/partners"
              className={`font-medium transition ${
                location.pathname === '/partners'
                  ? 'text-gray-900 border-b-2 border-gray-900 pb-1'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              合作伙伴
            </Link>
            <Link
              to="/changelog"
              className={`font-medium transition ${
                location.pathname === '/changelog'
                  ? 'text-gray-900 border-b-2 border-gray-900 pb-1'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              更新日志
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
