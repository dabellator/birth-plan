import React, { Component } from 'react';

export default class ViewPlan extends Component {

  render() {
    const selectedImages = this.renderSelectedImages();

    return (
      <div id="header">
		  	<div id="info"><img src="images/logo-work4-01.png" alt='bpg icon' /></div>
			  <div id="name"></div>
			  <div id="title">Birth Preferences</div>
			  <div id="selectedImages">
          {selectedImages}
        </div>
		  </div>
    )
  }

  renderSelectedImages() {
    return this.props.selected && Object.keys(this.props.selected).reduce((acc, selection) => {
      if (this.props.selected[selection]) acc.push((
        <div className='med' key={selection}>
          <img src={selection} alt='bpg icon'/>
        </div>
      ));
      return acc;
    }, [])
  }
}
