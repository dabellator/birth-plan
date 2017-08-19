import React, { Component } from 'react';
import AppView from './AppView';

export default class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = { }
  }

  render() {
    return (
      <AppView>
        <div>This is where settings view will go!</div>
      </AppView>
    )
  }
}
