import React, {Component} from 'react';

class Input extends Component {
  handleChange = (e) => {
    this.props.handleChange(e.target.value);
  }

  render() {
    const {label, type, value } = this.props;
    return (
      <div>
        <label>
          {label}
          <input 
            type={type} 
            onChange={this.handleChange}
            value={value}
          />
        </label>
      </div>
    )
  }
  
}

export default Input;