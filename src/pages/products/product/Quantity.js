import React from "react";

const Quantity = ({ quantity }) => {
  return (
    <>
      {quantity >= 20 && (
        <span className="px-2 py-1 bg-green-400 rounded text-white text-sm capitalize">
          in stock
        </span>
      )}

      {quantity < 20 && quantity > 0 && (
        <span className="px-2 py-1 bg-yellow-400 rounded text-white text-sm capitalize">
          limited in stock
        </span>
      )}

      {!quantity && (
        <span className="px-2 py-1 bg-red-400 rounded text-white text-sm capitalize">
          out of stock
        </span>
      )}
    </>
  );
};

export default Quantity;
