import React from "react";
import { Link } from "react-router-dom";
import Page from "./component/Page";


const Page1: React.FC = () => {
    return (
        <div>
            <span>
                <nav>
                    <ul>
                        <li>
                            <Link to="/A_2014/page2">Page2</Link>
                        </li>
                    </ul>
                </nav>
                <div>Page1</div>
            </span >
            <Page />
        </div>
    )
}

export default Page1;
