import React, { Component } from 'react';
import AppView from './AppView';

export default class ViewPlan extends Component {
  constructor(props) {
    super(props);
    this.state = { }
  }

  render() {
    return (
      <AppView>
        <div>This is where view plan will go!</div>
      </AppView>
    )
  }
}
