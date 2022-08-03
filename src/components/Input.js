import React from 'react';

function Input (props) {
  const handleChange = (e) => {
    props.handleChange(e.target.value);
  }

  return (
    <div>
      <label>
        {props.label}
        <input 
          type={props.type} 
          onChange={handleChange}
          value={props.value}
        />
      </label>
    </div>
  )
}

export default Input;