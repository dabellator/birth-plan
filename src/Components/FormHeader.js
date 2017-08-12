import React, { Component } from 'react';
import { combineClasses } from '../Services/Common';

export default class FormHeader extends Component {

  render() {
    const { children, top, bottom } = this.props;
    const containerClasses = combineClasses( 'form-header', top ? 'top' : '', bottom ? 'bottom' : '' )
    return (
      <div className={containerClasses}>
        {children}
      </div>
    )
  }

}
