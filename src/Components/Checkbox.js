import React, { Component } from 'react';
import { combineClasses } from '../Services/Common';

export default class Checkbox extends Component {

  constructor(props) {
    super(props);
    this.state = {checked: false}
    this.check = this.check.bind(this);
  }

  check() {
    const { checked } = this.state;
    this.setState({ checked: !checked })
  }

  render() {
    const { check } = this;
    const { label, labelTop, labelLeft, labelBottom, labelRight } = this.props;
    const { checked } = this.state
    const boxChecked = checked ? 'checked' : '';
    const labelPosition = labelTop ? 'top' : labelLeft ? 'left' : labelBottom ? 'bottom' : labelRight ? 'right' : 'left';
    const checkboxClasses = combineClasses('checkbox', boxChecked);
    const wrapperClasses = combineClasses('checkbox-wrapper', labelPosition);
    return (
      <span className={wrapperClasses}>
        <label>{label}</label>
        <span onMouseDown={check} className={checkboxClasses}>
          <span className='checkmark'>
            <div className='checkmark_stem'></div>
            <div className='checkmark_kick'></div>
          </span>
        </span>
        {/* <input type="checkbox" checked={checked} /> */}
      </span>
    )
  }
}
