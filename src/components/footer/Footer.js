import React from "react";
import Styles from "./Footer.styled";
import Title from "../title/title";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <Styles>
      <footer>
        <ul>
          <li>
            <Title />
          </li>
          <li>
            <Link to='#'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/episodes'>Episodes</Link>
          </li>
          {/* <li>
            <Link to='#'>Subscribe</Link>
          </li>
          <li>
            <Link to='#'>Contact</Link>
          </li> */}
        </ul>
      </footer>
    </Styles>
  );
};

export default Footer;
