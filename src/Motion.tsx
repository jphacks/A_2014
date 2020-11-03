import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Motion: React.FC = () => {
    useEffect(() => {
        deviceMotionRequest();
        // deviceOrientationRequest();
    })

    var max = { x: 0, y: 0, z: 1000 }
    var state: number = 0

    const setLog = (log: string) => {
        const ele = document.getElementById("log");
        if (ele !== null) ele.innerText = log;
    }

    const setState = (num: number) => {
        state = num;
        const ele = document.getElementById("state");
        if (ele !== null && state === 3) ele.style.backgroundColor = "red";
        else if (ele !== null) ele.style.backgroundColor = "white";
        if (ele !== null) ele.innerText = String(num);
    }

    const getAcceleration = (event: DeviceMotionEvent) => {
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
            setLog("OK");
        } else {
            setLog("NO");
        }

        if (state === 1 && parseInt(String(event.accelerationIncludingGravity.x)) > -4
            && parseInt(String(event.accelerationIncludingGravity.y)) >= 6
            && parseInt(String(event.accelerationIncludingGravity.z)) <= 8) {
            setState(2);
            setLog("OK");
        } else {
            setLog("NO");
        }

        if (state === 2 && parseInt(String(event.accelerationIncludingGravity.x)) > -2
            && parseInt(String(event.accelerationIncludingGravity.y)) <= -6
            && parseInt(String(event.accelerationIncludingGravity.z)) > -2) {
            setState(3);
            setLog("OK");
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

        const x = document.getElementById("x")
        const y = document.getElementById("y")
        const z = document.getElementById("z")
        const maxx = document.getElementById("maxx")
        const maxy = document.getElementById("maxy")
        const maxz = document.getElementById("maxz")

        if (parseInt(String(event.accelerationIncludingGravity.x)) > max.x) max.x = parseInt(String(event.accelerationIncludingGravity.x))
        if (parseInt(String(event.accelerationIncludingGravity.y)) > max.y) max.y = parseInt(String(event.accelerationIncludingGravity.y))
        if (parseInt(String(event.accelerationIncludingGravity.z)) < max.z) max.z = parseInt(String(event.accelerationIncludingGravity.z))


        if (x !== null) x.innerText = event.accelerationIncludingGravity.x !== null ? String(parseInt(String(event.accelerationIncludingGravity.x))) : ""
        if (y !== null) y.innerText = event.accelerationIncludingGravity.y !== null ? String(parseInt(String(event.accelerationIncludingGravity.y))) : ""
        if (z !== null) z.innerText = event.accelerationIncludingGravity.z !== null ? String(parseInt(String(event.accelerationIncludingGravity.z))) : ""

        if (maxx !== null) maxx.innerText = max.x !== null ? String(max.x) : ""
        if (maxy !== null) maxy.innerText = max.y !== null ? String(max.y) : ""
        if (maxz !== null) maxz.innerText = max.z !== null ? String(max.z) : ""

        // setAcceleration({
        //     x: parseInt(String(event.accelerationIncludingGravity.x)),
        //     y: parseInt(String(event.accelerationIncludingGravity.y)),
        //     z: parseInt(String(event.accelerationIncludingGravity.z))
        // })
    };

    const getOrientation = (event: DeviceOrientationEvent) => {
        if (!event) {
            alert('event is null');
            return;
        }
        if (parseInt(String(event.beta)) >= 170 || parseInt(String(event.beta)) <= -170) setLog("OK");
        else setLog("NO");
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
            alert('DeviceMotionEvent.requestPermission is not found')
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
                        <Link to="/A_2014/">Page1</Link>
                    </li>
                </ul>
            </nav>
            <div>
                <div>
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
            </div>
        </span >
    )
}

export default Motion;