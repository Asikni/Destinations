import Button from "../buttons";
import Header from "./header";
import { useState } from "react";
import images from "./images";

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  console.log(currentImageIndex);
  const imageToTheRight = () => {
    setCurrentImageIndex(
      currentImageIndex < images.length - 1 ? currentImageIndex + 1 : 0
    );
    
    console.log(currentImageIndex);

  };
  const imageToTheLeft = () => {
    setCurrentImageIndex(currentImageIndex <= 0 ? images.length -1  : currentImageIndex - 1);
    console.log(currentImageIndex);
  };
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${images[currentImageIndex][currentImageIndex]})`,
      }}
    >
      <Header />

      <div className="top-heading"> Explore Kashmir's Beauty </div>
      <div className="mainheadingsection" style={{ display: "flex" }}>
        <div className="leftArrowHero" onClick={imageToTheLeft}>
          {" "}
          &lt;{" "}
        </div>

        <div className="main-heading" style={{ fontWeight: "bold" }}>
          <p>Adventure in</p>
          <p>Paradise</p>
        </div>
        <div className="rightArrowHero" onClick={imageToTheRight}>
          {">"}
        </div>
      </div>
      <div className="buttonsHeroSection">
        <Button btnClass={"btn-1"}>Find out more</Button>
        <Button btnClass={"btn-2"}> Contact Us </Button>

      
        </div>
        <div className="logoSideHeading">
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

export default Hero;
