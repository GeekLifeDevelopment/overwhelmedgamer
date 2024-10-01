import React from "react";
import ArrowContainer from "./scrollArrow.styled";


const ScrollArrow = () => {
  return (
    <ArrowContainer>
      <div className="bounce-arrow">
        <i className="fa-solid fa-caret-down" />
      </div>
    </ArrowContainer>
  );
};

export default ScrollArrow;
