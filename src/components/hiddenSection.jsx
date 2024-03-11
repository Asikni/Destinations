function HiddenGems() {
  return (
    <div
      className="hiddenSection"
      style={{
        backgroundColor: "#1E2126",
        height: "100vh",
        border:" 1px solid white", position:"relative"
      }}
    >
      <div
        className="hiddenText"
      >
        Discover Hidden Gems
      </div>
      <div className="carousel" >
        <img className="carouselimageone"
          src="Rectangle 200.svg"
          alt="nature image"
          
        ></img>
        <img
        className="carouselimagetwo"
          src="shahal-shaheer-nuZ6O19G0mQ-unsplash.jpg"
          alt="nature image"

        ></img>

        <img
          className="carouselimagethree"
          src="Rectangle 187.svg"
          alt="nature image"
          
        ></img>

        <img
        className="carouselimagefour"
          src="suhail-mir-tdxWb8lcWuU-unsplash (1).jpg"
          alt="nature image"

        ></img>
        <img
        className="carouselimagefive"
          src="yogesh-sharma--Zm8OVe6jjM-unsplash.jpg"
          alt="nature image"

        ></img>
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
      <div
        className="arrows"
      >
        <div
          className="leftarrow"
        >
          {" "}
          &lt;{" "}
        </div>
        <div
          className="rightarrow"
          
        >
          &gt;
        </div>
      </div>
    </div>
  );
}
export default HiddenGems;
