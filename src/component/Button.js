import React from 'react';
import './Button.scss';

class Button extends React.Component{
  render() {
    return (
      <div>
        <button className='push-button'>{this.props.name}</button>
      </div>
    );
  }
}

export default Button;
