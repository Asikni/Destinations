import Button from "../buttons";
import Header from "./header";

function Hero() {
  const changeImages = () => {};
  return (
    <div className="hero" style={{  }}>
      <Header />

      <div className="top-heading"> Explore Kashmir's Beauty </div>
      <div
        className="mainheadingsection"
        style={{ display: "flex" }}
      >
        <div className="leftArrowHero"> &lt; </div>

        <div className="main-heading" style={{ fontWeight: "bold" }}>
          <p>Adventure in</p>
          <p>Paradise</p>
        </div>
        <div className="rightArrowHero" onClick={changeImages}>
          {">"}
        </div>
      </div>
      <div className="buttonsHeroSection">
        <Button btnClass={"btn-1"}>Find out more</Button>
        <Button btnClass={"btn-2"}> Contact Us </Button>
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
