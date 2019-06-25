const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(proxy(
    '/provinceProxy',
    {
        target: 'http://api02.aliyun.venuscn.com',
        changeOrigin: true,
        secure: false,
        pathRewrite: {
            '^/provinceProxy': '/',
        },
    },
  ));
  app.use(proxy(
    '/poetryProxy',
    {
        target: 'http://jisutssbs.market.alicloudapi.com',
        changeOrigin: true,
        secure: false,
        pathRewrite: {
            '^/poetryProxy': '/',
        },
    },
  ));
};
