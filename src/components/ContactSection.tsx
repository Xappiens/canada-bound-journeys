
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
    <div className="relative flex h-full w-full items-center justify-center overflow-auto py-8">
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
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Reservas</h2>
        
        <div className="space-y-4 text-lg mb-6">
          <p>
            Nuestros viajes se basan en formar pequeños grupos para una experiencia más personal y auténtica.
          </p>
          
          <p>
            El proceso de reserva consiste en un pago inicial que asegura tu plaza en el grupo. Una vez formado el grupo completo, se establece el precio final según la temporada y número de viajeros.
          </p>
          
          <p>
            Para iniciar el proceso de reserva o solicitar más información, puedes contactarnos a través de cualquiera de estos canales:
          </p>
        </div>
        
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 space-y-6">
          <div className="flex flex-col">
            <span className="text-white/80 text-sm">Email</span>
            <span className="font-medium">abel@canadabcexperience.com</span>
          </div>
          
          <div className="flex flex-col">
            <span className="text-white/80 text-sm">Teléfono/WhatsApp</span>
            <span className="font-medium">614 230 720</span>
          </div>
          
          <div className="flex items-center">
            <span className="text-white/80 text-sm mr-2">Instagram</span>
            <Instagram size={20} className="text-white" />
          </div>

          {/* New section explaining the process after contact */}
          <div className="bg-white/30 rounded-lg p-4 mt-2">
            <h3 className="font-semibold text-lg mb-2">Proceso de Reserva</h3>
            <p className="text-sm mb-3">
              Al tratarse de viajes tan personalizados, el proceso de reserva tras el contacto inicial incluye:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-center gap-2">
                <PhoneCall size={18} />
                <span className="text-sm">Una llamada telefónica</span>
              </div>
              <div className="flex items-center gap-2">
                <Video size={18} />
                <span className="text-sm">O videoconferencia</span>
              </div>
            </div>
            <p className="text-sm mt-3">
              Esto nos permite conocerte mejor antes de formalizar la reserva con el pago de la señal, una vez se cierran todos los detalles del viaje.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-4">
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <MessageSquare size={20} />
              WhatsApp
            </Button>
            
            <Button 
              className="bg-canada-lake hover:bg-canada-lake/90"
              asChild
            >
              <Link to="/formulario">
                <Send size={20} />
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
