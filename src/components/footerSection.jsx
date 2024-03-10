function Footer() {
  return (
    <div
      className="footer"
      style={{ backgroundColor: "#1E2126", color: "#FFFFFF", height: "50vh" }}
    >
      <div className="logo"></div>
      <div
        className="contactinfo"
        style={{
          paddingTop: "150px",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div className="address">
          <p>Address</p>
          <div style={{ paddingTop: "20px" }}>
            <p>207 & 209 - Saudi Sheikh Complex,</p>
            <p> NH1A, Chanpora, Bypass,</p>
            <p> Srinagar, Jammu & Kashmir, 190015</p>
          </div>
        </div>
        <div className="contact">
          <p>Contact</p>
          <p>+91-8082007711</p>
        </div>
        <div className="socialmedia">
          <p>Follow us on</p>
          <div>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
