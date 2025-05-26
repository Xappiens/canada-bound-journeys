import React, { useState } from 'react';
import Map, { NavigationControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const TripMap: React.FC = () => {
  const [viewState, setViewState] = useState({
    longitude: -120.0,
    latitude: 52.0,
    zoom: 5.5
  });

  return (
    <div style={{ width: '100%', height: '100%', background: '#e0e7ef' }}>
      <Map
        {...viewState}
        onMove={evt => setViewState(evt.viewState)}
        mapboxAccessToken={process.env.VITE_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/mapbox/outdoors-v12"
        style={{ width: '100%', height: '100%' }}
      >
        <NavigationControl position="top-right" />
      </Map>
    </div>
  );
};

export default TripMap; 