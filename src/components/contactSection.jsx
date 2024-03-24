import Button from "../buttons";
import ContactDetails from "./contactDetails";
import contactDetailsName from "../contactDetailsName";
import { useEffect, useState } from "react";
import debounce from "lodash/debounce";

function Contact() {
  const [namechange, setNameChange] = useState("");
  const [emailchange, setEmailChange] = useState("");
  const [numberchange, setNumberChange] = useState("");
  const [messagechange, setMessageChange] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isconfirmed, setIsConfirmed] = useState(false);
  // const handleClick = () => {
  //   const formData = {
  //     name: namechange.length > 0 ? namechange : "Nothing to display here.",

  //     email: emailchange.length > 0 ? emailchange : "Nothing to display here.",
  //     number:
  //       numberchange.length > 0 ? numberchange : "Nothing to display here.",
  //     message:
  //       messagechange.length > 0 ? messagechange : "Nothing to display here.",
  //   };

  //   console.log("Form Data:", formData);
  // };

  const handleOnSubmit = async () => {
    setIsLoading(true);

    const data = {
      name: namechange ,
      email: emailchange,
      number: numberchange,
      message: messagechange,
    };

    try {
      if ((namechange.length && emailchange.length && numberchange.length && messagechange.length) > 0 ){ 
      const response = await fetch("https://eo4medv2840tuh0.m.pipedream.net", {
        method: "POST",
        body: JSON.stringify(data), //check this out
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status == 200) {
        console.log("Request succesfully sent....");
      }}else {
        alert("Can't leave a field empty")
      }
    } catch (e) {
      console.log("Something went wrong");
    } finally {
      setIsLoading(false);

      (namechange.length && emailchange.length && numberchange.length && messagechange.length) > 0 ? setIsConfirmed(true) : setIsConfirmed(false);
      setTimeout(() => {
        setIsConfirmed(false);

      }, 2500)
    }
  };

  const debouncedHandleNameChange = debounce((value) => {
    setNameChange(value);
  }, 1000); //set the value after .5s

  const debouncedHandleEmailChange = debounce((value) => {
    setEmailChange(value);
  }, 200);

  const debouncedHandleNumberChange = debounce((value) => {
    setNumberChange(value);
  }, 200);

  const debouncedHandleMessageChange = debounce((value) => {
    setMessageChange(value);
  }, 200);

  const handleNameChange = (event) => {
    debouncedHandleNameChange(event.target.value);
  };

  const handleEmailChange = (event) => {
    debouncedHandleEmailChange(event.target.value);
  };

  const handleNumberChange = (event) => {
    debouncedHandleNumberChange(event.target.value);
  };

  const handleMessageChange = (event) => {
    debouncedHandleMessageChange(event.target.value);
  };
  useEffect(() => {
    console.log("Name Change ;", namechange);
  }, [namechange]);

  useEffect(() => {
    console.log("Email Change :", emailchange);
  }, [emailchange]);

  useEffect(() => {
    console.log("Number Change :", numberchange);
  }, [numberchange]);

  useEffect(() => {
    console.log("Message Change :", messagechange);
  }, [messagechange]);
  return (
    <div
      style={{
        backgroundColor: "#1E2126",
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
                handleChange={handleNameChange}
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
                handleChange={handleEmailChange}
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
                handleChange={handleNumberChange}
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
                handleChange={handleMessageChange}
              />
            </div>
          </div>
        </div>
        <div className="btn-logo-ContactSection">
          <div className="buttonContactSection">
            <Button
              btnClass={"btn-3"}
              onClick={handleOnSubmit}
              disabled={isLoading}
            >
              Submit
            </Button>
          </div>
          <div className="twoLogos">
            {isLoading ? <div className="loadingLogo"></div> : null}
            {isconfirmed
              ? <div className="approvedLogo"> </div> 
              : null}
            

          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
