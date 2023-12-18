import React from "react";
import Styles from "./title.styled";

const Title = (className = "", fontSize = "2rem") => {
  return (
    <Styles fontSize={fontSize}>
      <header className='header-container'>
        <h1>
          <span className='the'>The</span>Overwelmed Gamer
        </h1>
      </header>
    </Styles>
  );
};

export default Title;
