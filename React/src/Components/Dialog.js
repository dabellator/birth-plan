import React, { Component } from 'react';
import FormHeader from './FormHeader';
import Shadow from './Shadow';
import { combineClasses } from '../Services/Common';

export default class Dialog extends Component {
  constructor(props) {
    super(props);
    this.state={
      show: props.show
    };
    this.onMouseDown = this.onMouseDown.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ show: nextProps.show })
  }

  onMouseDown(event) {
    if (event.target.id === "dialog-container") {
      this.setState({ show: false })
    }
  }

  render() {
    const { children, title, footer } = this.props;
    const { show } = this.state;
    const { onMouseDown } = this;
    const containerClass = combineClasses("dialog-container", show ? "show" : "hide")
    const contentClass = combineClasses("content-wrapper", show ? "show" : "hide")
    return (
      <div
        id="dialog-container"
        className={containerClass}
        onMouseDown={onMouseDown}
      >
        <Shadow>
          <div className={contentClass}>
            {title ? <FormHeader top>{title}</FormHeader> : null}
            {children}
            {footer ? <FormHeader bottom>{footer}</FormHeader> : null}
          </div>
        </Shadow>
      </div>
    )
  }
}
