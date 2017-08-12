import React, { Component } from 'react';

export default class TableBody extends Component {

  render() {
    return (
        <tbody className="table-body">
          {this.props.children}
        </tbody>
    )
  }
}
