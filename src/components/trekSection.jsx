function Treks() {
  return (
    <div
      className="treks"
      style={{ height: "150vh", backgroundColor: "#1E2126" }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          border: "5px solid green",
          paddingTop: "80px",
        }}
      >
        <div
          style={{
            color: "#FFFEF5",
            fontSize: "180px",
            border: "1px solid red",
            marginTop: "-90px",
            fontFamily: "Montserrat",
            fontWeight: "700",
          }}
        >
          {" "}
          7{" "}
        </div>
        <div
          className="topsection"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div style={{ color: "#FFA90F" }}>Discover Trek Section in </div>
          <div
            className="topsectiion lake"
            style={{ color: "#FFFEF5", fontSize: "50px", marginLeft: "-27px" }}
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
          border:"5px solid white",
          position:"relative"
        }}
      >
        <div className="difficulty">
          <img></img>
          <p>Difficulty:</p>
          <p>Moderate-difficult</p>
        </div>
        <div className="time">
          <img></img>
          <p>Duration:</p>
          <p>8 days</p>
        </div>
        <div className="height">
          <img></img>
          <p>Height</p>
          <p>13,715 ft</p>
        </div>
        <div>
        <div className="campingSpot" style={{position:"absolute", top:"200px", left:"300px"}}></div>
        <div className="campingSpot2"style={{position:"absolute", top:"300px", left:"300px"}}></div>
        </div>
      </div>

    </div>
  );
}

export default Treks;