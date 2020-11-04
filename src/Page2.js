import { Link } from "react-router-dom";
import Button from "./component/Button";
import Img from "./component/Img";
import Modal from "./component/Modal";
import Slider from "./component/Slider";
import styles from "./Page2.scss";

const Page2 = () => {
    return (
        <span>
            <nav>
                <ul>
                    <li>
                        <Link to="/A_2014/page3">Page3</Link>
                    </li>
                </ul>
            </nav>
            <div>Page2</div>
        </span >
    )
}

export default Page2;
