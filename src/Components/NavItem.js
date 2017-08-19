import React, { Component } from 'react';
import { combineClasses } from '../Services/Common';
import { NavLink } from 'react-router-dom';

export default class NavItem extends Component {

  constructor(props) {
    super(props);
    this.onNavClick = this.onNavClick.bind(this);
  }

  onNavClick() {
    const { navClicked, title } = this.props;
    navClicked ? navClicked(title) : null
  }

  render() {
      const { title, url } = this.props;
      return (
        <NavLink className="nav-link" activeClassName="active" to={url}>{title}</NavLink>
      )
  }
}
