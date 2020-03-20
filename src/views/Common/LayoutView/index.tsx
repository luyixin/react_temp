import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { layoutMenus, authorize } from '../../../config/layoutMenus';
import './index.less';

// purview 测试，为的后端返回的权限字符串
const { Header, Sider, Content } = Layout;

type IState = {};

type IProps = {
  history: any,
  router: any,
  children?: any[]
};

export default class LayoutView extends Component<IProps, IState> {
  state = {};

  menuItemClick = (url: string) => {
    const { router: { history: { push } } } = this.props;
    push(url);
  };

  renderMenus = (menus: any[]): any => menus.map((a) => (
    a.children && a.children.length ? (
      <Menu.SubMenu
        key={a.id}
        title={(
          <span>
            { a.icon || null }
            <span className="both-title">{a.title}</span>
          </span>
        )}
      >
        {this.renderMenus(a.children)}
      </Menu.SubMenu>
    ) : (
      authorize.includes(a.id) && (
        <Menu.Item key={a.id} onClick={() => this.menuItemClick(a.url)}>
          { a.icon || null }
          <span className="link-title">{a.title}</span>
        </Menu.Item>
      )
    )
  ));

  render() {
    const { children } = this.props;
    return (
      <Layout className="page-layout">
        <Header className="layout-header">
          <div className="page-layout-logo">今状元ERP系统</div>
          <div className="header-content">123</div>
        </Header>
        <Layout>
          <Sider width={240} className="layout-sider">
            <Menu mode="inline" className="menu-list">
              {this.renderMenus(layoutMenus)}
            </Menu>
          </Sider>
          <Layout>
            <Content className="page-layout-content">
              {children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}
