import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const mapStyles = {
  width: "55%",
  height: "80%"
};

const MapContainer = (props) => {
  return (
    <Map
      google={props.google}
      zoom={15}
      style={mapStyles}
      center={{
        lat: props.currentRest ? props.currentRest.coordinates.latitude : null,
        lng: props.currentRest ? props.currentRest.coordinates.longitude : null
      }}
    >
      <Marker
        name={"Go Here To Eat!"}
        position={{
          lat: props.currentRest ? props.currentRest.coordinates.latitude : null,
          lng: props.currentRest ? props.currentRest.coordinates.longitude : null
        }}
      />
      <Marker />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAP_KEY
})(MapContainer);
