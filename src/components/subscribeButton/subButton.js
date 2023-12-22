import React from "react";
import Styles from "./subButton.styled";

const SubButton = ({
  icon,
  platform,
  backgroundHover,
  backgroundHover2,
  to,
}) => {
  return (
    <Styles
      backgroundHover={backgroundHover}
      backgroundHover2={backgroundHover2}
    >
      <a href={to} target='_blank'>
        <div className='button-container'>
          <i className={icon} />
          <div className='btn-text'>
            <p className='listen'>listen on</p>
            <p>{platform}</p>
          </div>
        </div>
      </a>
    </Styles>
  );
};

export default SubButton;
