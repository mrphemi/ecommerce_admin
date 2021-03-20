import React from "react";

const SizeListForm = ({
  size,
  setSize,
  quantity,
  setQuantity,
  list,
  displayQuantityError,
  displaySizeError,
  update,
}) => {
  return (
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full md:w-1/3 px-3 mb-4">
        <label className="form_label" htmlFor="size">
          pick a size
        </label>
        <div className="relative">
          <select
            className="w-full form_styles pr-8"
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

          <p className={`error_msg ${displaySizeError ? "block" : "hidden"}`}>
            Please select a size
          </p>
        </div>
      </div>

      <div className="w-full md:w-1/3 px-3">
        <label className="form_label" htmlFor="quantity">
          enter a quantity
        </label>
        <input
          type="number"
          name="quantity"
          value={quantity}
          id="quantity"
          onChange={(e) => setQuantity(e.target.value)}
          className="w-full form_styles mb-3 md:mb-0"
        />
        <p className={`error_msg ${displayQuantityError ? "block" : "hidden"}`}>
          Quantity should be at greater than zero
        </p>
      </div>

      <div className="w-full md:w-1/3 px-3 mt-4 md:mt-8">
        <button onClick={update} className="button">
          Add to size list
        </button>
      </div>
    </div>
  );
};

export default SizeListForm;
