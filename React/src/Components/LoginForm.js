import React, { Component } from 'react';
import Input from './Input';
import Button from './Button';
import FormHeader from './FormHeader';
import { Email } from '../Services/Validation';

export default class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: '',
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
    const { signIn } = this.props
    signIn(this.state);
  }

  render() {
    const { onChange, signIn } = this;
    const { userName, password } = this.state;
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
                placeholder="Username"
                value={userName}
                validationPattern={'Email'}
                onChange={(e) => onChange(e.target.value, 'userName')}
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
