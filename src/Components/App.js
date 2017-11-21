import React from 'react';

export default class App extends React.Component {

  componentWillMount() {
    this.props.fetchAll();
    this.props.fetchOptions();
  }

  render () {
    return (
      <div className='app'>
        {this.props.children}
      </div>
    );
  }
}
