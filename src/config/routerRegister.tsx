/*
* created by lu.yixin on 2020/01/10
*
* 路由配置注册器文件，业务开发无需关心。后期会统一在此配合后端做页面权限控制，todo => 权限控制的路由守卫
*/

import React from 'react';
import {
  Route,
} from 'react-router-dom';

interface IRoute {
  path: string,
  key: string,
  component?: any,
  children?: IRoute[],
}

const renderRoutes = (routes: IRoute[]): any => (routes ? (
  routes.map((route: IRoute) => {
    const {
      path,
      key,
      children,
    } = route;

    return (
      <Route
        path={path}
        key={key}
        render={(props: any) => (
          children && children.length ? (
            <route.component router={props}>
              {renderRoutes(children)}
            </route.component>
          ) : <route.component router={props} />
        )}
      />
    );
  })
) : null);

export default renderRoutes;
