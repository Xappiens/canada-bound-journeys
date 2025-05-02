
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import JourneyStages from "@/components/JourneyStages";
import FloatingDaySelector from "@/components/FloatingDaySelector";
import { Itinerary, getAllItineraries } from "@/data/itineraries";

const ItineraryDailyPage = () => {
  const { itineraryId } = useParams<{ itineraryId: string }>();
  const navigate = useNavigate();
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const [itinerary, setItinerary] = useState<Itinerary | null>(null);
  
  useEffect(() => {
    // Get all itineraries and find the one that matches the ID
    const allItineraries = getAllItineraries();
    const foundItinerary = allItineraries.find(item => item.id === itineraryId);
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
