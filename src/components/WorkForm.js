import React, { useState } from 'react';
import Input from './Input';

function WorkForm () {
  
  const [state, setState] = 
    useState({
      company: '',
      position: '',
      text: '',
      startDate: '',
      endDate: '',
      edit: true,
    });

  const handleCompanyChange = (company) => {
    setState({...state, company});
  }

  const handlePositionChange = (position) => {
    setState({...state, position});
  }

  const handleTextChange = (e) => {
    setState({...state, text: e.target.value });
  }

  const handleStartDateChange = (startDate) => {
    setState({...state, startDate });
  }

  const handleEndDateChange = (endDate) => {
    setState({...state, endDate });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setState({...state, edit: false });
  }

  const handleEdit = () => {
    setState({...state, edit: true });
  }

  const renderEdit = () => {
    return (
      <form onSubmit={handleSubmit} className='work info'>
        <Input 
          type='text' 
          label='Company Name: ' 
          handleChange={handleCompanyChange}
          value={state.company}
        />
        <Input 
          type='text' 
          label='Position Title: ' 
          handleChange={handlePositionChange}
          value={state.position}
        />
        <label>
          Responsibilities:
          <textarea 
            onChange={handleTextChange}
            value={state.text}
          ></textarea>
        </label>
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
      <div className='work info'>
        <div>
          <p>Company Name: {state.company}</p>
        </div>
        <div>
          <p>Position Title: {state.position}</p>
        </div>
        <div>
          <p>Responsibilities: </p>
          <p>{state.text}</p>
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

export default WorkForm;