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

    const ios_ver = () => {
        var ios_ua = navigator.userAgent;
        if (ios_ua.indexOf("iPhone") >= 0) {
            // console.log(ios_ua.match(/iPhone OS (\w+){1,3}/g));
            var version = (RegExp.$1.replace(/_/g, '') + '00').slice(0, 3);
            return Number(version);
        } else {
            return -1;
        }
    }

    const and_ver = () => {
        var and_ua = navigator.userAgent;
        if (and_ua.indexOf("Android") >= 0) {
            var version = parseFloat(and_ua.slice(and_ua.indexOf("Android") + 8));
            return Number(version);
        } else {
            return -1
        }
    }

    return (
        <span className="frame" >
            <Modal
                style={{ position: 'fixed' }}
                name={<IconButton ><HelpRoundedIIcon fontSize="large" color="primary" /></IconButton>}
                introduction='はじめまして！僕は,つるの鶴野ヒトーシだよ。このアプリであなたの行き先を悩まずに決めちゃいましょう！まずは旅先の難易度を選んでね！'
            />
            {/*             <Img
                alt='pic'
                src='./assets/jap.jpg'
            /> */}
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', justifyContent: 'center' }}>
                {and_ver() === -1 && ios_ver() === -1 ? <span style={{ position: 'absolute', top: '10vh', width: '100%' }}>スマートフォンで開いてください</span> : <></>}
                {ios_ver() !== -1 ? <span style={{ position: 'absolute', top: '13vh', width: '100%' }}>iOSに対応していない機能があります</span> : <></>}
                <div style={{
                    position: 'relative', width: '100%', fontWeight: 600,
                    filter: 'drop-shadow(5px 5px 0px rgba(255, 255, 255, 0.9))',
                    textAlign: 'center', top: '15vh', zIndex: 97,
                    fontSize: 'xx-large', color: 'gray', letterSpacing: '0.1em'
                }}>ツル<span style={{ fontSize: 'x-large' }}>の</span>ひと押し</div>
                <img src={logo}
                    style={{
                        width: '100%', marginTop: '5vh',
                        filter: 'drop-shadow(3px 5px 0px rgba(0, 0, 0, 0.9))'
                    }} />
                <ButtonGroup
                    orientation="vertical"
                    aria-label="vertical contained primary button group"
                    variant="text"
                    size="large"
                    style={{
                        width: '50%', zIndex: 98
                    }}
                >
                    <Button onClick={(event) => onClickChange(event, 0)}>しんせつ</Button>
                    <Button onClick={(event) => onClickChange(event, 1)}>おに</Button>
                </ButtonGroup>
            </div>
        </span >
    )
}

export default Page1;
