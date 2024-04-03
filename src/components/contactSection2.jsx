import { Form, Formik } from "formik";
import { contactSchema } from "../formSchema";
import CustomInput from "../schemas/CustomInput";

const onSubmit = async (values, actions) => {
  console.log(values);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

function ContactSection2() {
  return (
    <Formik
      initialValues={{
        username: "",
        userEmail: "",
        userPno: "",
        userMessage: "",
      }}
      onSubmit={onSubmit}
      validationSchema={contactSchema}
    >
      {({ isSubmitting, isValid }) => (
        <Form className="nameField">
          <div
            style={{
              backgroundColor: "#1E2126",
            }}
          >
            <div className="contactSection">
              <div className="contactBgImage">
                <div className="contactTopHeading">Contact with Us</div>
                <div className="contactHeroHeading">
                  Plan your exciting trip with us
                </div>
                <div className="cardContent">
                  <div className="nameEmail">
                    <div className="aboutName">
                      <CustomInput
                        label="Name"
                        name="username" //attribute for identifying form fields(uniquely identifies form field) and connecting them to form libraries like Formik
                        type="text" //if we put number here and then try to input text..that will not happen , wont allow
                        placeholder="Enter your name"
                      />
                      
                    </div>
                
                    <div className="aboutEmail">
                      <CustomInput
                        label="Email"
                        name="email" //attribute for identifying form fields(uniquely identifies form field) and connecting them to form libraries like Formik
                        type="text" //if we put number here and then try to input text..that will not happen , wont allow
                        placeholder="Enter your Email"
                      />
                    </div>
                  </div>
                  <div className="pNoMsg">
                    <div className="aboutPNo">
                      <CustomInput
                        label="Phone Number"
                        name="phonenumber" //attribute for identifying form fields(uniquely identifies form field) and connecting them to form libraries like Formik
                        type="number" //if we put number here and then try to input text..that will not happen , wont allow
                        placeholder="+91"
                      />
                    </div>
                    <div className="aboutMsg">
                      <CustomInput
                        label="Message"
                        name="message" //attribute for identifying form fields(uniquely identifies form field) and connecting them to form libraries like Formik
                        type="text" //if we put number here and then try to input text..that will not happen , wont allow
                        placeholder="Write to us"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default ContactSection2;
