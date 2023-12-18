import React, { useState, useMemo } from "react";
import Styles from "./MainNav.styled";
import { Link } from "gatsby";

const MainNav = () => {
  const [showMobileMenu, setShowMobileMenu] = useState("false");

  const handleClick = () => {
    if (showMobileMenu === "false") {
      setShowMobileMenu("true");
    } else setShowMobileMenu("false");
  };

  console.log(showMobileMenu);

  return (
    <Styles showMobileMenu={showMobileMenu}>
      <div className='nav-container'>
        <ul className='main-links'>
          <li className='mobile-bars'>
            <i
              onClick={handleClick}
              className={
                showMobileMenu === "false"
                  ? "fa-solid fa-bars"
                  : "fa-solid fa-x"
              }
            ></i>
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
      <div className='mobile-menu-container'>
        <ul className='main-links-mobile'>
          <li className='main-link-mobile-item'>
            <Link to='/'>Home</Link>
          </li>
          <li className='main-link-mobile-item'>
            <Link to='#'>About</Link>
          </li>
          <li className='main-link-mobile-item'>
            <Link to='#'>Episodes</Link>
          </li>
          <li className='main-link-mobile-item'>
            <Link to='#'>Subscribe</Link>
          </li>
        </ul>
      </div>
    </Styles>
  );
};

export default MainNav;
