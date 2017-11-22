import React from 'react';
import IconData from './IconData';

export default class Admin extends React.Component {

  render() {
    const iconList = this.props.icons.map((icon, i) => (
      <IconData
        {...icon}
        updateImageData={this.props.updateImageData}
        key={i} 
      />
    ))

    return (
      <div>
        {iconList}
      </div>
    )
  }
}