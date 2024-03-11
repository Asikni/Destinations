import Button from "../buttons";

function Contact() {
  const myFunction = (event) => {
    event.target.style.border = "transparent";
  };
  const onBlurFunction = (event) => {
    event.target.style.border = ""; // Reset border on blur
  };
  return (
    <div style={{ backgroundColor: "#1E2126", height: "100vh" }}>
      <div style={{ position: "relative" }}>
        <div>
          <img
            src="Rectangle 16.svg"
            alt="contact background"
            style={{
              width: "800px",
              marginLeft: "280px",
        
            }}
          />{" "}
          <div
            style={{
              position: "absolute",
              top: "50px",
              left: "450px",
              color: "#FFA90F",
              fontWeight: "700",
              fontSize: "55px",
              fontFamily: "Montserrat",
            }}
          >
            Contact with Us
          </div>
          <div
            style={{
              position: "absolute",
              top: "150px",
              left: "530px",
              color: "#FFFFFF",
              fontWeight: "500",
              fontSize: "20px",
            }}
          >
            Plan your exciting trip with us
          </div>
          <div>
            <div
              style={{
                position: "absolute",
                top: "300px",
                left: "330px",
                color: "#FFFFFF",
                fontWeight: "400",
                fontSize: "20px",
              }}
            >
              Name
            </div>
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
            <div
              style={{
                position: "absolute",
                top: "300px",
                left: "750px",
                color: "#FFFFFF",
                fontWeight: "400",
                fontSize: "20px",
              }}
            >
              E-mail
            </div>
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
            <div
              style={{
                position: "absolute",
                top: "400px",
                left: "330px",
                color: "#FFFFFF",
                fontWeight: "400",
                fontSize: "20px",
              }}
            >
              Phone number
            </div>
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
            <div
              style={{
                position: "absolute",
                top: "400px",
                left: "750px",
                color: "#FFFFFF",
                fontWeight: "400",
                fontSize: "20px",
              }}
            >
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
          <div
            style={{
              position: "absolute",
              top: "500px",
              left: "550px",
            }}
          >
            <Button btnClass={"btn-3"}>Submit</Button>
          </div>
          
          <div
            style={{
              position: "absolute",
              top: "500px",
              left: "800px",
              
            }}
          >
            <img src="Vector (1).svg" alt="logo" style={{height:"45px",
              width:"45px"}} />
          </div>
          <div style={{
              position: "absolute",
              top: "500px",
              left: "900px",
            }}>
            <img src="Vector (2).svg" alt="logo"  style={{height:"45px",
              width:"45px"}}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
