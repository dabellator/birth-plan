import React, { Component } from 'react';
import { combineClasses } from '../Services/Common';
import Icon from './Icon';
import DropdownMenu from './DropdownMenu';

export default class DropdownInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      active: 0,
      showDropdown: false
    };

    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.selectNext = this.selectNext.bind(this);
    this.selectPrev = this.selectPrev.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  handleMouseClick () {
    const { onChange, index } = this;
    onChange(index);
  }

  onChange (index) {
    const { onChange, options, property } = this.props;
    const value = options[index]
    this.setState({ showDropdown: false }, function () {
      onChange(property, value);
    });
  }

  selectNext () {
    const { props, state } = this;
    const active = props.options.length === state.active + 1 ? 0 : state.active + 1;
    this.setState({ active });
  }

  selectPrev () {
    const { props, state } = this;
    const active = state.active <= 0 ? props.options.length - 1 : state.active - 1;
    this.setState({ active });
  }

  onKeyDown (event) {
    if (event.keyCode === 38) {
      // up
      event.preventDefault()
      this.selectPrev();
    } else if (event.keyCode === 40) {
      // down
      event.preventDefault()
      this.selectNext();
    } else if (event.keyCode === 13) {
      //enter
      event.preventDefault()
      const { active } = this.state;
      const { onChange } = this;
      onChange(active);
    }
  }

  toggleDropdown() {
    this.setState({ showDropdown: !this.state.showDropdown })
  }

  onBlur() {
    this.setState({ showDropdown: false });
  }

  onMouseOver(active) {
    this.setState({ active })
  }

  onFocus() {
    this.setState({ showDropdown: true })
  }

  render() {
    const { onChange, handleMouseClick, onKeyDown, onBlur, onFocus, toggleDropdown, onMouseOver } = this;
    const { options, label, value, placeholder, fullWidth } = this.props;
    const { active, showDropdown } = this.state;
    const wrapperClasses = combineClasses( 'input-dropdown' );
    const textClasses = combineClasses( 'input-dropdown-text', placeholder && !value ? 'placeholder' : '' )
    const labelClasses = combineClasses( 'input-dropdown-label', showDropdown ? 'is-active' : '')
    let textValue = placeholder && !value ? placeholder : value;

    return (
      <div className={wrapperClasses} tabIndex='0' onFocus={onFocus} onBlur={onBlur} onKeyDown={onKeyDown}>
        <label className={labelClasses}>{label}</label>
        <div onMouseDown={toggleDropdown} className={textClasses}>{textValue}<Icon icon="Arrow" /></div>
        <DropdownMenu
          active={active}
          fullWidth={fullWidth}
          handleMouseClick={handleMouseClick}
          onMouseOver={onMouseOver}
          onChange={onChange}
          options={options}
          showDropdown={showDropdown}
          value={value}
        />
      </div>

    );
  }
}
