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
            <a
              href='https://www.facebook.com/profile.php?id=61553936004598'
              target='_blank'
              rel='noopener'
            >
              <i class='fa-brands fa-square-facebook' />
            </a>
          </li>
          <li className='social-link-item'>
            <a
              href='https://www.instagram.com/overwhelmed_gamer/'
              target='_blank'
              rel='noopener'
            >
              <i className='fa-brands fa-instagram'></i>
            </a>
          </li>
          <li className='social-link-item'>
            <a
              href='https://twitter.com/OverwhelmedGame'
              target='_blank'
              rel='noopener'
            >
              <i className='fa-brands fa-x-twitter'></i>
            </a>
          </li>
        </ul>
      </div>
    </Styles>
  );
};

export default MainNav;
