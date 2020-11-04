import React from 'react';
import './Img.scss';

class Img extends React.Component{
  render() {
    return (
      <div>
        <img className='main-img' alt={this.props.alt} src={this.props.src}></img>
      </div>
    );
  }
}

export default Img;
