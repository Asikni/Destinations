function Footer() {
  return (
    <div
      className="footer"
      style={{ backgroundImage:"url('Rectangle 206.svg')", color: "#FFFFFF", height: "90vh" }}
    >
      <div style={{textAlign:"center", paddingTop:"80px"}}><img src="thirdLogoImage.svg" alt="logo" /></div>
     
      <div
        className="contactinfo"
        style={{
          paddingTop: "130px",
          paddingRight:"35px",
          display: "flex",
          justifyContent: "space-around",
          
        }}
      >
        <div className="address">
          <p
            style={{ fontWeight: "700", fontSize: "25px", textAlign: "center" }}
          >
            Address
          </p>
          <div style={{ paddingTop: "20px", textAlign: "center" }}>
            <p>207 & 209 - Saudi Sheikh Complex,</p>
            <p> NH1A, Chanpora, Bypass,</p>
            <p> Srinagar, Jammu & Kashmir, 190015</p>
          </div>
        </div>
        <div className="contact">
          <p
            style={{ fontWeight: "700", fontSize: "25px", textAlign: "center" }}
          >
            Contact
          </p>
          <p style={{ paddingTop: "20px", textAlign: "center" }}>
            hello@saibbyweb.com
          </p>
          <p style={{ paddingTop: "20px", textAlign: "center" }}>
            +91-8082007711
          </p>
        </div>
        <div className="socialmedia">
          <p
            style={{ fontWeight: "700", fontSize: "25px", textAlign: "center" }}
          >
            Follow us on
          </p>
          <div style={{ paddingTop: "20px" }}>
            <img
              src="Social (1).svg"
              alt="social media logo"
              style={{ width: "80px", height: "80px" }}
            />
            <img
              src="Social (2).svg"
              alt="social media logo"
              style={{ width: "80px", height: "80px" }}
            />
            <img
              src="Social (3).svg"
              alt="social media logo"
              style={{ width: "80px", height: "80px" }}
            />
          </div>
        </div>
      </div>
      <div>
        <p style={{color:"#FFA90F", paddingTop:"80px", textAlign:"center"}}>crafted with 💖 in kashmir</p>
      </div>
    </div>
  );
}

export default Footer;
