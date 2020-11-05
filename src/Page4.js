import React from "react";
import { Link } from "react-router-dom";
import Button from "./component/Button";
import Img from "./component/Img";
import "./Page4.scss";

const Page4 = (props) => {
    return (
        <span>
            <nav>
                <ul>
                    <li>
                        <Link to="/A_2014/page3">page3</Link>
                        {/* <button onClick={() => props.history.goBack()}>戻る</button> */}
                    </li>
                </ul>
            </nav>
            <div>Page4</div>
            <p>{props.location.state.value}</p>
        </span >
    )
}

export default Page4;
