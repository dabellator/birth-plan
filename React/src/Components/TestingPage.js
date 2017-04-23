import React, { Component } from 'react';
import Button from './Button';
import Input from './Input';
import DropdownInput from './DropdownInput';
import Shadow from './Shadow';

export default class TestingPage extends Component {

  static states = ['Washington', 'Oregon', 'California', 'Colorado']
  static people = ['Jordan', 'Travis', 'Andrea', 'Ana', 'Mike', 'Jesse', 'Derek', 'Ryan', 'Josh', 'Cole', 'Nick', 'Mark']

  constructor(props){
    super(props);
    this.state = {
      emailAddress: '',
      firstName: '',
      lastName: '',
      password: '',
      selectedState: '',
      selectedPerson: ''
    }
    this.onChange = this.onChange.bind(this);
    this.cancel = this.cancel.bind(this);
    this.confirm = this.confirm.bind(this);
    this.updateDropdownItem = this.updateDropdownItem.bind(this);
  }

  cancel() {
    this.setState({
      emailAddress: '',
      firstName: '',
      lastName: '',
      password: '',
      selectedState: '',
      selectedPerson: ''
    })
  }

  confirm() {
    console.log(this.state);
  }

  onChange(value, type) {
    this.setState({ [type]: value })
  }

  updateDropdownItem(property, value) {
    this.setState({ [property]: value })
  }

  render() {
    const { onChange, cancel, confirm, updateDropdownItem } = this;
    const { emailAddress, firstName, lastName, password, selectedState, selectedPerson } = this.state
    return (
      <div className="test-page-wrapper">
        <div className="col-12">
          <h2>Birth Plan Generator</h2>
        </div>
        <div className="col-12">
          <Input
            label="Email Address"
            floatingLabel
            value={emailAddress}
            onChange={(e) => onChange(e.target.value, 'emailAddress')}
          />
        </div>
        <div className="col-6">
          <Input
            error
            label="First Name"
            placeholder="Enter your first name"
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
        <div className="col-4">
          <Input
            label="Password"
            placeholder="Enter password here"
            value={password}
            type="password"
            onChange={(e) => onChange(e.target.value, 'password')}
          />
        </div>
        <div className="col-4">
          <DropdownInput
            onChange={updateDropdownItem}
            value={selectedState}
            label="State"
            property="selectedState"
            options={TestingPage.states}
          />
        </div>
        <div className="col-4">
          <DropdownInput
            onChange={updateDropdownItem}
            value={selectedPerson}
            placeholder="test"
            property="selectedPerson"
            label="Person"
            fullWidth={true}
            options={TestingPage.people}
          />
        </div>
        <div className="col-2 center">
            <Button onClick={cancel} buttonClassName="primary sm">Cancel</Button>
        </div>
        <div className="col-10 center">
            <Button onClick={confirm} buttonClassName="secondary sm">Create</Button>
        </div>
        <div>
          {TestingPage.people.map((person) => {
            return <div tabIndex='0' className="col-3 tile"><div style={{width: '100%', height: '200px'}}><Shadow>{person}</Shadow></div></div>})}
        </div>
      </div>
    );
  }
}
