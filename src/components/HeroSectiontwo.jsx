import Header from "./header";
import { useState, useEffect } from "react";
import images from "./images";
import Button from "../buttons";


function HeroTwo({setIsOpen}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [transitioning, setTransitioning] = useState(false);
  const [nextImageIndex, setNextImageIndex] = useState(0);

  const imageToTheRight = () => {
    setTransitioning(true);
    setNextImageIndex(
      currentImageIndex < images.length - 1 ? currentImageIndex + 1 : 0
    );
  };
  const imageToTheLeft = () => {
    setTransitioning(true);
    setNextImageIndex(
      currentImageIndex <= 0 ? images.length - 1 : currentImageIndex - 1
    );
  };

  useEffect(() => {
    if (transitioning) {
      const transitionTimeout = setTimeout(() => {
        setCurrentImageIndex(nextImageIndex);
        setTransitioning(false);
      }, 500);
      return () => clearTimeout(transitionTimeout);
    }
  });
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${images[currentImageIndex][currentImageIndex]})`,
      }}
    >
      <Header />
      <div className={`imgTemp ${transitioning ? "exiting" : ""}`}>
        <div> {images[currentImageIndex].topHeading} </div>
        <div className="mainheadingsection">
          <div className="main-heading" style={{ fontWeight: "bold" }}>
            <p>{images[currentImageIndex].mainHeadingOne} </p>
            <p>{images[currentImageIndex].mainHeadingTwo} </p>
          </div>
        </div>
      </div>
      <div className="leftArrowHero2" onClick={imageToTheLeft}>
        {" "}
        &lt;{" "}
      </div>
      <div className="rightArrowHero2" onClick={imageToTheRight}>
        {">"}
      </div>
      <div className="buttonsHeroSection">
        {/* <Button btnClass={"btn-1"}>Find out more</Button> */}
        {images[currentImageIndex].buttonOne}
        {/* <Button btnClass={"btn-2"}> Contact Us </Button> */}
        {images[currentImageIndex].showContactButton && (
        <Button btnClass={'btn-2'} onClick={() => setIsOpen(true)}>
          Contact Us
        </Button>
      )}
        <div className="logos">
          <div>
            <img src="Facebook Icon.svg" alt="facebook logo"></img>
          </div>
          <div>
            <img src="Vector.svg" alt="insta logo"></img>
          </div>
          <div>
            <img src="Social.svg" alt="twitter logo"></img>
          </div>
        </div>
        <div className="side-heading">Follow Us on</div>
      </div>
    </div>
  );
}

export default HeroTwo;
