function Footer() {
  return (
    <div className="footer">
      <div className="footerTravelLogo" >
        <img src="thirdLogoImage.svg" alt="logo" />
      </div>

      <div className="contactInfo">
        <div className="address">
          <p className="addressHeading">Address</p>
          <div className="addressContent">
            <p>207 & 209 - Saudi Sheikh Complex,</p>
            <p> NH1A, Chanpora, Bypass,</p>
            <p> Srinagar, Jammu & Kashmir, 190015</p>
          </div>
        </div>
        <div className="contact">
          <p className="contactHeading">Contact</p>
          <p className="contactMail">hello@saibbyweb.com</p>
          <p className="contactPno">+91-8082007711</p>
        </div>
        <div className="socialMedia">
          <p className="socialMediaHeading">Follow us on</p>
          <div className="socialMediaIcons">
            <div className="socialMediaLogoOne"></div>
            <div className="socialMediaLogoTwo"></div>
            <div className="socialMediaLogoThree"></div>

          </div>
        </div>
      </div>
      <div className="ourMessage">crafted with 💖 in kashmir</div>
    </div>
  );
}

export default Footer;
