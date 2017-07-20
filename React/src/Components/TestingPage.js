import React, { Component } from 'react';
import Button from './Button';
import Input from './Input';
import DropdownInput from './DropdownInput';
import Table from './Table';
import Checkbox from './Checkbox';
import Icon from './Icon';
import LoginForm from './LoginForm';
import Dialog from './Dialog';

export default class TestingPage extends Component {

  static states = ['Washington', 'Oregon', 'California', 'Colorado']
  static people = ['Jordan', 'Travis', 'Andrea', 'Ana', 'Mike', 'Jesse', 'Derek', 'Ryan', 'Josh', 'Cole', 'Nick', 'Mark']
  static tableData = [
    {
      name: 'Jordan',
      age: 'Old',
      gender: 'Female'
    },
    {
      name: 'Travis',
      age: '28',
      gender: 'Male'
    },
    {
      name: 'Andrea',
      age: '29',
      gender: 'Female'
    }
  ]

  constructor(props){
    super(props);
    this.state = {
      emailAddress: '',
      firstName: '',
      lastName: '',
      password: '',
      selectedState: '',
      selectedPerson: '',
      showDialog: false
    }
    this.onChange = this.onChange.bind(this);
    this.cancel = this.cancel.bind(this);
    this.confirm = this.confirm.bind(this);
    this.updateDropdownItem = this.updateDropdownItem.bind(this);
    this.openDialog = this.openDialog.bind(this);
    this.signIn = this.signIn.bind(this);
    this.getImages = this.getImages.bind(this);
  }

  getImages() {
    const { fetchImages } = this.props;
    fetchImages();
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

  signIn(creds) {
    this.setState({ showDialog: false }, () => {
      console.log("CREDS", creds)
    })
  }

  onChange(value, type) {
    this.setState({ [type]: value })
  }

  updateDropdownItem(property, value) {
    this.setState({ [property]: value })
  }

  openDialog() {
    this.setState({ showDialog: true })
  }

  render() {
    const { onChange, cancel, confirm, updateDropdownItem, openDialog, signIn, getImages } = this;
    const { emailAddress, firstName, lastName, password, selectedState, selectedPerson, showDialog } = this.state;
    const columns = [
      {
        title: 'Name',
        value: item => item.name,
        tooltip: item => item.name,
        placeholder: 'N/A'
      },
      {
        title: 'Age',
        value: item => item.age,
        tooltip: item => item.age,
        placeholder: 'N/A'
      },
      {
        title: 'Gender',
        value: item => item.gender,
        tooltip: item => item.gender,
        placeholder: 'N/A'
      }
    ]
    console.log("images? ", this.props.images)
    return (
      <div className="test-page-wrapper">
        <div className="row">
          <div className="col-12">
            <h2>Birth Plan Generator</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Input
              label="Email Address"
              floatingLabel
              value={emailAddress}
              onChange={(e) => onChange(e.target.value, 'emailAddress')}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <Input
              error
              errorMessage="Test Error"
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
        </div>
        <div className="row">
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
        </div>
        <div className="row">
          <div className="col-6 center">
              <Button onClick={cancel} buttonClassName="primary xs">Cancel</Button>
          </div>
          <div className="col-6 center">
              <Button onClick={getImages} buttonClassName="secondary xs">Get Images</Button>
          </div>
        </div>
        <div style={{marginTop: '1em', marginBottom: '1em'}} className="col-12">
          <Table
            data={TestingPage.tableData}
            columns={columns}
          />
        </div>
        <div className="row">
            <Checkbox label="True" checked={true} />
            <Checkbox label="False" checked={false} />
        </div>
        <div className="row">
          <div className="col-12">
            <Icon icon="Arrow" className="button" />
            <Icon icon="Arrow" className="button" orientation="left" />
            <Icon icon="Arrow" className="button" orientation="up" />
            <Icon icon="Arrow" className="button" orientation="right" />
            <Icon icon="Home" className="button" />
            <Icon icon="User" className="button" />
            <Icon icon="Share" className="button" />
            <Icon icon="Cog" className="button" />
            <Icon icon="Trash" className="button" />
            <Icon icon="Pencil" className="button" />
            <Icon icon="Lock" className="button" />
            <Icon icon="Envelope" className="button" />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <span className="link" onClick={openDialog}>Log In</span>
          </div>
        </div>
        <Dialog show={showDialog} title={<div style={{textAlign: "center"}}><h2>Birth Plan Generator</h2></div>}>
          <LoginForm signIn={signIn} />
        </Dialog>
      </div>
    );
  }
}
