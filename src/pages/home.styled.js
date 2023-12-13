import styled from "styled-components";

const HomeStyles = styled.div`
  .hero-section {
    display: flex;
    background-color: #222222;
    width: 100vw;
    height: 100vh;
    color: white;
    .left-content-container {
      padding-left: 3rem;
      width: 50%;
      display: flex;
      flex-direction: column;
      .podcast-heading {
        font-size: 2.5rem;
        padding-top: 10rem;
        font-family: ${(props) => props.theme.fonts.regular};
      }
      .description {
        border: 1px solid ${(props) => props.theme.colors.owOrange};
        padding: 1rem;
        max-width: 80%;
        font-size: 1rem;
        font-family: ${(props) => props.theme.fonts.regular};
      }
      .sub-container {
        display: flex;
        padding-top: 6rem;
        align-items: flex-end;

        .sub-btns {
          display: flex;
          gap: 1rem;
          width: 100%;
        }

        .social-btns {
          display: flex;

          a {
            color: white;
            margin: 0 1rem;
            font-size: 1.2rem;
            &:hover {
              color: ${(props) => props.theme.colors.owOrange};
            }
          }
        }
      }
    }
    .right-content-container {
      width: 70%;
      display: flex;
      flex-direction: column;
      align-items: center;
      h1 {
        display: flex;
        align-items: center;
      }
      .page-heading {
        font-size: 2.5rem;
        .the {
          background-color: ${(props) => props.theme.colors.owOrange};
          writing-mode: vertical-rl;
          padding: 0.3rem;
          border: 2px solid black;
          margin-right: 0.5rem;
          -webkit-text-stroke: 1px black;
          font-size: 2rem;
        }
      }
      .logo-container {
        width: 70%;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
`;

export default HomeStyles;
