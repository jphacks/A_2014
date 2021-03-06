import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import './App.scss';
import TwShare from "./component/Share";
import logo from "./assets/for_page4.png";
import Map from "./component/Map"
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBack';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    gridRoot: {
        justifyContent: 'space-around',
        overflow: 'scroll',
        margin: ' 0'
    },
    grid: {
        margin: '5px 0 15px',
        justifyContent: 'space-around',
        textAlign: 'center',
    },
    root: {
        maxWidth: '90vw',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    }
}));

const Page4 = (props) => {
    const [location, setLocation] = useState("");

    const url = "https://opendata.resas-portal.go.jp/"
    var count = 0;
    // add key
    var key = "";

    const classes = useStyles();

    useEffect(() => {
        if (location === "" && count === 0) getData(url, key);
        else count = 1;
        console.log(location);
    })

    // props.location.state.value.level
    // props.location.state.value.filter.road 
    // props.location.state.value.filter.station 
    // props.location.state.value.filter.city 
    // props.location.state.value.dart

    const getData = (url, key) => {
        count = 1;
        // APIキー
        // エンドポイント
        url += "api/v1/cities";
        var request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.responseType = 'json';
        // APIリクエストヘッダー
        request.setRequestHeader("Content-Type", "application/json");
        request.setRequestHeader("X-API-KEY", key);

        request.onload = function () {
            let data;
            //やさしいモードだよ
            if (props.location.state.value.level === 0) {
                data = this.response;
                let filteredData = data.result.filter(item => item.bigCityFlag === "2");
                data = filteredData
            } else {
                //おにモードだよ
                data = this.response;
                data = data.result
            }

            var rand;
            //北か南かだけの判断
            if (props.location.state.value.dart !== -1 && props.location.state.value.dart <= 50) {
                rand = Math.floor(Math.random() * data.length);//配列添え字乱数
                while (rand >= data.length * 0.5) {
                    rand = Math.floor(Math.random() * data.length);//配列添え字乱数
                }
            } else if (props.location.state.value.dart !== -1 && props.location.state.value.dart > 50) {
                rand = Math.floor(Math.random() * data.length);//配列添え字乱数
                while (rand <= data.length * 0.5) {
                    rand = Math.floor(Math.random() * data.length);//配列添え字乱数
                }
            } else {
                rand = Math.floor(Math.random() * data.length);
            }
            setLocation(plus(data[rand].cityName, data[rand].prefCode));
        }

        request.send();
    }


    const plus = (City, code) => {
        //prefをとりだすよ
        const prefList = {
            0: "北海道",
            1: "青森県",
            2: "岩手県",
            3: "宮城県",
            4: "秋田県",
            5: "山形県",
            6: "福島県",
            7: "茨城県",
            8: "栃木県",
            9: "群馬県",
            10: "埼玉県",
            11: "千葉県",
            12: "東京都",
            13: "神奈川県",
            14: "新潟県",
            15: "富山県",
            16: "石川県",
            17: "福井県",
            18: "山梨県",
            19: "長野県",
            20: "岐阜県",
            21: "静岡県",
            22: "愛知県",
            23: "三重県",
            24: "滋賀県",
            25: "京都府",
            26: "大阪府",
            27: "兵庫県",
            28: "奈良県",
            29: "和歌山県",
            30: "鳥取県",
            31: "島根県",
            32: "岡山県",
            33: "広島県",
            34: "山口県",
            35: "徳島県",
            36: "香川県",
            37: "愛媛県",
            38: "高知県",
            39: "福岡県",
            40: "佐賀県",
            41: "長崎県",
            42: "熊本県",
            43: "大分県",
            44: "宮崎県",
            45: "鹿児島県",
            46: "沖縄県"
        };

        // var Pref = prefList[1];
        // var ADDR = String(Pref + City);

        var Pref = prefList[code - 1] ? prefList[code - 1] : prefList[1];
        var ADDR = prefList[code - 1] ? String(Pref + City) : "北海道札幌市";

        return ADDR
    }

    return (
        <span className="frame">
            <IconButton >
                <Link to="/A_2014/page1"
                    style={{ position: 'fixed', top: '18px', left: '10px', right: 'unset' }}
                ><ArrowBackRoundedIcon fontSize="large" style={{ color: "gray" }} /></Link>
            </IconButton>
            <Grid container className={classes.gridRoot}>
                {location !== "" ? <>
                    <Grid item xs={12} className={classes.grid} style={{ fontWeight: 600, fontSize: '1em' }}>
                        今日の目的地
                    </Grid>
                    <Grid item xs={12} className={classes.grid}>
                        <Card className={classes.root}>
                            <CardHeader
                                className="result-title"
                                title={location}
                                subheader={location}
                            />
                            <CardMedia
                                className={classes.media}
                                image={logo}
                                title="pic"
                            />
                            <CardContent>
                                <Typography className="area-text" variant="body2" color="textSecondary" component="p">
                                    景色がきれいな{location}です。
                            </Typography>
                            </CardContent>
                            <CardActions style={{ justifyContent: 'center' }} disableSpacing>
                                <TwShare location={location} />
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} className={classes.grid}>
                        <Card className={classes.root} >
                            <Map location={location} />
                        </Card>
                    </Grid></>
                    : <></>
                }
            </Grid>
        </span >
    )
}

export default Page4;
