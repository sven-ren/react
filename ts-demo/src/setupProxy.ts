import proxy from 'http-proxy-middleware';
const proxyConfig = (app: any) => {
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
export default proxyConfig;
