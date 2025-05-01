
import { Button } from "@/components/ui/button";

interface AboutSectionProps {
  onExploreClick: () => void;
}

const AboutSection = ({ onExploreClick }: AboutSectionProps) => {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-overlay max-w-3xl w-11/12 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre Nosotros</h2>
        
        <div className="space-y-4 text-lg">
          <p>
            Canada Bound Journeys nace de la pasión por mostrar las maravillas de British Columbia desde una perspectiva auténtica y exclusiva.
          </p>
          
          <p>
            No somos una agencia de viajes tradicional, sino un proyecto personal donde el guía es el creador y alma del viaje. Cada itinerario está diseñado para pequeños grupos que buscan experiencias reales y conexión con la naturaleza canadiense.
          </p>
          
          <p>
            Nos especializamos en viajes adaptados a cada estación del año, mostrando los diferentes rostros de una misma región según la época en que la visitemos.
          </p>
          
          <p>
            Nuestros recorridos incluyen siempre interacción con guías locales y nativos, que aportan su conocimiento ancestral y conexión con el territorio.
          </p>
        </div>
        
        <div className="mt-8">
          <Button 
            onClick={onExploreClick}
            className="bg-canada-lake hover:bg-canada-lake/90 text-white px-6 py-5 rounded-md"
          >
            Descubrir Itinerarios
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
