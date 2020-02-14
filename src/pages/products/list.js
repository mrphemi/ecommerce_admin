import React from "react";
import PropTypes from "prop-types";
import { Link } from "@reach/router";

import { ReactComponent as Trash } from "../../assets/trash.svg";
import { ReactComponent as Edit } from "../../assets/edit.svg";

const products = [
  {
    name: "Analog classic wrist watch",
    price: 86.99,
    image:
      "https://res.cloudinary.com/mrphemi/image/upload/v1547072403/samples/ecommerce/analog-classic.jpg"
  },
  {
    name: "Nike shoes",
    price: 89.99,
    image:
      "https://res.cloudinary.com/mrphemi/image/upload/v1547072408/samples/ecommerce/shoes.png"
  },
  {
    name: "Darlin baseball hat",
    price: 12.99,
    image:
      "https://res.cloudinary.com/mrphemi/image/upload/c_fit,w_400/v1580681625/ecommerce/products/1580681623552_product_img.jpg"
  },
  {
    name: "Calvin clein wrist watch",
    price: 56.99,
    image:
      "https://res.cloudinary.com/mrphemi/image/upload/v1581081813/samples/ecommerce/ck.png"
  },
  {
    name: "Brown leather bag",
    price: 86.99,
    image:
      "https://res.cloudinary.com/mrphemi/image/upload/v1581081917/samples/ecommerce/brown_bag.png"
  },
  {
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
          key={product.name}
        >
          <Link to="#">
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
