import React, { Component } from 'react';

type IProps = {
  router: any,
  children?: any[]
};

export default class Login extends Component<IProps> {
  state = {};

  render() {
    const { children } = this.props;
    return (
      <div>
        <div>login</div>
        <div>
          {children}
        </div>
      </div>
    );
  }
}
