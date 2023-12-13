import styled from "styled-components";

const SubButtonStyles = styled.div`
  .button-container {
    display: flex;
    border: 1px white solid;
    padding: 0 0.5rem;
    border-radius: 10px;
    align-items: center;
    gap: 0.8rem;
    color: white;
    

    i {
      font-size: 1.8rem;
    }

    .btn-text {
      line-height: 3px;
      padding: 0;

      .listen {
        font-size: 0.8rem;
      }
    }
    &:hover {
      cursor: pointer;
        ${(props) =>
          props.backgroundHover2
            ? `background-image: linear-gradient(${props.backgroundHover}, ${props.backgroundHover2});`
            : `background-color: ${props.backgroundHover};`}
        border-color: ${(props) => props.backgroundHover};
  }
`;
export default SubButtonStyles;
