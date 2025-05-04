
import { Outlet } from "react-router-dom";
import FloatingMenu from "@/components/FloatingMenu";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const Layout = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState<string>("home");
  const isMobile = useIsMobile();
  
  // Actualizar la sección activa basada en la ruta actual
  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setActiveSection("home");
        break;
      case "/itinerarios":
        setActiveSection("itinerary");
        break;
      case "/sobre-nosotros":
        setActiveSection("about");
        break;
      case "/reservas":
        setActiveSection("contact");
        break;
      default:
        setActiveSection("home");
    }
  }, [location.pathname]);

  return (
    <div className="full-page overflow-auto">
      <main className={`h-full w-full ${isMobile ? "pb-28" : ""}`}>
        <Outlet />
      </main>
      <FloatingMenu
        onHomeClick={() => {}}
        onItineraryClick={() => {}}
        onAboutClick={() => {}}
        onContactClick={() => {}}
        activeSection={activeSection}
      />
    </div>
  );
};

export default Layout;
