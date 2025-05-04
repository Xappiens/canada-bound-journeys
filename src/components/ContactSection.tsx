
import { Button } from "@/components/ui/button";
import { MessageSquare, Send, PhoneCall, Video, Instagram } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";

const ContactSection = () => {
  const isMobile = useIsMobile();
  
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/34614230720", "_blank");
  };
  
  return (
    <div className="flex-1 w-full flex items-center justify-center py-8 overflow-y-auto">
      {/* Background image */}
      <div 
        className="fixed-bg"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2676&q=80')",
          zIndex: 10
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Content */}
      <div className="relative z-20 text-overlay max-w-2xl w-11/12 animate-fade-in mb-16">
        <h2 className="text-xl md:text-2xl font-bold mb-4">Reservas</h2>
        
        <div className="space-y-3 text-sm mb-6">
          <p>
            Nuestros viajes se basan en formar pequeños grupos para una experiencia más personal y auténtica.
          </p>
          
          <p>
            El proceso de reserva consiste en un pago inicial que asegura tu plaza en el grupo. Una vez formado el grupo completo, se establece el precio final según la temporada y número de viajeros.
          </p>
          
          <p>
            Al tratarse de viajes tan personalizados, el proceso de reserva, una vez hecho el contacto, empieza con una llamada, o videoconferencia, para conocer mejor al viajero o viajera antes de formalizar la reserva con el pago de la señal, una vez se cierran todos los detalles del viaje.
          </p>
          
          <p>
            Para iniciar el proceso de reserva o solicitar más información, puedes contactarnos a través de cualquiera de estos canales:
          </p>
        </div>
        
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-5 space-y-4">
          <div className="flex flex-col">
            <span className="text-white/80 text-xs">Email</span>
            <span className="font-medium text-sm">abel@canadabcexperience.com</span>
          </div>
          
          <div className="flex flex-col">
            <span className="text-white/80 text-xs">Teléfono/WhatsApp</span>
            <span className="font-medium text-sm">614 230 720</span>
          </div>
          
          <div className="flex items-center">
            <span className="text-white/80 text-xs mr-2">Instagram</span>
            <Instagram size={18} className="text-white" />
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-4">
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-green-600 hover:bg-green-700 text-white text-xs py-1 h-auto"
              size="sm"
            >
              <MessageSquare size={16} className="mr-1" />
              WhatsApp
            </Button>
            
            <Button 
              className="bg-canada-lake hover:bg-canada-lake/90 text-xs py-1 h-auto"
              size="sm"
              asChild
            >
              <Link to="/formulario">
                <Send size={16} className="mr-1" />
                Contacto
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
