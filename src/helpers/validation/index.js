import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email("Email must be a valid email")
    .required("Email is Required"),
  password: Yup.string()
    .min(6, "Too Short. Minimum of 6 xters")
    .max(70, "Too Long! maximum of 70 xters")
    .required("Password is Required")
});
