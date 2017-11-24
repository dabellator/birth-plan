import React, { Component } from 'react';
import AppHeader from './AppHeader';

export default class View extends Component {
  render() {
    const navItems = [
      {
        title: "View",
        url: "/view"
      },
      {
        title: "Edit",
        url: "/edit"
      },
      {
        title: "Share",
        url: "/share"
      },
      {
        title: "Settings",
        url: '/settings'
      }
    ]
    return (
      <div className="view-wrapper">
        <AppHeader navItems={navItems} />
        {this.props.children}
      </div>
    )
  }
}
