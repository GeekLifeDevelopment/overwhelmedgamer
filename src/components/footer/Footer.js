import React from "react";
import Styles from "./Footer.styled";
import Title from "../title/title";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <Styles>
      <ul>
        <li>
          <Title />
        </li>
        <li>
          <Link to='#'>Home</Link>
        </li>
        <li>
          <Link to='#'>About</Link>
        </li>
        <li>
          <Link to='#'>Episodes</Link>
        </li>
        <li>
          <Link to='#'>Subscribe</Link>
        </li>
        <li>
          <Link to='#'>Contact</Link>
        </li>
      </ul>
    </Styles>
  );
};

export default Footer;
