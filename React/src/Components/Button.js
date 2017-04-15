import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    return (
        <a
          disabled={this.props.disabled}
          className={`button ${this.props.className}`}
          onClick={!this.props.disabled ? this.props.onClick : null}
        >
          {this.props.children}
        </a>
    )
  }
}
