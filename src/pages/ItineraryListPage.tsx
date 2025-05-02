
import { useNavigate } from "react-router-dom";
import AllItineraries from "@/components/AllItineraries";
import { useItinerary } from "@/hooks/useItinerary";

const ItineraryListPage = () => {
  const navigate = useNavigate();
  const { allItineraries } = useItinerary();
  
  const handleSelectItinerary = (itinerary: any) => {
    navigate(`/itinerarios/detalle/${itinerary.id}`);
  };
  
  const handleBack = () => {
    navigate("/itinerarios");
  };

  return (
    <AllItineraries 
      itineraries={allItineraries} 
      onSelectItinerary={handleSelectItinerary}
      onBack={handleBack}
    />
  );
};

export default ItineraryListPage;
