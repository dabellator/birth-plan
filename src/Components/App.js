import React from 'react';

export default class App extends React.Component {

  componentWillMount() {
    this.props.fetchAll();
  }

  render () {
    console.log("APP: ", this.props.children);
    return (
      <div className='app'>
        {this.props.children}
      </div>
    );
  }
}
