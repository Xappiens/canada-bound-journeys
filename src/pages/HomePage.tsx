import HeroSection from "@/components/HeroSection";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/itinerarios");
  };

  return (
    <HeroSection onExploreClick={handleExploreClick} />
  );
};

export default HomePage;
