import React from "react";
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

const Page4 = (props) => {
    const classes = useStyles();

    const result = () => {
        // props.location.state.value.level
        // props.location.state.value.filter.road 
        // props.location.state.value.filter.station 
        // props.location.state.value.filter.city 
        // props.location.state.value.dart
        return "宮城県仙台市太白区萩が丘";
    }

    var location = test();

    const test = () => {


        // APIキー
        var key = "ZGUU4HOyL9KDETFUh8lX7lzxQDz9EAdB2W3CNSu0";
        // エンドポイント
        var url = "https://opendata.resas-portal.go.jp/"
        url += "api/v1/cities";
        var request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.responseType = 'json';
        // APIリクエストヘッダー
        request.setRequestHeader("Content-Type", "application/json");
        request.setRequestHeader("X-API-KEY", key);
        var City
        var prefCode
        request.onload = function () {
            let data = this.response;
            var rand = Math.floor(Math.random() * data.result.length);//配列添え字乱数
            console.log(data);
            console.log(data.result.length);
            console.log(rand);
            City = data.result[rand].cityName;
            prefCode = data.result[rand].prefCode;
            document.getElementById("result").innerText = City;

        };
        request.send();

        //prefをとりだすよ
        const prefList = {
            1: "北海道",
            2: "青森"
        };
        var Pref = prefList[1];
        var ADDR = Pref + City

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
                            subheader="宮城県仙台市"
                        />
                        <CardMedia
                            className={classes.media}
                            image={logo}
                            title="pic"
                        />
                        <CardContent>
                            <Typography className="area-text" variant="body2" color="textSecondary" component="p">
                                景色がきれいな宮城県仙台市の町です
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
