import React, { Component } from 'react';
import { combineClasses } from '../Services/Common';
import { Link } from 'react-router';

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
        <Link className="nav-link" activeClassName="active" to={url}>{title}</Link>
      )
  }
}
