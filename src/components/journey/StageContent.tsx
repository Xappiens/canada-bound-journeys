
import { StageDay } from "@/data/itineraries";
import { useIsMobile } from "@/hooks/use-mobile";

interface StageContentProps {
  currentStage: StageDay;
  animating: boolean;
  slideDirection: "left" | "right" | null;
}

const StageContent = ({ currentStage, animating, slideDirection }: StageContentProps) => {
  const isMobile = useIsMobile();
  
  return (
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
      <div className="p-8 h-full pt-20 md:pt-24">
        <div className="text-overlay max-w-2xl mx-auto">
          <h2 className={`${isMobile ? "text-2xl" : "text-3xl md:text-4xl"} font-bold mb-2 line-clamp-1`}>
            Día {currentStage.day}: {currentStage.title}
          </h2>
          
          <div className="text-white/80 mb-4">
            <span>{currentStage.location}</span>
          </div>
          
          <p className={`mb-6 ${isMobile ? "text-base" : "text-lg"}`}>{currentStage.description}</p>
          
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
  );
};

export default StageContent;
