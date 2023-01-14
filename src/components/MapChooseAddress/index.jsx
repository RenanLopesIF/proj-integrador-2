import { Image } from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import { Map, Marker } from 'react-map-gl';

function MapChooseAddress({ initialLocation, mapMode = 'satellite-streets-v12', onHandleMarkPosition }) {
  const [viewport, setViewport] = useState({
    longitude: initialLocation.lng,
    latitude: initialLocation.lat,
    zoom: 12.5,
    bearing: 0,
    pitch: 30,
  });

  const [markPosition, setMarkPosition] = useState(null);

  const mapRef = useRef(null);
  const accessTokenMap =
    'pk.eyJ1IjoicmVuYW5sb3BlczE2IiwiYSI6ImNsY250YmVzcjB3YnczdnA2ZjRsNzhqbTUifQ.QOcLPATBwrEKqjHcXf4R3Q';

  function handleMarkPosition(LatLng) {
    setMarkPosition(LatLng);
    if (onHandleMarkPosition) {
      onHandleMarkPosition(LatLng);
    }
  }

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
      onClick={(ev) => {
        handleMarkPosition(ev.lngLat);
      }}
      ref={mapRef}
    >
      {markPosition && (
        <Marker pitchAlignment="map" color="#FF00FF" longitude={markPosition.lng} latitude={markPosition.lat}>
          <Image w="50px" h="50px" src="marker.png" />
        </Marker>
      )}
    </Map>
  );
}

export default MapChooseAddress;
