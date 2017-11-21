import React, { Component } from 'react';
import AppView from './AppView';

export default class EditPlan extends Component {

  handleClick = (e) => {
    this.props.setSelection(e.target.src);
  }

  render() {
    const images = this.renderImages();
    return (
      <AppView>
          <span>Name</span><input type="text" id="name-field" />
          <span>Description</span><input type="textarea" id="description-field" />
          <div style={{padding: '0 1em', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
            {images}
          </div>
      </AppView>
    )
  }

  renderImages() {
    return this.props.images.map((image, i) => {
      const classnames = `icon ${this.props.selected[image] ? 'selected' : ''}`;
      
      return (
        <span className={classnames} key={i}>
          <img
            src={image}
            alt='bpg icon'
            onClick={this.handleClick}
          />
        </span>
      )
    })
  }
}
