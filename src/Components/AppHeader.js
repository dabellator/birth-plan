import React, { Component } from 'react';
import NavItem from './NavItem';
import { Link } from 'react-router'

export default class AppHeader extends Component {
  render() {
    const { navItems } = this.props;
    return (
      <div className="app-header-wrapper">
        <div className="header-section app-name">App Name</div>
        <nav className="header-section nav-bar">
          {navItems.map(item =>
            <NavItem
              title={item.title || ''}
              url={item.url}
            />
          )}
        </nav>
        <div className="header-section greeting">
          <span>Welcome, First</span>
        </div>
      </div>
    )
  }
}
