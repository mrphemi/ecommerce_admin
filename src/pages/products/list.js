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
    <div>
      <div className="list grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {products.map(product => (
          <Link
            to="#"
            className="max-w-sm rounded-md overflow-hidden shadow-2xl"
            key={product.name}
          >
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
            <div className="px-6 pb-4">
              <Link
                to="#xxx"
                className="inline-block text-sm font-semibold mr-4"
              >
                <Trash
                  className="w-5 h-5 text-gray-700 hover:text-red-500"
                  title="Delete product"
                />
              </Link>
              <Link to="" className="inline-block text-sm font-semibold mr-4">
                <Edit
                  className="w-5 h-5 text-gray-700 hover:text-blue-500"
                  title="Edit product"
                />
              </Link>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

ProductsList.propTypes = {};

export default ProductsList;
