import React, { Component } from 'react';
import Button from './Components/Button';
import Input from './Components/Input';
import Dropdown from './Components/Dropdown';
import Icon from './Components/Icon';

class App extends Component {

  static states = [
    {
      name: 'Washington',
      value: 'WA'
    },
    {
      name: 'Oregon',
      value: 'OR'
    },
    {
      name: 'California',
      value: 'CA'
    },
    {
      name: 'Colorado',
      value: 'CO'
    }
  ]

  constructor(props){
    super(props);
    this.state = {
      emailAddress: '',
      firstName: '',
      lastName: '',
      password: '',
      selectedState: App.states[0].value
    }
    this.onChange = this.onChange.bind(this);
    this.cancel = this.cancel.bind(this);
    this.confirm = this.confirm.bind(this);
  }

  cancel() {
    this.setState({
      emailAddress: '',
      firstName: '',
      lastName: '',
      password: '',
      selectedState: App.states[0].value
    })
  }

  confirm() {
    console.log(this.state);
  }

  onChange(value, type) {
    this.setState({ [type]: value })
  }

  updateDropdownItem(item) {
    console.log("ITEM FROM APP", item)
  }

  render() {
    const { onChange, cancel, confirm } = this;
    const { emailAddress, firstName, lastName, password, selectedState } = this.state
    return (
      <div className="App">
        <div className="row">
          <div className="col-12">
            <h2>Birth Plan Generator</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Input
              label="Email Address"
              value={emailAddress}
              onChange={(e) => onChange(e.target.value, 'emailAddress')}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <Input
              label="First Name"
              value={firstName}
              onChange={(e) => onChange(e.target.value, 'firstName')}
            />
          </div>
          <div className="col-6">
            <Input
              label="Last Name"
              value={lastName}
              onChange={(e) => onChange(e.target.value, 'lastName')}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Input
              label="Password"
              value={password}
              type="password"
              onChange={(e) => onChange(e.target.value, 'password')}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <Dropdown
              onChange={this.updateDropdownItem}
              value={selectedState}
              name="State"
              label="State"
              options={App.states}
            />
          </div>
        </div>
        <div className="row">
          <Icon icon="Arrow" />
        </div>
        <div className="row">
          <div className="col-2 center">
              <Button onClick={cancel} className="primary sm">Cancel</Button>
          </div>
          <div className="col-10 center">
              <Button onClick={confirm} className="secondary sm">Create</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
