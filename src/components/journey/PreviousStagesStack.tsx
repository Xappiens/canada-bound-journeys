
import { StageDay } from "@/data/itineraries";

interface PreviousStagesStackProps {
  previousStages: number[];
  stages: StageDay[];
  onNavigateToStage: (index: number) => void;
}

const PreviousStagesStack = ({ 
  previousStages, 
  stages, 
  onNavigateToStage 
}: PreviousStagesStackProps) => {
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
    <>
      {previousStages.map((stageIndex) => (
        <div
          key={stageIndex}
          onClick={() => onNavigateToStage(stageIndex)}
          style={{ width: `${getStackedWidth(stageIndex)}%` }}
          className="h-full bg-canada-lake/80 hover:bg-canada-lake transition-all duration-300 cursor-pointer flex flex-col items-center justify-center"
        >
          <div className="transform -rotate-90 whitespace-nowrap text-white font-medium">
            Día {stages[stageIndex].day}
          </div>
        </div>
      ))}
    </>
  );
};

export default PreviousStagesStack;
