import React from "react";
import "./Filter.css";
import PropTypes from "prop-types";

export const Filter = ({ changeFilter }) => {
  return (
    <div className="wrap">
      <h2>Contacts</h2>
      <p>Find contacts by name</p>
      <input onChange={(e) => changeFilter(e.target.value)}></input>
    </div>
  );
};

Filter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};
