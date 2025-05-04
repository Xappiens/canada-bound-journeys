
import { StageDay } from "@/data/itineraries";
import { useIsMobile } from "@/hooks/use-mobile";
import { ScrollArea } from "@/components/ui/scroll-area";

interface StageContentProps {
  currentStage: StageDay;
  animating: boolean;
  slideDirection: "left" | "right" | null;
  itineraryTitle?: string;
}

const StageContent = ({ currentStage, animating, slideDirection, itineraryTitle }: StageContentProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div 
      className="relative transition-all duration-500 px-4"
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
      <div className="max-w-2xl mx-auto">
        <div className="text-overlay bg-black/30 backdrop-blur-sm p-6 rounded-lg shadow-lg">
          {itineraryTitle && (
            <h1 className={`${isMobile ? "text-xl" : "text-2xl md:text-3xl"} font-bold mb-1 text-white/90`}>
              {itineraryTitle}
            </h1>
          )}
          
          <h2 className={`${isMobile ? "text-2xl" : "text-3xl md:text-4xl"} font-bold mb-2 line-clamp-1`}>
            Día {currentStage.day}: {currentStage.title}
          </h2>
          
          <div className="text-white/80 mb-4">
            <span>{currentStage.location}</span>
          </div>
          
          <ScrollArea className="pr-4 max-h-[40vh] md:max-h-none">
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
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default StageContent;
