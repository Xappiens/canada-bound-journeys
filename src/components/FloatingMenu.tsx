
import { Button } from "@/components/ui/button";
import { Home, Map, Users, Calendar } from "lucide-react";

interface FloatingMenuProps {
  onHomeClick: () => void;
  onItineraryClick: () => void;
  onAboutClick: () => void;
  onContactClick: () => void;
  activeSection: string;
}

const FloatingMenu = ({ 
  onHomeClick, 
  onItineraryClick, 
  onAboutClick, 
  onContactClick, 
  activeSection 
}: FloatingMenuProps) => {
  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 
                    bg-white/70 backdrop-blur-md rounded-md px-6 py-2.5
                    shadow-lg border border-white/30 hover:bg-white/80 transition-all
                    flex gap-6">
      <button 
        className={`menu-item flex flex-col items-center gap-1 ${activeSection === 'home' ? 'active' : ''}`} 
        onClick={onHomeClick}
      >
        <Home size={18} className={activeSection === 'home' ? 'text-canada-lake' : 'text-gray-600'} />
        <span>Inicio</span>
      </button>
      <button 
        className={`menu-item flex flex-col items-center gap-1 ${activeSection === 'itinerary' ? 'active' : ''}`} 
        onClick={onItineraryClick}
      >
        <Map size={18} className={activeSection === 'itinerary' ? 'text-canada-lake' : 'text-gray-600'} />
        <span>Itinerarios</span>
      </button>
      <button 
        className={`menu-item flex flex-col items-center gap-1 ${activeSection === 'about' ? 'active' : ''}`} 
        onClick={onAboutClick}
      >
        <Users size={18} className={activeSection === 'about' ? 'text-canada-lake' : 'text-gray-600'} />
        <span>Sobre Nosotros</span>
      </button>
      <button 
        className={`menu-item flex flex-col items-center gap-1 ${activeSection === 'contact' ? 'active' : ''}`} 
        onClick={onContactClick}
      >
        <Calendar size={18} className={activeSection === 'contact' ? 'text-canada-lake' : 'text-gray-600'} />
        <span>Reservas</span>
      </button>
    </div>
  );
};

export default FloatingMenu;
