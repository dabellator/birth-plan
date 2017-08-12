import React, { Component } from 'react';

export default class TableHeader extends Component {

  render() {
    return (
      <thead className="table-header">
        {this.props.children}
      </thead>
    )
  }
}
