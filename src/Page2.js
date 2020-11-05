import React, { useState } from "react";
import { Link } from "react-router-dom";
import Img from "./component/Img";
import Modal from "./component/Modal";
import Slider from "./component/Slider";
import Toggle from "./component/Toggle";
import Button from '@material-ui/core/Button';
import './App.scss';
import logo from './assets/map_japan.png';
import HelpIcon from '@material-ui/icons/Help';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

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
                    level: props.location.state.value.level !== undefined ? props.location.state.value.level : 1,
                    filter: data
                }
            }
        });
    }

    return (
        <span className="frame">
            <Modal
                style={{ position: 'relative' }}
                name={<HelpIcon />}
                introduction='はじめまして！僕は,つるの鶴野ヒトーシだよ。このアプリであなたの行き先を悩まずに決めちゃいましょう！まずは旅先の難易度を選んでね！'
            />
            {/*             <Img
                alt='pic'
                src='/Users/hoshikawa/workspace/A_2014/public/assets/jap.jpg'
            /> */}
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <img src={logo} style={{ width: '80%', overflow: 'visible', marginBottom: 0, marginTop: '70px' }} />
                <FormGroup>
                    {/* <Slider
                    name='田舎度'
                /> */}
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={data.road}
                                onChange={handleChange}
                                name='road'
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
