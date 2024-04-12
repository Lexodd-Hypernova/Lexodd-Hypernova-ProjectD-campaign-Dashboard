import React from "react";
import "./BxBox.css";

const BxBox = ({ first, second, third }) => {
  return (
    <div className="bx-box">
      <h3>{first}</h3>
      <h2>{second}</h2>
      <h3>{third}</h3>
    </div>
  );
};

export default BxBox;
