const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(proxy(
    '/province',
    {
        target: 'http://api02.aliyun.venuscn.com',
        changeOrigin: true,
        secure: false,
        pathRewrite: {
            '^/province': '/',
        },
    },
  ));
  app.use(proxy(
    '/tangshi',
    {
        target: 'http://jisutssbs.market.alicloudapi.com',
        pathRewrite: {
            '^/tangshi': '/',
        },
    },
  ));
};
