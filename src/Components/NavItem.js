import React, { Component } from 'react';

export default class NavItem extends Component {
    render() {
        const { navClicked, title } = this.props;
        return (
            <nav>
                <a onClick={navClicked}>{title}</a>
            </nav>
        )
    }
}