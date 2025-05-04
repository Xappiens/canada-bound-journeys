
import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { useIsMobile } from "@/hooks/use-mobile";

const formSchema = z.object({
  name: z.string().min(2, "El nombre es demasiado corto"),
  email: z.string().email("Email no válido"),
  phone: z.string().min(9, "Número de teléfono no válido"),
  message: z.string().min(10, "El mensaje es demasiado corto"),
  itineraryId: z.string().optional(),
});

const ContactFormPage = () => {
  const isMobile = useIsMobile();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [searchParams] = useSearchParams();
  const itineraryId = searchParams.get('itinerary');
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      itineraryId: itineraryId || "",
    },
  });
  
  // Update form value when itineraryId changes in URL
  useEffect(() => {
    if (itineraryId) {
      form.setValue('itineraryId', itineraryId);
    }
  }, [itineraryId, form]);
  
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log("Form values:", values);
      
      toast.success("Formulario enviado correctamente");
      form.reset();
    } catch (error) {
      toast.error("Error al enviar el formulario. Inténtalo de nuevo.");
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Background Image */}
      <div className="fixed-bg z-0" style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
        filter: "brightness(0.85)"
      }}></div>
      
      {/* Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-40 z-10"></div>
      
      {/* Logo centered at the top */}
      <div className="relative z-20 flex justify-center pt-8 px-4">
        <Link to="/" className="flex flex-col items-center gap-2">
          <div className={`${isMobile ? 'w-8 h-8' : 'w-12 h-12'} text-red-600`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="fill-current">
              <path d="M383.8 351.7c2.5-2.5 105.2-92.4 105.2-92.4l-17.5-7.5c-10-4.9-7.4-11.5-5-17.4 2.4-7.6 20.1-67.3 20.1-67.3s-47.7 10-57.7 12.5c-7.5 2.4-10-2.5-12.5-7.5s-15-32.4-15-32.4-52.6 59.9-55.1 62.3c-10 7.5-20.1 0-17.6-10 0-10 27.6-129.6 27.6-129.6s-30.1 17.4-40.1 22.4c-7.5 5-12.6 5-17.6-5C293.5 72.3 255.9 0 255.9 0s-37.5 72.3-42.5 79.8c-5 10-10 10-17.6 5-10-5-40.1-22.4-40.1-22.4S183.3 182 183.3 192c2.5 10-7.5 17.5-17.6 10-2.5-2.5-55.1-62.3-55.1-62.3S98.1 167 95.6 172s-5 9.9-12.5 7.5C73 177 25.4 167 25.4 167s17.6 59.7 20.1 67.3c2.4 6 5 12.5-5 17.4L23 259.3s102.6 89.9 105.2 92.4c5.1 5 10 7.5 5.1 22.5-5.1 15-10.1 35.1-10.1 35.1s95.2-20.1 105.3-22.6c8.7-.9 18.3 2.5 18.3 12.5S241 512 241 512h30s-5.8-102.7-5.8-112.8 9.5-13.4 18.4-12.5c10 2.5 105.2 22.6 105.2 22.6s-5-20.1-10-35.1 0-17.5 5-22.5z"/>
            </svg>
          </div>
          <span className={`${isMobile ? 'text-base' : 'text-lg'} font-bold text-white`}>Canada BC Experience</span>
        </Link>
      </div>

      <div className="relative z-20 max-w-2xl w-11/12 mx-auto my-12 pt-4 pb-36">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800">Formulario de Contacto</h2>
          
          {itineraryId && (
            <div className="bg-gray-50 p-4 rounded-md mb-6">
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Itinerario seleccionado:</span> {itineraryId}
              </p>
            </div>
          )}
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Hidden field for itineraryId */}
              <input type="hidden" {...form.register('itineraryId')} />
              
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre</FormLabel>
                    <FormControl>
                      <Input placeholder="Tu nombre" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="tu.email@ejemplo.com" {...field} type="email" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Teléfono</FormLabel>
                    <FormControl>
                      <Input placeholder="612 345 678" {...field} type="tel" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mensaje</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Cuéntanos sobre tu interés en nuestros viajes" 
                        className="min-h-32" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button 
                  type="submit" 
                  className="flex-1 bg-canada-lake hover:bg-canada-lake/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                </Button>
                
                <Button 
                  type="button" 
                  variant="outline"
                  className="flex-1"
                  asChild
                >
                  <Link to="/reservas">Volver</Link>
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactFormPage;
