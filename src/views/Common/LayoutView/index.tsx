import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { layoutMenus, authorize } from '../../../config/layoutMenus';
import './index.less';

// purview 测试，为的后端返回的权限字符串
const { Header, Sider, Content } = Layout;

type IState = {
  collapsed: boolean
};

type IProps = {
  history: any,
  router: any,
  children?: any[]
};

export default class LayoutView extends Component<IProps, IState> {
  state = {
    collapsed: false,
  };

  toggle = () => {
    const { collapsed } = this.state;

    this.setState({
      collapsed: !collapsed,
    });
  };

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
            {a.icon ? <Icon type={a.icon} /> : null}
            <span>{a.title}</span>
          </span>
        )}
      >
        {this.renderMenus(a.children)}
      </Menu.SubMenu>
    ) : (
      authorize.includes(a.id) && (
        <Menu.Item key={a.id} onClick={() => this.menuItemClick(a.url)}>
          {a.icon ? <Icon type={a.icon} /> : null}
          <span>{a.title}</span>
        </Menu.Item>
      )
    )
  ));

  render() {
    const { collapsed } = this.state;
    const { children } = this.props;
    return (
      <Layout style={{ width: '100vw', height: '100vh' }}>
        <Sider className="page-layout-sider" trigger={null} collapsible collapsed={collapsed}>
          <div className="page-layout-logo" />
          <Menu theme="dark" mode="inline">
            {this.renderMenus(layoutMenus)}
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="page-layout-trigger"
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content className="page-layout-content">
            {children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}
