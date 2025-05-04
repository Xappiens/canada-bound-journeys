
import { StageDay } from "@/data/itineraries";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

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
  const isMobile = useIsMobile();
  
  // If mobile and more than 5 days, only show current and neighbors
  const displayStages = isMobile && stages.length > 5
    ? stages.filter((_, index) => 
        Math.abs(index - currentIndex) <= 2) // Show current and 2 days before/after
    : stages;
  
  return (
    <div className={`fixed ${isMobile ? "bottom-20" : "bottom-4"} left-1/2 transform -translate-x-1/2 z-40 
                    flex gap-2 overflow-x-auto px-2 py-1 bg-white/10 backdrop-blur-sm rounded-lg shadow-lg max-w-full`}>
      {displayStages.map((stage, index) => {
        // Find the original index in the stages array
        const originalIndex = stages.findIndex(s => 
          s.day === stage.day
        );
        
        return (
          <Button
            key={stage.day}
            onClick={() => onSelectDay(originalIndex)}
            variant={currentIndex === originalIndex ? "default" : "outline"}
            size="sm"
            className={`min-w-[3rem] px-2 py-1 h-auto text-sm rounded-md ${
              currentIndex === originalIndex 
                ? "bg-canada-lake text-white hover:bg-canada-lake/90" 
                : "bg-white/30 text-white hover:bg-white/50"
            }`}
          >
            {stage.day}
          </Button>
        );
      })}
    </div>
  );
};

export default FloatingDaySelector;
