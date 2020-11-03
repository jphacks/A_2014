import React from "react";
import { Link } from "react-router-dom";

const Page1: React.FC = () => {
    return (
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
    )
}

export default Page1;