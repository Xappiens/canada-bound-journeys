import React, { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import TripMap from '@/components/TripMap';

// Aquí irá el slider/carousel de etapas
// Aquí irá el mapa o visual de la ruta

const etapas = [
  {
    nombre: "Vancouver",
    descripcion: "Llegada y noche en la ciudad más vibrante de la costa oeste.",
    imagen: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80",
    actividades: [
      "Tour por Stanley Park y sus totems",
      "Visita al mercado de Granville Island",
      "Paseo por Gastown y sus calles históricas",
      "Cena de bienvenida en restaurante local"
    ],
    atracciones: [
      "Capilano Suspension Bridge",
      "Vancouver Lookout",
      "Museo de Antropología",
      "English Bay Beach"
    ]
  },
  {
    nombre: "Isla de Vancouver y Nanaimo",
    descripcion: "Ferry, paisajes marinos y cultura isleña.",
    imagen: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
    actividades: [
      "Crucero por la bahía de Nanaimo",
      "Avistamiento de ballenas y fauna marina",
      "Senderismo por el Malaspina Galleries",
      "Degustación de ostras locales"
    ],
    atracciones: [
      "Parque Provincial Rathtrevor Beach",
      "Centro histórico de Nanaimo",
      "Islas Newcastle y Protection",
      "Mirador de la bahía"
    ]
  },
  {
    nombre: "Hope y Kelowna",
    descripcion: "El 'trail del infierno' a Eaton Lake y viñedos de Kelowna.",
    imagen: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=80",
    actividades: [
      "Hiking por el Eaton Lake Trail",
      "Tour por viñedos del Valle de Okanagan",
      "Cata de vinos locales",
      "Kayak en el lago Okanagan"
    ],
    atracciones: [
      "Viñedo Mission Hill",
      "Lago Okanagan",
      "Parque Provincial Okanagan Mountain",
      "Centro de Kelowna"
    ]
  },
  {
    nombre: "Banff y las Rocosas",
    descripcion: "Montañas, lagos turquesa y naturaleza imponente.",
    imagen: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
    actividades: [
      "Visita al lago Louise y Moraine Lake",
      "Senderismo por Johnston Canyon",
      "Baño en las aguas termales de Banff",
      "Avistamiento de fauna salvaje"
    ],
    atracciones: [
      "Parque Nacional Banff",
      "Glaciar Columbia Icefield",
      "Pueblo de Banff",
      "Lago Peyto"
    ]
  },
  {
    nombre: "Jasper y lagos de ensueño",
    descripcion: "Glaciares, lagos y vida salvaje.",
    imagen: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    actividades: [
      "Paseo en teleférico al Monte Whistlers",
      "Excursión al glaciar Athabasca",
      "Canoa en el lago Maligne",
      "Observación de estrellas"
    ],
    atracciones: [
      "Parque Nacional Jasper",
      "Cascadas Athabasca",
      "Lago Maligne",
      "Valle de los Cinco Lagos"
    ]
  },
  {
    nombre: "Fort Saint James y lagos",
    descripcion: "Tres días en el norte auténtico, cultura y aventura.",
    imagen: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
    actividades: [
      "Visita al histórico Fuerte Saint James",
      "Pesca en el lago Stuart",
      "Cultura de las Primeras Naciones",
      "Senderismo por bosques vírgenes"
    ],
    atracciones: [
      "Sitio Histórico Nacional Fort St. James",
      "Lago Stuart",
      "Centro Cultural de las Primeras Naciones",
      "Reserva Natural de Pinchi Lake"
    ]
  },
  {
    nombre: "Cabañas perdidas en lagos escondidos",
    descripcion: "Experiencia de desconexión total.",
    imagen: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    actividades: [
      "Kayak en lagos remotos",
      "Pesca con guía local",
      "Fogatas nocturnas",
      "Observación de auroras boreales"
    ],
    atracciones: [
      "Lago Babine",
      "Parque Provincial Stuart Lake",
      "Cabañas tradicionales",
      "Miradores panorámicos"
    ]
  },
  {
    nombre: "Canoas en ríos",
    descripcion: "Navegación y paisajes únicos.",
    imagen: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=800&q=80",
    actividades: [
      "Descenso en canoa por el río Fraser",
      "Avistamiento de águilas y osos",
      "Acampada en orillas vírgenes",
      "Pesca con mosca"
    ],
    atracciones: [
      "Río Fraser",
      "Cañones del río",
      "Playas naturales",
      "Bosques ribereños"
    ]
  },
  {
    nombre: "Viaje de vuelta",
    descripcion: "Regreso a Vancouver y despedida.",
    imagen: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=800&q=80",
    actividades: [
      "Últimas compras en Vancouver",
      "Cena de despedida",
      "Paseo final por Stanley Park",
      "Visita al mercado de Granville Island"
    ],
    atracciones: [
      "Gastown",
      "Chinatown",
      "Yaletown",
      "Puerto de Vancouver"
    ]
  },
];

const TripDetailPage: React.FC = () => {
  const [currentStage, setCurrentStage] = useState(0);

  return (
    <div className="w-full h-screen flex flex-col bg-white">
      {/* Encabezado fijo */}
      <header className="w-full flex flex-col md:flex-row items-center justify-between px-6 py-4 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white shadow-lg">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-1">Aventura Canadá Salvaje: Grupo septiembre 2025</h1>
          <p className="text-sm md:text-base">10 días / 8 noches — Grupo de 8 personas</p>
        </div>
        <div className="mt-4 md:mt-0 flex flex-col md:flex-row md:items-center gap-2">
          <span className="bg-red-100 text-red-700 px-4 py-1 rounded-full font-semibold mb-2 md:mb-0 md:mr-4">¡4 viajeros confirmados! Quedan 4 plazas</span>
          <Link to="/reserva-grupo-septiembre-2025" className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-2 rounded shadow transition text-center">Reservar plaza</Link>
        </div>
      </header>

      {/* Información de precio */}
      <div className="w-full bg-gray-50 py-4 px-6 border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-800">
              <h2 className="text-xl font-semibold mb-1">Precio desde 4.800€ por persona</h2>
              <p className="text-sm text-gray-600">Incluye: Vuelos internacionales, traslados, alojamiento, desayunos, actividades guiadas y seguro de viaje</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Link to="/reserva-grupo-septiembre-2025" className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-2 rounded shadow transition">
                Solicitar información detallada
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido principal: slider y mapa */}
      <main className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* Slider de etapas */}
        <section className="flex-1 flex items-center justify-center bg-gray-50">
          <div className="w-full max-w-3xl h-[600px] flex items-center justify-center">
            <Carousel className="w-full">
              <CarouselContent>
                {etapas.map((etapa, idx) => (
                  <CarouselItem key={etapa.nombre} className="flex justify-center items-center">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden w-[340px] h-[580px] flex flex-col">
                      <img src={etapa.imagen} alt={etapa.nombre} className="w-full h-48 object-cover" />
                      <div className="flex-1 flex flex-col justify-between p-4">
                        <div>
                          <h2 className="text-xl font-bold mb-2">Etapa {idx + 1}: {etapa.nombre}</h2>
                          <p className="text-gray-700 mb-4">{etapa.descripcion}</p>
                          
                          <div className="mb-4">
                            <h3 className="font-semibold text-gray-800 mb-2">Actividades:</h3>
                            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                              {etapa.actividades.map((actividad, i) => (
                                <li key={i}>{actividad}</li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h3 className="font-semibold text-gray-800 mb-2">Atracciones destacadas:</h3>
                            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                              {etapa.atracciones.map((atraccion, i) => (
                                <li key={i}>{atraccion}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>
        {/* Mapa o visual de la ruta */}
        <aside className="hidden md:flex w-1/3 items-center justify-center bg-white border-l border-gray-200">
          <div className="h-[600px] rounded-lg overflow-hidden border shadow-sm">
            <TripMap currentStage={currentStage} onMarkerClick={setCurrentStage} />
          </div>
        </aside>
      </main>
    </div>
  );
};

export default TripDetailPage; 