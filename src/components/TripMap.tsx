import React, { useCallback, useState } from 'react';
import Map, { Marker, NavigationControl, Source, Layer } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Coordenadas de las etapas del viaje
const etapasCoords = [
  [-123.1207, 49.2827], // Vancouver
  [-123.9408, 49.1666], // Nanaimo
  [-121.4415, 49.3831], // Hope
  [-119.4960, 49.8880], // Kelowna
  [-115.5708, 51.1784], // Banff
  [-118.0819, 52.8737], // Jasper
  [-124.2511, 54.4438], // Fort St. James
  [-126.0740, 54.7519], // Lago Babine
  [-122.7497, 53.9171], // Prince George
  [-123.1207, 49.2827], // Vancouver (regreso)
];

// Estilo de la línea de ruta
const routeLayer = {
  id: 'route',
  type: 'line',
  paint: {
    'line-color': '#3b82f6',
    'line-width': 4,
    'line-opacity': 0.8
  }
};

// Estilo de los marcadores
const markerStyle = {
  width: 20,
  height: 20,
  borderRadius: '50%',
  backgroundColor: '#ef4444',
  border: '2px solid white',
  cursor: 'pointer'
};

interface TripMapProps {
  currentStage?: number;
  onMarkerClick?: (index: number) => void;
}

const TripMap: React.FC<TripMapProps> = ({ currentStage, onMarkerClick }) => {
  const [viewState, setViewState] = useState({
    longitude: -120.0,
    latitude: 52.0,
    zoom: 4.5
  });

  // Crear la geometría de la ruta
  const routeData = {
    type: 'Feature',
    properties: {},
    geometry: {
      type: 'LineString',
      coordinates: etapasCoords
    }
  };

  const handleMarkerClick = useCallback((index: number) => {
    if (onMarkerClick) {
      onMarkerClick(index);
    }
  }, [onMarkerClick]);

  return (
    <Map
      {...viewState}
      onMove={evt => setViewState(evt.viewState)}
      mapboxAccessToken={process.env.VITE_MAPBOX_TOKEN}
      mapStyle="mapbox://styles/mapbox/outdoors-v12"
      style={{ width: '100%', height: '100%' }}
    >
      <NavigationControl position="top-right" />
      
      {/* Línea de ruta */}
      <Source type="geojson" data={routeData}>
        <Layer {...routeLayer} />
      </Source>

      {/* Marcadores de las etapas */}
      {etapasCoords.map((coord, index) => (
        <Marker
          key={index}
          longitude={coord[0]}
          latitude={coord[1]}
          onClick={() => handleMarkerClick(index)}
        >
          <div
            style={{
              ...markerStyle,
              backgroundColor: currentStage === index ? '#ef4444' : '#3b82f6',
              transform: 'scale(1.2)',
              transition: 'all 0.3s ease'
            }}
          />
        </Marker>
      ))}
    </Map>
  );
};

export default TripMap; 