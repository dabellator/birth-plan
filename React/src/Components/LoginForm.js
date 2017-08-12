import React, { Component } from 'react';
import Input from './Input';
import Button from './Button';
import FormHeader from './FormHeader';
import { Email } from '../Services/Validation';
import Auth from '../Services/Authentication';

export default class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.onChange = this.onChange.bind(this);
    this.signIn = this.signIn.bind(this);
  }

  componentWillMount() {
    console.log("FIRED MOUNT LOGIN")
  }

  onChange(value, type) {
    this.setState({ [type]: value })
  }

  signIn() {
    const { email, password } = this.state;

    Auth.signIn(email, password);
  }

  render() {
    const { onChange, signIn } = this;
    const { email, password } = this.state;
    return (
      <div className="login-form-wrapper">
        <div className="section sub-header">
          <div className="row center">
            <div className="col-12">Log in to your account</div>
          </div>
          <div className="row center">
            <div className="col-12">Don't have an account? <span className="link">Sign Up</span></div>
          </div>
        </div>
        <div className="section">
          <div className="row">
            <div className="col-12">
              <Input
                placeholder="Email"
                value={email}
                validationPattern={'Email'}
                onChange={(e) => onChange(e.target.value, 'email')}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Input
                placeholder="Password"
                value={password}
                type="password"
                onChange={(e) => onChange(e.target.value, 'password')}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
                <Button fullWidth onClick={signIn} buttonClassName="secondary sm">Sign In</Button>
            </div>
          </div>
        </div>
        <div className="section forgot-password">
          <div className="row center">
            <div className="col-12">
              <span>Forgot password? <span className="link">Click Here</span></span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
