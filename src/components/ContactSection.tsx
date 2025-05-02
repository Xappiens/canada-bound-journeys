
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      {/* Background image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2676&q=80')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-overlay max-w-2xl w-11/12 animate-fade-in">
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
        
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 space-y-4">
          <div className="flex flex-col">
            <span className="text-white/80 text-sm">Email</span>
            <span className="font-medium">info@canadaboundjourneys.com</span>
          </div>
          
          <div className="flex flex-col">
            <span className="text-white/80 text-sm">Teléfono/WhatsApp</span>
            <span className="font-medium">+1 (604) 555-1234</span>
          </div>
          
          <div className="flex flex-col">
            <span className="text-white/80 text-sm">Instagram</span>
            <span className="font-medium">@canadaboundjourneys</span>
          </div>
          
          <Button className="w-full mt-4 bg-canada-lake hover:bg-canada-lake/90">
            Enviar Mensaje
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
