import React, { Component } from 'react';

export default class TableRow extends Component {

  render() {
    return (
        <tr className="table-row">
          {this.props.children}
        </tr>
    )
  }
}
