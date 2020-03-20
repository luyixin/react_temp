import React, { Component } from 'react';
import { Button } from 'antd';
/* eslint-disable */

type IProps = {
  router: any,
  children?: any[]
};

export default class Home extends Component<IProps> {
  state = {}

  render () {
    return (
      <div>
        <div>home</div>
        <Button type="primary">
          按钮
        </Button>
      </div>
    )
  }
}
