import React from 'react';
import './Toggle.scss';

class Toggle extends React.Component{
  render() {
    return (
      <div id="switchArea">
          <input type="checkbox" id="switch1"/>
          <label for="switch1"><span></span></label>
          <div id="swImg"></div>
      </div>
    );
  }
}

export default Toggle;
