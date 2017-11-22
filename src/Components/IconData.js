import React from 'react';

export default class IconData extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      alt: props.alt || '',
      iconOrder: props.order || 0
    }
  }

  handleChange = (e) => {
    console.log(e.target.name)
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = () => {
    this.props.updateImageData({
      ...this.state,
      id: this.props.id
    })
  }

  render() {
    return (
      <div className='iconDataList'>
        <div className='icon'>
          <img src={this.props.filename} alt={this.props.alt || 'bpg icon'} />
        </div>
        <div className='iconForm'>
          <label className="iconFormLabel" title='Alt Text'>
            Alt Text
            <input type='text' name='alt' onChange={this.handleChange} value={this.state.alt}/>
          </label>
          <label className="iconFormLabel" title='Order'>
            Icon Order
            <input type='text' name='icondOrder' onChange={this.handleChange} value={this.state.order}/>
          </label>
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
      </div>
    )
  }
}