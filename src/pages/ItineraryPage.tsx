
import { useState } from "react";
import ItinerarySelector from "@/components/ItinerarySelector";
import ItineraryDetails from "@/components/ItineraryDetails";
import JourneyStages from "@/components/JourneyStages";
import FloatingDaySelector from "@/components/FloatingDaySelector";
import { useItinerary } from "@/hooks/useItinerary";

const ItineraryPage = () => {
  const [showJourneyStages, setShowJourneyStages] = useState<boolean>(false);
  
  const {
    selectedSeason,
    selectedRegion,
    currentItinerary,
    currentStage,
    currentStageIndex,
    isDetailsVisible,
    selectSeason,
    selectRegion,
    nextStage,
    previousStage,
    setCurrentStageIndex,
    showDetails,
    hideDetails,
  } = useItinerary();

  const handleShowItinerary = () => {
    if (currentItinerary) {
      showDetails();
    }
  };

  const handleStartJourney = () => {
    setShowJourneyStages(true);
  };

  const handleCloseItinerary = () => {
    hideDetails();
    setShowJourneyStages(false);
  };

  const handleSelectDay = (index: number) => {
    setCurrentStageIndex(index);
  };

  if (showJourneyStages && currentItinerary) {
    return (
      <>
        <JourneyStages
          stages={currentItinerary.stages}
          currentIndex={currentStageIndex}
          onPrevious={previousStage}
          onNext={nextStage}
          onClose={handleCloseItinerary}
        />
        <FloatingDaySelector 
          stages={currentItinerary.stages}
          currentIndex={currentStageIndex}
          onSelectDay={handleSelectDay}
        />
      </>
    );
  } else if (isDetailsVisible && currentItinerary) {
    return (
      <ItineraryDetails
        itinerary={currentItinerary}
        onStartJourney={handleStartJourney}
        onClose={handleCloseItinerary}
      />
    );
  }

  return (
    <ItinerarySelector
      selectedSeason={selectedSeason}
      selectedRegion={selectedRegion}
      onSelectSeason={selectSeason}
      onSelectRegion={selectRegion}
      onShowItinerary={handleShowItinerary}
    />
  );
};

export default ItineraryPage;
