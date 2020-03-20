import React, { Component } from 'react';
import './index.less';

type IProps = {
  router: any,
};

export default class Login extends Component<IProps> {
  state = {};

  test = () => {
    const { router: { history } } = this.props;
    history.push('/layout/home');
  };

  render() {
    return (
      <div className="page-login">
        <div className="content">
          <div className="title">今状元管理系统</div>

        </div>
      </div>
    );
  }
}
