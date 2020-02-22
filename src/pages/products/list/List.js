import React from "react";
import { Link } from "@reach/router";

import { ReactComponent as Add } from "../../../assets/add.svg";

import ListItem from "./ListItem";

const products = [
  {
    id: "5e46bdb4ac9267c21eb70ced",
    name: "Analog classic wrist watch",
    price: 86.99,
    image:
      "https://res.cloudinary.com/mrphemi/image/upload/v1547072403/samples/ecommerce/analog-classic.jpg"
  },
  {
    id: "5e46bdde1cd99777c65952b1",
    name: "Nike shoes",
    price: 89.99,
    image:
      "https://res.cloudinary.com/mrphemi/image/upload/v1547072408/samples/ecommerce/shoes.png"
  },
  {
    id: "5e46bdf701dc3ba49f8bf5a5",
    name: "Darlin baseball hat",
    price: 12.99,
    image:
      "https://res.cloudinary.com/mrphemi/image/upload/c_fit,w_400/v1580681625/ecommerce/products/1580681623552_product_img.jpg"
  },
  {
    id: "5e46be0d751e16dad1c77bf8",
    name: "Calvin clein wrist watch",
    price: 56.99,
    image:
      "https://res.cloudinary.com/mrphemi/image/upload/v1581081813/samples/ecommerce/ck.png"
  },
  {
    id: "5e46be24b938e23eff8efabe",
    name: "Brown leather bag",
    price: 86.99,
    image:
      "https://res.cloudinary.com/mrphemi/image/upload/v1581081917/samples/ecommerce/brown_bag.png"
  },
  {
    id: "5e46be36984711f248ab16c0",
    name: "Dark brown leather bag",
    price: 67.99,
    image:
      "https://res.cloudinary.com/mrphemi/image/upload/v1581081918/samples/ecommerce/Leather-bag.jpg"
  }
];

const ProductsList = ({ navigate }) => {
  return (
    <>
      <div className="flex justify-end">
        <Link
          to="create"
          className="mb-12 border rounded text-white text-sm bg-blue-500 hover:bg-blue-700 py-2 px-4 capitalize"
        >
          <Add className="inline-block w-4 h-4" />
          new product
        </Link>
      </div>

      <div className="list grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map(product => (
          <ListItem product={product} navigate={navigate} key={product.id} />
        ))}
      </div>
    </>
  );
};

export default ProductsList;
