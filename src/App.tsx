import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ItineraryPage from "./pages/ItineraryPage";
import ItineraryListPage from "./pages/ItineraryListPage";
import ItineraryDetailPage from "./pages/ItineraryDetailPage";
import ItineraryDailyPage from "./pages/ItineraryDailyPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ContactFormPage from "./pages/ContactFormPage";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";
import TripDetailPage from "./pages/TripDetailPage";
import ReserveFormPage from "./pages/ReserveFormPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/itinerarios" element={<ItineraryPage />} />
            <Route path="/itinerarios/lista" element={<ItineraryListPage />} />
            <Route path="/itinerarios/detalle/:itineraryId" element={<ItineraryDetailPage />} />
            <Route path="/itinerarios/diario/:itineraryId" element={<ItineraryDailyPage />} />
            <Route path="/sobre-nosotros" element={<AboutPage />} />
            <Route path="/reservas" element={<ContactPage />} />
            <Route path="/formulario" element={<ContactFormPage />} />
            <Route path="/viaje-septiembre-2025" element={<TripDetailPage />} />
            <Route path="/reserva-grupo-septiembre-2025" element={<ReserveFormPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
