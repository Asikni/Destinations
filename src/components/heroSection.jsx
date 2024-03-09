import Button from "../buttons";
import Header from "./header";

function Hero() {
  const changeImages = () => {
    
  };
  return (
    <div className="hero">
      <Header />
 
      <div className="top-heading" style={{ paddingTop: "130px" }}>
        {" "}
        Explore Kashmir's Beauty{" "}
      </div>
      <div className="arrows" style={{ display: "flex" }}>
        <div
          style={{ fontSize: "100px", paddingRight: "150px", cursor: "pointer", color:"#FFA90F" }}
        >
          {" "}
          &lt;{" "}
        </div>

        <div className="main-heading">Adventure in Paradise</div>
        <div
          style={{ fontSize: "100px", paddingLeft: "150px", cursor: "pointer",color:"#FFA90F" }}
          onClick={changeImages}
        >
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
