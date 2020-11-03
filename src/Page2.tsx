import React from "react";
import { Link } from "react-router-dom";

const Page2: React.FC = () => {
    return (
        <span>
            <nav>
                <ul>
                    <li>
                        <Link to="/page3">Page3</Link>
                    </li>
                </ul>
            </nav>
            <div>Page2</div>
        </span >
    )
}

export default Page2;