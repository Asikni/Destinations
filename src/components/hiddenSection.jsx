function HiddenGems() {
  return (
    <div
      className="hiddenSection"
      style={{
        backgroundColor: "#1E2126",
        height: "100vh",
       
        position: "relative",
        
      }}
    >
      <div className="hiddenText">Discover Hidden Gems</div>
      <div className="carousel" >
        <div className="carouselImageOne"></div>
        <div className="carouselImageTwo"></div>
        <div className="carouselImageThree"></div>
        <div className="carouselImageFour"></div>
        <div className="carouselImageFive"></div>
      </div>
      {/* <div style={{
        position:"absolute",
        zIndex:2,
        display:"flex",
        top:"450px",
        color:"white",
        padding:"18px 10px 20px 0px"

      }}>
        <p style={{fontWeight:"600", fontSize:"35px"}}>Sonmarg</p>
        <p style={{display:"flex", alignItems:'center', paddingLeft:"110px"}}>
          <div style={{display:"flex"}}>
            <img src="Navigation.svg" alt="navigation logo" style={{width:"19px", paddingRight:"10px"}} />
          <p style={{fontWeight:"500", fontSize:"20px",  paddingRight:"20px"}}>10 Days Trip</p>
          </div>
          <div style={{display:"flex"}}>
          <img src="$.svg" alt="navigation logo" style={{width:"12px"}} />
          <p style={{ paddingLeft:"20px", fontWeight:"500", fontSize:"20px", paddingLeft:"5px"}}>4.2k</p>
          </div>
        </p>
      </div> */}
      <div className="arrows">
        <div className="leftarrow"> &lt; </div>
        <div className="rightarrow">&gt;</div>
      </div>
    </div>
  );
}
export default HiddenGems;
