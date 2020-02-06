import React, { Component } from 'react';

/* eslint-disable */

type IProps = {
  router: any,
  children?: any[]
};

export default class NoAuthorize extends Component<IProps> {
  state = {}

  render () {
    return (
      <div>
        <div>403</div>
      </div>
    )
  }
}
