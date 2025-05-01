
import { StageDay } from "@/data/itineraries";
import { Button } from "@/components/ui/button";

interface FloatingDaySelectorProps {
  stages: StageDay[];
  currentIndex: number;
  onSelectDay: (index: number) => void;
}

const FloatingDaySelector = ({ 
  stages, 
  currentIndex, 
  onSelectDay 
}: FloatingDaySelectorProps) => {
  return (
    <div className="fixed bottom-24 left-1/2 transform -translate-x-1/2 z-40 
                    flex gap-2">
      {stages.map((stage, index) => (
        <Button
          key={index}
          onClick={() => onSelectDay(index)}
          variant={currentIndex === index ? "default" : "outline"}
          className={`px-3 py-1 h-auto text-sm rounded-md shadow-md transition-all ${
            currentIndex === index 
              ? "bg-canada-lake text-white hover:bg-canada-lake/90" 
              : "bg-white/70 backdrop-blur-sm hover:bg-white/80"
          }`}
        >
          Día {stage.day}
        </Button>
      ))}
    </div>
  );
};

export default FloatingDaySelector;
