import styled from "styled-components";

const MainNavStyles = styled.div`
  .nav-container {
    background-color: #f3b33e;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ul {
      list-style-type: none;
    }
    .main-links {
      display: flex;
      @media (max-width: 650px) {
        padding-left: 1rem;
      }

      .mobile-bars {
        display: none;
        font-size: 1.5rem;
        @media (max-width: 650px) {
          display: block;
        }
      }

      .main-link-item {
        @media (max-width: 650px) {
          display: none;
        }
        margin-right: 1rem;
        a {
          text-decoration: none;
          color: #222;
          font-family: "Source Code Pro", monospace;
        }
      }
    }
    .social-links {
      display: flex;
      padding-right: 2rem;
      @media (max-width: 650px) {
          padding-left: 0;
        }

      .social-link-item {
        margin-left: 1rem;
        a {
          color: #222;
        }
        @media (max-width: 650px) {
          font-size: 1.5rem;
        }
      }
    }
  }

  .mobile-menu-container {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.8);
    max-width: 300px;
    z-index: 5;
    padding: 0 1rem;
    margin-left: ${(props) =>
      props.showMobileMenu === "false" ? "-300px" : "0"};
    transition: 0.5s;

    .main-links-mobile {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      padding: 0;
      font-family: "Kanit", sans-serif;
      font-size: 2rem;

      .main-link-mobile-item {
        a {
          color: white;
          text-decoration: none;
        }
      }
    }
  }
`;

export default MainNavStyles;
