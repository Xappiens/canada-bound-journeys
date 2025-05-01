
import AboutSection from "@/components/AboutSection";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const navigate = useNavigate();
  
  const handleExploreClick = () => {
    navigate("/itinerarios");
  };
  
  return <AboutSection onExploreClick={handleExploreClick} />;
};

export default AboutPage;
