import styled from "styled-components";

const MainNavStyles = styled.div`
  background-color: #f3b33e;
  /* padding: 0.5rem 0; */

  .nav-container {
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
`;

export default MainNavStyles;
