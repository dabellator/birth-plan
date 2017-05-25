import React, { Component } from 'react';
import Button from './Button';
import Input from './Input';
import DropdownInput from './DropdownInput';
import Shadow from './Shadow';
import Table from './Table';
import TableBody from './TableBody';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import TableHeaderColumn from './TableHeaderColumn';
import TableBodyColumn from './TableBodyColumn';
import Checkbox from './Checkbox';
import Icon from './Icon';
import LoginForm from './LoginForm';
import Dialog from './Dialog';

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
      selectedPerson: '',
      showDialog: false
    }
    this.onChange = this.onChange.bind(this);
    this.cancel = this.cancel.bind(this);
    this.confirm = this.confirm.bind(this);
    this.updateDropdownItem = this.updateDropdownItem.bind(this);
    this.openDialog = this.openDialog.bind(this);
    this.signIn = this.signIn.bind(this);
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
    const { onChange, cancel, confirm, updateDropdownItem, openDialog, signIn } = this;
    const { emailAddress, firstName, lastName, password, selectedState, selectedPerson, showDialog } = this.state
    return (
      <div className="test-page-wrapper">
        {/*<div className="row">
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
              <Button onClick={confirm} buttonClassName="secondary xs">Create</Button>
          </div>
        </div>
        <div style={{marginTop: '1em', marginBottom: '1em'}} className="col-12">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderColumn tooltip="header column 1">Column 1</TableHeaderColumn>
                <TableHeaderColumn tooltip="header column 2">Column 2</TableHeaderColumn>
                <TableHeaderColumn tooltip="header column 3">Column 3</TableHeaderColumn>
                <TableHeaderColumn tooltip="header column 4">Column 4</TableHeaderColumn>
                <TableHeaderColumn tooltip="header column 5">Column 5</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableBodyColumn tooltip="body column 1, row 1">Row 1</TableBodyColumn>
                <TableBodyColumn tooltip="body column 2, row 1">Row 1</TableBodyColumn>
                <TableBodyColumn tooltip="body column 3, row 1">Row 1</TableBodyColumn>
                <TableBodyColumn tooltip="body column 4, row 1">Row 1</TableBodyColumn>
                <TableBodyColumn tooltip="body column 5, row 1">Row 1</TableBodyColumn>
              </TableRow>
              <TableRow>
                <TableBodyColumn tooltip="body column 1, row 2">Row 2</TableBodyColumn>
                <TableBodyColumn tooltip="body column 2, row 2">Row 2</TableBodyColumn>
                <TableBodyColumn tooltip="body column 3, row 2">Row 2</TableBodyColumn>
                <TableBodyColumn tooltip="body column 4, row 2">Row 2</TableBodyColumn>
                <TableBodyColumn tooltip="body column 5, row 2">Row 2</TableBodyColumn>
              </TableRow>
              <TableRow>
                <TableBodyColumn tooltip="body column 1, row 3">Row 3</TableBodyColumn>
                <TableBodyColumn tooltip="body column 2, row 3">Row 3</TableBodyColumn>
                <TableBodyColumn tooltip="body column 3, row 3">Row 3</TableBodyColumn>
                <TableBodyColumn tooltip="body column 4, row 3">Row 3</TableBodyColumn>
                <TableBodyColumn tooltip="body column 5, row 3">Row 3</TableBodyColumn>
              </TableRow>
              <TableRow>
                <TableBodyColumn tooltip="body column 1, row 4">Row 4</TableBodyColumn>
                <TableBodyColumn tooltip="body column 2, row 4">Row 4</TableBodyColumn>
                <TableBodyColumn tooltip="body column 3, row 4">Row 4</TableBodyColumn>
                <TableBodyColumn tooltip="body column 4, row 4">Row 4</TableBodyColumn>
                <TableBodyColumn tooltip="body column 5, row 4">Row 4</TableBodyColumn>
              </TableRow>
              <TableRow>
                <TableBodyColumn tooltip="body column 1, row 5">Row 5</TableBodyColumn>
                <TableBodyColumn tooltip="body column 2, row 5">Row 5</TableBodyColumn>
                <TableBodyColumn tooltip="body column 3, row 5">Row 5</TableBodyColumn>
                <TableBodyColumn tooltip="body column 4, row 5">Row 5</TableBodyColumn>
                <TableBodyColumn tooltip="body column 5, row 5">Row 5</TableBodyColumn>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <Checkbox label="True" checked={true} />
        <Checkbox label="False" checked={false} />
        <div>
          <Icon icon="Arrow" className="button" />
          <Icon icon="Arrow" className="button" orientation="left" />
          <Icon icon="Arrow" className="button" orientation="up" />
          <Icon icon="Arrow" className="button" orientation="right" />
          <Icon icon="Home" className="button" />
          <Icon icon="User" className="button" />
          <Icon icon="Share"className="button"  />
          <Icon icon="Cog" className="button" />
          <Icon icon="Trash" className="button" />
          <Icon icon="Pencil" className="button" />
          <Icon icon="Lock" className="button" />
          <Icon icon="Envelope" className="button" />
        </div>
        <div>
          {TestingPage.people.map((person, i) => {
            return <div key={i} tabIndex='0' className="col-3 tile"><div style={{width: '100%', height: '200px'}}><Shadow>{person}</Shadow></div></div>})}
        </div>*/}
        <span className="link" onClick={openDialog}>Log In</span>
        <Dialog show={showDialog} title={<div style={{textAlign: "center"}}><h2>Birth Plan Generator</h2></div>}>
          <LoginForm signIn={signIn} />
        </Dialog>
      </div>
    );
  }
}
