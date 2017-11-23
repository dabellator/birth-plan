import React, { Component } from 'react';
import AppView from './AppView';

export default class EditPlan extends Component {

  handleClick = (e) => {
    this.props.setSelection(e.target.src);
  }

  handleChange = (e) => {
    this.props.updateForm({key: e.target.id, value: e.target.value});
  }

  render() {
    const images = this.renderImages();
    return (
      <AppView>
        <span>Name</span><input type="text" id="name" value={this.props.name} onChange={this.handleChange}/>
        <span>Description</span><textarea id="description" value={this.props.description} onChange={this.handleChange}/>
        <div style={{padding: '0 1em', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
          {images}
        </div>
      </AppView>
    )
  }

  renderImages() {
    return this.props.images.map((image, i) => {
      const classnames = `icon ${this.props.selected[image.location] ? 'selected' : ''}`;
      
      return (
        <span className={classnames} key={i}>
          <img
            src={image.location}
            alt='bpg icon'
            onClick={this.handleClick}
          />
        </span>
      )
    })
  }
}
