import React, { Component } from 'react';
import Input from './Input';
import Button from './Button';
import NavItem from './NavItem';

export default class SignUpForm extends Component {

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

    render() {
        const { onChange } = this;
        const { signUp } = this.props;
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
                <Button fullWidth onClick={signUp.bind(null, this.state)} buttonClassName="primary sm">Sign Up</Button> 
            </div>
        )
    }

}