import React, { useCallback, useState } from 'react';
import Map, { Marker, NavigationControl, Source, Layer } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Coordenadas de las etapas del viaje (incluyendo Madrid)
const etapasCoords = [
  [-3.7038, 40.4168], // 0: Madrid
  [-123.1207, 49.2827], // 1: Vancouver
  [-123.9408, 49.1666], // 2: Nanaimo
  [-121.4415, 49.3831], // 3: Hope
  [-119.4960, 49.8880], // 4: Kelowna
  [-115.5708, 51.1784], // 5: Banff
  [-118.0819, 52.8737], // 6: Jasper
  [-124.2511, 54.4438], // 7: Fort St. James
  [-126.0740, 54.7519], // 8: Lago Babine
  [-122.7497, 53.9171], // 9: Prince George
  [-123.1207, 49.2827], // 10: Vancouver (regreso)
];

// Definición de tramos por etapa (índices en etapasCoords)
const etapasTramos = [
  // Día 1: Madrid → Vancouver
  [0, 1],
  // Día 2: Vancouver → Nanaimo
  [1, 2],
  // Día 3: Nanaimo → Vancouver → Hope → Kelowna
  [2, 1, 3, 4],
  // Día 4: Kelowna → Banff
  [4, 5],
  // Día 5: Banff → Jasper
  [5, 6],
  // Día 6: Jasper → Fort St. James
  [6, 7],
  // Día 7: Estancia en Fort St. James
  [7],
  // Día 8: Estancia en Fort St. James
  [7],
  // Día 9: Fort St. James → Lago Babine → Prince George
  [7, 8, 9],
  // Día 10: Prince George → Vancouver
  [9, 10],
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
} as any;

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

const TripMap: React.FC<TripMapProps> = ({ currentStage = 0, onMarkerClick }) => {
  const [viewState, setViewState] = useState({
    longitude: -100.0,
    latitude: 50.0,
    zoom: 2.5
  });

  // Obtener los índices de la etapa actual
  const tramo = etapasTramos[currentStage] || [0, 1];
  // Coordenadas de la ruta para la etapa actual
  const tramoCoords = tramo.map(idx => etapasCoords[idx]);

  // Centrar el mapa en el tramo actual
  // (opcional: podrías hacer un fitBounds aquí)

  // GeoJSON de la ruta
  const routeData = {
    type: 'Feature',
    properties: {},
    geometry: {
      type: 'LineString',
      coordinates: tramoCoords.length > 1 ? tramoCoords : []
    }
  };

  const handleMarkerClick = useCallback((index: number) => {
    if (onMarkerClick) {
      onMarkerClick(index);
    }
  }, [onMarkerClick]);

  return (
    <div style={{ width: '100%', height: '100%', background: '#e0e7ef' }}>
      <Map
        {...viewState}
        onMove={evt => setViewState(evt.viewState)}
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/mapbox/outdoors-v12"
        style={{ width: '100%', height: '100%' }}
      >
        <NavigationControl position="top-right" />
        {/* Línea de ruta solo si hay más de un punto */}
        {tramoCoords.length > 1 && (
          <Source type="geojson" data={routeData}>
            <Layer {...routeLayer} />
          </Source>
        )}
        {/* Marcadores de los puntos del tramo */}
        {tramoCoords.map((coord, index) => (
          <Marker
            key={index}
            longitude={coord[0]}
            latitude={coord[1]}
            onClick={() => handleMarkerClick(index)}
          >
            <div
              style={{
                ...markerStyle,
                backgroundColor: '#ef4444',
                transform: 'scale(1.2)',
                transition: 'all 0.3s ease'
              }}
              title={`Punto ${index + 1}`}
            />
          </Marker>
        ))}
      </Map>
    </div>
  );
};

export default TripMap; 