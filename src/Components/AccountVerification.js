import React, { Component } from 'react';
import Input from './Input';
import Button from './Button';
import roofLogo from '../Assets/logo-roof.png';
import ForgotPassword from './ForgotPassword';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

export default class AccountVerification extends Component {

  constructor(props) {
    super(props);
    this.state = {
      context: 'login'
    };
    this.updateContext = this.updateContext.bind(this);
  }

  updateContext(context) {
    this.setState({ email: '', password: '', context });
  }

  login(userCredentials) {
    console.log("login", userCredentials);
  }

  signUp(userCredentials) {
    console.log("signUp", userCredentials);
  }

  passwordReset(userCredentials) {
    console.log("reset password", userCredentials);
  }

  render() {
    const { updateContext, login, signUp, passwordReset } = this;
    const { email, password, context } = this.state;
    const buttonText = context === 'login' ? 'Login' : context === 'sign-up' ? 'Create' : '';
    return (
      <div className="login-form-wrapper">
        <div className="form-container">
          <div className="logo">
            <img height='125px' src={roofLogo} />
          </div>
          <div className="login-form">
            {context === 'forgot' ? <ForgotPassword passwordReset={passwordReset} /> : null}
            {context === 'login' ? <LoginForm login={login} /> : null}
            {context === 'sign-up' ? <SignUpForm signUp={signUp} /> : null}
          </div>
          <div className="forgot-password-wrapper">
            {context === 'login' ?
              <div>
                <div>Forgot <span onClick={updateContext.bind(null, 'forgot')} className="link">password</span>?</div>
                <div>Don't have an <span onClick={updateContext.bind(null, 'sign-up')} className="link">account</span>?</div>
              </div>
            : null}
            {context === 'sign-up' || context === 'forgot' ?
              <div>Already have an <span onClick={updateContext.bind(null, 'login')} className="link">account</span>?</div>
            : null}
          </div>
        </div>
      </div>
    )
  }
}
