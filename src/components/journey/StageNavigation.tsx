
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface StageNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
  isPreviousDisabled: boolean;
  isNextDisabled: boolean;
  isMobile?: boolean;
}

const StageNavigation = ({
  onPrevious,
  onNext,
  isPreviousDisabled,
  isNextDisabled,
  isMobile
}: StageNavigationProps) => {
  return (
    <div className={`absolute bottom-20 ${isMobile ? "left-1/2 transform -translate-x-1/2" : "right-4"} z-20 flex gap-2`}>
      <Button
        onClick={onPrevious}
        disabled={isPreviousDisabled}
        variant="outline"
        size={isMobile ? "sm" : "default"}
        className="bg-white/20 border-none hover:bg-white/30 text-white rounded-md"
      >
        <ArrowLeft className={`mr-2 ${isMobile ? "w-3 h-3" : "w-4 h-4"}`} />
        {isMobile ? "Ant" : "Anterior"}
      </Button>

      <Button
        onClick={onNext}
        disabled={isNextDisabled}
        variant="outline"
        size={isMobile ? "sm" : "default"}
        className="bg-white/20 border-none hover:bg-white/30 text-white rounded-md"
      >
        {isMobile ? "Sig" : "Siguiente"}
        <ArrowRight className={`ml-2 ${isMobile ? "w-3 h-3" : "w-4 h-4"}`} />
      </Button>
    </div>
  );
};

export default StageNavigation;
