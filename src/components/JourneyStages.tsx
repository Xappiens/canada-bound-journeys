
import { StageDay } from "@/data/itineraries";
import { useState, useEffect } from "react";
import StageContent from "@/components/journey/StageContent";
import StageNavigation from "@/components/journey/StageNavigation";
import PreviousStagesStack from "@/components/journey/PreviousStagesStack";

interface JourneyStagesProps {
  stages: StageDay[];
  currentIndex: number;
  onPrevious: () => void;
  onNext: () => void;
  onClose: () => void;
}

const JourneyStages = ({
  stages,
  currentIndex,
  onPrevious,
  onNext,
  onClose,
}: JourneyStagesProps) => {
  const currentStage = stages[currentIndex];
  const [slideDirection, setSlideDirection] = useState<"left" | "right" | null>(null);
  const [animating, setAnimating] = useState(false);
  const [previousStages, setPreviousStages] = useState<number[]>([]);

  // Handle animation when currentIndex changes
  useEffect(() => {
    if (slideDirection) {
      setAnimating(true);
      const timer = setTimeout(() => {
        setAnimating(false);
        setSlideDirection(null);
        
        // Update previous stages array
        if (slideDirection === "left") {
          setPreviousStages(prev => [...prev, currentIndex - 1]);
        } else if (slideDirection === "right") {
          setPreviousStages(prev => prev.slice(0, -1));
        }
      }, 500); // Animation duration
      return () => clearTimeout(timer);
    }
  }, [currentIndex, slideDirection]);

  // Custom navigation handlers
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setSlideDirection("right");
      onPrevious();
    }
  };

  const handleNext = () => {
    if (currentIndex < stages.length - 1) {
      setSlideDirection("left");
      onNext();
    }
  };

  // Function to handle direct navigation to a stage
  const navigateToStage = (index: number) => {
    if (index === currentIndex) return;
    
    if (index > currentIndex) {
      setSlideDirection("left");
      onNext();
    } else {
      setSlideDirection("right");
      onPrevious();
    }
  };

  return (
    <div className="relative flex h-full w-full overflow-hidden">
      {/* Background map or image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Close button */}
      <div className="absolute top-4 right-4 z-50">
        <button
          onClick={onClose}
          className="bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-all"
        >
          ✕
        </button>
      </div>

      {/* Stacked Previous Stages (Vertical bars) */}
      <div className="relative z-10 flex h-full w-full">
        <PreviousStagesStack 
          previousStages={previousStages} 
          stages={stages} 
          onNavigateToStage={navigateToStage} 
        />

        {/* Current Stage Content */}
        <StageContent 
          currentStage={currentStage} 
          animating={animating} 
          slideDirection={slideDirection} 
        />
      </div>

      {/* Navigation Controls */}
      <StageNavigation 
        onPrevious={handlePrevious}
        onNext={handleNext}
        isPreviousDisabled={currentIndex === 0}
        isNextDisabled={currentIndex === stages.length - 1}
      />
    </div>
  );
};

export default JourneyStages;
