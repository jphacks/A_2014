import { Link } from "react-router-dom";
import Button from "./component/Button";
import Img from "./component/Img";
import Modal from "./component/Modal";
import Slider from "./component/Slider";
import Toggle from "./component/Toggle";
import Checkbox from "./component/Checkbox";
import "./Page2.scss";
import logo from './assets/map_japan.png';

const Page2 = () => {
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
                        <Link to="/A_2014/page3">Page3</Link>
                    </li>
                </ul>
            </nav>
            <div>Page2</div>
            </span >
{/*             <Img
                alt='pic'
                src='/Users/hoshikawa/workspace/A_2014/public/assets/jap.jpg'
            /> */}
            <img src={logo}/>
            <Slider
                name='田舎度'
            />
            <Checkbox
                text='道の駅'
            />
            <Checkbox
                text='駅'
            />
            <Checkbox
                text='まち'
            />

             <Button
                name='なげる'
            />

        </div>
    )
}

export default Page2;
