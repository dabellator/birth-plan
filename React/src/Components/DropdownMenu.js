import React, { Component } from 'react';
import { combineClasses } from '../Services/Common';
import MenuItem from './MenuItem';
import Shadow from './Shadow';

export default class DropdownMenu extends Component {

  render() {
    const { handleMouseClick, onChange, options, showDropdown, active, value, onMouseOver, fullWidth } = this.props;
    const showDropdownClass = combineClasses('dropdown-wrapper', showDropdown ? 'show' : 'hide')
    const containerClass = combineClasses('dropdown-container', fullWidth ? 'full-width' : '')
    return (
      <div className={containerClass}>
        <Shadow>
            <div className={showDropdownClass} tabIndex='-1'>
              {options.map((option, index) => {
                const isSelected = options.indexOf(value) === index ? true : false;
                const isActive = active === index ? true : false
                return (
                  <MenuItem
                    handleMouseClick={handleMouseClick.bind({ onChange, index })}
                    value={option}
                    key={index}
                    isActive={isActive}
                    isSelected={isSelected}
                    onChange={onChange}
                    onMouseOver={onMouseOver.bind(null, index)}
                  />
                )}
              )}
            </div>
        </Shadow>
      </div>
    );
  }
}
