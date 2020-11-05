import React from 'react';
import './Checkbox.scss';

class Checkbox extends React.Component{
  render() {
    return (
      <div>
        <div className="box">
          <input type="checkbox"/>
          <span className="check"></span>
          <label>{this.props.text}</label>
        </div>
      </div>
    );
  }
}

export default Checkbox;
