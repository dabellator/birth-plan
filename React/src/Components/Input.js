import React, { Component } from 'react';

export default class Input extends Component {
  render() {
    const { type, inputStyle, onChange, onFocus, onBlur, disabled, value, label, inputContainerStyle } = this.props;
    const inputClass = value && value.length ? "has-text" : "";
    return (
      <div className="input-container" style={inputContainerStyle}>
        <input
          type={type === "password" ? "password" : "text"}
          style={inputStyle}
          className="text-input"
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          disabled={disabled}
          value={value}
        >
        </input>
        <span className="underline"></span>
        <label className={`label ${inputClass}`}>{label}</label>
      </div>
    )
  }
}
