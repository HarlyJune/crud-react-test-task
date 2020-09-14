const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://178.128.196.163:3000',
      changeOrigin: true,
    })
  );
};