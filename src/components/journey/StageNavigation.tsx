
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface StageNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
  isPreviousDisabled: boolean;
  isNextDisabled: boolean;
}

const StageNavigation = ({
  onPrevious,
  onNext,
  isPreviousDisabled,
  isNextDisabled
}: StageNavigationProps) => {
  return (
    <div className="absolute bottom-4 right-4 z-20 flex gap-2">
      <Button
        onClick={onPrevious}
        disabled={isPreviousDisabled}
        variant="outline"
        className="bg-white/20 border-none hover:bg-white/30 text-white rounded-md"
      >
        <ArrowLeft className="mr-2 w-4 h-4" />
        Anterior
      </Button>

      <Button
        onClick={onNext}
        disabled={isNextDisabled}
        variant="outline"
        className="bg-white/20 border-none hover:bg-white/30 text-white rounded-md"
      >
        Siguiente
        <ArrowRight className="ml-2 w-4 h-4" />
      </Button>
    </div>
  );
};

export default StageNavigation;
