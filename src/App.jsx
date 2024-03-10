import Header from "./components/header";
import Hero from "./components/heroSection";
import Treks from "./components/trekSection";
import NatureComp from "./components/natureComponent";
import HiddenGems from "./components/hiddenSection";
import StoriesSection from "./components/storiesSection";
import Footer from "./components/footerSection";


function App() {
  return (
    <div>
      <Hero />
      <NatureComp />
      <HiddenGems />
      <Treks />
      <StoriesSection />
      <Footer />
    </div>
  );
}

export default App;
