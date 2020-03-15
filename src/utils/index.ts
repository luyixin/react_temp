/*
*  工具方法
*/

import { authorize } from '../config/layoutMenus';

// 判断当前访问页面，是否存在
export const findExistenceViews = (routesArr: any[], path: string): any => routesArr.some((a) => {
  const hasChildren = a.children && a.children.length;
  if (path === '/') return true;
  return hasChildren ? findExistenceViews(a.children, path) : a.path === path;
});

// 判断当前页面权限
export const noPermission = (id: string, isAuthorize: boolean) => isAuthorize && !authorize.includes(id);
