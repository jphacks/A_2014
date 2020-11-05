import React from 'react';
import './Toggle.scss';

class Toggle extends React.Component{
  render() {
    return (
      <div className="switchArea">
          <input type="checkbox" className="switch1"/>
          <label for="switch1"><span></span></label>
          <div className="swImg"></div>
      </div>
    );
  }
}

export default Toggle;
