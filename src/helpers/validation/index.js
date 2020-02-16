import * as Yup from "yup";

export const AuthSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email("Email must be a valid email")
    .required("Email is Required"),
  password: Yup.string()
    .min(6, "Too Short. Minimum of 6 xters")
    .max(70, "Too Long! maximum of 70 xters")
    .required("Password is Required")
});

export const CreateProductSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .required("Please enter product name"),
  category: Yup.string()
    .trim()
    .required("Please select a category"),
  description: Yup.string()
    .trim()
    .required("Please provide product description"),
  quantity: Yup.number()
    .typeError("Quantity must be a number")
    .positive("Quantity must be greater than zero")
    .integer("Quantity must be an integer")
    .required("Please enter quantity"),
  price: Yup.number()
    .typeError("Quantity must be a number")
    .positive("Quantity must be greater than zero")
    .required("Please enter price"),
  product_img: Yup.mixed().required("Please select an image")
});

export const EditProductSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .required("Please enter product name"),
  category: Yup.string()
    .trim()
    .required("Please select a category"),
  description: Yup.string()
    .trim()
    .required("Please provide product description"),
  quantity: Yup.number()
    .typeError("Quantity must be a number")
    .positive("Quantity must be greater than zero")
    .integer("Quantity must be an integer")
    .required("Please enter quantity"),
  price: Yup.number()
    .typeError("Quantity must be a number")
    .positive("Quantity must be greater than zero")
    .required("Please enter price"),
  product_img: Yup.mixed()
});
