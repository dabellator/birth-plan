import React, { Component } from 'react';
import { combineClasses } from '../Services/Common';

export default class Button extends Component {

  constructor(props){
    super(props);
    this.state = {
      active: false
    }
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  onMouseEnter() {
    this.setState({ active: true })
  }

  onMouseLeave() {
    this.setState({ active: false })
  }

  onFocus() {
    this.setState({ active: true })
  }

  onBlur() {
    this.setState({ active: false })
  }

  onKeyDown(event) {
    if (event.keyCode === 13) {
      //enter
      const { onClick } = this.props;
      onClick();
    }
  }

  render() {
    const { buttonWrapperClassName, buttonClassName, disabled, onClick, fullWidth, style } = this.props;
    const { active } = this.state;
    const { onMouseEnter, onMouseLeave, onFocus, onBlur, onKeyDown } = this;
    const buttonWrapper = combineClasses( 'button-wrapper', buttonWrapperClassName, fullWidth ? 'full-width' : null );
    const buttonClass = combineClasses( 'button', buttonClassName, active ? 'active' : null, fullWidth ? 'full-width' : null );
    return (
      <div
        onKeyDown={!disabled ? onKeyDown : null}
        onClick={!disabled ? onClick : null}
        onFocus={onFocus}
        onBlur={onBlur}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={buttonWrapper}
        tabIndex={0}
      >
        <button style={style} disabled={disabled} className={buttonClass}>
          <span className='btn-text'>{this.props.children}</span>
        </button>
      </div>
    )
  }
}
