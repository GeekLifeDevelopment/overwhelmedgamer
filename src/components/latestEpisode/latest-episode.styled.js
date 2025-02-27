import styled from "styled-components";

const LatestEpisodeStyles = styled.div`
  overflow-x: hidden;

  .latest-heading {
    font-family: "Source Code Pro", monospace;
  }

  .podcast-heading {
    padding-right: 2rem;
    margin-top: 0;
    
    font-family: "Kanit", sans-serif;

    /* @media (max-width: 650px) {
      margin: 0 auto;
      font-size: 100%;
    } */
  }

  .episode-info-date {
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 50%;

    .episode-number {
      background-color: #f3b33e;
      padding: 0.5rem;
      color: black;
      font-family: "Source Code Pro", monospace;
    }

    .episode-date {
      font-family: "Source Code Pro", monospace;
    }
  }

  .description {
    font-family: "Source Code Pro", monospace;
    padding-right: 2rem;
    margin: 0;
  }

  .see-all-btn {
    background-color: #f3b33e;
    padding: 0.5rem;
    color: black;
    font-family: "Source Code Pro", monospace;
    max-width: 10rem;
    text-align: center;

    a {
      text-decoration: none;
      color: black;
    }
  }

  .sub-btns {
    display: flex;
    gap: 1rem;
  }

  #audio-player audio::-webkit-media-controls-play-button {
  }

  .read-more-btn {
    margin-bottom: 30px;
    &:hover {
      cursor: pointer;
      background-color: orange;
      border: none;
      padding: .5rem;
    }
  }
`;

export default LatestEpisodeStyles;
