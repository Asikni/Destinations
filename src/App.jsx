import Header from "./components/header";
import Hero from "./components/heroSection";
import Treks from "./components/trekSection";
import NatureComp from "./components/natureComponent";
import HiddenGems from "./components/hiddenSection";
import StoriesSection from "./components/storiesSection";
import Contact from "./components/contactSection";
import Footer from "./components/footerSection";
import HeroTwo from "./components/HeroSectiontwo";


function App() {
  return (
    <div>
      <HeroTwo />
      <Hero />
      <NatureComp />
      <HiddenGems />
      <Treks />
      <StoriesSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
