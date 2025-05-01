
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onExploreClick: () => void;
}

const HeroSection = ({ onExploreClick }: HeroSectionProps) => {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl animate-fade-in">
        <h1 className="font-bold text-5xl md:text-7xl tracking-tight text-white mb-4">
          Canada Bound Journeys
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8">
          Viajes exclusivos guiados a través de British Columbia,
          diseñados para conectar con la naturaleza y cultura canadiense auténtica.
        </p>
        <Button 
          onClick={onExploreClick}
          className="bg-canada-lake hover:bg-canada-lake/90 text-white px-8 py-6 rounded-md text-lg transition-all hover:scale-105"
        >
          Explorar Itinerarios
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
