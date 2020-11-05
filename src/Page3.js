import { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "./component/Button";
import Img from "./component/Img";
import Modal from "./component/Modal";
import "./Page3.scss";
import Arrow from './assets/arrow.png';


const Page3 = () => {
    useEffect(() => {
        deviceMotionRequest();
        deviceOrientationRequest();
    })


    var max = { x: 0, y: 0, z: 1000, yMax: 110, yMin: 70, xMin: 0 }
    var state = 0;
    var deg = 90
    var rotate = 'rotate(' + String(deg) + 'deg)';

    const style = {
        arrow: {
            bottom: '50px',
            left: '15vw',
            position: 'absolute',
            height: '20vw',
            // backgroundColor: 'red',
            'WebkitTransform': rotate,
            'MozTransform': rotate,
            'OTransform': rotate,
            'MsTransform': rotate,
            transform: rotate,
            transitionDuration: '0.4s',
            filter: 'drop-shadow(8px 45px 5px rgba(0, 0, 0, .8))'
        }
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
            alert('event.accelerationIncludingGravity is null');
            return;
        }
        if (state === 0 && parseInt(String(event.accelerationIncludingGravity.x)) >= 8
            && parseInt(String(event.accelerationIncludingGravity.y)) > -2
            && parseInt(String(event.accelerationIncludingGravity.y)) <= 2
            && parseInt(String(event.accelerationIncludingGravity.z)) > -2
            && parseInt(String(event.accelerationIncludingGravity.z)) <= 2) {
            setState(1);
            const arrow = document.getElementById("arrow");
            if (arrow !== null) arrow.style.bottom = '50px';
            if (arrow !== null) arrow.style.left = '15vw';
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
            if (arrow !== null) arrow.style.bottom = '-10px';
            setState(2);
        } else if (state === 2) {
            const arrow = document.getElementById("arrow");
            if (arrow !== null) arrow.style.bottom = String(-event.accelerationIncludingGravity.y / 3.00 * 100 + 10) + 'px';
        } else {
            setLog("NO");
        }

        if (state === 2 && parseInt(String(event.accelerationIncludingGravity.x)) > -2
            && parseInt(String(event.accelerationIncludingGravity.y)) <= -6
            && parseInt(String(event.accelerationIncludingGravity.z)) > -2) {
            setState(3);
            setLog("OK");
            const arrow = document.getElementById("arrow");
            if (arrow !== null) arrow.style.bottom = '68vh';
            if (arrow !== null) arrow.style.left = String((((Number(arrow.style.transform.split('(')[1].split('d')[0]) - max.yMin) / (max.yMax - max.yMin)) - 0.5) * 35 + 15) + 'vw';
            if (arrow !== null) arrow.style.transitionDuration = '0.3s';
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
            alert('event is null');
            return;
        }
        if (state === 1 || state == 2) {
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
            console.log(ios_ua.match(/iPhone OS (\w+){1,3}/g));
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

        if (ios_ver() !== -1 && DeviceMotionEvent && typeof DeviceOrientationEvent.requestPermission === 'function') {
            DeviceMotionEvent.requestPermission()
                .then(permissionState => {
                    if (permissionState === 'granted') {
                        window.addEventListener("devicemotion", getAcceleration, false)
                    }
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
            alert('DeviceOrientationEvent.requestPermission is not found')
        }
    }

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
            {/* <div>
                <span>{String(and_ver())}</span>
                <span>{String(ios_ver())}</span>
            </div>
            <div id="log">NO</div>
            <div id="state">0</div>
            <div>
                <div id="x">0</div>
                <div id="y">0</div>
                <div id="z">0</div>
            </div>
            <div>
                <div id="maxx">0</div>
                <div id="maxy">0</div>
                <div id="maxz">0</div>
            </div>
            <div>
                <div id="alpha">0</div>
                <div id="beta">0</div>
                <div id="gamma">0</div>
            </div> */}
            <div style={{ position: 'absolute', bottom: 0, width: '100%', height: '10%', padding: 'auto', margin: 'auto' }} >
                <img alt="" id="arrow" src={Arrow} style={style.arrow} />
            </div>
            <a href="https://www.vecteezy.com/free-vector/dart">Dart Vectors by Vecteezy</a>
        </span >
    )
}

export default Page3;
