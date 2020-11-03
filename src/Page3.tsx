import React from "react";
import { Link } from "react-router-dom";

const Page3: React.FC = () => {
    return (
        <span>
            <nav>
                <ul>
                    <li>
                        <Link to="/A_2014/">Page1</Link>
                    </li>
                </ul>
            </nav>
            <div>Page3</div>
        </span >
    )
}

export default Page3;