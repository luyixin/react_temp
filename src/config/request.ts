/*
* created by lu.yixin on 2020/01/07
* 请求方法封装，统一处理请求参数，以及axios配置，如需axios拦截器，请写在本文件中。
*/

import axios from 'axios';

// 获取测试或者生产配置好的后端接口域名+路径，具体配置请查看readme.md
const getBaseURL = () => {
  const {
    DOMAIN,
    PATH,
  } = process.env;
  return `${DOMAIN}${PATH}`;
};

// 添加请求拦截器
axios.interceptors.request.use((config) => ({
  ...config,
  headers: {
    'content-type': 'application/json',
  },
  baseURL: process.env.NODE_ENV === 'production' ? getBaseURL() : '/',
}), (error) => Promise.reject(error));

export default {
  get(url: string, params?: object | {}): Promise<object> {
    return axios.get(url, { params });
  },
  post(url: string, params?: object | {}): Promise<object> {
    return axios.post(url, params);
  },
};
