import React from "react";

function Like({ onClick, isLiked }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={
        isLiked ? "element__heart element__heart_active" : "element__heart"
      }
    ></button>
  );
}

export default Like;
