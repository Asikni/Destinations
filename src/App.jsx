import Header from "./components/header";
import Hero from "./components/heroSection";
import Treks from "./components/trekSection";
import NatureComp from "./components/natureComponent";
import HiddenGems from "./components/hiddenSection";


function App() {
  return (
    <div>
      <Hero />
      <NatureComp />
      <HiddenGems />
      <Treks />
    </div>
  );
}

export default App;
