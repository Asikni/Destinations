import Button from "../buttons";

function Contact() {
  return (
    <div
      style={{
        backgroundColor: "#1E2126",
        height: "100vh",

     
      }}
    >
      <div className="contactBgImage">
        <div className="contactTopHeading">Contact with Us</div>
        <div className="contactHeroHeading">
          Plan your exciting trip with us
        </div>
        <div className="cardContent">
          <div className="nameEmail">
            <div className="aboutName">
              <div className="detailSectionName">Name</div>
              <form className="nameField">
                <input
                  type="text"
                  placeholder="Enter Your name"
                  style={{ outline: "none " }}
                />
              </form>
              <div className="lineName"></div>
            </div>
            <div className="aboutEmail">
              <div className="detailSectionMail">E-mail</div>
              <form className="emailField">
                <input
                  type="email"
                  placeholder="Enter your e-mail"
                  style={{ outline: "none " }}
                />
              </form>
              <div className="lineMail"></div>
            </div>
          </div>
          <div className="pNoMsg">
          <div className="aboutPNo">
          <div className="detailSectionPno">Phone number</div>
          <form className="numberField">
            <input
              type="number"
              placeholder="+91"
              style={{ outline: "none " }}
            />
          </form>

          <div className="linePno"></div>
          </div>
           <div className="aboutMsg">
          <div className="detailSectionMsg">Message</div>
         
          <form className="messageField">
            <input type="text" style={{ outline: "none " }} />
          </form>
          <div className="lineMessage"></div>
          </div>
        </div>
        </div>
        <div  className="btn-logo-ContactSection">
          <div className="buttonContactSection"><Button btnClass={"btn-3"}>Submit</Button></div>
          <div className="twoLogos">
        <div className="loadingLogo"></div>
        <div className="approvedLogo"></div>
        </div>
        </div>


      </div>
    </div>
  );
}

export default Contact;
