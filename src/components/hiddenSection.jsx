function HiddenGems() {
  return (
    <div
      className="hiddenSection"
      style={{
        backgroundColor: "#1E2126",
        
      }}
    >
      <div className="hiddenText">Discover Hidden Gems</div>

      <div className="carousel">

        <div className="carouselImageThree"></div>

        <div className="imageTwoFour">
          <div className="carouselImageTwo"></div>
          <div className="carouselImageFour"></div>
        </div>
        <div className="imageOneFive">
          <div className="carouselImageOne"></div>
          <div className="carouselImageFive"></div>
        </div>
      </div>
      {/* <div className="destinationDetails" >
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
      </div> */}
      <div className="arrows">
        <div className="leftArrowHiddenSection "> &lt; </div>
        <div className="rightArrowHiddenSection">&gt;</div>
      </div>
    </div>
  );
}
export default HiddenGems;
