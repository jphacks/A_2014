import React from 'react';
import './Modal.scss';

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
        <div className='modal'>
          <div className='modal-inner'>
            <div className='modal-header'></div>
            <div className='modal-introduction'>
              <h2>使い方</h2>
              <p>{this.props.introduction}</p>
            </div>
            <button
              className='modal-close-btn'
              onClick={() => { this.handleClickClose() }}
            >
              とじる
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className='help'>
        <div
          className='help'
          onClick={() => { this.handleClickLesson() }}
        >
          <p style={{ textAlign: 'end' }}>{this.props.name}</p>
        </div>
        {modal}
      </div>
    );
  }
}

export default Modal;
