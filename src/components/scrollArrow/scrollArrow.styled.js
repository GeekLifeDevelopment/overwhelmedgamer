import styled from "styled-components"

const ArrowContainer = styled.div`
  .bounce-arrow {
    position: fixed; /* Keeps the arrow fixed at the bottom */
    bottom: 20px; /* Adjust distance from the bottom of the screen */
    left: 50%; /* Center horizontally */
    transform: translateX(-50%); /* Offset by half its width for perfect centering */
    font-size: 3rem; /* Adjust arrow size */
    color: white; /* Arrow color */
    cursor: pointer;
    animation: bounce 2s infinite; /* Apply the bouncing animation */
    z-index: 10; /* Make sure it's above other elements */
  }

  /* Bouncing animation */
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-20px); /* Move up */
    }
    60% {
      transform: translateY(-10px); /* Move up slightly */
    }
  }
`;

export default ArrowContainer;
