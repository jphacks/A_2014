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
        backgroundColor: theme.palette.background.paper,
        margin: '15px 0',
    },
    grid: {
        margin: '10px 0',
        justifyContent: 'space-around'
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

    var location = result();
    return (
        <span className="frame">
            <IconButton >
                <Link to="/A_2014/page1"
                    style={{ position: 'fixed', top: '10px', left: '10px', right: 'unset' }}
                ><ArrowBackRoundedIcon fontSize="large" style={{ color: "gray" }} /></Link>
            </IconButton>
            <Grid container className={classes.gridRoot}>
                <Grid item xs={12} className={classes.grid}>
                    今日の目的地
                </Grid>
                <Grid item xs={12} className={classes.grid}>
                    <Card className={classes.root}>
                        <CardHeader
                            className="result-title"
                            title={location}
                            subheader="サブタイトル"
                        />
                        <CardMedia
                            className={classes.media}
                            image={logo}
                            title="pic"
                        />
                        <CardContent>
                            <Typography className="area-text" variant="body2" color="textSecondary" component="p">
                                "aaa"
                            </Typography>
                        </CardContent>
                        <CardActions style={{ justifyContent: 'center' }} disableSpacing>
                            <IconButton >
                                <TwShare url={location} />
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
