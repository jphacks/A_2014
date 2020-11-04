import { Link } from "react-router-dom";
import Button from "./component/Button";
import Img from "./component/Img";
import Modal from "./component/Modal";
import styles from "./Page1.scss";

const Page1 = () => {
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
            <img alt='map' src='src/assets/map-japan-icon-green.png'/>
            <button>やさしい</button>
            <button>鬼</button>
            <button>カスタム</button>
        </div>
    )
}

export default Page1;
