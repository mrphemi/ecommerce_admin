import React from "react";

const EmptyList = ({ listName }) => (
  <h2 className="text-gray-400 text-2xl capitalize text-center">{`no results for ${listName}`}</h2>
);

export default EmptyList;
