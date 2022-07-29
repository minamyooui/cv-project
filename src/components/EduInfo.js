import React, {Component} from 'react';
import Input from './Input';

class EduInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      major: '',
      startDate: '',
      endDate: '',
    };
  }

  handleNameChange = (name) => {
    this.setState({name});
  }

  handleMajorChange = (major) => {
    this.setState({major});
  }

  handleStartDateChange = (startDate) => {
    this.setState({ startDate });
  }

  handleEndDateChange = (endDate) => {
    this.setState({ endDate });
  }

  renderEdit = () => {
    return (
      <div>
        <Input 
          type='text' 
          label='School Name: ' 
          handleChange={this.handleNameChange}
          value={this.state.name}
        />
        <Input 
          type='text' 
          label='Major: ' 
          handleChange={this.handleMajorChange}
          value={this.state.major}
        />
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
      </div>
    )
  }

  renderNonEdit = () => {
    return (
      <div>
        <div>
          <p>School Name: {this.state.name}</p>
        </div>
        <div>
          <p>Major: {this.state.major}</p>
        </div>
        <div>
          <p>Start Date: {this.state.startDate}</p>
        </div>
        <div>
          <p>End Date: {this.state.endDate}</p>
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

export default EduInfo;