import * as yup from "yup";

export const LoginFormValidation = yup.object().shape({
  login_id: yup
  .string()
  .email('Invalid email address')
  .required("Please enter Email Id"),

  password: yup
  .string()
  .min(6, "Password Should be minimum 6 digits")
  .required("Please enter password"),
});
