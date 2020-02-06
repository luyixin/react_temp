/*
* 获取路由对象，使用路有对象
* const { router: { history } } = this.props;
*  history.replace('/test');
*  history.push('/test');
*  history.go(-1);
*  history.goBack();
*
*/

import React, { Component } from 'react';
import './assets/styles/common.less';

type IState = {
  a?: number
};

type IProps = {
  router: any,
  children?: any[]
};

export default class App extends Component<IProps, IState> {
  state = {};

  // componentDidMount() {
  //   const { router: { history } } = this.props;
  //   history.replace('/test');
  // }

  toLink = (path: string) => {
    const { router: { history } } = this.props;
    history.push(path);
  };

  render() {
    const { children } = this.props;
    return (
      <div style={{ width: '100vw', height: '100vh' }}>{children}</div>
    );
  }
}
