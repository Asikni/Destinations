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
        style={{ paddingTop: "20px", fontFamily: "Montserrat", position:"absolute", top:"25px" }}
      >
        Discover Hidden Gems
      </div>
      <div className="carousel" >
        <img
          src="Rectangle 200.svg"
          alt="nature image"
          style={{
            height: "260px",
            position:"absolute",
            bottom:"160px", left:"230px",
            zIndex: 0
           
          }}
        ></img>
        <img
          src="shahal-shaheer-nuZ6O19G0mQ-unsplash.jpg"
          alt="nature image"
          style={{
            height: "340px",
            position:"absolute",
            bottom:"130px", left:"300px",
            zIndex: 1
          }}
        ></img>

        <img
          className="sonamarg"
          src="Rectangle 187.svg"
          alt="nature image"
          style={{ position: "absolute", height: "420px", zIndex: 2, bottom:"100px", left:"400px" }}
        ></img>

        <img
          src="suhail-mir-tdxWb8lcWuU-unsplash (1).jpg"
          alt="nature image"
          style={{
            position:"absolute",
            height: "340px",
            bottom:"130px", right:"320px",
            zIndex:1
          }}
        ></img>
        <img
          src="yogesh-sharma--Zm8OVe6jjM-unsplash.jpg"
          alt="nature image"
          style={{
            position:"absolute",
            height: "260px",
            bottom:"160px", right:"250px",
            zIndex:0
   
          }}
        ></img>
      </div>
      <div style={{
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
      </div>
      <div
        className="arrows"
        style={{
          display: "flex",
          position:"absolute",
          bottom:"-10px"
        }}
      >
        <div
          className="leftarrow"
          style={{ color: "#FFA90F", width: "150px", fontSize: "70px" }}
        >
          {" "}
          &lt;{" "}
        </div>
        <div
          className="rightarrow"
          style={{ color: "#FFA90F", fontSize: "70px" }}
        >
          &gt;
        </div>
      </div>
    </div>
  );
}
export default HiddenGems;
