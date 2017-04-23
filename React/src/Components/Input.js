import React, { Component } from 'react';
import { combineClasses } from '../Services/Common';

export default class Input extends Component {
  render() {
    const { type, error, inputStyle, onChange, onFocus, onBlur, disabled, value, label, inputContainerStyle, placeholder, floatingLabel } = this.props;
    const inputError = error ? 'error' : ''
    const floatLabel = (value && value.length) || placeholder || floatingLabel ? "floating-label" : "";
    const inputLabelClass = combineClasses( 'label', floatLabel, inputError );
    const inputClass = combineClasses('text-input', inputError);
    const underlineClass = combineClasses( 'underline', inputError );
    return (
      <div className="input-container" style={inputContainerStyle}>
        <input
          className={inputClass}
          type={type || "text"}
          style={inputStyle}
          placeholder={placeholder}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          disabled={disabled}
          value={value}
        >
        </input>
        <span className={underlineClass}></span>
        <label className={inputLabelClass}>{label}</label>
      </div>
    )
  }
}
