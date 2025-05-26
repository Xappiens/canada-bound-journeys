import React, { useCallback, useState, useEffect } from 'react';
import Map, { Marker, NavigationControl, Source, Layer, MapRef } from 'react-map-gl';
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
  // Día 9: Fort St. James → Lago Babine → Prince George → Vancouver → Madrid
  [7, 8, 9, 10, 0],
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

const getBounds = (coords: number[][]) => {
  let minLng = coords[0][0], maxLng = coords[0][0], minLat = coords[0][1], maxLat = coords[0][1];
  coords.forEach(([lng, lat]) => {
    if (lng < minLng) minLng = lng;
    if (lng > maxLng) maxLng = lng;
    if (lat < minLat) minLat = lat;
    if (lat > maxLat) maxLat = lat;
  });
  return [
    [minLng, minLat],
    [maxLng, maxLat]
  ];
};

const TripMap: React.FC<TripMapProps> = ({ currentStage = 0, onMarkerClick }) => {
  const tramo = etapasTramos[currentStage] || [0, 1];
  const tramoCoords = tramo.map(idx => etapasCoords[idx]);
  const [viewState, setViewState] = useState({
    longitude: tramoCoords[0][0],
    latitude: tramoCoords[0][1],
    zoom: 4
  });
  const mapRef = React.useRef<MapRef>(null);

  // Fit bounds al cambiar de etapa
  useEffect(() => {
    if (tramoCoords.length === 1) {
      setViewState(vs => ({ ...vs, longitude: tramoCoords[0][0], latitude: tramoCoords[0][1], zoom: 8 }));
      return;
    }
    const bounds = getBounds(tramoCoords);
    // Calcula centro
    const centerLng = (bounds[0][0] + bounds[1][0]) / 2;
    const centerLat = (bounds[0][1] + bounds[1][1]) / 2;
    // Calcula zoom aproximado
    // (esto es una aproximación simple, para mayor precisión usar fitBounds de mapbox-gl)
    const lngDiff = Math.abs(bounds[1][0] - bounds[0][0]);
    const latDiff = Math.abs(bounds[1][1] - bounds[0][1]);
    let zoom = 4;
    if (lngDiff < 10 && latDiff < 10) zoom = 6;
    if (lngDiff < 5 && latDiff < 5) zoom = 7;
    if (lngDiff < 2 && latDiff < 2) zoom = 8;
    setViewState(vs => ({ ...vs, longitude: centerLng, latitude: centerLat, zoom }));
  }, [currentStage]);

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
        ref={mapRef}
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