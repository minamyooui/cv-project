import React, {Component} from 'react';
import Section from './components/Section';
import GenInfo from './components/GenInfo';
import EduInfo from './components/EduInfo';
import WorkInfo from './components/WorkInfo';

class App extends Component {
  constructor() {
    super();

    this.state = {
      edit: true
    }
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
      <div>
        <form onSubmit={this.handleSubmit}>
          <Section name='General Info'>
            <GenInfo edit={this.state.edit} />
          </Section>
          <Section name='Education'>
            <EduInfo edit={this.state.edit} />
          </Section>
          <Section name='Work Experience'>
          </Section>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }

  renderNonEdit = () => {
    return (
      <div>
        <div>
          <Section name='General Info'>
            <GenInfo edit={this.state.edit} />
          </Section>
          <Section name='Education'>
            <EduInfo edit={this.state.edit} />
          </Section>
          <Section name='Work Experience'>
          </Section>
          <button type='button' onClick={this.handleEdit}>Edit</button>
        </div>
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

export default App;
