import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://reactshopapi.herokuapp.com/"
    : "http://localhost:4000";

export default axios.create({
  baseURL,
});
