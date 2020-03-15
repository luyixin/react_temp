import React, { Component } from 'react';

type IProps = {
  router: any,
  children?: any[]
};

export default class Login extends Component<IProps> {
  state = {};

  test = () => {
    const { router: { history } } = this.props;
    history.push('/layout/home');
  };

  render() {
    const { children } = this.props;
    return (
      <div>
        <div>login</div>
        <div>
          {children}
        </div>
        <button onClick={this.test} type="button">跳转</button>
      </div>
    );
  }
}
