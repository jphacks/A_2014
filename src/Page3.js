import { useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import Img from "./component/Img";
import Modal from "./component/Modal";
import Arrow from './assets/arrow.png';
import './App.scss';
import map from './assets/map_japan.png';
import Button from '@material-ui/core/Button';

const Page3 = (props) => {
    useEffect(() => {
        deviceMotionRequest();
        deviceOrientationRequest();
        setEventListener();
        navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;

    })

    const toPage = (value) => {
        props.history.push({
            pathname: '/A_2014/page4',
            state: {
                value: {
                    level: props.location.state.value.level !== undefined ? props.location.state.value.level : 1,
                    filter: props.location.state.value.filter !== undefined ? props.location.state.value.filter : {},
                    dart: value
                }
            }
        });
    }

    const sleep = msec => new Promise(resolve => setTimeout(resolve, msec));

    var max = { x: 0, y: 0, z: 1000, yMax: 100, yMin: 80, xMin: 0 }
    var state = 0;
    var deg = 90
    var rotate = 'rotate(' + String(deg) + 'deg)';

    const style = {
        map: {
            position: 'fixed',
            top: '35vh',
            left: '10vw',
            // height: '90vw',
            width: '80%',
            'WebkitTransform': 'rotate(90deg)',
            'MozTransform': 'rotate(90deg)',
            'OTransform': 'rotate(90deg)',
            'MsTransform': 'rotate(90deg)',
            transform: 'rotate(90deg)',
            // filter: 'drop-shadow(-5px 10px 0px rgba(0, 0, 0, .9))',
            zIndex: '96',
            filter: 'brightness(80%)'
        },
        map2: {
            position: 'fixed',
            top: '-10vh',
            left: '30vw',
            height: '60vw',
            width: '20%',
            'WebkitTransform': 'rotate(90deg)',
            'MozTransform': 'rotate(90deg)',
            'OTransform': 'rotate(90deg)',
            'MsTransform': 'rotate(90deg)',
            transform: 'rotate(90deg)',
            // filter: 'drop-shadow(-5px 10px 0px rgba(0, 0, 0, .9))',
            zIndex: '97'
        },
        arrow: {
            left: '35vw',
            top: '85vh',
            position: 'fixed',
            height: '10vw',
            'WebkitTransform': rotate,
            'MozTransform': rotate,
            'OTransform': rotate,
            'MsTransform': rotate,
            transform: rotate,
            transitionDuration: '0.4s',
            filter: 'drop-shadow(8px 45px 5px rgba(0, 0, 0, .8))',
            zIndex: '99'
        }
    }

    const goNext = async () => {
        const arrow = document.getElementById("arrow");
        if (arrow !== null) arrow.style.top = '20vh';
        if (arrow !== null) arrow.style.transitionDuration = '0.3s';
        setState(4);
    }

    const setEventListener = () => {
        const arrow = document.getElementById("arrow");
        arrow.addEventListener('transitionend', async () => {
            if (state === 3) {
                await sleep(1000);
                setState(0);
                var value = -1;
                if (arrow !== null) value = parseInt(((parseInt(arrow.style.left.split('v')[0]) + 20) / 70.00) * 100);
                toPage(value);
            } else if (state === 4) {
                await sleep(1000);
                setState(0);
                toPage(-1);
            }
        });
    }

    const setLog = (log) => {
        const ele = document.getElementById("log");
        if (ele !== null) ele.innerText = log;
    }

    const setState = (num) => {
        state = num;
        const ele = document.getElementById("state");
        if (ele !== null && state === 3) ele.style.backgroundColor = "red";
        else if (ele !== null) ele.style.backgroundColor = "white";
        if (ele !== null) ele.innerText = String(num);
    }

    const getAcceleration = (event) => {
        if (!event.accelerationIncludingGravity) {
            // alert('event.accelerationIncludingGravity is null');
            return;
        }
        if (state === 0 && parseInt(String(event.accelerationIncludingGravity.x)) >= 8
            && parseInt(String(event.accelerationIncludingGravity.y)) > -2
            && parseInt(String(event.accelerationIncludingGravity.y)) <= 2
            && parseInt(String(event.accelerationIncludingGravity.z)) > -2
            && parseInt(String(event.accelerationIncludingGravity.z)) <= 2) {
            setState(1);
            const arrow = document.getElementById("arrow");
            if (arrow !== null) arrow.style.top = '85vh';
            if (arrow !== null) arrow.style.left = '35vw';
            if (arrow !== null) arrow.style.transitionDuration = '0.2s';
            setLog("OK");
        } else {
            setLog("NO");
        }

        if (state === 1 && parseInt(String(event.accelerationIncludingGravity.x)) > -4
            && parseInt(String(event.accelerationIncludingGravity.y)) >= 6
            && parseInt(String(event.accelerationIncludingGravity.z)) <= 8) {
            setLog("OK");
            const arrow = document.getElementById("arrow");
            if (arrow !== null) arrow.style.top = '95vh';
            setState(2);
        } else if (state === 2) {
            const arrow = document.getElementById("arrow");
            if (arrow !== null) arrow.style.top = String(event.accelerationIncludingGravity.y / 3.00 * 10 + 85) + 'vh';
        } else {
            setLog("NO");
        }

        if (state === 2 && parseInt(String(event.accelerationIncludingGravity.x)) > -2
            && parseInt(String(event.accelerationIncludingGravity.y)) <= -6
            && parseInt(String(event.accelerationIncludingGravity.z)) > -2) {
            setState(3);
            setLog("OK");
            if (navigator.vibrate) {
                navigator.vibrate(60);
            }
            const arrow = document.getElementById("arrow");
            if (arrow !== null) arrow.style.top = '20vh';
            if (arrow !== null) arrow.style.transitionDuration = '0.3s';
            if (arrow !== null) arrow.style.left = String((((Number(arrow.style.transform.split('(')[1].split('d')[0]) - max.yMin) / (max.yMax - max.yMin)) - 0.5) * 35 + 35) + 'vw';
        } else {
            setLog("NO");
        }

        if (state === 3 && parseInt(String(event.accelerationIncludingGravity.z)) >= 8
            && parseInt(String(event.accelerationIncludingGravity.y)) > -2
            && parseInt(String(event.accelerationIncludingGravity.y)) <= 2
            && parseInt(String(event.accelerationIncludingGravity.x)) > -2
            && parseInt(String(event.accelerationIncludingGravity.x)) <= 2) {

            setState(0);
            setLog("OK");
        } else {
            setLog("NO");
        }

        // const x = document.getElementById("x")
        // const y = document.getElementById("y")
        // const z = document.getElementById("z")
        // const maxx = document.getElementById("maxx")
        // const maxy = document.getElementById("maxy")
        // const maxz = document.getElementById("maxz")

        // if (parseInt(String(event.accelerationIncludingGravity.x)) > max.x) max.x = parseInt(String(event.accelerationIncludingGravity.x))
        // if (parseInt(String(event.accelerationIncludingGravity.y)) > max.y) max.y = parseInt(String(event.accelerationIncludingGravity.y))
        // if (parseInt(String(event.accelerationIncludingGravity.z)) < max.z) max.z = parseInt(String(event.accelerationIncludingGravity.z))


        // if (x !== null) x.innerText = event.accelerationIncludingGravity.x !== null ? String(parseInt(String(event.accelerationIncludingGravity.x))) : ""
        // if (y !== null) y.innerText = event.accelerationIncludingGravity.y !== null ? String(parseInt(String(event.accelerationIncludingGravity.y))) : ""
        // if (z !== null) z.innerText = event.accelerationIncludingGravity.z !== null ? String(parseInt(String(event.accelerationIncludingGravity.z))) : ""

        // if (maxx !== null) maxx.innerText = max.x !== null ? String(max.x) : ""
        // if (maxy !== null) maxy.innerText = max.y !== null ? String(max.y) : ""
        // if (maxz !== null) maxz.innerText = max.z !== null ? String(max.z) : ""

        // setAcceleration({
        //     x: parseInt(String(event.accelerationIncludingGravity.x)),
        //     y: parseInt(String(event.accelerationIncludingGravity.y)),
        //     z: parseInt(String(event.accelerationIncludingGravity.z))
        // })
    };

    const getOrientation = (event) => {
        if (!event) {
            // alert('event is null');
            return;
        }
        if (state === 1 || state === 2) {
            // const alpha = document.getElementById("alpha")
            // const beta = document.getElementById("beta")
            // const gamma = document.getElementById("gamma")
            const arrow = document.getElementById("arrow");

            // if (alpha !== null) alpha.innerText = event.alpha !== null ? String(parseInt(String(event.alpha))) : ""
            // if (beta !== null) beta.innerText = event.beta !== null ? String(parseInt(String(event.beta))) : ""
            // if (gamma !== null) gamma.innerText = event.gamma !== null ? String(parseInt(String(event.gamma))) : ""

            var angle = 0;
            if (parseInt(String(event.beta)) > 40) angle = 40
            else if (parseInt(String(event.beta)) < -40) angle = -40
            else angle = parseInt(String(event.beta));
            if (arrow !== null) arrow.style.transform = 'rotate(' + String(parseInt(deg + angle / 40.00 * (max.yMax - max.yMin))) + 'deg)';
        }
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

    const deviceMotionRequest = () => {

        if (ios_ver() !== -1 && DeviceMotionEvent && typeof DeviceMotionEvent.requestPermission === 'function') {
            DeviceMotionEvent.requestPermission()
                .then(permissionState => {
                    if (permissionState === 'granted') {
                        window.addEventListener("devicemotion", getAcceleration, false)
                    }
                    alert("ok");
                }).catch(console.error);
        } else if (and_ver() !== -1 || ios_ver() !== -1) {
            window.addEventListener("devicemotion", getAcceleration, false);
        } else {
            // alert('DeviceMotionEvent.requestPermission is not found')
        }
    }

    const deviceOrientationRequest = () => {
        if (ios_ver() !== -1 && DeviceOrientationEvent && typeof DeviceOrientationEvent.requestPermission === 'function') {
            DeviceOrientationEvent.requestPermission()
                .then(permissionState => {
                    if (permissionState === 'granted') {
                        window.addEventListener("deviceorientation", getOrientation, false);
                    }
                }).catch(console.error);
        } else if (and_ver() !== -1 || ios_ver() !== -1) {
            window.addEventListener("deviceorientation", getOrientation, false);
        } else {
            // alert('DeviceOrientationEvent.requestPermission is not found')
        }
    }

    return (
        <span className="frame" >
            {and_ver() === -1 && (ios_ver() !== -1 ||
                (
                    !(DeviceOrientationEvent && typeof DeviceOrientationEvent.requestPermission === 'function') ||
                    !(DeviceMotionEvent && typeof DeviceMotionEvent.requestPermission === 'function')
                )
            ) ?
                <Button
                    variant="contained"
                    size="large"
                    style={{ width: '100px', height: '40px', position: 'fixed', top: '10px', right: '10px', left: 'unset', zIndex: 98 }}
                    onClick={goNext}>
                    なげる
                    </Button>
                :
                <></>
            }
            <span style={{ position: 'fixed', left: '10vw', top: '5vh', height: '10vh', width: '80vw', backgroundColor: '#EEEEEE', filter: 'drop-shadow(-5px -1vh 0px rgba(0, 0, 0, .9))', zIndex: 96, overflow: 'hidden' }} >
                <img src={map} style={style.map2} />
            </span>
            <span style={{ position: 'fixed', height: '14vh', width: '100vw', backgroundColor: '#D2B48C' }} >
            </span>
            <div style={{ overflow: 'hidden', height: '100vh', width: '100vw', top: 0, right: 0, textAlign: 'center', verticalAlign: 'middle', backgroundColor: '#DDDDDD' }}>
                <img src={map} style={style.map} />
                <img alt="" id="arrow" src={Arrow} style={style.arrow} />
            </div>
            <a href="https://www.vecteezy.com/free-vector/dart" hidden>Dart Vectors by Vecteezy</a>
        </span >
    )
}

export default withRouter(Page3);
