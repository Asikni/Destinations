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
      <div className="destinationDetails" >
        <p className="destinationName" >Sonmarg</p>
        <p className="Details">
          <div style={{display:"flex"}}>
            <img className="navigationLogo" src="Navigation.svg" alt="navigation logo" />
          <p className="tripDays" >10 Days Trip</p>
          </div>
          <div style={{display:"flex"}}>
          <img className="moneyLogo" src="$.svg" alt="money logo"  />
          <p className="moneyDetails">4.2k</p>
          </div>
        </p>
      </div>
      <div className="arrows">
        <div className="leftarrow"> &lt; </div>
        <div className="rightarrow">&gt;</div>
      </div>
    </div>
  );
}
export default HiddenGems;