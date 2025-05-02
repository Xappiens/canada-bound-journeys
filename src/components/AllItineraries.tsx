
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

  return (
    <div className="relative flex flex-col h-full w-full overflow-y-auto">
      {/* Background image with overlay - now fixed */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center fixed"
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
      
      {/* Title directly on background */}
      <div className="pt-20 pb-4 px-4 text-center relative z-10">
        <h1 className="text-xl md:text-2xl font-bold text-white">
          Todos los Itinerarios
        </h1>
        <p className="text-xs md:text-sm text-white/90">
          Explora nuestros 12 itinerarios para cada combinación de región y estación
        </p>
      </div>

      {/* Main content - responsive layout: list on mobile, grid on desktop */}
      <div className="flex-1 w-full px-4 pb-28 pt-2 relative z-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {itineraries.map((itinerary) => (
              <div 
                key={itinerary.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer mb-4 sm:mb-0"
                onClick={() => onSelectItinerary(itinerary)}
              >
                <div 
                  className="h-36 w-full bg-cover bg-center"
                  style={{ 
                    backgroundImage: "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80')"
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
