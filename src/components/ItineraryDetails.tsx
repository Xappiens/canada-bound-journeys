
import { Button } from "@/components/ui/button";
import { Itinerary } from "@/data/itineraries";
import { useIsMobile } from "@/hooks/use-mobile";
import { regions } from "@/data/regions";
import { seasons } from "@/data/seasons";

interface ItineraryDetailsProps {
  itinerary: Itinerary;
  onStartJourney: () => void;
  onClose: () => void;
}

const ItineraryDetails = ({
  itinerary,
  onStartJourney,
  onClose,
}: ItineraryDetailsProps) => {
  const isMobile = useIsMobile();
  
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
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            `url('${getItineraryImage(itinerary.region, itinerary.season)}')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Close button */}
      <div className="absolute top-4 right-4 z-20">
        <button
          onClick={onClose}
          className="bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-all"
        >
          ✕
        </button>
      </div>

      {/* Content */}
      <div className="relative z-10 text-overlay max-w-3xl w-11/12 animate-fade-in pb-24 md:pb-0 pt-20 md:pt-0">
        <h2 className={`${isMobile ? "text-2xl" : "text-3xl md:text-4xl"} font-bold mb-3 line-clamp-1`}>{itinerary.title}</h2>
        
        <div className="flex flex-wrap gap-3 mb-4">
          <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
            {itinerary.duration} días
          </span>
          <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
            {itinerary.priceRange}
          </span>
        </div>
        
        <p className={`${isMobile ? "text-base" : "text-lg"} mb-6`}>{itinerary.description}</p>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">Destacados:</h3>
          <ul className="space-y-2">
            {itinerary.highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-canada-lake">✦</span>
                <span className={isMobile ? "text-sm" : ""}>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <Button
          onClick={onStartJourney}
          className="bg-canada-lake hover:bg-canada-lake/90 text-white px-6 py-5 rounded-md"
        >
          Ver Día a Día del Viaje
        </Button>
      </div>
    </div>
  );
};

export default ItineraryDetails;
