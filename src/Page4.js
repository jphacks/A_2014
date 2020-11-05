import React from "react";
import { Link } from "react-router-dom";
import Button from "./component/Button";
import Img from "./component/Img";
import './App.scss';

const Page4 = (props) => {
    return (
        <span className="frame">
            <nav>
                <ul>
                    <li>
                        <Link to="/A_2014/page1">home</Link>
                        {/* <button onClick={() => props.history.goBack()}>戻る</button> */}
                    </li>
                </ul>
            </nav>
            <p>{props.location.state.value.level !== undefined ? String(props.location.state.value.level) : '1'}</p>
            <p>{props.location.state.value.filter.road !== undefined ? String(props.location.state.value.filter.road) : 'false'}</p>
            <p>{props.location.state.value.filter.station !== undefined ? String(props.location.state.value.filter.station) : 'false'}</p>
            <p>{props.location.state.value.filter.city !== undefined ? String(props.location.state.value.filter.city) : 'false'}</p>
            <p>{props.location.state.value.dart !== undefined ? String(props.location.state.value.dart) : 'false'}</p>
            <div className="container">
                <div className="result">
                    <h1>"今日の目的地"</h1>
                    <h2>"結果を埋め込みたい"</h2>
                    <div className="area-text">
                        <p>"aaa"</p>
                    </div>
                    <div className="Gmap">
                        <Map location="宮城県仙台市太白区萩が丘" />
                    </div>
                </div>
                <img alt="pic" src={logo} />
                <TwShare className="Tw_share" />

            </div>
        </span >
    )
}

export default Page4;
