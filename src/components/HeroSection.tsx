import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import HighlightBox from "./HighlightBox";
import { Link } from "react-router-dom";

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
      <div className={`relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in ${isMobile ? 'pt-2 pb-8' : 'pt-24'}`}>
        {/* Logo siempre visible */}
        <div className={`flex justify-center ${isMobile ? 'mb-8' : 'absolute -top-20 left-0 right-0 z-20'}`}>
          <Link to="/" className={isMobile ? "flex flex-row items-center gap-2" : "flex flex-col items-center gap-2"}>
            <div className={isMobile ? "w-8 h-8 text-red-600" : "w-12 h-12 text-red-600"}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="fill-current">
                <path d="M383.8 351.7c2.5-2.5 105.2-92.4 105.2-92.4l-17.5-7.5c-10-4.9-7.4-11.5-5-17.4 2.4-7.6 20.1-67.3 20.1-67.3s-47.7 10-57.7 12.5c-7.5 2.4-10-2.5-12.5-7.5s-15-32.4-15-32.4-52.6 59.9-55.1 62.3c-10 7.5-20.1 0-17.6-10 0-10 27.6-129.6 27.6-129.6s-30.1 17.4-40.1 22.4c-7.5 5-12.6 5-17.6-5C293.5 72.3 255.9 0 255.9 0s-37.5 72.3-42.5 79.8c-5 10-10 10-17.6 5-10-5-40.1-22.4-40.1-22.4S183.3 182 183.3 192c2.5 10-7.5 17.5-17.6 10-2.5-2.5-55.1-62.3-55.1-62.3S98.1 167 95.6 172s-5 9.9-12.5 7.5C73 177 25.4 167 25.4 167s17.6 59.7 20.1 67.3c2.4 6 5 12.5-5 17.4L23 259.3s102.6 89.9 105.2 92.4c5.1 5 10 7.5 5.1 22.5-5.1 15-10.1 35.1-10.1 35.1s95.2-20.1 105.3-22.6c8.7-.9 18.3 2.5 18.3 12.5S241 512 241 512h30s-5.8-102.7-5.8-112.8 9.5-13.4 18.4-12.5c10 2.5 105.2 22.6 105.2 22.6s-5-20.1-10-35.1 0-17.5 5-22.5z"/>
              </svg>
            </div>
            <span className={isMobile ? "text-base font-bold text-white" : "text-lg font-bold text-white"}>Canada BC Experience</span>
          </Link>
        </div>

        <h1 className={`font-bold ${isMobile ? 'text-4xl md:text-7xl' : 'text-6xl md:text-8xl'} tracking-tight text-white mb-6 drop-shadow-lg mt-2`}>
          <span className="bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
            Vive la experiencia auténtica de Canadá
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-10 tracking-wide max-w-2xl mx-auto font-bold">
          Descubre British Columbia con viajes guiados, naturaleza salvaje y cultura canadiense genuina.
        </p>

        {isMobile && <HighlightBox />}
        
        <Button 
          onClick={onExploreClick}
          className="bg-canada-lake hover:bg-canada-lake/90 text-white px-10 py-7 text-lg rounded-sm 
          transition-all duration-300 hover:scale-105 hover:shadow-xl 
          hover:shadow-canada-lake/20 backdrop-blur-sm"
        >
          Explorar Itinerarios
        </Button>
      </div>

      {/* Highlight Box - Desktop only */}
      {!isMobile && <HighlightBox />}
    </div>
  );
};

export default HeroSection;
