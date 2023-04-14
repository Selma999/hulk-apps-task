import "./App.css";

import HeroSection from "./components/HeroSection/HeroSection";
import ImageSection from "./components/ImageSection/ImageSection";
import MeetBiomSection from "./components/MeetBiomSection/MeetBiomSection";
import NavBar from "./components/NavBar/NavBar";

//data import
import imageList from "./data/imageList";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <MeetBiomSection />
      <ImageSection imageList={imageList} />
    </div>
  );
}

export default App;
