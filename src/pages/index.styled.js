import styled from "styled-components";

const HomeStyles = styled.div`
* {
    box-sizing: border-box; 
  }
  
  .hero-sction {
  
  }
  background-color: black;
  width: 100%;
  height: 100vh;
  overflow-x: hidden; 

  

  .logo-container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;

    @media(max-width: 815px) {
      flex-direction: column;
    }
    
    img {
      width: 100%;
      max-width: 400px;
      height: auto;
      
      @media(max-width: 700px) {
        max-width: 300px;
      }
         @media (max-width: 530px) {
        max-width: 250px;
      }

      
    }
    .description {
      padding: 1rem;
      font-family: 'Kanit', sans-serif;
      margin: 1rem;
      text-align: center;
      color: white;
      font-size: 3rem;
      @media (max-width: 950px) {
        font-size: 2rem;
      }
      @media (max-width: 530px) {
        font-size: 1.5rem;
      }
    }
  }

    .social-branding {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
      margin-top: 5rem;  
      @media(max-width: 815px) {
      margin-top: 0;
    }    
    }

    .sub-container {
      display: flex;
    }
`;

export default HomeStyles;
