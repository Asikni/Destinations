import Button from "../buttons";

function Contact() {
  const myFunction = (event) => {
    event.target.style.border = "transparent";
  };
  const onBlurFunction = (event) => {
    event.target.style.border = ""; // Reset border on blur
  };
  return (
    <div
      style={{
        backgroundColor: "#1E2126",
        height: "100vh",
        border: "1px solid yellow",
      }}
    >
      <div style={{ position: "relative" }}>
        <div>
          <div className="contactBgImage"></div>
          <div className="contactTopHeading">Contact with Us</div>
          <div className="contactHeroHeading">
            Plan your exciting trip with us
          </div>
          <div className="cardContent">
            <div className="detailSectionName">Name</div>
            <form
              className="red-background"
              style={{
                position: "absolute",
                top: "330px",
                left: "330px",
                fontWeight: "400",
                fontSize: "20px",
                border: "none",
              }}
            >
              <input type="text" onFocus={myFunction} onBlur={onBlurFunction} />
            </form>
            <div className="detailSectionMail">E-mail</div>
            <form
              className="red-background"
              style={{
                position: "absolute",
                top: "330px",
                left: "750px",
                fontWeight: "400",
                fontSize: "20px",
                border: "none",
              }}
            >
              <input type="text" onFocus={myFunction} onBlur={onBlurFunction} />
            </form>
            <div className="detailSectionPno">Phone number</div>
            <form
              style={{
                position: "absolute",
                top: "440px",
                left: "330px",
                fontWeight: "400",
                fontSize: "20px",
              }}
            >
              <input type="text" onFocus={myFunction} onBlur={onBlurFunction} />
            </form>
            <div className="detailSectionMsg" style={{}}>
              Message
            </div>
            <form
              style={{
                position: "absolute",
                top: "440px",
                left: "750px",
                fontWeight: "400",
                fontSize: "20px",
              }}
            >
              <input type="text" onFocus={myFunction} onBlur={onBlurFunction} />
            </form>
          </div>
          
          <div>
            <Button btnClass={"btn-3"}>Submit</Button>
          </div>

          <div className="loadingLogo"></div>
          <div className="approvedLogo"></div>
        </div>
        </div>
      </div>
   
  );
}

export default Contact;
