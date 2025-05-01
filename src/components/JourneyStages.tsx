
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import { StageDay } from "@/data/itineraries";

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

      {/* Main Content */}
      <div className="relative z-10 flex flex-col h-full w-full p-4 md:p-8">
        {/* Close button at top */}
        <div className="absolute top-4 right-4">
          <button
            onClick={onClose}
            className="bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-all"
          >
            ✕
          </button>
        </div>

        {/* Journey Info */}
        <div className="flex-1 flex items-center justify-center">
          <div className="text-overlay max-w-2xl w-full">
            <div className="flex items-center mb-4">
              <span className="bg-canada-lake text-white text-sm font-medium px-3 py-1 rounded-full">
                Día {currentStage.day}
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-2">{currentStage.title}</h2>
            
            <div className="flex items-center gap-2 text-white/80 mb-4">
              <MapPin className="w-4 h-4" />
              <span>{currentStage.location}</span>
            </div>
            
            <p className="mb-4 text-lg">{currentStage.description}</p>
            
            <div className="mb-4">
              <h3 className="font-medium mb-2">Actividades:</h3>
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

        {/* Navigation Controls */}
        <div className="flex justify-between items-center py-4">
          <Button
            onClick={onPrevious}
            disabled={currentIndex === 0}
            variant="outline"
            className="bg-white/20 border-none hover:bg-white/30 text-white"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Anterior
          </Button>

          <div className="flex gap-2">
            {stages.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentIndex
                    ? "bg-white"
                    : "bg-white/40"
                }`}
              />
            ))}
          </div>

          <Button
            onClick={onNext}
            disabled={currentIndex === stages.length - 1}
            variant="outline"
            className="bg-white/20 border-none hover:bg-white/30 text-white"
          >
            Siguiente
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JourneyStages;
