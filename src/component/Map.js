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

const apiKey = "AIzaSyCvni2D9DDZ1mqoHE1c5BNz8D0f8y9lnvc";

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
    <div className="access-map-wrapper">
      <MapWithAMakredInfoWindow
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '30vmax' }} />}
        mapElement={<div style={{ height: '100%' }} />}
        lat={lat}
        lng={lng}
        location={location}
      />
      <a href={`comgooglemaps://?daddr=${lat},${lng}`}>
        Googlemap アプリで開く
      </a>
    </div>
  );
});

Map.propTypes = {
  location: PropTypes.string.isRequired,
};

export default Map;
