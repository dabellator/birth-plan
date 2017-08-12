import React, { Component } from 'react';
import { combineClasses } from '../Services/Common';

export default class MenuItem extends Component {

  render() {
    const { handleMouseClick, value, isSelected, isActive, onMouseOver , disabled } = this.props;
    const onClick = handleMouseClick;
    const activeClass = (!disabled && isActive) ? 'active' : '';
    const selectedClass = isSelected ? 'selected' : '';
    const disabledClass = disabled ? 'disabled' : '';
    const itemClasses = combineClasses('menu-item', selectedClass, activeClass, disabledClass);
    return (
      <div className={itemClasses} key={value} onMouseOver={onMouseOver} onClick={!disabled ? onClick : null}>
        {value}
      </div>
    )
  }
}
