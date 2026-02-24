const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  // RPC (Right Party Contact) backend — must come BEFORE the general /api proxy
  app.use(
    '/api/amex',
    createProxyMiddleware({
      target: 'https://ml-market-backend-rpc.azurewebsites.net',
      changeOrigin: true,
      secure: false,
      logLevel: 'debug',
      onProxyRes: function (proxyRes, req, res) {
        console.log('[Proxy-RPC] Response from:', req.url, 'Status:', proxyRes.statusCode);
      },
      onError: function (err, req, res) {
        console.error('[Proxy-RPC] Error:', err.message);
      },
    })
  );

  // Utility backend — must come BEFORE the general /api proxy
  app.use(
    '/api/utilities',
    createProxyMiddleware({
      target: 'https://ml-market-backend-utility.azurewebsites.net',
      changeOrigin: true,
      secure: false,
      logLevel: 'debug',
      onProxyRes: function (proxyRes, req, res) {
        console.log('[Proxy-Utility] Response from:', req.url, 'Status:', proxyRes.statusCode);
      },
      onError: function (err, req, res) {
        console.error('[Proxy-Utility] Error:', err.message);
      },
    })
  );

  // Healthcare (Patient Collectability) backend
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://ml-market-backend-hcc.azurewebsites.net',
      changeOrigin: true,
      secure: false,
      logLevel: 'debug',
      onProxyRes: function (proxyRes, req, res) {
        console.log('[Proxy] Response from:', req.url, 'Status:', proxyRes.statusCode);
      },
      onError: function (err, req, res) {
        console.error('[Proxy] Error:', err.message);
      },
    })
  );
};
