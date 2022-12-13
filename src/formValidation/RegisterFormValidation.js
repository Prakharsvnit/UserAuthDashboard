import * as yup from "yup";

const PhoneNumberRegEx = /^[789]\d{9}$/;
const PasswordRegEx =
  /^.*((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;
const EmailRegEx =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const RegisterFormValidation = yup.object().shape({
  fullname: yup
    .string()
    .min(3, "Too Short !")
    .max(10, "Too Long !")
    .required("Name Required !"),

  name: yup
    .string()
    .min(3, "Too Short !")
    .max(10, "Too Long !")
    .required("Username Required !"),

  countryId: yup
    .string()
    .required("Country Id Required!")
    .matches(/^[0-9]+$/, "Must be only digits"),

  mobile: yup
    .string()
    .matches(PhoneNumberRegEx, "Enter valid Mobile Number")
    .required("Mobile Number Required !"),
    
  //this regular expression works on India based phone number starting from 7,8,9

  email: yup
    .string()
    .required("Email Required")
    .matches(EmailRegEx, "Enter a valid Email"),

  password: yup
    .string()
    .required("Enter Your Password")
    .matches(PasswordRegEx, "Uppercase Lowercase Special char Required")
    .min(5, "Password Should be minimum 5 character")
    .max(10, "Too long"),

  referral: yup
    .string()
    .required("Enter Referral ID")
    .matches(/^[0-9]+$/, "Must be only digits"),
});
