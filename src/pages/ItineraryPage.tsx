
import { useNavigate } from "react-router-dom";
import ItinerarySelector from "@/components/ItinerarySelector";
import { useItinerary } from "@/hooks/useItinerary";

const ItineraryPage = () => {
  const navigate = useNavigate();
  const {
    selectedSeason,
    selectedRegion,
    currentItinerary,
    selectSeason,
    selectRegion,
  } = useItinerary();

  const handleShowItinerary = () => {
    if (currentItinerary) {
      navigate(`/itinerarios/detalle/${currentItinerary.id}`);
    }
  };

  const handleShowAllItineraries = () => {
    navigate("/itinerarios/lista");
  };

  return (
    <ItinerarySelector
      selectedSeason={selectedSeason}
      selectedRegion={selectedRegion}
      onSelectSeason={selectSeason}
      onSelectRegion={selectRegion}
      onShowItinerary={handleShowItinerary}
      onShowAllItineraries={handleShowAllItineraries}
    />
  );
};

export default ItineraryPage;
