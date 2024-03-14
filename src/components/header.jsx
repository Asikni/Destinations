import "../style.css";
function Header() {
  return (
    <nav>
      <div className="header" style={{height:"10vh"}}>
        {/* <img
          className="Logo"
          src="firstLogoImage.svg"
          alt="logo1"
          style={{ width: "130px" }}
        ></img> */}
        <div className="summerLogo"> </div>
        {/* <img
          className="Logo"
          src="thirdLogoImage.svg"
          alt="logo3"
          style={{ width: "120px" }}
        ></img> */}
        <div className="travelLogo"> </div>
        {/* <img
          className="Logo"
          src="secondLogoImage.svg"
          alt="logo2"
          style={{ width: "130px" }}
        ></img> */}
        <div className="winterLogo"> </div>
      </div>
    </nav>
  );
}

export default Header;
