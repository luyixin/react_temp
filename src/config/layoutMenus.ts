/*
* layout 左侧菜单配置项，使用嵌套方式
*/

interface IMunes {
  title: string,
  id: string,
  icon?: string,
  url?: string,
  children?: IMunes[]
}

// 测试菜单权限字符串, 后期要挪位置，暂时放这里。
export const authorize = 'login';

// 以下全为配置测试配置项
export const layoutMenus = [
  {
    title: 'layout', // 菜单标题
    id: 'layout', // 菜单ID，后期配合权限做左侧菜单控制
    icon: 'user', // 菜单左侧图标，可配置项，参考：https://ant.design/components/icon-cn/
    children: [
      {
        title: 'home',
        id: 'home',
        url: '/layout/home',
        icon: 'user',
      },
    ],
  },
  {
    title: 'login',
    id: 'login',
    url: '/login',
    icon: 'user',
  },
];
