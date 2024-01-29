import styled from "styled-components";

const HomeStyles = styled.div`
  .hero-section {
    position: relative;
    display: flex;
    background-color: #222;
    width: 100vw;
    height: 100vh;
    color: white;
    padding-bottom: 1rem;
    justify-content: space-around;
    @media (max-width: 650px) {
      flex-direction: column-reverse;
      align-items: center;
      height: 100%;
    }
    .left-content-container {
      margin-top: 8rem;
      padding-left: 3rem;
      width: 50%;
      display: flex;
      flex-direction: column;
      @media (max-width: 650px) {
        margin-top: 1rem;
        padding: 0;
        width: 90%;
      }

      .sub-container {
        position: absolute;
        display: flex;
        padding-top: 6rem;
        align-items: flex-end;
        bottom: 1rem;
        @media (max-width: 650px) {
          flex-direction: column;
          align-items: center;
          position: relative;
          padding-top: 1rem;
        }
        .sub-btns {
          display: flex;
          gap: 1rem;
          width: 100%;
          @media (max-width: 650px) {
            flex-direction: column;
          }
        }

        .social-btns {
          display: flex;

          a {
            color: white;
            margin: 0 1rem;
            font-size: 1.2rem;
            &:hover {
              color: #f3b33e;
            }
          }
          @media (max-width: 650px) {
            padding-top: 1rem;
          }
        }
      }
    }
    .right-content-container {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      @media (max-width: 768px) {
        padding-top: 2rem;
        width: 90%;
      }
      h1 {
        display: flex;
        align-items: center;
      }
      .page-heading {
        font-size: 2.5vw;
        .the {
          background-color: #f3b33e;
          writing-mode: vertical-rl;
          padding: 0.3rem;
          border: 2px solid black;
          margin-right: 0.5rem;
          -webkit-text-stroke: 1px black;
          font-size: 2rem;
          @media (max-width: 650px) {
            font-size: 1.5rem;
          }
        }
        @media (max-width: 650px) {
          font-size: 2rem;
          line-height: 40px;
        }
      }
      .logo-container {
        width: 70%;
        @media (max-width: 650px) {
          width: 100%;
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .description {
        border: 1px solid #f3b33e;
        padding: 1rem;
        max-width: 80%;
        font-size: 1rem;
        font-family: "Source Code Pro", monospace;
        @media (max-width: 650px) {
          max-width: 100%;
        }
      }
    }
  }
`;

export default HomeStyles;
