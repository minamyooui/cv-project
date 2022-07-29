import React, {Component} from 'react';
import Input from './Input';

class GenInfo extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      phone: '',
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

  renderEdit() {
    return (
      <div>
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
      </div>
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
      </div>
    )
  }
  render() {
    if (this.props.edit) {
      return this.renderEdit();
    }
    return this.renderNonEdit();
  }
  
}

export default GenInfo;