
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { seasons, Season } from "@/data/seasons";
import { regions, Region } from "@/data/regions";
import { Leaf, Sun, Snowflake, CloudSun, Grid, ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";

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
        {/* Logo for itineraries page */}
        <div className="flex justify-center mb-4">
          <Link to="/" className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 text-red-600">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="fill-current">
                <path d="M383.8 351.7c2.5-2.5 105.2-92.4 105.2-92.4l-17.5-7.5c-10-4.9-7.4-11.5-5-17.4 2.4-7.6 20.1-67.3 20.1-67.3s-47.7 10-57.7 12.5c-7.5 2.4-10-2.5-12.5-7.5s-15-32.4-15-32.4-52.6 59.9-55.1 62.3c-10 7.5-20.1 0-17.6-10 0-10 27.6-129.6 27.6-129.6s-30.1 17.4-40.1 22.4c-7.5 5-12.6 5-17.6-5C293.5 72.3 255.9 0 255.9 0s-37.5 72.3-42.5 79.8c-5 10-10 10-17.6 5-10-5-40.1-22.4-40.1-22.4S183.3 182 183.3 192c2.5 10-7.5 17.5-17.6 10-2.5-2.5-55.1-62.3-55.1-62.3S98.1 167 95.6 172s-5 9.9-12.5 7.5C73 177 25.4 167 25.4 167s17.6 59.7 20.1 67.3c2.4 6 5 12.5-5 17.4L23 259.3s102.6 89.9 105.2 92.4c5.1 5 10 7.5 5.1 22.5-5.1 15-10.1 35.1-10.1 35.1s95.2-20.1 105.3-22.6c8.7-.9 18.3 2.5 18.3 12.5S241 512 241 512h30s-5.8-102.7-5.8-112.8 9.5-13.4 18.4-12.5c10 2.5 105.2 22.6 105.2 22.6s-5-20.1-10-35.1 0-17.5 5-22.5z"/>
              </svg>
            </div>
            <span className="text-lg font-bold text-canada-lake">Canada BC Experience</span>
          </Link>
        </div>

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
