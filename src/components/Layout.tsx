import { Outlet } from "react-router-dom";
import FloatingMenu from "@/components/FloatingMenu";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import Navigation from './Navigation';
import Footer from './Footer';
import Breadcrumbs from './Breadcrumbs';
import Accessibility from './Accessibility';

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
    <div className="min-h-screen flex flex-col">
      <Accessibility />
      <Navigation />
      <main className="flex-1">
        <Breadcrumbs />
        <Outlet />
      </main>
      <Footer />
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
