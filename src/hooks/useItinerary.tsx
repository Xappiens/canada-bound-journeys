
import { useState, useEffect } from "react";
import { Season } from "@/data/seasons";
import { Region } from "@/data/regions";
import { Itinerary, getItinerary, getAllItineraries } from "@/data/itineraries";

export const useItinerary = () => {
  const [selectedSeason, setSelectedSeason] = useState<Season>("summer");
  const [selectedRegion, setSelectedRegion] = useState<Region>("south");
  const [currentItinerary, setCurrentItinerary] = useState<Itinerary | undefined>();
  const [currentStageIndex, setCurrentStageIndex] = useState<number>(0);
  const [isDetailsVisible, setIsDetailsVisible] = useState<boolean>(false);
  const [allItineraries, setAllItineraries] = useState<Itinerary[]>([]);
  const [isViewingAllItineraries, setIsViewingAllItineraries] = useState<boolean>(false);
  
  // Load all itineraries on mount
  useEffect(() => {
    setAllItineraries(getAllItineraries());
  }, []);
  
  // Update the itinerary when season or region changes
  useEffect(() => {
    if (!isViewingAllItineraries) {
      const itinerary = getItinerary(selectedRegion, selectedSeason);
      setCurrentItinerary(itinerary);
      setCurrentStageIndex(0);
    }
  }, [selectedSeason, selectedRegion, isViewingAllItineraries]);
  
  const selectSeason = (season: Season) => {
    setSelectedSeason(season);
    setIsViewingAllItineraries(false);
  };
  
  const selectRegion = (region: Region) => {
    setSelectedRegion(region);
    setIsViewingAllItineraries(false);
  };
  
  const showAllItineraries = () => {
    setIsViewingAllItineraries(true);
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
  
  const showDetails = (itinerary?: Itinerary) => {
    if (itinerary) {
      setCurrentItinerary(itinerary);
    }
    setIsDetailsVisible(true);
  };
  
  const hideDetails = () => {
    setIsDetailsVisible(false);
    setCurrentStageIndex(0);
    
    // If we were viewing a specific itinerary, go back to the selection
    if (!isViewingAllItineraries) {
      const itinerary = getItinerary(selectedRegion, selectedSeason);
      setCurrentItinerary(itinerary);
    }
  };
  
  const currentStage = currentItinerary?.stages[currentStageIndex];
  
  return {
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
  };
};
