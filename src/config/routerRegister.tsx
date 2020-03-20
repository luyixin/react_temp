/*
* created by lu.yixin on 2020/01/10
*
* 路由配置注册器文件，业务开发无需关心。后期会统一在此配合后端做页面权限控制，todo => 权限控制的路由守卫
*/

import React from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';
import { findExistenceViews, noPermission } from '../utils';

interface IRoute {
  path: string,
  id: string,
  authorize?: boolean,
  component?: any,
  children?: IRoute[],
}

const renderRoutes = (routes: IRoute[]): any => (routes ? (
  routes.map((route: IRoute) => {
    const {
      path,
      id,
      authorize = false,
      children,
    } = route;

    return (
      <Route
        path={path}
        key={id}
        render={(props: any) => {
          const { location } = props;
          if (!findExistenceViews(routes, location.pathname)) return <Redirect to="/404" />;
          if (noPermission(id, authorize)) return <Redirect to="/403" />;

          return (
            children && children.length ? (
              <route.component router={props}>
                {renderRoutes(children)}
              </route.component>
            ) : <route.component router={props} />
          );
        }}
      />
    );
  })
) : null);

export default renderRoutes;
