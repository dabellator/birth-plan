import React from 'react';
import Icons from './Icons';
import { combineClasses } from '../Services/Common';

class Icon extends React.Component {
  render () {
    const { icon, className, orientation, onMouseDown } = this.props;
    const IconComponent = Icons[icon];
    const iconClass = combineClasses('icon', className);

    return (
      <span onMouseDown={onMouseDown} orientation={orientation} className={iconClass}>
        {IconComponent && IconComponent()}
      </span>
    );
  }
}

export default Icon;
