
import { Button } from "@/components/ui/button";

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
    <div className="floating-menu">
      <button 
        className={`menu-item ${activeSection === 'home' ? 'active' : ''}`} 
        onClick={onHomeClick}
      >
        Inicio
      </button>
      <button 
        className={`menu-item ${activeSection === 'itinerary' ? 'active' : ''}`} 
        onClick={onItineraryClick}
      >
        Itinerarios
      </button>
      <button 
        className={`menu-item ${activeSection === 'about' ? 'active' : ''}`} 
        onClick={onAboutClick}
      >
        Sobre Nosotros
      </button>
      <button 
        className={`menu-item ${activeSection === 'contact' ? 'active' : ''}`} 
        onClick={onContactClick}
      >
        Reservas
      </button>
    </div>
  );
};

export default FloatingMenu;
