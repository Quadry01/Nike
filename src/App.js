import JordanHeader from "./Components/JordanH/JordanHeader";
import NikeHeader from "./Components/NikeH/NikeHeader";
import Catalogue from "./Components/Catalogue/Catalogue";
import SizeSection from "./Components/SizeSection/SizeSection";
import SubDisplay from "./Components/SubDisplay/SubDisplay";

import "./App.css";
import Footer from "./Components/FooterSection/Footer";
function App() {
  return (
    <div className="App">
      <JordanHeader />
      <NikeHeader />
      <Catalogue />
      <SizeSection />
      <SubDisplay />
      <Footer />
    </div>
  );
}

export default App;
