import "./App.css";

//section imports
import NavBar from "./components/NavBar/NavBar";
import HeroSection from "./components/HeroSection/HeroSection";
import ImageSection from "./components/ImageSection/ImageSection";
import VideoSection from "./components/VideoSection/VideoSection";
import CarouselSection from "./components/CarouselSection/CarouselSection";
import MeetBiomSection from "./components/MeetBiomSection/MeetBiomSection";
import ContactFormSection from "./components/ContactFormSection/ContactFormSection";
import BetterForYouSection from "./components/BetterForYouSection/BetterForYouSection";
import ReadyToStartSection from "./components/ReadyToStartSection/ReadyToStartSection";

//data import
import imageList from "./data/imageList";
import carouselList from "./data/carouselList";
import FooterSection from "./components/FooterSection/FooterSection";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <MeetBiomSection />
      <ImageSection imageList={imageList} />
      <ReadyToStartSection />
      <CarouselSection carouselList={carouselList} />
      <BetterForYouSection />
      <VideoSection />
      <ContactFormSection />
      <FooterSection />
    </div>
  );
}

export default App;
