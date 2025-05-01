import { useState } from "react";
import ItinerarySelector from "@/components/ItinerarySelector";
import ItineraryDetails from "@/components/ItineraryDetails";
import JourneyStages from "@/components/JourneyStages";
import FloatingDaySelector from "@/components/FloatingDaySelector";
import { useItinerary } from "@/hooks/useItinerary";
import AllItineraries from "@/components/AllItineraries";
import { getItinerary } from "@/data/itineraries";

const ItineraryPage = () => {
  const [showJourneyStages, setShowJourneyStages] = useState<boolean>(false);
  
  const {
    selectedSeason,
    selectedRegion,
    currentItinerary,
    currentStage,
    currentStageIndex,
    isDetailsVisible,
    allItineraries,
    isViewingAllItineraries,
    selectSeason,
    selectRegion,
    showAllItineraries,
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
  } else if (isViewingAllItineraries) {
    return (
      <AllItineraries 
        itineraries={allItineraries} 
        onSelectItinerary={showDetails}
        onBack={() => {
          const itinerary = getItinerary(selectedRegion, selectedSeason);
          setCurrentItinerary(itinerary);
          hideDetails();
        }}
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
      onShowAllItineraries={showAllItineraries}
    />
  );
};

export default ItineraryPage;
