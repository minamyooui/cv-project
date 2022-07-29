import React, {Component} from 'react';

class Section extends Component {
  render() {
    const { name } = this.props;
    return (
      <div className='section'>
        <h2>{name}</h2>
        {this.props.children}
      </div>
    )
  }
  
}

export default Section;