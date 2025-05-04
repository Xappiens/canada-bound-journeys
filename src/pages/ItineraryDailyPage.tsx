
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import JourneyStages from "@/components/JourneyStages";
import FloatingDaySelector from "@/components/FloatingDaySelector";
import { Itinerary, getAllItineraries } from "@/data/itineraries";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const ItineraryDailyPage = () => {
  const { itineraryId } = useParams<{ itineraryId: string }>();
  const navigate = useNavigate();
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const [itinerary, setItinerary] = useState<Itinerary | null>(null);
  const isMobile = useIsMobile();
  
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
      {/* Logo centered at the top, horizontal for mobile */}
      <div className={`absolute ${isMobile ? "top-4 left-4" : "top-8 left-0 right-0 flex justify-center"} z-20`}>
        <Link to="/" className={`flex ${isMobile ? "flex-row" : "flex-col"} items-center gap-2`}>
          <div className={`${isMobile ? "w-8 h-8" : "w-12 h-12"} text-red-600`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="fill-current">
              <path d="M383.8 351.7c2.5-2.5 105.2-92.4 105.2-92.4l-17.5-7.5c-10-4.9-7.4-11.5-5-17.4 2.4-7.6 20.1-67.3 20.1-67.3s-47.7 10-57.7 12.5c-7.5 2.4-10-2.5-12.5-7.5s-15-32.4-15-32.4-52.6 59.9-55.1 62.3c-10 7.5-20.1 0-17.6-10 0-10 27.6-129.6 27.6-129.6s-30.1 17.4-40.1 22.4c-7.5 5-12.6 5-17.6-5C293.5 72.3 255.9 0 255.9 0s-37.5 72.3-42.5 79.8c-5 10-10 10-17.6 5-10-5-40.1-22.4-40.1-22.4S183.3 182 183.3 192c2.5 10-7.5 17.5-17.6 10-2.5-2.5-55.1-62.3-55.1-62.3S98.1 167 95.6 172s-5 9.9-12.5 7.5C73 177 25.4 167 25.4 167s17.6 59.7 20.1 67.3c2.4 6 5 12.5-5 17.4L23 259.3s102.6 89.9 105.2 92.4c5.1 5 10 7.5 5.1 22.5-5.1 15-10.1 35.1-10.1 35.1s95.2-20.1 105.3-22.6c8.7-.9 18.3 2.5 18.3 12.5S241 512 241 512h30s-5.8-102.7-5.8-112.8 9.5-13.4 18.4-12.5c10 2.5 105.2 22.6 105.2 22.6s-5-20.1-10-35.1 0-17.5 5-22.5z"/>
            </svg>
          </div>
          <span className={`${isMobile ? "text-sm" : "text-lg"} font-bold text-white`}>Canada BC Experience</span>
        </Link>
      </div>
      <JourneyStages
        stages={itinerary.stages}
        currentIndex={currentStageIndex}
        onPrevious={handlePreviousStage}
        onNext={handleNextStage}
        onClose={handleClose}
        itineraryTitle={itinerary.title} // Pass the itinerary title here
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
