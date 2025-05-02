
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { seasons, Season } from "@/data/seasons";
import { regions, Region } from "@/data/regions";
import { Leaf, Sun, Snowflake, CloudSun, Grid, ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface ItinerarySelectorProps {
  selectedSeason: Season;
  selectedRegion: Region;
  onSelectSeason: (season: Season) => void;
  onSelectRegion: (region: Region) => void;
  onShowItinerary: () => void;
  onShowAllItineraries: () => void;
}

const ItinerarySelector = ({
  selectedSeason,
  selectedRegion,
  onSelectSeason,
  onSelectRegion,
  onShowItinerary,
  onShowAllItineraries
}: ItinerarySelectorProps) => {
  const isMobile = useIsMobile();
  const [step, setStep] = useState<'season' | 'region'>('season');
  
  const getSeasonIcon = (season: Season) => {
    switch (season) {
      case "spring":
        return <CloudSun className="w-5 h-5" />;
      case "summer":
        return <Sun className="w-5 h-5" />;
      case "autumn":
        return <Leaf className="w-5 h-5" />;
      case "winter":
        return <Snowflake className="w-5 h-5" />;
      default:
        return null;
    }
  };

  // Handle season selection and move to next step
  const handleSeasonSelect = (season: Season) => {
    onSelectSeason(season);
    setStep('region');
  };

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-auto">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2671&q=80')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content - Added pb-24 to ensure content doesn't get hidden by the floating menu */}
      <div className="relative z-10 bg-white/90 backdrop-blur-sm rounded-2xl p-8 w-11/12 max-w-2xl shadow-xl animate-fade-in my-20 pb-24">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Diseña Tu Aventura</h2>
        
        {/* Step indicator */}
        <div className="flex items-center justify-center mb-6">
          <div className={`w-4 h-4 rounded-full ${step === 'season' ? 'bg-canada-lake' : 'bg-gray-300'}`}></div>
          <div className="w-8 h-1 bg-gray-300"></div>
          <div className={`w-4 h-4 rounded-full ${step === 'region' ? 'bg-canada-lake' : 'bg-gray-300'}`}></div>
        </div>
        
        {/* Season Selector - First Step */}
        {step === 'season' && (
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-700 mb-3">¿En qué estación quieres viajar?</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {seasons.map((season) => (
                <button
                  key={season.id}
                  onClick={() => handleSeasonSelect(season.id)}
                  className={`p-3 sm:p-4 rounded-lg border-2 transition-all ${
                    selectedSeason === season.id
                      ? "border-canada-lake bg-canada-lake/10"
                      : "border-gray-200 hover:border-gray-300"
                  } flex flex-col items-center`}
                >
                  <span className={`bg-gray-100 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center mb-2 ${
                    selectedSeason === season.id ? "bg-canada-lake/20" : ""
                  }`}>
                    {getSeasonIcon(season.id)}
                  </span>
                  <span className={`font-medium ${selectedSeason === season.id ? "text-canada-lake" : ""}`}>{season.name}</span>
                  <span className="text-xs text-gray-500">{season.months}</span>
                </button>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Button 
                onClick={() => setStep('region')} 
                className="bg-canada-lake hover:bg-canada-lake/90 text-white px-4 py-2 rounded-md"
              >
                Continuar <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        )}

        {/* Region Selector - Second Step */}
        {step === 'region' && (
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-700 mb-2">
              Has seleccionado: <span className="text-canada-lake">{seasons.find(s => s.id === selectedSeason)?.name}</span>
            </h3>
            <h3 className="text-lg font-medium text-gray-700 mb-3">¿Qué región de British Columbia?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {regions.map((region) => (
                <button
                  key={region.id}
                  onClick={() => onSelectRegion(region.id)}
                  className={`p-3 sm:p-4 rounded-lg border-2 transition-all ${
                    selectedRegion === region.id
                      ? "border-canada-lake bg-canada-lake/10"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <h4 className={`font-medium ${selectedRegion === region.id ? "text-canada-lake" : ""}`}>{region.name}</h4>
                  <p className="text-xs sm:text-sm text-gray-600 line-clamp-1">{region.mainAreas.join(", ")}</p>
                </button>
              ))}
            </div>

            <div className="mt-8 text-center flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => setStep('season')}
                variant="outline"
                className="border-canada-lake text-canada-lake hover:bg-canada-lake/10 px-4 py-2 rounded-md"
              >
                Volver
              </Button>
              <Button
                onClick={onShowItinerary}
                className="bg-canada-lake hover:bg-canada-lake/90 text-white px-4 sm:px-8 py-2 rounded-md"
              >
                Ver Itinerario Seleccionado
              </Button>
            </div>
          </div>
        )}

        {/* Show All Itineraries button - Always visible */}
        <div className="text-center">
          <Button
            onClick={onShowAllItineraries}
            variant="outline"
            className="border-canada-lake text-canada-lake hover:bg-canada-lake/10 px-4 sm:px-8 py-2 rounded-md"
          >
            <Grid className="mr-2" />
            Ver Todos los Itinerarios
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ItinerarySelector;
