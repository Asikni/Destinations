import React, { useState} from "react";
// import Hero from "./components/heroSection";
import Treks from "./components/trekSection";
import NatureComp from "./components/natureComponent";
import HiddenGems from "./components/hiddenSection";
import StoriesSection from "./components/storiesSection";
import Contact from "./components/contactSection";
import Footer from "./components/footerSection";
import HeroTwo from "./components/HeroSectiontwo";
import Modal from "./modal";
import ContactSection2 from "./components/contactSection2";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <Contact />
      </Modal>
      <HeroTwo setIsOpen={setIsOpen} />
      {/* <Hero /> */}
      <NatureComp />
      <HiddenGems />
      <Treks />
      <StoriesSection />
      <ContactSection2 />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
