import * as yup from "yup";

const PhoneNumberRegEx = /^\d{10}$/;

export const RegisterFormValidation = yup.object({
  full_name: yup
    .string()
    .max(10, "Too Long !")
    .required("Please enter name"),

  username: yup
    .string()
    .max(10, "Too Long !")
    .required("Please enter Username"),

  mobile_number: yup
    .string()
    .matches(PhoneNumberRegEx, "Please enter valid Mobile Number")
    .required("Please enter Mobile Number"),

  email_id: yup
    .string()
    .email('Invalid email address')
    .required("Please enter Email Id"),

  password: yup
    .string()
    .min(6, "Password Should be minimum 6 digits")
    .required("Please enter password")

});
