import React from 'react';
import Icons from './Icons';

class Icon extends React.Component {
  render () {
    const { icon } = this.props;
    const IconComponent = Icons[icon];

    return (
      <span className="icon">
        {IconComponent && IconComponent()}
      </span>
    );
  }
}

export default Icon;
