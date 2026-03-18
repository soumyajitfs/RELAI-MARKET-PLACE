const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  // Late Payment Interest backend — must come BEFORE the general /api proxy
  app.use(
    '/api/lpi',
    createProxyMiddleware({
      target: 'https://ml-market-backend-ml-late-payment-interest.azurewebsites.net',
      changeOrigin: true,
      secure: false,
      logLevel: 'debug',
      onProxyRes: function (proxyRes, req, res) {
        console.log('[Proxy-LPI] Response from:', req.url, 'Status:', proxyRes.statusCode);
      },
      onError: function (err, req, res) {
        console.error('[Proxy-LPI] Error:', err.message);
      },
    })
  );

  // Sales Optimization backend — must come BEFORE the general /api proxy
  app.use(
    '/api/sales',
    createProxyMiddleware({
      target: 'https://ml-market-backend-sales-optimization.azurewebsites.net',
      changeOrigin: true,
      secure: false,
      logLevel: 'debug',
      onProxyRes: function (proxyRes, req, res) {
        console.log('[Proxy-Sales] Response from:', req.url, 'Status:', proxyRes.statusCode);
      },
      onError: function (err, req, res) {
        console.error('[Proxy-Sales] Error:', err.message);
      },
    })
  );

  // Collectability backend — must come BEFORE the general /api proxy
  app.use(
    '/api/collectability',
    createProxyMiddleware({
      target: 'https://ml-market-backend-collectability.azurewebsites.net',
      changeOrigin: true,
      secure: false,
      logLevel: 'debug',
      onProxyRes: function (proxyRes, req, res) {
        console.log('[Proxy-Collectability] Response from:', req.url, 'Status:', proxyRes.statusCode);
      },
      onError: function (err, req, res) {
        console.error('[Proxy-Collectability] Error:', err.message);
      },
    })
  );

  // Claims Denial backend — must come BEFORE the general /api proxy
  app.use(
    '/api/claim-denial',
    createProxyMiddleware({
      target: 'https://ml-market-backend-propensity-to-deny.azurewebsites.net',
      changeOrigin: true,
      secure: false,
      logLevel: 'debug',
      onProxyRes: function (proxyRes, req, res) {
        console.log('[Proxy-Claim-Denial] Response from:', req.url, 'Status:', proxyRes.statusCode);
      },
      onError: function (err, req, res) {
        console.error('[Proxy-Claim-Denial] Error:', err.message);
      },
    })
  );

  // Customer Churn backend — must come BEFORE the general /api proxy
  app.use(
    '/api/churn',
    createProxyMiddleware({
      target: 'https://ml-market-backend-customer-churn.azurewebsites.net',
      changeOrigin: true,
      secure: false,
      logLevel: 'debug',
      onProxyRes: function (proxyRes, req, res) {
        console.log('[Proxy-Churn] Response from:', req.url, 'Status:', proxyRes.statusCode);
      },
      onError: function (err, req, res) {
        console.error('[Proxy-Churn] Error:', err.message);
      },
    })
  );

  // AML backend — must come BEFORE the general /api proxy
  app.use(
    '/api/aml',
    createProxyMiddleware({
      target: 'https://ml-market-backend-aml.azurewebsites.net',
      changeOrigin: true,
      secure: false,
      logLevel: 'debug',
      onProxyRes: function (proxyRes, req, res) {
        console.log('[Proxy-AML] Response from:', req.url, 'Status:', proxyRes.statusCode);
      },
      onError: function (err, req, res) {
        console.error('[Proxy-AML] Error:', err.message);
      },
    })
  );

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

  // Underwriter backend — must come BEFORE the general /api proxy
  app.use(
    '/api/uw',
    createProxyMiddleware({
      target: 'https://ml-market-backend-underwriter.azurewebsites.net',
      changeOrigin: true,
      secure: false,
      logLevel: 'debug',
      onProxyRes: function (proxyRes, req, res) {
        console.log('[Proxy-UW] Response from:', req.url, 'Status:', proxyRes.statusCode);
      },
      onError: function (err, req, res) {
        console.error('[Proxy-UW] Error:', err.message);
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
