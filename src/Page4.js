import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import './App.scss';
import TwShare from "./component/Share";
import logo from "./assets/jap.jpg";
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

const sleep = msec => new Promise(resolve => setTimeout(resolve, msec));

const Page4 = (props) => {
    const [city, setCity] = useState("");
    const [prefCode, setPrefCode] = useState(0);
    const [location, setLocation] = useState("");
    const url = "https://opendata.resas-portal.go.jp/"
    // add key
    var key = "";

    const classes = useStyles();

    useEffect(() => {
        if (city === "" && prefCode === 0) getData(url, key);
    })

    const result = () => {
        // props.location.state.value.level
        // props.location.state.value.filter.road 
        // props.location.state.value.filter.station 
        // props.location.state.value.filter.city 
        // props.location.state.value.dart
        return "宮城県仙台市太白区萩が丘";
    }

    const getData = (url, key) => {
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
            let data = this.response;
            console.log(data);
            var rand = Math.floor(Math.random() * data.result.length);//配列添え字乱数
            setCity(data.result[rand].cityName)
            setPrefCode(data.result[rand].prefCode)
            setLocation(plus(data.result[rand].cityName, data.result[rand].prefCode));
        }
        request.send();
    }

    const plus = (City, code) => {
        //prefをとりだすよ
        const prefList = {
            1: "北海道",
            2: "青森"
        };

        var Pref = prefList[1];
        var ADDR = String(Pref + City);

        // var Pref = prefList[code] ? prefList[code] : prefList[1];
        // var ADDR = prefList[code] ? String(Pref + City) : "北海道札幌市";

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
                                景色がきれいな{location}の町です
                            </Typography>
                        </CardContent>
                        <CardActions style={{ justifyContent: 'center' }} disableSpacing>
                            <IconButton >
                                <TwShare location={location} />
                            </IconButton>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} className={classes.grid}>
                    <Card className={classes.root} >
                        <Map location={location} />
                    </Card>
                </Grid>
            </Grid>
        </span>
    )
}

export default Page4;
