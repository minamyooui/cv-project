import React, {Component} from 'react';
import Input from './Input';

class WorkForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      company: '',
      position: '',
      text: '',
      startDate: '',
      endDate: '',
      edit: true,
    }
  }

  handleCompanyChange = (company) => {
    this.setState({company});
  }

  handlePositionChange = (position) => {
    this.setState({position});
  }

  handleTextChange = (e) => {
    this.setState({ text: e.target.value });
  }

  handleStartDateChange = (startDate) => {
    this.setState({ startDate });
  }

  handleEndDateChange = (endDate) => {
    this.setState({ endDate });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ edit: false });
  }

  handleEdit = () => {
    this.setState({ edit: true });
  }

  renderEdit = () => {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input 
          type='text' 
          label='Company Name: ' 
          handleChange={this.handleCompanyChange}
          value={this.state.company}
        />
        <Input 
          type='text' 
          label='Position Title: ' 
          handleChange={this.handlePositionChange}
          value={this.state.position}
        />
        <label>
          Responsibilities:
          <textarea 
            onChange={this.handleTextChange}
            value={this.state.text}
          ></textarea>
        </label>
        <Input 
          type='date'
          label='Start Date: ' 
          handleChange={this.handleStartDateChange}
          value={this.state.startDate}
        />
        <Input 
          type='date' 
          label='End Date: ' 
          handleChange={this.handleEndDateChange}
          value={this.state.endDate}  
        />
        <button type='submit'>Submit</button>
      </form>
    )
  }

  renderNonEdit = () => {
    return (
      <div>
        <div>
          <p>Company Name: {this.state.company}</p>
        </div>
        <div>
          <p>Position Title: {this.state.position}</p>
        </div>
        <div>
          <p>Responsibilities: </p>
          <p>{this.state.text}</p>
        </div>
        <div>
          <p>Start Date: {this.state.startDate}</p>
        </div>
        <div>
          <p>End Date: {this.state.endDate}</p>
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

export default WorkForm;