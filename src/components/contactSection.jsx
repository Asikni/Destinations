import Button from "../buttons";
import ContactDetails from "./contactDetails";
import contactDetailsName from "../contactDetailsName";
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

              <ContactDetails
                name={contactDetailsName[0].name}
                type={contactDetailsName[0].type}
                placeholder={contactDetailsName[0].placeholder}
                classNameOne={contactDetailsName[0].classNameOne}
                classNameTwo={contactDetailsName[0].classNameTwo}
                classNameThree={contactDetailsName[0].classNameThree}
              />
            </div>
            <div className="aboutEmail">
            <ContactDetails
                name={contactDetailsName[1].name}
                type={contactDetailsName[1].type}
                placeholder={contactDetailsName[1].placeholder}
                classNameOne={contactDetailsName[1].classNameOne}
                classNameTwo={contactDetailsName[1].classNameTwo}
                classNameThree={contactDetailsName[1].classNameThree}
              />
            </div>
          </div>
          <div className="pNoMsg">
            <div className="aboutPNo">
            <ContactDetails
                name={contactDetailsName[2].name}
                type={contactDetailsName[2].type}
                placeholder={contactDetailsName[2].placeholder}
                classNameOne={contactDetailsName[2].classNameOne}
                classNameTwo={contactDetailsName[2].classNameTwo}
                classNameThree={contactDetailsName[2].classNameThree}
              />
            </div>
            <div className="aboutMsg">
            <ContactDetails
                name={contactDetailsName[3].name}
                type={contactDetailsName[3].type}
                placeholder={contactDetailsName[3].placeholder}
                classNameOne={contactDetailsName[3].classNameOne}
                classNameTwo={contactDetailsName[3].classNameTwo}
                classNameThree={contactDetailsName[3].classNameThree}
              />
            </div>
          </div>
        </div>
        <div className="btn-logo-ContactSection">
          <div className="buttonContactSection">
            <Button btnClass={"btn-3"}>Submit</Button>
          </div>
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
