import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Device: React.FC = () => {

    const SERVICE_UUID: string = "4d187505-c8a0-2582-67cf-710f4840d285";
    const CHARACTERISTIC_UUID: string = "0c98d155-e5db-80a6-b159-2a045646a184";

    useEffect(() => {
    })

    const connect = () => {
        navigator.bluetooth.requestDevice({
            filters: [
                { services: [SERVICE_UUID] },
                { name: "ESP32" }
            ]
        }).then(device => {
            if (device.gatt) {
                console.log(device.gatt);
                return device.gatt.connect()
            }
        }).then(server => {
            if (server) {
                console.log(server);
                return server.getPrimaryService(SERVICE_UUID)
            }
        }).then(service => {
            if (service) {
                console.log(service);
                return service.getCharacteristic(CHARACTERISTIC_UUID)
            }
        }).then(characteristic => {
            if (characteristic) {
                console.log(characteristic);
                setNotifications(characteristic)
            }
        }).catch(error => console.log(error))
    }

    const setNotificationsHandler = (event: any) => {
        console.log(event.target.value);
        const value = event.target.value
        const decoder = new TextDecoder('utf-8')
        const str = decoder.decode(value)
        console.log(str)
        // Nefry BTからのデータを表示
        const ele = document.getElementById("data_text");
        if (ele) ele.innerHTML = str;
    }

    const setNotifications = (characteristic: any) => {
        characteristic.addEventListener('characteristicvaluechanged', setNotificationsHandler)
        characteristic.startNotifications()
            .catch((error: any) => {
                // Remove Event
                characteristic.removeEventListener('characteristicvaluechanged', setNotificationsHandler)
                console.error(error)
            });
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
                {/* <button id="scan" onClick={scan}>Scan</button> */}
                <div id="device_name">a</div>
                {/* <button id="connect" onClick={connect}>Connect</button> */}
                {/* <button id="read" onClick={read}>Read</button> */}
                <div id="data_text">0</div>
                <div id="status">0</div>
                <button id="startNotifications" onClick={connect}>Start Notify</button>
                {/* <div>
                    <div id="x">0</div>
                    <div id="y">0</div>
                    <div id="z">0</div>
                </div>
                <div>
                    <div id="maxx">0</div>
                    <div id="maxy">0</div>
                    <div id="maxz">0</div>
                </div> */}
            </div>
        </span >
    )
}

export default Device;
