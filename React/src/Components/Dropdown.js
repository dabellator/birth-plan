import React, { Component } from 'react';
import { combineClasses } from '../Services/Common';

export default class Dropdown extends Component {

  constructor(props) {
    super(props);

    const values = props.options.map(option => option.value);
    const selected = values.indexOf(props.value);

    this.state = { selected };

    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.selectNext = this.selectNext.bind(this);
    this.selectPrev = this.selectPrev.bind(this);
  }

  handleMouseDown () {
    const { onChange, index } = this;
    onChange(index);
  }

  onChange (index) {
    const { onChange, name, options } = this.props;

    this.setState({ selected: index });

    onChange({ name, value: options[index].value });
  }

  selectNext () {
    const { props, state } = this;
    const selected = props.options.length === state.selected + 1 ? 0 : state.selected + 1;

    this.setState({ selected });
    this.onChange(selected);
  }

  selectPrev () {
    const { props, state } = this;
    const selected = state.selected <= 0 ? props.options.length - 1 : state.selected - 1;

    this.setState({ selected });
    this.onChange(selected);
  }

  onKeyDown (event) {
    if (event.keyCode === 38) {
      // up
      this.selectPrev();
    } else if (event.keyCode === 40) {
      // down
      this.selectNext();
    } else if (event.keyCode === 13) {
      //enter function goes here.
    }
  }

  onBlur () {
    this.props.onBlur();
  }

  render() {
    const { handleMouseDown, onChange, onKeyDown, onBlur } = this;
    const { options, id, label } = this.props;
    const { selected } = this.state;
    const text = selected !== -1 ? options[selected].name : null;
    const classes = combineClasses(
      'input-dropdown'
    );

    return (
      <div className={classes} tabIndex='0' onBlur={onBlur} onKeyDown={onKeyDown} id={id}>
        <span className='input-dropdown-label'>{label}</span>
        <span className='dropdown-text'>{text}</span>
        <ul tabIndex='-1'>
          {this.props.options.map((option, index) => {
            const onMouseDown = handleMouseDown.bind({ onChange, index });
            const activeClass = selected === index ? 'selected' : undefined;
            const itemClasses = combineClasses('input-dropdown-option', activeClass);
            return (
              <li className={itemClasses} key={option.value} onMouseDown={onMouseDown}>
                {option.name}
              </li>
            )}
          )}
        </ul>
      </div>

    );
  }
}
