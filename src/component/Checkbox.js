import React from 'react';
import './Checkbox.scss';

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ checked: event.target.checked });
    if (this.props.onChange) this.props.onChange(event.target.checked);
  }

  render() {
    return (
      <div>
        <div className="box">
          <input type="checkbox" checked={this.state.checked} onChange={this.handleChange} />
          <span className="check"></span>
          <label>{this.props.text}</label>
        </div>
      </div>
    );
  }
}

export default Checkbox;
