import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap');
`

export const InformationContainer = styled.div`
    background: white;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    @media screen and (max-width: 1250px) {
        padding: 100px 0;
        width: 100%;
        overflow-x: hidden;
    } 
`

export const InformationWrapper = styled.div`
    z-index: 1;
    height: max(85vh, 700px);
    display: flex;

    @media screen and (max-width: 1250px) {
        height: 100%;
    }
`

export const Row1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    width: 100%;

    @media screen and (max-width: 1250px) {
        display: flex;
        flex-direction: column;
    }
`

export const Column1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 15px;
    grid-area: col1;
    text-align: center;
    width: 30%;

    @media screen and (max-width: 1250px) {
        width: 90%;
    }
`

export const MainTitle = styled.h1`
    display: none;
    font-size: max(1.8rem, 3.6vmin);
    font-weight: 400;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    color: #696969;
    border-bottom: solid 1px black;
    margin-bottom: max(3vmin, 30px);
    padding-bottom: max(10px, 1vmin);

    @media screen and (max-width: 1350px) {
        font-size: max(1.5rem, 3vmin);
    }

    @media screen and (max-width: 1250px) {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
`

export const Title = styled.h1`
    font-size: max(1.4rem, 2.8vmin);
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    color: #696969;
    margin-bottom: max(10px, 1vmin);

    @media screen and (max-width: 1250px) {
        font-weight: 300;
    }

    @media screen and (max-width: 768px) {
        margin-top: max(10px, 1vmin);
    }
`

export const Body = styled.p`
    font-size: max(0.925rem, 1.85vmin);
    font-weight: 300;
    font-family: 'Montserrat', sans-serif;
    color: #696969;
    text-align: center;
`

export const Column2 = styled.div`
    padding: 0 15px;
    grid-area: col1;
    display: flex;
    flex-direction: column;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 30%;

    @media screen and (max-width: 1250px) {
        width: 90%;
        margin-right: 0;
        margin-left: 0;
    }
`

export const Column3 = styled.div`
    padding: 0 15px;
    grid-area: col1;
    display: flex;
    flex-direction: column;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 30%;

    @media screen and (max-width: 1250px) {
        width: 90%;
    }
`

export const MapWrapper = styled.div`
    height: max(250px, 37.5vh);
    width: 22.5vw;
    overflow: hidden;
    margin-top: max(25px, 2.5vmin);
    margin-bottom: max(25px, 2.5vmin);
    border-radius: max(10px, 1vmin);

    @media screen and (max-width: 1250px) {
        width: 90%;
        height: max(250px, 30vh);
    }

    @media screen and (max-width: 1024px) {
        width: 100%;
        height: max(250px, 20vh);
    }
`


export const BodyHours = styled.p`
    font-size: max(0.925rem, 1.85vmin);
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    color: #696969;
    text-align: center;

    @media screen and (max-width: 1250px) {

        display: none;
    }

    @media screen and (max-width: 280px) {

        width: 250px;
    }
` 

export const BodyHoursTitle = styled.h4`
    font-size: max(1rem, 2vmin);
    font-family: 'Montserrat', sans-serif;
    color: #696969;
    text-align: center;
    font-weight: 500;
    margin-bottom: max(10px, 1vmin);

    @media screen and (max-width: 1250px) {

        display: none;
    }

    @media screen and (max-width: 280px) {

        width: 250px;
    }
` 

