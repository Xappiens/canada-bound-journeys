
import { useState } from "react";
import FloatingMenu from "@/components/FloatingMenu";
import HeroSection from "@/components/HeroSection";
import ItinerarySelector from "@/components/ItinerarySelector";
import ItineraryDetails from "@/components/ItineraryDetails";
import JourneyStages from "@/components/JourneyStages";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import { useItinerary } from "@/hooks/useItinerary";

type Section = "home" | "itinerary" | "about" | "contact";

const Index = () => {
  const [activeSection, setActiveSection] = useState<Section>("home");
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
    showDetails,
    hideDetails,
  } = useItinerary();

  const handleItineraryClick = () => {
    setActiveSection("itinerary");
    hideDetails();
    setShowJourneyStages(false);
  };

  const handleHomeClick = () => {
    setActiveSection("home");
    hideDetails();
    setShowJourneyStages(false);
  };

  const handleAboutClick = () => {
    setActiveSection("about");
    hideDetails();
    setShowJourneyStages(false);
  };

  const handleContactClick = () => {
    setActiveSection("contact");
    hideDetails();
    setShowJourneyStages(false);
  };

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

  // Render the appropriate section based on activeSection
  const renderSection = () => {
    if (activeSection === "itinerary") {
      if (showJourneyStages && currentItinerary) {
        return (
          <JourneyStages
            stages={currentItinerary.stages}
            currentIndex={currentStageIndex}
            onPrevious={previousStage}
            onNext={nextStage}
            onClose={handleCloseItinerary}
          />
        );
      } else if (isDetailsVisible && currentItinerary) {
        return (
          <ItineraryDetails
            itinerary={currentItinerary}
            onStartJourney={handleStartJourney}
            onClose={handleCloseItinerary}
          />
        );
      } else {
        return (
          <ItinerarySelector
            selectedSeason={selectedSeason}
            selectedRegion={selectedRegion}
            onSelectSeason={selectSeason}
            onSelectRegion={selectRegion}
            onShowItinerary={handleShowItinerary}
          />
        );
      }
    } else if (activeSection === "about") {
      return <AboutSection onExploreClick={handleItineraryClick} />;
    } else if (activeSection === "contact") {
      return <ContactSection />;
    } else {
      // Default to home
      return <HeroSection onExploreClick={handleItineraryClick} />;
    }
  };

  return (
    <div className="full-page">
      {/* Main content */}
      <main className="h-full w-full">
        {renderSection()}
      </main>

      {/* Floating menu */}
      <FloatingMenu
        onHomeClick={handleHomeClick}
        onItineraryClick={handleItineraryClick}
        onAboutClick={handleAboutClick}
        onContactClick={handleContactClick}
        activeSection={activeSection}
      />
    </div>
  );
};

export default Index;
