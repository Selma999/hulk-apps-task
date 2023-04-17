import "./App.css";

//layout component imports
import Layout from "./components/Layout/Layout";

//section imports
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

function App() {
  return (
    <Layout>
      <HeroSection />
      <MeetBiomSection />
      <ImageSection imageList={imageList} />
      <ReadyToStartSection />
      <CarouselSection carouselList={carouselList} />
      <BetterForYouSection />
      <VideoSection />
      <ContactFormSection />
    </Layout>
  );
}

export default App;
