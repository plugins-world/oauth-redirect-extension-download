export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold mb-1 text-white">插件世界 Plugins World</h3>
            <p className="text-sm text-gray-400">为开发者打造的浏览器扩展工具</p>
          </div>
          <div className="flex gap-6 text-sm">
            <a
              href="https://ai-router.plugins-world.cn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              官网
            </a>
            <a
              href="https://github.com/plugins-world/oauth-redirect-extension-download"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              GitHub
            </a>
            <a
              href="https://discuss.plugins-world.cn/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              反馈问题
            </a>
          </div>
        </div>
        <div className="text-center mt-6 text-sm text-gray-500">
          <p>© 2024 Plugins World. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
