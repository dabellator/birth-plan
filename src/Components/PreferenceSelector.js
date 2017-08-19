import React, { Component } from 'react';
import Button from './Button';

export default class PreferenceSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: ''
    }
    this.preferenceSelect = this.preferenceSelect.bind(this);
  }

  preferenceSelect(selection) {
    this.setState({ selection });
  }

  render() {
    const { selection } = this.state;
    const { preferenceSelect } = this;
    const { preference } = this.props;
    return (
      <div className="preference-selector-wrapper">
        <div className="content-wrapper">
          <div className="icon-wrapper">
            Icon
          </div>
          <div className="content">
            <div>
              {preference.title}
            </div>
            <div className="description">
              {preference.description}
            </div>
          </div>
        </div>
        <div className="button-wrapper">
          <Button style={{width: '7em'}} onClick={preferenceSelect.bind(null, 'yes')} buttonClassName={selection === 'yes' ? 'secondary' : 'primary'}>Yes</Button>
          <Button style={{width: '7em'}} onClick={preferenceSelect.bind(null, 'no')} buttonClassName={selection === 'no' ? 'secondary' : 'primary'}>No</Button>
        </div>
      </div>
    )
  }
}
