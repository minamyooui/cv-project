import React, { useState } from 'react';
import Input from './Input';

function EduInfo () {

  const [state, setState] = 
    useState({
      name: '',
      major: '',
      startDate: '',
      endDate: '',
      edit: true,
    });

  const handleNameChange = (name) => {
    setState({...state, name});
  }

  const handleMajorChange = (major) => {
    setState({...state, major});
  }

  const handleStartDateChange = (startDate) => {
    setState({ ...state, startDate });
  }

  const handleEndDateChange = (endDate) => {
    setState({ ...state, endDate });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setState({ ...state, edit: false });
  }

  const handleEdit = () => {
    setState({ ...state, edit: true });
  }

  const renderEdit = () => {
    return (
      <form onSubmit={handleSubmit} className='info'>
        <Input 
          type='text' 
          label='School Name: ' 
          handleChange={handleNameChange}
          value={state.name}
        />
        <Input 
          type='text' 
          label='Major: ' 
          handleChange={handleMajorChange}
          value={state.major}
        />
        <Input 
          type='date' 
          label='Start Date: '
          handleChange={handleStartDateChange}
          value={state.startDate} 
        />
        <Input 
          type='date' 
          label='End Date: ' 
          handleChange={handleEndDateChange}
          value={state.endDate}
        />
        <button type='submit'>Submit</button>
      </form>
    )
  }

  const renderNonEdit = () => {
    return (
      <div className='info'>
        <div>
          <p>School Name: {state.name}</p>
        </div>
        <div>
          <p>Major: {state.major}</p>
        </div>
        <div>
          <p>Start Date: {state.startDate}</p>
        </div>
        <div>
          <p>End Date: {state.endDate}</p>
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

export default EduInfo;