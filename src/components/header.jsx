import "../style.css";
function Header() {
  return (
    <nav>
      <div className="header" >
        <img src="firstLogoImage.svg" alt="logo1" style={{width:'130px'}}></img>
        <img src="thirdLogoImage.svg" alt="logo3" style={{width:'120px'}}></img>
        <img src="secondLogoImage.svg" alt="logo2"style={{width:'130px'}}></img>
      </div>
    </nav>
  );
}

export default Header;
