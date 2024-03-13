function Footer() {
  return (
    <div
      className="footer"
      style={{ backgroundImage:"url('Rectangle 206.svg')", color: "#FFFFFF", height: "90vh" }}
    >
      <div style={{textAlign:"center", paddingTop:"80px"}}><img src="thirdLogoImage.svg" alt="logo" /></div>
     
      <div
        className="contactInfo"

      >
        <div className="address">
          <p className="addressHeading"
          >
            Address
          </p>
          <div className="addressContent" >
            <p>207 & 209 - Saudi Sheikh Complex,</p>
            <p> NH1A, Chanpora, Bypass,</p>
            <p> Srinagar, Jammu & Kashmir, 190015</p>
          </div>
        </div>
        <div className="contact">
          <p className="contactHeading"
           
          >
            Contact
          </p>
          <p className="contactMail"style={{}}>
            hello@saibbyweb.com
          </p>
          <p className="contactPno" 
          >
            +91-8082007711
          </p>
        </div>
        <div className="socialMedia">
          <p className="socialMediaHeading"
           
          >
            Follow us on
          </p>
          <div className="SocialMediaIcons">
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
