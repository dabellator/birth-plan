import React, { Component } from 'react';
import { combineClasses } from '../Services/Common';

export default class TableHeaderColumn extends Component {

  render() {
    const { left, center, right, tooltip, value } = this.props;
    const textLeft = left ? 'left' : '';
    const textRight = right ? 'right' : '';
    const textCenter = center ? 'center' : '';
    const headerColumnClasses = combineClasses('table-header-column', textLeft, textRight, textCenter);
    return (
      <th className={headerColumnClasses}>
        <div data-tooltip={tooltip}>
          <div className="table-header-column-text">{value}</div>
        </div>
      </th>
    )
  }
}
