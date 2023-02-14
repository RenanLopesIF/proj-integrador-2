/* eslint-disable no-loss-of-precision */
import { Image } from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import { Map, Marker } from 'react-map-gl';

function MapInstance({ lat, lng, mapMode = 'satellite-streets-v12' }) {
  const [viewport, setViewport] = useState({
    longitude: lng,
    latitude: lat,
    zoom: 13.5,
    bearing: 0,
    pitch: 30,
  });

  const mapRef = useRef(null);
  // eslint-disable-next-line no-undef
  const accessTokenMap = process.env.MAP_ACCESS_TOKEN;

  return (
    <Map
      {...viewport}
      mapboxAccessToken={accessTokenMap}
      // https://docs.mapbox.com/api/maps/styles/
      // mapStyle="mapbox://styles/mapbox/streets-v9"
      // mapStyle="mapbox://styles/mapbox/satellite-v9"
      // mapStyle="mapbox://sprites/mapbox/bright-v8"
      // mapStyle="mapbox://styles/mapbox/satellite-streets-v12"
      mapStyle={`mapbox://styles/mapbox/${mapMode}`}
      width="100%"
      height="100%"
      onMove={(evt) => setViewport(evt.viewState)}
      ref={mapRef}
    >
      <Marker pitchAlignment="map" color="#FF00FF" longitude={lng} latitude={lat}>
        <Image w="50px" h="50px" src="/marker.png" />
      </Marker>
    </Map>
  );
}

export default MapInstance;
