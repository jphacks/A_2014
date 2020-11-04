import React from "react";
import { Link } from "react-router-dom";
import Button from "./component/Button";
import Img from "./component/Img";
import "./Page4.scss";

const Page4: React.FC = () => {
    return (
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
    )
}

export default Page4;
