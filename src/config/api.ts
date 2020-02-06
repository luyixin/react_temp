/*
* created by lu.yixin on 2020/01/07
* 后台接口配置文件, 依葫芦画瓢使用。
*/

import { message } from 'antd';
import request from './request';

let count: number = 0;
const requestWrapper = (method: 'get' | 'post', url: string, params?: object | {}): Promise<object> => {
  count += 1;
  console.log('请求中');
  return new Promise((resolve: (value: object) => void, reject: (value: object) => void) => {
    request[method](url, params).then(({ data }: any) => {
      count -= 1;
      !count && console.log('请求完毕');
      if (data.code) {
        message.error('接口错误');
        console.error(`接口错误：请排查接口 => ${url}, 错误信息：${data.errmsg}`);
        return reject(new Error(`接口错误: ${url} | ${data.errmsg}`));
      }
      return resolve(data);
    }).catch(() => {
      console.error(`接口错误：请排查接口 => ${url}`);
    });
  });
};

// 登录
export const login = (params?: object): any => requestWrapper('get', '/api/ArticleHighWords/list', params);

// 获取省市区
export const getRegion = (params?: object): any => requestWrapper('post', '/util/area/all', params);
