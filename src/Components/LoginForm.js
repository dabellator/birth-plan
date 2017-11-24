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
        this.loginClicked = this.loginClicked.bind(this);
    }

    onChange(value, type) {
        this.setState({ [type]: value })
    }

    loginClicked() {
      const { login } = this.props;
      login(this.state);
    }

    render() {
        const { onChange, loginClicked } = this;
        const { email, password } = this.state;
        return (
            <div>
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
                <Button fullWidth onClick={loginClicked} buttonClassName="secondary sm">Login</Button>
            </div>
        )
    }

}
