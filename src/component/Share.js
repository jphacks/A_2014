//ライブラリのインストール必要
//npm install react-share --save
import React from 'react';
import './Share.scss';
import {
    TwitterShareButton,
    TwitterIcon
} from 'react-share'

class Tw_share extends React.Component{
  render() {
    return (
      <div id="share_button">
        <TwitterShareButton url={["ホームページURL"]} title={"行き先が決まったよ"}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
      </div>
    );
  }
}

export default Tw_share;


