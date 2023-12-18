import styled from "styled-components";

const TitleStyles = styled.div`
  .header-container {
    h1 {
      display: flex;
      align-items: center;
    }
    font-size: ${(props) => props.fontSize};
    .the {
      background-color: #f3b33e;
      writing-mode: vertical-rl;
      padding: 0.3rem;
      border: 2px solid black;
      margin-right: 0.5rem;
      -webkit-text-stroke: 1px black;
      font-size: 1.5rem;
      @media (max-width: 650px) {
        font-size: 1.5rem;
      }
    }
  }
`;

export default TitleStyles;
