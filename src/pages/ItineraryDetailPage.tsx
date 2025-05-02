
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ItineraryDetails from "@/components/ItineraryDetails";
import { Itinerary, getAllItineraries } from "@/data/itineraries";

const ItineraryDetailPage = () => {
  const { itineraryId } = useParams<{ itineraryId: string }>();
  const navigate = useNavigate();
  const [itinerary, setItinerary] = useState<Itinerary | null>(null);
  
  useEffect(() => {
    // Get all itineraries and find the one that matches the ID
    const allItineraries = getAllItineraries();
    const foundItinerary = allItineraries.find(item => item.id === itineraryId);
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
