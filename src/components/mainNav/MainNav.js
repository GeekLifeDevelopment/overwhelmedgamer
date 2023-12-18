import React, { useEffect } from "react";
import Styles from "./MainNav.styled";
import { Link } from "gatsby";

const MainNav = () => {
  return (
    <Styles>
      <div className='nav-container'>
        <ul className='main-links'>
          <li className='mobile-bars'>
            <i className='fa-solid fa-bars'></i>
          </li>
          <li className='main-link-item'>
            <Link to='/'>Home</Link>
          </li>
          <li className='main-link-item'>
            <Link to='#'>About</Link>
          </li>
          <li className='main-link-item'>
            <Link to='#'>Episodes</Link>
          </li>
          <li className='main-link-item'>
            <Link to='#'>Subscribe</Link>
          </li>
        </ul>
        <ul className='social-links'>
          <li className='social-link-item'>
            <i class='fa-brands fa-square-facebook' />
          </li>
          <li className='social-link-item'>
            {" "}
            <i className='fa-brands fa-instagram'></i>
          </li>
          <li className='social-link-item'>
            <i className='fa-brands fa-x-twitter'></i>
          </li>
        </ul>
      </div>
    </Styles>
  );
};

export default MainNav;
