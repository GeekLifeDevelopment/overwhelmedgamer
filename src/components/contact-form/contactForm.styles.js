import styled from "styled-components";

const ContactFormStyles = styled.div`
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f4f4f4;
    padding: 1rem;

    h2 {
      font-family: 'Kanit', sans-serif;
    }

    p {
        max-width: 800px;
        font-family: "Source Code Pro", monospace;
        margin-bottom: 1rem;
    }

    input,
    textarea {
      border: none;
      width: 100%;
      padding: 12px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 1rem;
      margin: 0.5rem 0;
      box-sizing: border-box;

      @media (max-width: 480px) {
        font-size: 0.9rem;
        padding: 10px;
      }
    }

    button {
      background: #007bff;
      color: white;
      padding: 10px;
      border: none;
      border-radius: 4px;
      font-size: 1rem;
      cursor: pointer;

      &:hover {
        background: #0056b3;
      }
    }
  }
`;

export default ContactFormStyles;
