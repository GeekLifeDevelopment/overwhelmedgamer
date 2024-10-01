import styled from "styled-components"
import Inner from "./inner"

const InnerStyles = styled.div`
    max-width: 1200px;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 3rem 1rem; 
    margin: 0 auto;
    overflow-x: hidden;

    @media(min-width: 2560px) {
    max-width: 1500px;
    }
`

export default InnerStyles