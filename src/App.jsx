import "./App.css";

import HeroSection from "./components/HeroSection/HeroSection";
import ImageSection from "./components/ImageSection/ImageSection";
import MeetBiomSection from "./components/MeetBiomSection/MeetBiomSection";
import NavBar from "./components/NavBar/NavBar";
import VideoSection from "./components/VideoSection/VideoSection";

//data import
import imageList from "./data/imageList";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <MeetBiomSection />
      <ImageSection imageList={imageList} />
      <VideoSection />
    </div>
  );
}

export default App;
