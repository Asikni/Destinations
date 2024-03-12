function Treks() {
  return (
    <div
      className="treks"
      style={{ height: "150vh", backgroundColor: "#1E2126" }}
    >
      <div className="trektopsection">
        <div className="number7"> 7 </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="topsectionheadingone" style={{ color: "#FFA90F" }}>
            Discover Trek Section in{" "}
          </div>
          <div
            className="topsectiionheading2"
            style={{ color: "#FFFEF5", marginLeft: "-27px", fontWeight: "500" }}
          >
            {" "}
            Lake Trek
          </div>
        </div>
      </div>

      <div
        className="features"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          color: "#FFFEF5",
          border: "1px solid pink",
        }}
      >
        <div
          className="difficulty"
          style={{ display: "flex", alignItems: "center" }}
        >
          <div className="difficultylogo"></div>
          <div className="data">Difficulty: Moderate-difficult</div>
        </div>
        <div className="time" style={{ display: "flex", alignItems: "center" }}>
          <div className="timelogo"> </div>
          <div>Duration: 8 days</div>
        </div>
        <div
          className="height"
          style={{ display: "flex", alignItems: "center" }}
        >
          <div className="heightlogo"> </div>
          <div>Height 13,715 ft</div>
        </div>
      </div>
      <div className="touristDestinations">
        <div
          className="dot1"
          style={{
            backgroundImage: "url(dots.svg)",
            width: "5%",
            height: "10%",
            backgroundSize: "cover",
            position: "absolute",
          }}
        ></div>
        <div
          className="dot2"
          style={{
            backgroundImage: "url(dots.svg)",
            width: "5%",
            height: "10%",
            backgroundSize: "cover",
            position: "absolute",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Treks;
