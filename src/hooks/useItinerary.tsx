
import { useState, useEffect } from "react";
import { Season } from "@/data/seasons";
import { Region } from "@/data/regions";
import { Itinerary, getItinerary } from "@/data/itineraries";

export const useItinerary = () => {
  const [selectedSeason, setSelectedSeason] = useState<Season>("summer");
  const [selectedRegion, setSelectedRegion] = useState<Region>("south");
  const [currentItinerary, setCurrentItinerary] = useState<Itinerary | undefined>();
  const [currentStageIndex, setCurrentStageIndex] = useState<number>(0);
  const [isDetailsVisible, setIsDetailsVisible] = useState<boolean>(false);
  
  // Update the itinerary when season or region changes
  useEffect(() => {
    const itinerary = getItinerary(selectedRegion, selectedSeason);
    setCurrentItinerary(itinerary);
    setCurrentStageIndex(0);
  }, [selectedSeason, selectedRegion]);
  
  const selectSeason = (season: Season) => {
    setSelectedSeason(season);
  };
  
  const selectRegion = (region: Region) => {
    setSelectedRegion(region);
  };
  
  const nextStage = () => {
    if (!currentItinerary) return;
    
    setCurrentStageIndex((prev) => {
      if (prev < currentItinerary.stages.length - 1) {
        return prev + 1;
      }
      return prev;
    });
  };
  
  const previousStage = () => {
    setCurrentStageIndex((prev) => {
      if (prev > 0) {
        return prev - 1;
      }
      return prev;
    });
  };
  
  const showDetails = () => {
    setIsDetailsVisible(true);
  };
  
  const hideDetails = () => {
    setIsDetailsVisible(false);
    setCurrentStageIndex(0);
  };
  
  const currentStage = currentItinerary?.stages[currentStageIndex];
  
  return {
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
    showDetails,
    hideDetails,
  };
};
