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
      {props.location ?
        <TwitterShareButton url={["https://jphacks.github.io/A_2014/"]} title={"『ツルのひと押し』アプリで旅の行き先が決まったよ!\n\n「" + props.location + "」\n\n#ツルひと #JPHACKS2020\n"}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        :
        <></>
      }
    </div>
  );
}

export default Tw_share;
