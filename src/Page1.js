import { Link } from "react-router-dom";
// import Button from "./component/Button";
import Img from "./component/Img";
import Modal from "./component/Modal";
import logo from './assets/main.png';
import './App.scss';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import HelpRoundedIIcon from '@material-ui/icons/Help';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));


const Page1 = (props) => {

    const onClickChange = (event, id) => {
        props.history.push({
            pathname: '/A_2014/page2',
            state: {
                value: { level: id }
            }
        });
    }

    return (
        <span className="frame">
            <Modal
                style={{ position: 'fixed' }}
                name={<IconButton ><HelpRoundedIIcon color="primary" /></IconButton>}
                introduction='はじめまして！僕は,つるの鶴野ヒトーシだよ。このアプリであなたの行き先を悩まずに決めちゃいましょう！まずは旅先の難易度を選んでね！'
            />
            {/*             <Img
                alt='pic'
                src='./assets/jap.jpg'
            /> */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ position: 'absolute', width: '100%', textAlign: 'center', top: '20vh', zIndex: 97, fontSize: 'xx-large' }}>ツルのひと押し</div>
                <img src={logo} style={{ width: '100%', marginTop: '10vh' }} />
                <ButtonGroup
                    orientation="vertical"
                    aria-label="vertical contained primary button group"
                    variant="text"
                    size="large"
                    style={{ width: '50%', zIndex: 98 }}
                >
                    <Button onClick={(event) => onClickChange(event, 0)}>しんせつ</Button>
                    <Button onClick={(event) => onClickChange(event, 1)}>おに</Button>
                </ButtonGroup>
            </div>
        </span >
    )
}

export default Page1;
