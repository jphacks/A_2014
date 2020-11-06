import React from 'react';
import PropTypes from 'prop-types';
import Geocode from 'react-geocode';
import {
  compose,
  lifecycle,
  withState,
} from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

import './Map.scss';
import { makeStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import MapRoundedIcon from '@material-ui/icons/Map';
import IconButton from '@material-ui/core/IconButton';

const apiKey = "AIzaSyAt_9izqQ3y1jBMpfJBi57QzAoTPTWmdT4";

const MapWithAMakredInfoWindow = compose(
  withScriptjs,
  withGoogleMap,
)(({
  lat,
  lng,
}) => (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat, lng }}
    >
      <Marker position={{ lat, lng }} />
    </GoogleMap>
  ));

const Map = compose(
  withState('geocode', 'setGeocode', { lat: 0, lng: 0 }),
  lifecycle({
    componentDidMount() {
      Geocode.setApiKey(apiKey);
      Geocode.fromAddress(this.props.location)
        .then((response) => {
          const { lat, lng } = response.results[0].geometry.location;
          this.setState({
            lat,
            lng,
          });
        })
        .catch(() => {
          this.setState({
            lat: undefined,
            lng: undefined,
          });
        });
    },
  }),
)(({
  lat,
  lng,
  location,
}) => {
  if (!lat || !lng) {
    return (
      <div>
        <p>住所が誤っています。</p>
      </div>
    );
  }

  return (
    <>
      <CardHeader
        title="`ここへいく`"
        style={{ color: 'gray', fontWeight: 600 }}
      />
      <CardMedia>
        <MapWithAMakredInfoWindow
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: '200px', width: '100%' }} />}
          containerElement={<div style={{ height: '200px', width: '100%', zIndex: 98 }} />}
          mapElement={<div style={{ height: '200px', width: '100%', zIndex: 99 }} />}
          lat={lat}
          lng={lng}
          location={location}
          className="map"
        />
      </CardMedia>
      <CardActions style={{ justifyContent: 'center' }} disableSpacing>
        <IconButton href={`https://www.google.com/maps/search/?api=1&query=${location}`} >
          <MapRoundedIcon />
        </IconButton>
      </CardActions>
    </>
  );
});

Map.propTypes = {
  location: PropTypes.string.isRequired,
};

export default Map;