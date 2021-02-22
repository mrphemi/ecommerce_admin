import React, { useState } from "react";
import PropTypes from "prop-types";

import SizeListItem from "./SizeListItem";

const SizeList = ({ field, form, list }) => {
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [displaySizeError, setDisplaySizeError] = useState(false);
  const [displayQuantityError, setDisplayQuantityError] = useState(false);

  const update = (e) => {
    e.preventDefault();
    let i = list.findIndex((el) => el._id === size);
    const found = field.value.findIndex((listitem) => size === listitem.size);

    if (size !== "" && quantity > 0) {
      if (found !== -1) {
        form.setFieldValue(field.name, [
          { size, quantity: Number(quantity), value: list[i].size },
          ...field.value.slice(0, found),
          ...field.value.slice(found + 1),
        ]);
      } else {
        form.setFieldValue(
          field.name,
          field.value.concat({
            size,
            quantity: Number(quantity),
            value: list[i].size,
          }),
        );
      }

      setSize("");
      setQuantity(1);
      setDisplaySizeError(false);
      setDisplayQuantityError(false);
    }

    if (size === "") {
      setDisplaySizeError(true);
    }

    if (quantity < 1) {
      setDisplayQuantityError(true);
    }
  };

  const deleteItem = (size) => {
    const newList = field.value.filter((item) => item.size !== size);
    form.setFieldValue(field.name, newList);
  };

  const editItem = (item) => {
    setSize(item.size);
    setQuantity(item.quantity);
  };

  return (
    <>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/3 px-3 mb-4">
          <label
            className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2 capitalize"
            htmlFor="size"
          >
            pick a size
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border focus:border-2 focus:border-gray-500"
              id="size"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            >
              <option value="" disabled>
                --Please choose a size--
              </option>
              {list.map((size) => (
                <option value={size._id} key={size._id}>
                  {size.size}
                </option>
              ))}
            </select>

            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>

            <p
              className={`text-red-500 text-xs italic ${
                displaySizeError ? "block" : "hidden"
              }`}
            >
              Please select a size
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/3 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2 capitalize"
            htmlFor="quantity"
          >
            enter a quantity
          </label>
          <input
            type="number"
            name="quantity"
            value={quantity}
            id="quantity"
            onChange={(e) => setQuantity(e.target.value)}
            className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 md:mb-0 leading-tight focus:outline-none focus:bg-white focus:border focus:border-2 focus:border-gray-500"
          />
          <p
            className={`text-red-500 text-xs italic ${
              displayQuantityError ? "block" : "hidden"
            }`}
          >
            Quantity should be at greater than zero
          </p>
        </div>

        <div className="w-full md:w-1/3 px-3 mt-4 md:mt-8">
          <button
            onClick={update}
            className="bg-blue-500 hover:bg-blue-700 text-white font-normal py-2 px-4 rounded focus:outline-none focus:shadow-outline capitalize"
          >
            Add to size list
          </button>
        </div>
      </div>

      {field.value.length > 0 && (
        <p className="uppercase tracking-wide text-gray-700 font-bold my-5 capitalize">
          Size List
        </p>
      )}

      <div className="list flex flex-wrap">
        {field.value.length > 0 &&
          field.value.map((item) => (
            <SizeListItem
              item={item}
              editItem={editItem}
              deleteItem={deleteItem}
              key={item.size}
            />
          ))}
      </div>
    </>
  );
};

SizeList.propTypes = {
  list: PropTypes.array.isRequired,
};

export default SizeList;
