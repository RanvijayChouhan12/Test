import React from "react";
import "./SerchBox.css";

export const SearchBox = ({ placeholder, handlepress }) => {
  return (
    <input
      className="search"
      type="search "
      placeholder={placeholder}
      onChange={handlepress}
    />
  );
};
