
import { useState } from "react";
import { StageDay } from "@/data/itineraries";

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
    <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-40 
                    bg-white/80 backdrop-blur-lg rounded-full px-5 py-2 
                    shadow-lg border border-white/20 flex gap-2">
      {stages.map((stage, index) => (
        <button
          key={index}
          onClick={() => onSelectDay(index)}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
            currentIndex === index 
              ? "bg-canada-lake text-white" 
              : "bg-white/50 text-gray-700 hover:bg-white/80"
          }`}
        >
          {stage.day}
        </button>
      ))}
    </div>
  );
};

export default FloatingDaySelector;
