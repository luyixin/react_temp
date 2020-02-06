import React, { Component } from 'react';
import './index.less';
import { login } from '../../config/api';

type IState = {
};

type IProps = {
  router: any,
  children?: any[]
};

export default class Test extends Component<IProps, IState> {
  state = {};

  componentDidMount() {
    login({ a: '123' }).then((res: any) => {
      console.log(res);
    });
  }

  render() {
    return (
      <div>test</div>
    );
  }
}
