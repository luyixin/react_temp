import proxy from 'http-proxy-middleware';

const { PROXY_PATH, PROXY_DOMAIN } = process.env;

export default (app: any) => app.use(
  proxy(PROXY_PATH || '', {
    target: `${PROXY_DOMAIN}${PROXY_PATH}`,
    changeOrigin: true,
    pathRewrite: {
      '^/api': '',
    },
  }),
);
