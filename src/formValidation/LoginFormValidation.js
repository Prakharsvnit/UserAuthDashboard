import * as yup from "yup";

const PasswordRegEx = /^.*((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;

export const LoginFormValidation = yup.object().shape({

    email: yup.string().email("Enter a Vaid Email").required("Email is Required"),

    password: yup
    .string()
    .required("Enter Your Password")
    .matches(PasswordRegEx, "Uppercase Lowercase Special char Required")
    .min(5, "Password Should be minimum 5 character")
    .max(10, "Too long")
});