import React from 'react';
import './Button.scss';
import Buttons from '@material-ui/core/Button';

class Button extends React.Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (this.props.onClick) this.props.onClick(event);
  }

  render() {
    return (
      <Buttons onClick={this.handleClick}>{this.props.name}</Buttons>
    );
  }
}

export default Button;
