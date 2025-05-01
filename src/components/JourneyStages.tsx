
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { StageDay } from "@/data/itineraries";
import { useState, useEffect } from "react";

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

  // Calculate width percentage based on how many previous stages we have
  const getStackedWidth = (stageIndex: number) => {
    const totalStacked = previousStages.length;
    const position = previousStages.indexOf(stageIndex);
    
    // If it's not in the previous stages, return 0
    if (position === -1) return 0;
    
    // The most recent previous stage should be wider
    const baseWidth = 8; // base width in percentage
    const decrementFactor = 1; // how much to reduce for each older stage
    
    return baseWidth - (totalStacked - position - 1) * decrementFactor;
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
        {previousStages.map((stageIndex) => (
          <div
            key={stageIndex}
            onClick={() => navigateToStage(stageIndex)}
            style={{ width: `${getStackedWidth(stageIndex)}%` }}
            className="h-full bg-canada-lake/80 hover:bg-canada-lake transition-all duration-300 cursor-pointer flex flex-col items-center justify-center"
          >
            <div className="transform -rotate-90 whitespace-nowrap text-white font-medium">
              Día {stages[stageIndex].day}
            </div>
          </div>
        ))}

        {/* Current Stage Content */}
        <div 
          className="flex-1 relative overflow-hidden transition-all duration-500"
          style={{
            transform: animating 
              ? slideDirection === "left" 
                ? "translateX(-10%)" 
                : "translateX(10%)"
              : "translateX(0)",
            opacity: animating ? 0.8 : 1
          }}
        >
          {/* Stage Content */}
          <div className="p-8 h-full">
            <div className="text-overlay max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Día {currentStage.day}: {currentStage.title}
              </h2>
              
              <div className="text-white/80 mb-4">
                <span>{currentStage.location}</span>
              </div>
              
              <p className="mb-6 text-lg">{currentStage.description}</p>
              
              <div className="mb-6">
                <h3 className="font-medium mb-3">Actividades:</h3>
                <div className="flex flex-wrap gap-2">
                  {currentStage.activities.map((activity, index) => (
                    <span
                      key={index}
                      className="bg-white/20 px-3 py-1 rounded-full text-sm"
                    >
                      {activity}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-4 right-4 z-20 flex gap-2">
        <Button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          variant="outline"
          className="bg-white/20 border-none hover:bg-white/30 text-white rounded-md"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Anterior
        </Button>

        <Button
          onClick={handleNext}
          disabled={currentIndex === stages.length - 1}
          variant="outline"
          className="bg-white/20 border-none hover:bg-white/30 text-white rounded-md"
        >
          Siguiente
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default JourneyStages;
