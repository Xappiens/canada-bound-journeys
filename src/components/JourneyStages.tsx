
import { StageDay } from "@/data/itineraries";
import { useState, useEffect } from "react";
import StageContent from "@/components/journey/StageContent";
import StageNavigation from "@/components/journey/StageNavigation";
import { useIsMobile } from "@/hooks/use-mobile";

interface JourneyStagesProps {
  stages: StageDay[];
  currentIndex: number;
  onPrevious: () => void;
  onNext: () => void;
  onClose: () => void;
  itineraryTitle?: string; // Add itinerary title as optional prop
}

const JourneyStages = ({
  stages,
  currentIndex,
  onPrevious,
  onNext,
  onClose,
  itineraryTitle,
}: JourneyStagesProps) => {
  const currentStage = stages[currentIndex];
  const [slideDirection, setSlideDirection] = useState<"left" | "right" | null>(null);
  const [animating, setAnimating] = useState(false);
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

  // Get the current stage's region and season
  // Extract from id if available, or use default values
  const getRegionAndSeason = () => {
    if (currentStage.id) {
      const parts = currentStage.id.split('-');
      return {
        region: parts[0] || 'south',
        season: parts[1] || 'summer'
      };
    }
    return {
      region: 'south',
      season: 'summer'
    };
  };
  
  const { region, season } = getRegionAndSeason();

  // Handle animation when currentIndex changes
  useEffect(() => {
    if (slideDirection) {
      setAnimating(true);
      const timer = setTimeout(() => {
        setAnimating(false);
        setSlideDirection(null);
      }, 500); // Animation duration
      return () => clearTimeout(timer);
    }
  }, [currentIndex, slideDirection]);

  // Custom navigation handlers
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setSlideDirection("right");
      onPrevious();
    }
  };

  const handleNext = () => {
    if (currentIndex < stages.length - 1) {
      setSlideDirection("left");
      onNext();
    }
  };

  return (
    <div className="relative flex h-full w-full overflow-hidden">
      {/* Background map or image - now fixed */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${getItineraryImage(region, season)}')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Close button */}
      <div className="absolute top-4 right-4 z-50">
        <button
          onClick={onClose}
          className="bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-all"
        >
          ✕
        </button>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex h-full w-full">
        {/* Current Stage Content */}
        <StageContent 
          currentStage={currentStage} 
          animating={animating} 
          slideDirection={slideDirection} 
          itineraryTitle={itineraryTitle} 
        />
      </div>

      {/* Navigation Controls */}
      <StageNavigation 
        onPrevious={handlePrevious}
        onNext={handleNext}
        isPreviousDisabled={currentIndex === 0}
        isNextDisabled={currentIndex === stages.length - 1}
        isMobile={isMobile}
      />
    </div>
  );
};

export default JourneyStages;
