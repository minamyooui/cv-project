import React, {Component} from 'react';
import Input from './Input';

class GenInfo extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      phone: '',
      edit: true,
    };
  }

  handleNameChange = (name) => {
    this.setState({ name });
  }

  handleEmailChange = (email) => {
    this.setState({ email });
  }

  handlePhoneChange = (phone) => {
    this.setState({ phone });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ edit: false });
  }

  handleEdit = () => {
    this.setState({ edit: true });
  }

  renderEdit() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input 
          type='text' 
          label='Name: ' 
          value={this.state.name}
          handleChange={this.handleNameChange}  
        />
        <Input 
          type='email' 
          label='Email: ' 
          value={this.state.email}
          handleChange={this.handleEmailChange}  
        />
        <Input 
          type='tel' 
          label='Phone Number: ' 
          value={this.state.phone}
          handleChange={this.handlePhoneChange}  
        />
        <button type='submit'>Submit</button>
      </form>
    )
  }

  renderNonEdit() {
    return (
      <div>
        <div>
          <p>Name: {this.state.name}</p>
        </div>
        <div>
          <p>Email: {this.state.email}</p>
        </div>
        <div>
          <p>Phone Number: {this.state.phone}</p>
        </div>
        <button type='button' onClick={this.handleEdit}>Edit</button>
      </div>
    )
  }
  render() {
    if (this.state.edit) {
      return this.renderEdit();
    }
    return this.renderNonEdit();
  }
  
}

export default GenInfo;