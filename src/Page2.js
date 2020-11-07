import React, { useState } from "react";
import { Link } from "react-router-dom";
import Img from "./component/Img";
import Modal from "./component/Modal";
import Slider from "./component/Slider";
import Toggle from "./component/Toggle";
import Button from '@material-ui/core/Button';
import './App.scss';
import logo from './assets/map_japan.png';
import HelpRoundedIIcon from '@material-ui/icons/Help';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import IconButton from '@material-ui/core/IconButton';

const Page2 = (props) => {
    const [data, setData] = React.useState({
        road: false,
        station: false,
        city: false
    });

    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.checked });
    };

    const onClickChange = (event) => {
        props.history.push({
            pathname: '/A_2014/page3',
            state: {
                value: {
                    level: props.location.state !== undefined ? props.location.state.value.level !== undefined ? props.location.state.value.level : 1 : 1,
                    filter: data
                }
            }
        });
    }

    return (
        <span className="frame">
            <Modal
                style={{ position: 'fixed' }}
                name={<IconButton ><HelpRoundedIIcon fontSize="large" color="primary" /></IconButton>}
                introduction='はじめまして！僕は,つるの鶴野ヒトーシだよ。このアプリであなたの行き先を悩まずに決めちゃいましょう！まずは旅先の難易度を選んでね！'
            />
            {/*             <Img
                alt='pic'
                src='/Users/hoshikawa/workspace/A_2014/public/assets/jap.jpg'
            /> */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <img src={logo} style={{
                    width: '70%', marginTop: '5vh',
                    filter: 'drop-shadow(3px 5px 0px rgba(0, 0, 0, 0.9))'
                }} />
                <div style={{ marginTop: '5vh' }}>どこを目的地にしますか？</div>
                <FormGroup style={{ marginTop: '2vh', marginBottom: '5vh' }}>
                    {/* <Slider
                    name='田舎度'
                /> */}
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={data.road}
                                onChange={handleChange}
                                name='road'
                                disabled
                            />
                        }
                        label="道の駅"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={data.station}
                                onChange={handleChange}
                                name='station'
                                disabled
                            />
                        }
                        label="駅"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={data.city}
                                onChange={handleChange}
                                name='city'
                                checked
                                disabled
                            />
                        }
                        label="まち"
                    />
                </FormGroup>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={onClickChange}
                    size="large"
                    style={{ width: '200px', margin: 'auto' }}
                >なげる</Button>
            </div>
        </span>
    )
}

export default Page2;
