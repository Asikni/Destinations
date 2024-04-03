import * as yup from "yup";

export const contactSchema = yup.object().shape({
  username: yup
    .string() //if we put it as number and write text then it'll show error...but we can write text then
    .min(3, "Username must be at least 3 characters long")
    .required("Required"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  phonenumber: yup.number().positive().integer().required("Required"),
  message:yup.string()

});
