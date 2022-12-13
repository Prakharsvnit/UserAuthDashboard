import * as yup from "yup";

const EmailRegEx =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const PasswordRegEx = /^[A-Za-z]*$/;

export const LoginFormValidation = yup.object().shape({
  email: yup
    .string()
    .required("Email Required")
    .matches(EmailRegEx, "Invalid Email"),

  password: yup
    .string()
    .required("Enter Your Password")
    .matches(PasswordRegEx, "Uppercase Lowercase letters only")
    .min(5, "Password Should be minimum 5 character")
    .max(10, "Too long"),
});
