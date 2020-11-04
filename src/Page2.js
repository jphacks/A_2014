import { Link } from "react-router-dom";
import Button from "./component/Button";
import Img from "./component/Img";
import Modal from "./component/Modal";
import Slider from "./component/Slider";
import "./Page2.scss";

const Page2 = () => {
    return (
        <div>
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
            <Img
                alt='pic'
                src='/Users/hoshikawa/workspace/A_2014/public/assets/jap.jpg'
            />
             <Slider
                name='田舎度'
            />
             <Button
                name='なげる'
            />
            <Modal
                name='help'
                introduction='aaaaa'
            />
        </div>
    )
}

export default Page2;
