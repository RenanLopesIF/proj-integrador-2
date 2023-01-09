/* eslint-disable no-loss-of-precision */
import { Image } from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import { Map, Marker } from 'react-map-gl';

function MapInstance({ lat = -16, lng = -42 }) {
  const [viewport, setViewport] = useState({
    longitude: lng,
    latitude: lat,
    zoom: 13.5,
    bearing: 0,
    pitch: 30,
  });

  const mapRef = useRef(null);
  const accessTokenMap =
    'pk.eyJ1IjoicmVuYW5sb3BlczE2IiwiYSI6ImNsY250YmVzcjB3YnczdnA2ZjRsNzhqbTUifQ.QOcLPATBwrEKqjHcXf4R3Q';

  return (
    <Map
      {...viewport}
      mapboxAccessToken={accessTokenMap}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      width="100%"
      height="100%"
      onMove={(evt) => setViewport(evt.viewState)}
      ref={mapRef}
    >
      <Marker pitchAlignment="map" color="#FF00FF" longitude={lng} latitude={lat}>
        <Image w="50px" h="50px" src="marker.png" />
      </Marker>
    </Map>
  );
}

export default MapInstance;
