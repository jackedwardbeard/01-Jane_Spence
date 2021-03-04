import styled from 'styled-components'

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
    height: 90vh;
    min-height: 600px;
    display: flex;

    @media screen and (max-width: 1250px) {
        min-height: 0;
        height: 1100px;
    }

    @media screen and (max-width: 1024px) and (max-height: 1366px) {
        height: 1200px;
        min-height: 0;
    }
`

export const Row1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    width: 100%;
    

    @media screen and (max-width: 1250px) {

        display: block;
    
    }

    

`

export const Column1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
    text-align: center;
`

export const Title = styled.h1`
    font-size: 3.5vh;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    color: black;
    margin-bottom: 0.5vh;
`

export const Body = styled.p`
    font-size: 2.25vh;
    font-weight: 400;
    font-family: 'Montserrat', sans-serif;
    color: black;
    text-align: center;

    @media screen and (max-width: 1600px) {

        font-size: 1.1rem;
    }

    @media screen and (max-width: 1250px) {

        font-size: 1rem;
    }

    @media screen and (max-width: 280px) {

        width: 250px;
    }
`

export const Column2 = styled.div`
    padding: 0 15px;
    grid-area: col1;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 4vw;
    margin-left: 4vw;
    text-align: center;
`

export const Column3 = styled.div`
    padding: 0 15px;
    grid-area: col1;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`

export const MapWrapper = styled.div`
    height: 40vh;
    width: 22.5vw;
    overflow-x: hidden;
    overflow-y: hidden;
    padding-top: 2.5vh;
    margin-bottom: 2.5vh;

    @media screen and (max-width: 1250px) {
        height: 250px;
        width: 350px;
    }
    
    @media screen and (max-width: 414px) {

        width: 300px;
    }

    @media screen and (max-width: 414px) {

        width: 300px;
    }

    @media screen and (max-width: 320px) {

        width: 270px;
    }

    @media screen and (max-width: 280px) {

        width: 250px;
    }

    
`


export const BodyHours = styled.p`
    font-size: 2.25vh;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    color: black;
    text-align: center;

    @media screen and (max-width: 1250px) {

        display: none;
    }

    @media screen and (max-width: 280px) {

        width: 250px;
    }
` 

export const BodyHoursTitle = styled.h4`
    font-size: 2.25vh;
    font-family: 'Montserrat', sans-serif;
    color: black;
    text-align: center;

    @media screen and (max-width: 1250px) {

        display: none;
    }

    @media screen and (max-width: 280px) {

        width: 250px;
    }
` 

