import styled from "styled-components";

const SubButtonStyles = styled.div`
  a {
    text-decoration: none;
  }

  .button-container {
    display: inline-flex;
    border: 1px ${props => props.color} solid;
    padding: 0.5rem 1rem;
    border-radius: 10px;
    align-items: center;
    gap: 0.8rem;
    color: ${props => props.color};
    margin: .5rem;
    white-space: nowrap;

  

    i {
      font-size: 1.8rem;
    }

    .btn-text {
      line-height: 3px;
      padding: 0;

      .listen {
        display: ${props => props.listen ?  "block" : "none"};
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
}
`;
export default SubButtonStyles;
