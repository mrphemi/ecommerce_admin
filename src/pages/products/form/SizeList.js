import React, { useState } from "react";
import PropTypes from "prop-types";

import SizeListItem from "./SizeListItem";
import SizeListForm from "../../../components/form/SizeListForm";

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
      <SizeListForm
        size={size}
        setSize={setSize}
        quantity={quantity}
        setQuantity={setQuantity}
        list={list}
        displayQuantityError={displayQuantityError}
        displaySizeError={displaySizeError}
        update={update}
      />

      {field.value.length > 0 && (
        <p className="tracking-wide text-gray-700 font-bold my-5 capitalize">
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
