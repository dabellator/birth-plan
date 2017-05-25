import React, { Component } from 'react';

export default class Checkbox extends Component {

  render() {
    const { label, checked } = this.props;
    return (
      <span>
        <label>{label}</label>
        <input type="checkbox" checked={checked} />
      </span>
    )
  }
}
