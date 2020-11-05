import React from "react";
import { Link } from "react-router-dom";
import Button from "./component/Button";
import Img from "./component/Img";
import "./Page4.scss";
import TwShare from "./component/Share";
import logo from "./assets/jap.jpg";

const Page4 = () => {
    return (
    <div>
        <span>
            <nav>
                <ul>
                    <li>
                        <Link to="/A_2014/">Page1</Link>
                    </li>
                </ul>
            </nav>
            <div>Page4</div>
        </span >
        <div className="container">
            <div className="result">
                <h1>"今日の目的地"</h1>
                <h2>"結果を埋め込みたい"</h2>
                <div className="area-text">
                    <p>"aaa"</p>
                </div>        
                <div className="Gmap">
                    <script>
                    </script>
                </div>
            </div>
          <img alt="pic" src={logo}/>
          <TwShare className="Tw_share"/>

        </div> 
    </div>
    )
}

export default Page4;
