import React, { Component } from 'react';

/* eslint-disable */

type IProps = {
  router: any,
  children?: any[]
};

export default class CannotFind extends Component<IProps> {
  state = {}

  render () {
    return (
      <div>
        <div>404</div>
      </div>
    )
  }
}
