import * as yup from "yup";

const PhoneNumberRegEx = /^[789]\d{9}$/;
const EmailRegEx =
//eslint-disable-next-line 
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const RegisterFormValidation = yup.object({
  fullname: yup
    .string('Enter your name')
    .min(3, "Too Short !")
    .max(10, "Too Long !")
    .required("Name Required !"),

  username: yup
    .string('Enter username')
    .min(3, "Too Short !")
    .max(10, "Too Long !")
    .required("Username Required !"),

  countryId: yup
    .string('Enter country ID')
    .required("Country Id Required!")
    .matches(/^[0-9]+$/, "Must be only digits"),

  mobile: yup
    .string('Enter Mobile Number')
    .matches(PhoneNumberRegEx, "Enter valid Mobile Number")
    .required("Mobile Number Required !"),
    
  // //this regular expression works on India based phone number starting from 7,8,9

  email: yup
    .string('Enter Email ID')
    .required("Email Required")
    .matches(EmailRegEx, "Enter a valid Email ID"),

  password: yup
    .string('Enter Password')
    .min(6, "Password Should be minimum 6 digits")
    .max(10, "Too long")
    .required("Password Required")

});
