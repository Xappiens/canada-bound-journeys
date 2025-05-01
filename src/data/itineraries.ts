
import { Region } from "./regions";
import { Season } from "./seasons";

export interface StageDay {
  day: number;
  title: string;
  location: string;
  description: string;
  activities: string[];
  coordinates: [number, number]; // longitude, latitude
  image?: string;
}

export interface Itinerary {
  id: string;
  title: string;
  region: Region;
  season: Season;
  duration: number;
  priceRange: string;
  description: string;
  highlights: string[];
  stages: StageDay[];
}

export const itineraries: Itinerary[] = [
  // South Region + Spring
  {
    id: "south-spring",
    title: "Despertar Primaveral - Sur de BC",
    region: "south",
    season: "spring",
    duration: 7,
    priceRange: "$3,200 - $4,500",
    description: "Vive el renacer primaveral en la región sur de British Columbia. Cascadas en pleno esplendor, primeros brotes y la flora más espectacular.",
    highlights: [
      "Observación de flores silvestres en los valles montañosos",
      "Descubrimiento de cascadas de deshielo en máximo caudal",
      "Avistamiento de aves migratorias",
      "Experiencias gastronómicas con productos de temporada",
    ],
    stages: [
      {
        day: 1,
        title: "Llegada a Vancouver",
        location: "Vancouver",
        description: "Recogida en el aeropuerto, breve recorrido por la ciudad y cena de bienvenida con productos locales de temporada.",
        activities: ["Tour panorámico", "Cena de bienvenida"],
        coordinates: [-123.1207, 49.2827],
      },
      {
        day: 2,
        title: "Vancouver y alrededores",
        location: "Vancouver",
        description: "Exploraremos Stanley Park en su momento más florido y visitaremos el mercado de Granville Island para conocer productos locales.",
        activities: ["Paseo en bicicleta", "Visita a mercado local", "Degustación de mariscos"],
        coordinates: [-123.1465, 49.2827],
      },
      {
        day: 3,
        title: "Ruta hacia Squamish",
        location: "Squamish",
        description: "Viaje panorámico por la Sea to Sky Highway con paradas en las cascadas Shannon y el mirador sobre el fiordo de Howe Sound.",
        activities: ["Senderismo suave", "Fotografía de paisaje", "Avistamiento de águilas"],
        coordinates: [-123.1565, 49.7016],
      },
      {
        day: 4,
        title: "Whistler Primaveral",
        location: "Whistler",
        description: "Día en Whistler para disfrutar de actividades al aire libre mientras las montañas aún conservan nieve en las cumbres.",
        activities: ["Góndola Peak 2 Peak", "Paseo por senderos alpinos", "Spa con vistas a las montañas"],
        coordinates: [-122.9574, 50.1163],
      },
      {
        day: 5,
        title: "Valle de Pemberton",
        location: "Pemberton",
        description: "Exploración del valle de Pemberton con su impresionante escenario montañoso y visita a productores locales.",
        activities: ["Encuentro con granjeros locales", "Paseo a caballo", "Cata de productos artesanales"],
        coordinates: [-122.8053, 50.3203],
      },
      {
        day: 6,
        title: "Parque Provincial Garibaldi",
        location: "Garibaldi",
        description: "Excursión al lago Garibaldi, rodeado de montañas nevadas y comenzando a descongelarse con los colores intensos de la primavera.",
        activities: ["Trekking de dificultad media", "Picnic alpino", "Fotografía de naturaleza"],
        coordinates: [-123.0037, 49.9400],
      },
      {
        day: 7,
        title: "Regreso a Vancouver",
        location: "Vancouver",
        description: "Viaje de regreso a Vancouver con parada en las cataratas Brandywine y despedida con cena panorámica en la ciudad.",
        activities: ["Visita a cascadas", "Tiempo libre en la ciudad", "Cena de despedida"],
        coordinates: [-123.1207, 49.2827],
      },
    ],
  },
  
  // South Region + Summer
  {
    id: "south-summer",
    title: "Verano Vibrante - Sur de BC",
    region: "south",
    season: "summer",
    duration: 8,
    priceRange: "$3,500 - $4,800",
    description: "Aprovecha los largos días de verano en el sur de British Columbia para disfrutar de actividades acuáticas, senderismo y la exuberante naturaleza en su máximo esplendor.",
    highlights: [
      "Baños en lagos cristalinos de montaña",
      "Avistamiento de fauna silvestre más activa",
      "Festivales veraniegos locales",
      "Atardeceres prolongados en escenarios naturales",
    ],
    stages: [
      {
        day: 1,
        title: "Bienvenida a Vancouver",
        location: "Vancouver",
        description: "Recepción en el aeropuerto y paseo por el Parque Stanley y sus playas para disfrutar del ambiente veraniego.",
        activities: ["Paseo costero", "Cena en el puerto"],
        coordinates: [-123.1207, 49.2827],
      },
      {
        day: 2,
        title: "Isla de Vancouver",
        location: "Victoria",
        description: "Travesía en ferry hacia Victoria para explorar sus jardines en pleno florecimiento y observar orcas en la costa.",
        activities: ["Jardines Butchart", "Tour de avistamiento de ballenas", "Té de la tarde"],
        coordinates: [-123.3656, 48.4284],
      },
      {
        day: 3,
        title: "Pender Island",
        location: "Pender Island",
        description: "Navegación hacia esta tranquila isla del archipiélago del Golfo para disfrutar de calas secretas.",
        activities: ["Kayak costero", "Snorkel en aguas cristalinas", "Cena con marisco local"],
        coordinates: [-123.3015, 48.7660],
      },
      {
        day: 4,
        title: "Valle de Okanagan",
        location: "Kelowna",
        description: "Viaje hacia el interior para descubrir el clima mediterráneo del valle de Okanagan con sus viñedos y frutales.",
        activities: ["Visita a bodegas", "Baño en el lago Okanagan", "Recolección de frutas frescas"],
        coordinates: [-119.4960, 49.8880],
      },
      {
        day: 5,
        title: "Lago Okanagan",
        location: "Kelowna",
        description: "Día completo para disfrutar de actividades acuáticas en el lago y degustaciones en las bodegas circundantes.",
        activities: ["Paddle surf", "Tour de vinos", "BBQ al atardecer"],
        coordinates: [-119.5937, 49.8414],
      },
      {
        day: 6,
        title: "Manning Park",
        location: "Manning Park",
        description: "Viaje hacia este parque provincial para realizar senderismo entre prados alpinos repletos de flores.",
        activities: ["Ruta a Three Brothers Mountain", "Observación de fauna", "Noche de estrellas"],
        coordinates: [-120.8833, 49.0833],
      },
      {
        day: 7,
        title: "Whistler en Verano",
        location: "Whistler",
        description: "Llegada al famoso resort para disfrutar de sus actividades estivales entre impresionantes montañas.",
        activities: ["Ciclismo de montaña", "Tirolinas", "Festival de arte local"],
        coordinates: [-122.9574, 50.1163],
      },
      {
        day: 8,
        title: "Regreso a Vancouver",
        location: "Vancouver",
        description: "Último día con paradas en cascadas y miradores de la Sea to Sky Highway antes del regreso a Vancouver.",
        activities: ["Piscinas naturales de Joffre Lakes", "Paseo final por Vancouver", "Cena de despedida"],
        coordinates: [-123.1207, 49.2827],
      },
    ],
  },
  
  // Central Region + Autumn
  {
    id: "central-autumn",
    title: "Otoño Dorado - Centro de BC",
    region: "central",
    season: "autumn",
    duration: 6,
    priceRange: "$2,900 - $4,200",
    description: "Contempla la espectacular paleta de colores otoñales en los bosques y montañas del centro de British Columbia, mientras disfrutas de la temporada de salmón y fauna más activa.",
    highlights: [
      "Fotografía de paisajes teñidos de oro y rojo",
      "Observación de osos pescando salmón",
      "Experiencias gastronómicas con productos de temporada",
      "Aguas termales entre paisajes otoñales",
    ],
    stages: [
      {
        day: 1,
        title: "Llegada a Kamloops",
        location: "Kamloops",
        description: "Encuentro en Kamloops, puerta de entrada a la región central, con paseo por los alrededores del lago.",
        activities: ["Tour panorámico", "Cena con productos locales de temporada"],
        coordinates: [-120.3273, 50.6745],
      },
      {
        day: 2,
        title: "Shuswap Lake",
        location: "Salmon Arm",
        description: "Exploración del lago Shuswap y sus bahías, con oportunidad de observar águilas y el regreso del salmón.",
        activities: ["Paseo en barco", "Observación del 'run' del salmón", "Visita a ahumadero local"],
        coordinates: [-119.2838, 50.7001],
      },
      {
        day: 3,
        title: "Wells Gray Provincial Park",
        location: "Clearwater",
        description: "Día completo en este espectacular parque con cascadas rodeadas de bosques en colores otoñales.",
        activities: ["Visita a Helmcken Falls", "Senderismo por antiguos bosques", "Encuentro con guía naturalista local"],
        coordinates: [-120.0409, 51.8368],
      },
      {
        day: 4,
        title: "Blue River",
        location: "Blue River",
        description: "Experiencias con vida salvaje en este pequeño enclave rodeado de montañas y lagos azul turquesa.",
        activities: ["Safari de observación de osos", "Canoa en aguas cristalinas", "Fogata nocturna"],
        coordinates: [-119.3040, 52.1092],
      },
      {
        day: 5,
        title: "Mount Robson",
        location: "Mount Robson",
        description: "Visita al pie de la montaña más alta de las Rocosas canadienses, con sus glaciares y bosques.",
        activities: ["Caminata al lago Berg", "Fotografía de paisaje", "Picnic en entorno alpino"],
        coordinates: [-119.1628, 53.0301],
      },
      {
        day: 6,
        title: "Regreso a Kamloops",
        location: "Kamloops",
        description: "Viaje de regreso con paradas en miradores para contemplar la paleta otoñal y despedida del grupo.",
        activities: ["Última sesión fotográfica", "Visita a mercado local", "Cena de despedida"],
        coordinates: [-120.3273, 50.6745],
      },
    ],
  },

  // North Region + Winter
  {
    id: "north-winter",
    title: "Invierno Boreal - Norte de BC",
    region: "north",
    season: "winter",
    duration: 7,
    priceRange: "$4,100 - $5,500",
    description: "Adéntrate en la magia invernal del norte de British Columbia, con sus paisajes nevados, oportunidades para ver auroras boreales y experiencias únicas en la nieve.",
    highlights: [
      "Observación de auroras boreales",
      "Actividades de nieve: raquetas, esquí y motonieve",
      "Cultura de las Primeras Naciones en invierno",
      "Aguas termales rodeadas de nieve",
    ],
    stages: [
      {
        day: 1,
        title: "Llegada a Prince George",
        location: "Prince George",
        description: "Recepción en Prince George, principal ciudad del norte, con orientación sobre equipo invernal y cena de bienvenida.",
        activities: ["Preparación de equipo invernal", "Presentación del viaje", "Cena tradicional"],
        coordinates: [-122.7497, 53.9171],
      },
      {
        day: 2,
        title: "Parque Powder King",
        location: "Powder King",
        description: "Día en la estación de esquí con menor afluencia y mayor cantidad de nieve polvo de la provincia.",
        activities: ["Esquí o snowboard", "Lecciones para principiantes", "Sauna al atardecer"],
        coordinates: [-122.6179, 55.4428],
      },
      {
        day: 3,
        title: "Liard River Hot Springs",
        location: "Liard River",
        description: "Viaje hacia las aguas termales naturales más espectaculares de Canadá, rodeadas de bosque boreal nevado.",
        activities: ["Baño en aguas termales", "Caminata invernal", "Observación nocturna del cielo"],
        coordinates: [-126.0986, 59.4253],
      },
      {
        day: 4,
        title: "Northern Rockies",
        location: "Muncho Lake",
        description: "Exploración de los parajes nevados de las Montañas Rocosas del Norte, con sus profundos lagos y fauna adaptada al frío.",
        activities: ["Paseo en raquetas de nieve", "Búsqueda de bisontes de montaña", "Fotografía de paisaje helado"],
        coordinates: [-125.7681, 59.0018],
      },
      {
        day: 5,
        title: "Fort Nelson",
        location: "Fort Nelson",
        description: "Visita a este histórico puesto comercial, ahora convertido en base para observar auroras boreales y cultura indígena.",
        activities: ["Museo del Patrimonio", "Encuentro con artesanos locales", "Observación de auroras"],
        coordinates: [-122.6963, 58.8050],
      },
      {
        day: 6,
        title: "Lago Frozen",
        location: "Región de Stuart Lake",
        description: "Experiencia en un lago completamente congelado, con actividades tradicionales de invierno y hospedaje en cabaña.",
        activities: ["Pesca en hielo", "Paseo en trineo de perros", "Noche en cabaña con estufa de leña"],
        coordinates: [-124.4030, 54.4848],
      },
      {
        day: 7,
        title: "Regreso a Prince George",
        location: "Prince George",
        description: "Último día con actividades invernales y regreso a Prince George para la despedida del grupo.",
        activities: ["Último paseo invernal", "Compra de productos locales", "Cena final"],
        coordinates: [-122.7497, 53.9171],
      },
    ],
  },
];

export const getItinerary = (region: Region, season: Season): Itinerary | undefined => {
  return itineraries.find(
    (itinerary) => itinerary.region === region && itinerary.season === season
  );
};

export const getAllItineraries = (): Itinerary[] => {
  return itineraries;
};
