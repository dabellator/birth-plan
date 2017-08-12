import React, { Component } from 'react';
import Input from './Input';
import Button from './Button';
import NavItem from './NavItem';

export default class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange(value, type) {
    this.setState({ [type]: value })
  }

  navClicked() {
    console.log("nav clicked");
  }

  render() {
    const { onChange } = this;
    const { login } = this.props;
    const { email, password } = this.state;
    return (
      <div>
        <NavItem title="Test" navClicked={this.navClicked.bind(this)} />
        <Input
          label="Email"
          value={email}
          validationPattern='Email'
          onChange={(e) => onChange(e.target.value, 'email')}
        />
        <Input
          label="Password"
          value={password}
          type="password"
          onChange={(e) => onChange(e.target.value, 'password')}
        />
        <Button fullWidth onClick={login.bind(null, this.state)} buttonClassName="secondary sm">Login</Button>
      </div>
    )
  }
}
