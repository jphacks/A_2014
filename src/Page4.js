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

    const test=() =>{
           

            // APIキー
            var key = "ZGUU4HOyL9KDETFUh8lX7lzxQDz9EAdB2W3CNSu0";
            // エンドポイント
            var url = "https://opendata.resas-portal.go.jp/"
            url += "api/v1/cities";
            var request = new XMLHttpRequest();
            request.open('GET', url, true);
            request.responseType = 'json';
            // APIリクエストヘッダー
            request.setRequestHeader("Content-Type", "application/json");
            request.setRequestHeader("X-API-KEY", key);
            var City
            var prefCode
            request.onload =  function () {
                let data = this.response;
                var rand = Math.floor(Math.random() * data.result.length);//配列添え字乱数
                console.log(data);
                console.log(data.result.length);
                console.log(rand);
                City=data.result[rand].cityName;
                prefCode=data.result[rand].prefCode;
                document.getElementById("result").innerText = City;
                
            };
            request.send();

            //prefをとりだすよ
            const prefList = {
            1:"北海道",
            2:"青森"    
            };
            var Pref=prefList[1];
            var ADDR=Pref+City

            return ADDR
    }
      
            

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
                        <p>{test()}</p>
                        <img className="result-img" alt="pic" src={logo} />
                        <span className="area-text" id="result"></span>
                        <div className="Gmap">
                            <Map location={test()} />

                        </div>
                       
                    </div>
                    <TwShare className="Tw_share" />
                </div>
            </div>
        </span >
    )
}

export default Page4;
