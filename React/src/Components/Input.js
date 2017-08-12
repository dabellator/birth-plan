import React, { Component } from 'react';
import { combineClasses } from '../Services/Common';
import Validation from '../Services/Validation';

export default class Input extends Component {
  render() {
    const {
      type,
      inputStyle,
      onChange,
      onFocus,
      onBlur,
      disabled,
      value,
      label,
      inputContainerStyle,
      placeholder,
      floatingLabel,
      validationPattern
    } = this.props;

    const floatLabel = (value && value.length) || placeholder || floatingLabel ? "floating-label" : "";
    let validationObj = {
      isValid: true,
      message: ''
    };
    if (validationPattern && value.length) {
      const validation = Validation[validationPattern];
      validationObj = validation(value);
    }
    const errorClass = validationObj.isValid ? '' : 'error';
    const inputLabelClass = combineClasses( 'label', floatLabel, errorClass );
    const inputClass = combineClasses( 'text-input', errorClass );
    const underlineClass = combineClasses( 'underline', errorClass );

    return (
      <div className="input input-container" style={inputContainerStyle}>
        <label className={inputLabelClass}>{label}</label>
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
        {validationObj.isValid ?  null : <div className={"error-message"}>{validationObj.message}</div>}
      </div>
    )
  }
}
