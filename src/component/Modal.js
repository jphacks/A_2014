import React from 'react';
import './Modal.scss';
import Button from '@material-ui/core/Button';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isModalOpen: false };
  }

  handleClickLesson() {
    this.setState({ isModalOpen: true });
  }

  handleClickClose() {
    this.setState({ isModalOpen: false });
  }

  render() {
    let modal;
    if (this.state.isModalOpen) {
      modal = (
        <div className='modal' style={{
          textAlign: 'center'
        }}>
          <div className='modal-inner'>
            <div className='modal-header' style={{ fontWeight: 600 }}>使い方</div>
            <div className='modal-introduction'>
              {this.props.introduction}
            </div>
            <Button
              className='modal-close-btn'
              onClick={() => { this.handleClickClose() }}
              style={{ fontWeight: 600, color: 'gray' }}
            >
              とじる
            </Button>
          </div>
        </div>
      );
    }

    return (
      <div className='help'>
        <div
          className='help'
          onClick={() => { this.handleClickLesson() }}
          style={{
            width: '100%'
          }}
        >
          <div style={{
            textAlign: 'center'
          }}>{this.props.name}</div>
        </div>
        {modal}
      </div>
    );
  }
}

export default Modal;
