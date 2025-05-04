
import { Button } from "@/components/ui/button";
import { Home, Map, Users, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

interface FloatingMenuProps {
  onHomeClick: () => void;
  onItineraryClick: () => void;
  onAboutClick: () => void;
  onContactClick: () => void;
  activeSection: string;
}

const FloatingMenu = ({ 
  activeSection 
}: FloatingMenuProps) => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleItineraryClick = () => {
    navigate("/itinerarios");
  };

  const handleAboutClick = () => {
    navigate("/sobre-nosotros");
  };

  const handleContactClick = () => {
    navigate("/reservas");
  };

  return (
    <>
      {/* Spacer div that only appears on mobile to prevent content from being hidden behind the menu */}
      {isMobile && <div className="h-20" />}
      
      <div className={`
        ${isMobile 
          ? "fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 px-2 py-2"
          : "fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/70 backdrop-blur-md rounded-md px-6 py-2.5 shadow-lg border border-white/30 hover:bg-white/80 transition-all"}
        flex ${isMobile ? 'justify-around' : 'gap-6'}
      `}>
        <button 
          className={`menu-item flex flex-col items-center gap-1 ${activeSection === 'home' ? 'active' : ''}`} 
          onClick={handleHomeClick}
        >
          <Home size={isMobile ? 22 : 18} className={activeSection === 'home' ? 'text-canada-lake' : 'text-gray-600'} />
          <span className={isMobile ? "text-xs" : ""}>Inicio</span>
        </button>
        <button 
          className={`menu-item flex flex-col items-center gap-1 ${activeSection === 'itinerary' ? 'active' : ''}`} 
          onClick={handleItineraryClick}
        >
          <Map size={isMobile ? 22 : 18} className={activeSection === 'itinerary' ? 'text-canada-lake' : 'text-gray-600'} />
          <span className={isMobile ? "text-xs" : ""}>Itinerarios</span>
        </button>
        <button 
          className={`menu-item flex flex-col items-center gap-1 ${activeSection === 'about' ? 'active' : ''}`} 
          onClick={handleAboutClick}
        >
          <Users size={isMobile ? 22 : 18} className={activeSection === 'about' ? 'text-canada-lake' : 'text-gray-600'} />
          <span className={isMobile ? "text-xs" : ""}>Sobre Nosotros</span>
        </button>
        <button 
          className={`menu-item flex flex-col items-center gap-1 ${activeSection === 'contact' ? 'active' : ''}`} 
          onClick={handleContactClick}
        >
          <Calendar size={isMobile ? 22 : 18} className={activeSection === 'contact' ? 'text-canada-lake' : 'text-gray-600'} />
          <span className={isMobile ? "text-xs" : ""}>Reservas</span>
        </button>
      </div>
    </>
  );
};

export default FloatingMenu;
