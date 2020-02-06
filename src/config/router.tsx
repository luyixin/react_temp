/*
* created by lu.yixin on 2020/01/07
* 页面理由配置文件，使用方式类似vue-router，简单易用，支持嵌套路由，按需加载，自带页面进度条。
*/

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import renderRoutes from './routerRegister';
import LoadableComponent from '../utils/LoadableComponent';

const routes = [
  // 嵌套路由，当访问子节点路径时，该节点路径上，所有父级将被渲染，请合理利用。
  // 如不需要渲染父级，请使用非嵌套路由。
  // 嵌套路由的path 和 key字段，请带上父级的path拼接。
  {
    path: '/',
    key: 'app',
    redirect: '/test',
    component: LoadableComponent(() => import('../App')),
    children: [
      // 非嵌套路由
      {
        path: '/test',
        key: '/test',
        component: LoadableComponent(() => import('../views/Test')),
      },
      {
        path: '/login',
        key: '/login',
        component: LoadableComponent(() => import('../views/Login')),
      },
      {
        path: '/layout',
        key: '/layout',
        component: LoadableComponent(() => import('../views/LayoutView')),
        children: [
          {
            path: '/layout/about',
            key: '/layout/about',
            component: LoadableComponent(() => import('../views/About')),
          },
        ],
      },
    ],
  },
];

const supportsHistory = 'pushState' in window.history;

export default () => (
  <Router basename="/" keyLength={12} forceRefresh={!supportsHistory}>
    <Switch>
      {renderRoutes(routes)}
    </Switch>
  </Router>
);
