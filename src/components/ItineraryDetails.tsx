
import { Button } from "@/components/ui/button";
import { Itinerary } from "@/data/itineraries";

interface ItineraryDetailsProps {
  itinerary: Itinerary;
  onStartJourney: () => void;
  onClose: () => void;
}

const ItineraryDetails = ({
  itinerary,
  onStartJourney,
  onClose,
}: ItineraryDetailsProps) => {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Close button */}
      <div className="absolute top-4 right-4 z-20">
        <button
          onClick={onClose}
          className="bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-all"
        >
          ✕
        </button>
      </div>

      {/* Content */}
      <div className="relative z-10 text-overlay max-w-3xl w-11/12 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">{itinerary.title}</h2>
        
        <div className="flex flex-wrap gap-3 mb-4">
          <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
            {itinerary.duration} días
          </span>
          <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
            {itinerary.priceRange}
          </span>
        </div>
        
        <p className="text-lg mb-6">{itinerary.description}</p>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">Destacados:</h3>
          <ul className="space-y-2">
            {itinerary.highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-canada-lake">✦</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <Button
          onClick={onStartJourney}
          className="bg-canada-lake hover:bg-canada-lake/90 text-white px-6 py-5 rounded-md"
        >
          Ver Día a Día del Viaje
        </Button>
      </div>
    </div>
  );
};

export default ItineraryDetails;
