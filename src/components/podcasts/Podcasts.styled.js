import styled from "styled-components";

const PodcastStyles = styled.div`
  .episode {
    border: 2px solid black;
    margin: 1rem;
    padding: 1rem;
    background-color: #abc6c4;
  }

  .episode-title {
    font-family: "Kanit", sans-serif;
    color: #222222;
  }

  .description {
    display: ${(props) => (props.description ? "block" : "none")};
    font-family: "Source Code Pro", monospace;
    color: #222222;
  }

  .show {
    font-family: "Source Code Pro", monospace;
    color: #222222;
  }
`;

export default PodcastStyles;
