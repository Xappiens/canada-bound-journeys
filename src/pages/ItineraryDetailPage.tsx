
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ItineraryDetails from "@/components/ItineraryDetails";
import { Itinerary } from "@/data/itineraries";
import { getItinerary } from "@/data/itineraries";
import { Region } from "@/data/regions";
import { Season } from "@/data/seasons";

const ItineraryDetailPage = () => {
  const { itineraryId } = useParams<{ itineraryId: string }>();
  const navigate = useNavigate();
  const [itinerary, setItinerary] = useState<Itinerary | null>(null);
  
  useEffect(() => {
    // This is a placeholder to get the itinerary by ID
    // Later we would need to implement a function to get itinerary by ID
    const allItineraries = Array.from(new Array(12)).map((_, i) => {
      const seasonIndex = Math.floor(i / 3);
      const regionIndex = i % 3;
      const seasons: Season[] = ["spring", "summer", "autumn", "winter"];
      const regions: Region[] = ["north", "central", "south"];
      
      return getItinerary(regions[regionIndex], seasons[seasonIndex]);
    });
    
    const foundItinerary = allItineraries.find(item => item?.id === itineraryId);
    setItinerary(foundItinerary || null);
  }, [itineraryId]);

  const handleStartJourney = () => {
    navigate(`/itinerarios/diario/${itineraryId}`);
  };

  const handleClose = () => {
    navigate("/itinerarios/lista");
  };

  if (!itinerary) {
    return <div className="h-full flex items-center justify-center">Loading...</div>;
  }

  return (
    <ItineraryDetails
      itinerary={itinerary}
      onStartJourney={handleStartJourney}
      onClose={handleClose}
    />
  );
};

export default ItineraryDetailPage;
