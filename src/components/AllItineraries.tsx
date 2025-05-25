import { Itinerary } from "@/data/itineraries";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import { seasons } from "@/data/seasons";
import { regions } from "@/data/regions";
import { useIsMobile } from "@/hooks/use-mobile";

interface AllItinerariesProps {
  itineraries: Itinerary[];
  onSelectItinerary: (itinerary: Itinerary) => void;
  onBack: () => void;
}

const AllItineraries = ({ 
  itineraries, 
  onSelectItinerary,
  onBack
}: AllItinerariesProps) => {
  const isMobile = useIsMobile();
  
  // Get season name by id
  const getSeasonName = (seasonId: string) => {
    const season = seasons.find(s => s.id === seasonId);
    return season ? season.name : seasonId;
  };
  
  // Get region name by id
  const getRegionName = (regionId: string) => {
    const region = regions.find(r => r.id === regionId);
    return region ? region.name : regionId;
  };

  // Get season color by id
  const getSeasonColor = (seasonId: string) => {
    const season = seasons.find(s => s.id === seasonId);
    return season ? season.color : "bg-gray-500";
  };

  // Get a specific image based on region and season
  const getItineraryImage = (region: string, season: string) => {
    const images = {
      // South region
      "south-spring": "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80", // Orange flowers for spring
      "south-summer": "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80", // Forest heat by sunbeam for summer
      "south-autumn": "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80", // Yellow lights between trees for autumn
      "south-winter": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80", // Photo of pine trees for winter
      
      // Central region
      "central-spring": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80", // Sun light through green leaves for spring
      "central-summer": "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80", // River between mountains for summer
      "central-autumn": "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80", // Deer beside trees for autumn
      "central-winter": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80", // Foggy mountain for winter
      
      // North region
      "north-spring": "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80", // Bird's eye view of green mountains for spring
      "north-summer": "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80", // Mountain with sun rays for summer
      "north-autumn": "https://images.unsplash.com/photo-1439886183900-e79ec0057170?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80", // Two deer in woods for autumn
      "north-winter": "https://images.unsplash.com/photo-1438565434616-3ef039228b15?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80", // Mountain goats in winter for winter
    };
    
    const key = `${region}-${season}`;
    return images[key] || "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80"; // Default image
  };

  return (
    <div className="w-full">
      {/* Fixed background image with overlay */}
      <div 
        className="fixed-bg"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80')" 
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Back button floating in the corner */}
      <div className="absolute top-4 left-4 z-20">
        <Button onClick={onBack} variant="outline" size="sm" className="bg-white/80 backdrop-blur-sm">
          <ArrowLeft className="w-4 h-4 mr-1" />
          <span className="text-xs">Volver</span>
        </Button>
      </div>
      
      {/* Title - space added for mobile to account for the logo */}
      <div className={`${isMobile ? 'pt-28' : 'pt-20'} pb-4 px-4 text-center relative z-10`}>
        <h1 className="text-xl md:text-2xl font-bold text-white">
          Todos los Itinerarios
        </h1>
        <p className="text-xs md:text-sm text-white/90">
          Explora nuestros 12 itinerarios para cada combinación de región y estación
        </p>
      </div>

      {/* Main content - responsive layout with larger cards */}
      <div className="w-full px-2 sm:px-4 pb-28 pt-2 relative z-10">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 justify-items-center">
            {/* Tarjeta destacada del grupo de septiembre 2025 */}
            <div 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer mb-4 sm:mb-0 w-full max-w-sm col-span-1 sm:col-span-2 lg:col-span-3 transform hover:scale-[1.02] transition-transform"
              onClick={() => window.location.href = '/viaje-septiembre-2025'}
            >
              <div 
                className="h-56 sm:h-64 w-full bg-cover bg-center"
                style={{ 
                  backgroundImage: "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80')"
                }}
              >
                <div className="h-full w-full bg-gradient-to-b from-black/50 to-black/70 p-4 md:p-6 flex flex-col justify-between">
                  <div className="flex gap-2 flex-wrap">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      ¡Grupo Confirmado!
                    </span>
                    <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                      Septiembre 2025
                    </span>
                  </div>
                  <div>
                    <h3 className="text-white text-xl md:text-2xl font-bold mb-2">Viaje Grupal a Canadá</h3>
                    <p className="text-white/90 text-sm md:text-base mb-4">
                      Únete a nuestro grupo confirmado para septiembre 2025. ¡Plazas limitadas!
                    </p>
                    <Button 
                      className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md text-sm font-medium"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.location.href = '/viaje-septiembre-2025';
                      }}
                    >
                      Ver Itinerario
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {itineraries.map((itinerary) => (
              <div 
                key={itinerary.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer mb-4 sm:mb-0 w-full max-w-sm"
                onClick={() => onSelectItinerary(itinerary)}
              >
                <div 
                  className="h-44 sm:h-48 w-full bg-cover bg-center"
                  style={{ 
                    backgroundImage: `url('${getItineraryImage(itinerary.region, itinerary.season)}')`
                  }}
                >
                  <div className="h-full w-full bg-black/30 p-3 md:p-4 flex flex-col justify-between">
                    <div className="flex gap-2 flex-wrap">
                      <span className={`${getSeasonColor(itinerary.season)} text-white px-2 md:px-3 py-1 rounded-full text-xs`}>
                        {getSeasonName(itinerary.season)}
                      </span>
                      <span className="bg-white/20 text-white px-2 md:px-3 py-1 rounded-full text-xs">
                        {getRegionName(itinerary.region)}
                      </span>
                    </div>
                    <h3 className="text-white text-base md:text-lg font-semibold">{itinerary.title}</h3>
                  </div>
                </div>
                
                <div className="p-3 md:p-4">
                  <div className="flex justify-between items-center mb-2 md:mb-3">
                    <span className="text-xs md:text-sm text-gray-600 flex items-center">
                      <Calendar className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                      {itinerary.duration} días
                    </span>
                    <span className="text-xs md:text-sm text-gray-600">
                      {itinerary.priceRange}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 text-xs md:text-sm line-clamp-2 mb-3 md:mb-4">
                    {itinerary.description}
                  </p>
                  
                  <Button 
                    className="w-full bg-canada-lake hover:bg-canada-lake/90 text-sm py-1 h-auto md:py-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectItinerary(itinerary);
                    }}
                  >
                    Ver Detalles
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllItineraries;
