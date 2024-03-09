function HiddenGems() {
  return (
    <div
      className="hiddenSection"
      style={{ backgroundColor: "#1E2126", height: "100vh" }}
    >
      <div className="hiddenText" style={{ paddingTop: "30px" , fontFamily: "Montserrat" }}>
        Discover Hidden Gems
      </div>
      <div className="carousel">
        <img
          src="Rectangle 200.svg"
          alt="nature image"
          style={{
            height: "260px",
            paddingBottom: "60px",
            marginRight: "-60px",
          }}
        ></img>
        <img
          src="Rectangle 201.svg"
          alt="nature image"
          style={{
            height: "340px",
            paddingBottom: "30px",
            marginRight: "-100px",
          }}
        ></img>
        <img
          className="sonamarg"
          src="Rectangle 187.svg"
          alt="nature image"
          style={{ height: "420px", position: "relative" }}
        ></img>
        <img
          src="Rectangle 25.svg"
          alt="nature image"
          style={{
            height: "340px",
            paddingBottom: "30px",
            marginLeft: "-100px",
          }}
        ></img>
        <img
          src="Rectangle 46.svg"
          alt="nature image"
          style={{
            height: "260px",
            paddingBottom: "60px",
            marginLeft: "-60px",
          }}
        ></img>
      </div>
      <div
        className="arrows"
        style={{
          display: "flex",
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
