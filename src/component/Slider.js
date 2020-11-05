import React from 'react';
import './Slider.scss';

class Slider extends React.Component{
  render() {
/*     let slider = document.getElementById("myRange");
    let output = document.getElementById("demo");
    output.innerHTML = slider.value; // Display the default slider value

    // Update the current slider value (each time you drag the slider handle)
    slider.oninput = function() {
      output.innerHTML = this.value;
    } */

    return (
      <div className="slidecontainer">
{/*         <input type="range" min="1" max="100" value="50" className="slider" id="myRange"/> */}
      </div>
    );
  }
}

export default Slider;
