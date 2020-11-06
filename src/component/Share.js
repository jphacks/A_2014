//ライブラリのインストール必要
//npm install react-share --save
import React from 'react';
import './Share.scss';
import {
  TwitterShareButton,
  TwitterIcon
} from 'react-share'

const Tw_share = (props) => {
  return (
    <div id="share_button">
      {/* {props.location.state.url ? */}
      <TwitterShareButton url={["https://jphacks.github.io/A_2014/"]} title={"ツルのひと押しアプリで旅の行き先が決まったよ! #JPHACK2020"}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      {/* :
        <></>
      } */}
    </div>
  );
}

export default Tw_share;
