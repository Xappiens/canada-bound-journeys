import React, { useState } from 'react';
import Map, { NavigationControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const TripMap: React.FC = () => {
  const [viewState, setViewState] = useState({
    longitude: -120.0,
    latitude: 52.0,
    zoom: 5.5
  });

  // Depuración: mostrar el token en pantalla
  const viteToken = import.meta.env.VITE_MAPBOX_TOKEN;
  // @ts-ignore
  const processToken = typeof process !== 'undefined' ? process.env.VITE_MAPBOX_TOKEN : undefined;

  return (
    <div style={{ width: '100%', height: '100%', background: '#e0e7ef', position: 'relative' }}>
      <div style={{ position: 'absolute', zIndex: 10, background: 'rgba(255,255,0,0.9)', color: '#222', padding: 8, fontSize: 12, top: 10, left: 10, borderRadius: 4 }}>
        <div><b>import.meta.env.VITE_MAPBOX_TOKEN:</b> {viteToken ? viteToken.slice(0, 20) + '...' : 'undefined'}</div>
        <div><b>process.env.VITE_MAPBOX_TOKEN:</b> {processToken ? processToken.slice(0, 20) + '...' : 'undefined'}</div>
      </div>
      <Map
        {...viewState}
        onMove={evt => setViewState(evt.viewState)}
        mapboxAccessToken={viteToken}
        mapStyle="mapbox://styles/mapbox/outdoors-v12"
        style={{ width: '100%', height: '100%' }}
      >
        <NavigationControl position="top-right" />
      </Map>
    </div>
  );
};

export default TripMap; 