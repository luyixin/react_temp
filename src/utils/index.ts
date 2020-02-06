/*
*  工具方法
*/

import { authorize } from '../config/layoutMenus';


export default {
  routerPurview: (history: any, location: any) => {
    if (!location.authorize || authorize.includes(location.id)) return;
    history.replace('/403');
  },
};
