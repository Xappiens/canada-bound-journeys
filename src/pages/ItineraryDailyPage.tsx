
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import JourneyStages from "@/components/JourneyStages";
import FloatingDaySelector from "@/components/FloatingDaySelector";
import { Itinerary } from "@/data/itineraries";
import { getItinerary } from "@/data/itineraries";

const ItineraryDailyPage = () => {
  const { itineraryId } = useParams<{ itineraryId: string }>();
  const navigate = useNavigate();
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const [itinerary, setItinerary] = useState<Itinerary | null>(null);
  
  useEffect(() => {
    // This is a placeholder to get the itinerary by ID
    // Later we would need to implement a function to get itinerary by ID
    const allItineraries = Array.from(new Array(12)).map((_, i) => {
      const seasonIndex = Math.floor(i / 3);
      const regionIndex = i % 3;
      const seasons = ["spring", "summer", "autumn", "winter"];
      const regions = ["north", "central", "south"];
      
      return getItinerary(regions[regionIndex], seasons[seasonIndex]);
    });
    
    const foundItinerary = allItineraries.find(item => item?.id === itineraryId);
    setItinerary(foundItinerary || null);
  }, [itineraryId]);

  const handlePreviousStage = () => {
    setCurrentStageIndex(prev => Math.max(0, prev - 1));
  };

  const handleNextStage = () => {
    if (itinerary) {
      setCurrentStageIndex(prev => Math.min(itinerary.stages.length - 1, prev + 1));
    }
  };

  const handleClose = () => {
    navigate(`/itinerarios/detalle/${itineraryId}`);
  };

  const handleSelectDay = (index: number) => {
    setCurrentStageIndex(index);
  };

  if (!itinerary) {
    return <div className="h-full flex items-center justify-center">Loading...</div>;
  }

  return (
    <>
      <JourneyStages
        stages={itinerary.stages}
        currentIndex={currentStageIndex}
        onPrevious={handlePreviousStage}
        onNext={handleNextStage}
        onClose={handleClose}
      />
      <FloatingDaySelector 
        stages={itinerary.stages}
        currentIndex={currentStageIndex}
        onSelectDay={handleSelectDay}
      />
    </>
  );
};

export default ItineraryDailyPage;
