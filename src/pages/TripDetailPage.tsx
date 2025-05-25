import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

// Aquí irá el slider/carousel de etapas
// Aquí irá el mapa o visual de la ruta

const etapas = [
  {
    nombre: "Vancouver",
    descripcion: "Llegada y noche en la ciudad más vibrante de la costa oeste.",
    imagen: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80",
  },
  {
    nombre: "Isla de Vancouver y Nanaimo",
    descripcion: "Ferry, paisajes marinos y cultura isleña.",
    imagen: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
  },
  {
    nombre: "Hope y Kelowna",
    descripcion: "El 'trail del infierno' a Eaton Lake y viñedos de Kelowna.",
    imagen: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=80",
  },
  {
    nombre: "Banff y las Rocosas",
    descripcion: "Montañas, lagos turquesa y naturaleza imponente.",
    imagen: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
  },
  {
    nombre: "Jasper y lagos de ensueño",
    descripcion: "Glaciares, lagos y vida salvaje.",
    imagen: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
  },
  {
    nombre: "Fort Saint James y lagos",
    descripcion: "Tres días en el norte auténtico, cultura y aventura.",
    imagen: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
  },
  {
    nombre: "Cabañas perdidas en lagos escondidos",
    descripcion: "Experiencia de desconexión total.",
    imagen: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  },
  {
    nombre: "Canoas en ríos",
    descripcion: "Navegación y paisajes únicos.",
    imagen: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=800&q=80",
  },
  {
    nombre: "Viaje de vuelta",
    descripcion: "Regreso a Vancouver y despedida.",
    imagen: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=800&q=80",
  },
];

const TripDetailPage = () => {
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
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-2 rounded shadow transition">Reservar plaza</button>
        </div>
      </header>

      {/* Contenido principal: slider y mapa */}
      <main className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* Slider de etapas */}
        <section className="flex-1 flex items-center justify-center bg-gray-50">
          <div className="w-full max-w-3xl h-[420px] flex items-center justify-center">
            <Carousel className="w-full">
              <CarouselContent>
                {etapas.map((etapa, idx) => (
                  <CarouselItem key={etapa.nombre} className="flex justify-center items-center">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden w-[340px] h-[400px] flex flex-col">
                      <img src={etapa.imagen} alt={etapa.nombre} className="w-full h-48 object-cover" />
                      <div className="flex-1 flex flex-col justify-between p-4">
                        <div>
                          <h2 className="text-xl font-bold mb-2">Etapa {idx + 1}: {etapa.nombre}</h2>
                          <p className="text-gray-700 mb-4">{etapa.descripcion}</p>
                        </div>
                        {/* Aquí puedes añadir iconos o detalles extra */}
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
          {/* TODO: Mapa o visual de la ruta */}
          <div className="w-full h-[420px] flex items-center justify-center">
            <span className="text-gray-400">[Aquí irá el mapa o visual de la ruta]</span>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default TripDetailPage; 