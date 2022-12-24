import * as yup from "yup";

const EmailRegEx =
  //eslint-disable-next-line
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const LoginFormValidation = yup.object().shape({
  email_id: yup
    .string("Enter Email Id")
    .required("Email Required")
    .matches(EmailRegEx, "Invalid Email"),

  password: yup
    .string("Enter Password")
    .min(6, "Password Should be minimum 6 digits")
    .max(10, "Too long")
    .required("Password Required"),
});
