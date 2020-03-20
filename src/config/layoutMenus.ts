/*
* layout 左侧菜单配置项，使用嵌套方式
*/
import { createElement } from 'react';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

interface IMunes {
  title: string,
  id: string,
  icon?: any,
  url?: string,
  children?: IMunes[]
}

// 测试菜单权限字符串, 后期要挪位置，暂时放这里。
export const authorize = 'login,home';

// 以下全为配置测试配置项
export const layoutMenus: IMunes[] = [
  {
    title: '模板', // 菜单标题
    id: 'layout', // 菜单ID，后期配合权限做左侧菜单控制
    icon: createElement(UserOutlined), // 菜单左侧图标，可配置项，参考：https://ant.design/components/icon-cn/
    children: [
      {
        title: '主页',
        id: 'home',
        url: '/layout/home',
        icon: createElement(VideoCameraOutlined),
      },
    ],
  },
  {
    title: '登录',
    id: 'login',
    url: '/login',
    icon: createElement(UploadOutlined),
  },
];
