import React from "react";

function Filter({ onClick }) {
  return (
    <button
      type="button"
      className="profile__filter"
      onClick={onClick}
    ></button>
  );
}

export default Filter;
