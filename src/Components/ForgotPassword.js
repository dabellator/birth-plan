import React, { Component } from 'react';
import Input from './Input';
import Button from './Button';

export default class ForgotPassword extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: ''
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange(value, type) {
        this.setState({ [type]: value })
    }

    render() {
        const { email } = this.state;
        const { passwordReset } = this.props;
        const { onChange } = this;
        return (
            <div className="forgot-password">
                <div className="message">Enter your email address and we'll send you a link to reset your password.</div>
                <Input
                    label="Email"
                    value={email}
                    validationPattern='Email'
                    onChange={(e) => onChange(e.target.value, 'email')}
                />
                <Button fullWidth onClick={passwordReset.bind(null, this.state)} buttonClassName="secondary sm">Send</Button>
            </div>
        )
    }

}