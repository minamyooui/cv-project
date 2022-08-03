import React, { useState } from 'react';
import Input from './Input';

function GenInfo () {

  const [state, setState] = 
    useState({
      name: '',
      email: '',
      phone: '',
      edit: true,
    });

  const handleNameChange = (name) => {
    setState({ ...state, name });
  }

  const handleEmailChange = (email) => {
    setState({ ...state, email });
  }

  const handlePhoneChange = (phone) => {
    setState({ ...state, phone });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setState({ ...state, edit: false});
  }

  const handleEdit = () => {
    setState({ ...state, edit: true});
  }

  function renderEdit() {
    return (
      <form onSubmit={handleSubmit} className='info'>
        <Input 
          type='text' 
          label='Name: ' 
          value={state.name}
          handleChange={handleNameChange}  
        />
        <Input 
          type='email' 
          label='Email: ' 
          value={state.email}
          handleChange={handleEmailChange}  
        />
        <Input 
          type='tel' 
          label='Phone Number: ' 
          value={state.phone}
          handleChange={handlePhoneChange}  
        />
        <button type='submit'>Submit</button>
      </form>
    )
  }

  function renderNonEdit() {
    return (
      <div className='info'>
        <div>
          <p>Name: {state.name}</p>
        </div>
        <div>
          <p>Email: {state.email}</p>
        </div>
        <div>
          <p>Phone Number: {state.phone}</p>
        </div>
        <button type='button' onClick={handleEdit}>Edit</button>
      </div>
    )
  }
  
  if (state.edit) {
    return renderEdit();
  }
  return renderNonEdit();
  
}

export default GenInfo;