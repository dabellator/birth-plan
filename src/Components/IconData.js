import React from 'react';

export default class IconData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alt: props.alt || '',
      iconOrder: props.iconOrder || 0
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = () => {
    this.props.updateImageData({
      ...this.state,
      id: this.props.id,
      filename: this.props.filename
    })
  }

  render() {
    return (
      <div className='iconDataList'>
        <div className='icon'>
          <img src={this.props.location} alt={this.props.alt || 'bpg icon'} />
        </div>
        <div className='iconForm'>
          <label className="iconFormLabel" title='Alt Text'>
            Alt Text
            <input type='text' name='alt' onChange={this.handleChange} value={this.state.alt}/>
          </label>
          <label className="iconFormLabel" title='Order'>
            Icon Order
            <input type='text' name='iconOrder' onChange={this.handleChange} value={this.state.iconOrder}/>
          </label>
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
      </div>
    )
  }
}