import { Link } from "react-router-dom";
import Button from "./component/Button";
import Img from "./component/Img";
import Modal from "./component/Modal";
import "./Page3.scss";

const Page3 = () => {
    return (
        <span>
            <nav>
                <ul>
                    <li>
                        <Link to="/A_2014/page4">Page4</Link>
                    </li>
                </ul>
            </nav>
            <div>Page3</div>
        </span >
    )
}

export default Page3;
