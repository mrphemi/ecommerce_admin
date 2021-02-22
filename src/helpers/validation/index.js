import * as Yup from "yup";

// Auth
export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email("Email must be a valid email")
    .required("Email is Required"),
  password: Yup.string()
    .min(6, "Too Short. Minimum of 6 characters")
    .max(70, "Too Long! maximum of 70 characters")
    .required("Password is Required"),
});

export const RegisterSchema = Yup.object().shape({
  first_name: Yup.string().trim().required("Please enter your first name"),
  last_name: Yup.string().trim().required("Please enter your last name"),
  email: Yup.string()
    .trim()
    .email("Email must be a valid email")
    .required("Email is Required"),
  password: Yup.string()
    .min(6, "Too Short. Minimum of 6 characters")
    .max(70, "Too Long! maximum of 70 characters")
    .required("Password is Required"),
});

// Products
export const CreateProductSchema = Yup.object().shape({
  name: Yup.string().trim().required("Please enter product name"),
  category: Yup.string().trim().required("Please select a category"),
  brand: Yup.string().trim().required("Please select a brand"),
  availableSizes: Yup.array()
    .min(1)
    .required("Please select at least one size"),
  description: Yup.string()
    .trim()
    .required("Please provide product description"),
  price: Yup.number()
    .typeError("Price must be a number")
    .positive("Price must be greater than zero")
    .required("Please enter price"),
  product_img: Yup.mixed().required("Please select an image"),
});

export const EditProductSchema = Yup.object().shape({
  name: Yup.string().trim().required("Please enter product name"),
  brand: Yup.string().trim().required("Please select a brand"),
  category: Yup.string().trim().required("Please select a category"),
  description: Yup.string()
    .trim()
    .required("Please provide product description"),
  availableSizes: Yup.array()
    .min(1)
    .required("Please select at least one size"),
  price: Yup.number()
    .typeError("Price must be a number")
    .positive("Price must be greater than zero")
    .required("Please enter price"),
  product_img: Yup.mixed(),
});

// Category
export const CategorySchema = Yup.object().shape({
  name: Yup.string().trim().required("Please enter category name"),
});

// Brand
export const BrandSchema = Yup.object().shape({
  name: Yup.string().trim().required("Please enter brand name"),
});

// Sizes
export const SizeSchema = Yup.object().shape({
  size: Yup.number()
    .typeError("Size must be a number")
    .positive("Size must be greater than zero")
    .required("Please enter size"),
});

// Profile
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const ProfileSchema = Yup.object().shape({
  first_name: Yup.string().trim().required("Please enter first name"),
  last_name: Yup.string().trim().required("Please enter last name"),
  email: Yup.string()
    .trim()
    .email("Email must be a valid email")
    .required("Email is Required"),
  phone: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Phone number is required"),
});
