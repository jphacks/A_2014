import { Link } from "react-router-dom";
import Button from "./component/Button";
import Img from "./component/Img";
import Modal from "./component/Modal";
import "./Page1.scss";
import logo from './assets/main.png';

const Page1 = () => {
    return (
        <div>
            <Modal
                name='help'
                introduction='はじめまして！僕は,つるの鶴野ヒトーシだよ。このアプリであなたの行き先を悩まずに決めちゃいましょう！まずは旅先の難易度を選んでね！'
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
            <div>ツルのひと押し</div>
            <img src={logo}/>
            <Button
                name='しんせつ'
            />
            <Button
                name='おに'
            />
        </div>
    )
}

export default Page1;
