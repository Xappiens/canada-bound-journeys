
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

interface HeroSectionProps {
  onExploreClick: () => void;
}

const HeroSection = ({ onExploreClick }: HeroSectionProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const isMobile = useIsMobile();

  // Array of high-quality background images
  const backgroundImages = [
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2011&q=80",
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  ];

  // Auto-changing background image effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 6000); // Change every 6 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      {/* Background images with crossfade effect */}
      {backgroundImages.map((image, index) => (
        <div 
          key={index}
          className={`fixed inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url('${image}')` }}
        />
      ))}

      {/* Stylish gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      
      {/* Decorative element */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] border border-white/10 rounded-full opacity-30" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] border border-white/10 rounded-full opacity-30" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <h1 className={`font-bold ${isMobile ? 'text-4xl md:text-7xl' : 'text-6xl md:text-8xl'} tracking-tight text-white mb-6 drop-shadow-lg`}>
          <span className="bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
            Vive la experiencia auténtica de Canadá
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-10 tracking-wide max-w-2xl mx-auto font-light">
          Descubre British Columbia con viajes guiados, naturaleza salvaje y cultura canadiense genuina.
        </p>
        
        <Button 
          onClick={onExploreClick}
          className="bg-canada-lake hover:bg-canada-lake/90 text-white px-10 py-7 text-lg rounded-sm 
          transition-all duration-300 hover:scale-105 hover:shadow-xl 
          hover:shadow-canada-lake/20 backdrop-blur-sm"
        >
          Explorar Itinerarios
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
