import React from "react";
import PropTypes from "prop-types";
import { Link } from "@reach/router";

import { ReactComponent as Trash } from "../../assets/trash.svg";
import { ReactComponent as Edit } from "../../assets/edit.svg";

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

const ProductsList = () => {
  return (
    <div className="list grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map(product => (
        <div
          className="max-w-sm rounded-md overflow-hidden shadow-2xl transform hover:scale-105"
          key={product.id}
        >
          <Link to={product.id}>
            <div>
              <img
                className="h-40 w-full block object-scale-down mx-auto"
                src={product.image}
                alt={product.name}
              />
            </div>
            <div className="px-6 py-6">
              <div>
                <p className="font-semibold text-lg text-gray-700 mb-3">
                  {product.name}
                </p>
                <p className="text-gray-500">{`$ ${product.price}`}</p>
              </div>
            </div>
          </Link>
          <div className="px-6 pb-4">
            <Trash
              className="w-5 h-5 text-gray-700 hover:text-red-500 inline-block text-sm font-semibold mr-4 cursor-pointer"
              title="Delete product"
            />
            <Edit
              className="w-5 h-5 text-gray-700 hover:text-blue-500 inline-block text-sm font-semibold mr-4 cursor-pointer"
              title="Edit product"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

ProductsList.propTypes = {};

export default ProductsList;
