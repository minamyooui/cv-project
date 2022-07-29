import React, {Component} from 'react';
import WorkForm from './WorkForm';

class WorkInfo extends Component {
  render() {
    return (
      <div>
        <WorkForm />
        <WorkForm />
        <WorkForm />
      </div>
    )
  }
}

export default WorkInfo;