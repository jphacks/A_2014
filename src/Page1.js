import { Link } from "react-router-dom";
import Button from "./component/Button";
import Img from "./component/Img";
import Modal from "./component/Modal";
import "./Page1.scss";
import logo from './assets/map_japan.png';

const Page1 = () => {
    return (
        <div>
            <Modal
                name='help'
                introduction='aaaaa'
            />
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
{/*             <Img
                alt='pic'
                src='./assets/jap.jpg'
            /> */}
            <img src={logo}/>
            <Button
                name='やさしい'
            />
            <Button
                name='おに'
            />
            <Button
                name='カスタム'
            />

        </div>
    )
}

export default Page1;
