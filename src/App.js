import React, {Component} from 'react';
import Section from './components/Section';
import GenInfo from './components/GenInfo';
import EduInfo from './components/EduInfo';
import WorkInfo from './components/WorkInfo';
import './styles/style.css';

class App extends Component {

  render() {
    return (
      <div id='main'>
        <h1>CV App</h1>
        <Section name='General Info'>
          <GenInfo />
        </Section>
        <Section name='Education'>
          <EduInfo />
        </Section>
        <Section name='Work Experience'>
          <WorkInfo />
        </Section>
      </div>
    )
  } 
}

export default App;
