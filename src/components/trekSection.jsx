function Treks() {
  return (
    <div
      className="treks"
      style={{ height: "150vh", backgroundColor: "#1E2126" }}
    >
      <div className="trektopsection">
        <div className="number7"> 7 </div>
        <div
          className="topHeadingTrekSection"
          style={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid grey",
          }}
        >
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
          <div className="difficultyDetails">
            Difficulty: <span>Moderate-difficult</span>
          </div>
        </div>
        <div className="time" style={{ display: "flex", alignItems: "center" }}>
          <div className="timelogo"> </div>
          <div className="timeDuration">Duration: <span> 8 days</span></div>
        </div>
        <div
          className="height"
          style={{ display: "flex", alignItems: "center" }}
        >
          <div className="heightlogo"> </div>
          <div className="heightDetails">Height <span>13,715 ft</span></div>
        </div>
      </div>

      <div className="touristDestinations">
        <div className="destSpotNo" >
          <div
            className="destSpotNo01"
            style={{
              fontWeight: "700",
              background:
                "linear-gradient(rgba(255, 255, 255, 0.58), rgba(255, 254, 245, 0))",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            01
          </div>
          <div
            className="destSpotNo02"
            style={{
              fontWeight: "700",
              background:
                "linear-gradient(rgba(255, 255, 255, 0.58), rgba(255, 254, 245, 0))",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            02
          </div>
          <div
            className="destSpotNo03"
            style={{
              fontWeight: "700",
              background:
                "linear-gradient(rgba(255, 255, 255, 0.58), rgba(255, 254, 245, 0))",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            03
          </div>
          <div
            className="destSpotNo04"
            style={{
              fontWeight: "700",
              background:
                "linear-gradient(rgba(255, 255, 255, 0.58), rgba(255, 254, 245, 0))",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            04
          </div>
          <div
            className="destSpotNo05"
            style={{
              fontWeight: "700",
              background:
                "linear-gradient(rgba(255, 255, 255, 0.58), rgba(255, 254, 245, 0))",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            05
          </div>
          <div
            className="destSpotNo06"
            style={{
              fontWeight: "700",
              background:
                "linear-gradient(rgba(255, 255, 255, 0.58), rgba(255, 254, 245, 0))",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            06
          </div>
          <div
            className="destSpotNo07"
            style={{
              fontWeight: "700",
              background:
                "linear-gradient(rgba(255, 255, 255, 0.58), rgba(255, 254, 245, 0))",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            07
          </div>
        </div>
        <div
          className="dot1"
          style={{
            backgroundImage: "url(dots.svg)",
            width: "5%",
            backgroundSize: "cover",
            position: "absolute",
          }}
        ></div>
        <div
          className="dest01"
          style={{ fontWeight: "600", color: "#FFFFFF", position: "absolute" }}
        >
          Sonamarg
        </div>

        <div
          className="dot2"
          style={{
            backgroundImage: "url(dots.svg)",
            width: "5%",
      
            backgroundSize: "cover",
            position: "absolute",
          }}
        ></div>
        <div
          className="dest02"
          style={{ fontWeight: "600", color: "#FFFFFF", position: "absolute" }}
        >
          Nichnai
        </div>

        <div
          className="dot3"
          style={{
            backgroundImage: "url(dots.svg)",
            width: "5%",
          
            backgroundSize: "cover",
            position: "absolute",
          }}
        ></div>
        <div
          className="dest03"
          style={{ fontWeight: "600", color: "#FFFFFF", position: "absolute" }}
        >
          Vishansar Lake
        </div>

        <div
          className="dot4"
          style={{
            backgroundImage: "url(dots.svg)",
            width: "5%",
          
            backgroundSize: "cover",
            position: "absolute",
          }}
        ></div>
        <div
          className="dest04"
          style={{ fontWeight: "600", color: "#FFFFFF", position: "absolute" }}
        >
          Buffer Day
        </div>

        <div
          className="dot5"
          style={{
            backgroundImage: "url(dots.svg)",
            width: "5%",
           
            backgroundSize: "cover",
            position: "absolute",
          }}
        ></div>

        <div
          className="dest05"
          style={{ fontWeight: "600", color: "#FFFFFF", position: "absolute" }}
        >
          Gadsar Lake
        </div>

        <div
          className="dot6"
          style={{
            backgroundImage: "url(dots.svg)",
            width: "5%",
           
            backgroundSize: "cover",
            position: "absolute",
          }}
        ></div>

        <div
          className="dest06"
          style={{ fontWeight: "600", color: "#FFFFFF", position: "absolute" }}
        >
          Satsar Lake
        </div>

        <div
          className="dot7"
          style={{
            backgroundImage: "url(dots.svg)",
            width: "5%",
    
            backgroundSize: "cover",
            position: "absolute",
          }}
        ></div>
        <div
          className="dest07"
          style={{ fontWeight: "600", color: "#FFFFFF", position: "absolute" }}
        >
          Gangbal Lake
        </div>
      </div>
    </div>
  );
}

export default Treks;
