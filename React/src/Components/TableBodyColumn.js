import React, { Component } from 'react';
import { combineClasses } from '../Services/Common';

export default class TableHeaderColumn extends Component {

  render() {
    const { left, center, right, tooltip } = this.props;
    const textLeft = left ? 'left' : '';
    const textRight = right ? 'right' : '';
    const textCenter = center ? 'center' : '';
    const bodyColumnClasses = combineClasses('table-body-column', textLeft, textRight, textCenter);
    return (
      <td className={bodyColumnClasses}>
        <div data-tooltip={tooltip}>
          <div className="table-body-column-text">{this.props.children}</div>
        </div>
      </td>
    )
  }
}
