
import { Outlet } from "react-router-dom";
import FloatingMenu from "@/components/FloatingMenu";
import Header from "@/components/Header";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState<string>("home");
  
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
    <div className="full-page">
      <main className="h-full w-full overflow-auto">
        <Header />
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
