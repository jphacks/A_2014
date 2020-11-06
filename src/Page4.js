import React from "react";
import { Link } from "react-router-dom";
import Button from "./component/Button";
import Img from "./component/Img";
import './App.scss';
import TwShare from "./component/Share";
import logo from "./assets/jap.jpg";
import Map from "./component/Map"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const Page4 = (props) => {
    return (
        <span className="frame">
            <Link to="/A_2014/page1"
                style={{ position: 'relative' }}
            ><ArrowBackIcon /></Link>
            <div>
                <p>{props.location.state.value.level !== undefined ? String(props.location.state.value.level) : '1'}</p>
                <p>{props.location.state.value.filter.road !== undefined ? String(props.location.state.value.filter.road) : 'false'}</p>
                <p>{props.location.state.value.filter.station !== undefined ? String(props.location.state.value.filter.station) : 'false'}</p>
                <p>{props.location.state.value.filter.city !== undefined ? String(props.location.state.value.filter.city) : 'false'}</p>
                <p>{props.location.state.value.dart !== undefined ? String(props.location.state.value.dart) : 'false'}</p>
                <div className="container">
                    <div className="result">
                        <h1 className="result-title">今日の目的地</h1>
                        <img className="result-img" alt="pic" src={logo} />
                        <h2 className="result-detail">"結果を埋め込みたい"</h2>
                        <div className="area-text">
                            <p>"aaa"</p>
                        </div>
                        <div className="Gmap">
                            <Map location="宮城県仙台市太白区萩が丘" />
                        </div>
                    </div>
                    <TwShare className="Tw_share" />
                </div>
            </div>
        </span >
    )
}

export default Page4;
