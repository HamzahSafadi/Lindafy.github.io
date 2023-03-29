import "./App.css";
import Achievements from "./components/Achievements/Achievements";
import ClientSection from "./components/ClientSection/ClientSection";
import FashionTrends from "./components/FashionTrends/FashionTrends";
import FeaturesSection from "./components/FeaturesSections/FeaturesSection";
import Footer from "./components/Footer/Footer";
import Headline from "./components/Headline/Headline";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/Projects/Projects";
import SuccessStories from "./components/SuccessStories/SuccessStories";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ClientSection />
      <FeaturesSection />
      <SuccessStories />
      <Achievements />
      <Headline />
      <FashionTrends />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
