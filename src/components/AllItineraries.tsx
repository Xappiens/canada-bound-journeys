
import { Itinerary } from "@/data/itineraries";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import { seasons } from "@/data/seasons";
import { regions } from "@/data/regions";

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
    <div className="relative flex h-full w-full overflow-y-auto bg-gray-50">
      {/* Header with back button */}
      <div className="fixed top-0 left-0 right-0 z-20 bg-white shadow-md p-4">
        <Button onClick={onBack} variant="outline" className="mb-4">
          <ArrowLeft className="mr-2 w-4 h-4" />
          Volver a selección
        </Button>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2">
          Todos los Itinerarios
        </h1>
        <p className="text-gray-600 mb-2">
          Explora nuestros 12 itinerarios para cada combinación de región y estación
        </p>
      </div>

      {/* Main content with itinerary cards */}
      <div className="container mx-auto pt-36 pb-28 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {itineraries.map((itinerary) => (
          <div 
            key={itinerary.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => onSelectItinerary(itinerary)}
          >
            <div 
              className="h-40 bg-cover bg-center"
              style={{ 
                backgroundImage: "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80')"
              }}
            >
              <div className="h-full w-full bg-black/30 p-4 flex flex-col justify-between">
                <div className="flex gap-2">
                  <span className={`${getSeasonColor(itinerary.season)} text-white px-3 py-1 rounded-full text-xs`}>
                    {getSeasonName(itinerary.season)}
                  </span>
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs">
                    {getRegionName(itinerary.region)}
                  </span>
                </div>
                <h3 className="text-white text-lg font-semibold">{itinerary.title}</h3>
              </div>
            </div>
            
            <div className="p-4">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm text-gray-600 flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {itinerary.duration} días
                </span>
                <span className="text-sm text-gray-600">
                  {itinerary.priceRange}
                </span>
              </div>
              
              <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                {itinerary.description}
              </p>
              
              <Button 
                className="w-full bg-canada-lake hover:bg-canada-lake/90"
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
  );
};

export default AllItineraries;
