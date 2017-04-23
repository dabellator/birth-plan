import React, { Component } from 'react';

export default class Shadow extends Component {

  render() {
    const { children } = this.props
    return (
      <div className="shadow">
        {children}
      </div>
    )
  }

}
