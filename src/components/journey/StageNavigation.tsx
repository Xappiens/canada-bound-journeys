
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
    <div className={`flex gap-2 justify-center mt-4 mb-4`}>
      <Button
        onClick={onPrevious}
        disabled={isPreviousDisabled}
        variant="outline"
        size={isMobile ? "sm" : "default"}
        className="bg-white/60 hover:bg-white/80 text-gray-800 font-medium rounded-md shadow-md"
      >
        <ArrowLeft className={`mr-2 ${isMobile ? "w-3 h-3" : "w-4 h-4"}`} />
        {isMobile ? "Ant" : "Anterior"}
      </Button>

      <Button
        onClick={onNext}
        disabled={isNextDisabled}
        variant="outline"
        size={isMobile ? "sm" : "default"}
        className="bg-white/60 hover:bg-white/80 text-gray-800 font-medium rounded-md shadow-md"
      >
        {isMobile ? "Sig" : "Siguiente"}
        <ArrowRight className={`ml-2 ${isMobile ? "w-3 h-3" : "w-4 h-4"}`} />
      </Button>
    </div>
  );
};

export default StageNavigation;
