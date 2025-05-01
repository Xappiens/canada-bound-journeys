
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { StageDay } from "@/data/itineraries";
import { useState, useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

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

  // Handle animation when currentIndex changes
  useEffect(() => {
    if (slideDirection) {
      setAnimating(true);
      const timer = setTimeout(() => {
        setAnimating(false);
        setSlideDirection(null);
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

      {/* Main Content with Vertical Section Title and Sliding Stages */}
      <div className="relative z-10 flex w-full h-full">
        {/* Vertical Section Title */}
        <div className="w-16 md:w-24 bg-canada-lake/90 flex flex-col items-center justify-center text-white writing-mode-vertical">
          <div className="transform -rotate-90 whitespace-nowrap text-xl md:text-2xl font-bold">
            Días del Viaje
          </div>
        </div>

        {/* Stages Navigation (Vertical Tabs) */}
        <div className="w-16 md:w-20 bg-black/40 flex flex-col items-stretch">
          <ScrollArea className="h-full">
            <div className="flex flex-col items-center py-10 gap-2">
              {stages.map((stage, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (index > currentIndex) {
                      setSlideDirection("left");
                      onNext();
                    } else if (index < currentIndex) {
                      setSlideDirection("right");
                      onPrevious();
                    }
                  }}
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                    index === currentIndex
                      ? "bg-canada-lake text-white"
                      : "bg-white/20 text-white/80 hover:bg-white/30"
                  }`}
                >
                  {stage.day}
                </button>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Stage Content with Sliding Effect */}
        <div className="flex-1 relative overflow-hidden">
          <div
            className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
              animating
                ? slideDirection === "left"
                  ? "-translate-x-full"
                  : "translate-x-full"
                : "translate-x-0"
            }`}
          >
            <div className="p-8 h-full">
              <div className="text-overlay max-w-2xl mx-auto">
                <div className="flex items-center mb-4">
                  <span className="bg-canada-lake text-white text-sm font-medium px-3 py-1 rounded-full">
                    Día {currentStage.day}
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-2">{currentStage.title}</h2>
                
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

          {/* New content sliding in */}
          <div
            className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
              animating
                ? slideDirection === "left"
                  ? "translate-x-0"
                  : "translate-x-0"
                : slideDirection === "left"
                ? "translate-x-full"
                : "-translate-x-full"
            }`}
          >
            {/* Only render if animating */}
            {animating && (
              <div className="p-8 h-full">
                <div className="text-overlay max-w-2xl mx-auto">
                  <div className="flex items-center mb-4">
                    <span className="bg-canada-lake text-white text-sm font-medium px-3 py-1 rounded-full">
                      Día {currentStage.day}
                    </span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold mb-2">{currentStage.title}</h2>
                  
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
            )}
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-4 right-4 z-20 flex gap-2">
        <Button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          variant="outline"
          className="bg-white/20 border-none hover:bg-white/30 text-white"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Anterior
        </Button>

        <Button
          onClick={handleNext}
          disabled={currentIndex === stages.length - 1}
          variant="outline"
          className="bg-white/20 border-none hover:bg-white/30 text-white"
        >
          Siguiente
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default JourneyStages;
