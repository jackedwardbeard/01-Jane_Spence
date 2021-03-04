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
    height: 102.14504596527068vh;
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
    

    @media screen and (max-width: 1250px) {

        display: block;
        padding-left: 80px;

    }

    @media screen and (max-width: 770px) {

        display: block;
        padding-left: 30px;

    }

    @media screen and (max-width: 414px) {

        padding-left: 40px;
    }

    @media screen and (max-width: 375px) {

        padding-left: 25px;
    }

    @media screen and (max-width: 360px) {

        padding-left: 15px;
    }

    @media screen and (max-width: 320px) {

        padding-left: 10px;
    }

    @media screen and (max-width: 280px) {

        padding-left: 0px;
        margin-top: -30px;

    }

    

`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
    padding-right: 50px;
`

export const Title = styled.h1`
    font-size: 2rem;
    text-transform: uppercase;
    font-family: 'Open Sans', sans-serif;
    font-weight: 800;
    color: black;
    max-width: 350px;
    text-align: center;

    @media screen and (max-width: 1600px) {

        font-size: 1.6rem;
    }

    @media screen and (max-width: 1250px) {

        font-size: 1.6rem;
    }

    @media screen and (max-width: 414px) {

        font-size: 1.5rem;
    }

    @media screen and (max-width: 375px) {

        font-size: 1.4rem;
    }

    @media screen and (max-width: 320px) {

        font-size: 1.3rem;
    }

    @media screen and (max-width: 280px) {

        font-size: 1.3rem;
        width: 250px;
    }

    
`

export const Body = styled.p`
    font-size: 1.15rem;
    font-weight: 400;
    font-family: 'Open Sans', sans-serif;
    color: black;
    max-width: 350px;
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
    padding-right: 50px;
    margin-bottom: 15px;
`

export const Column3 = styled.div`
    padding: 0 15px;
    grid-area: col1;
    margin-bottom: 15px;
`

export const MapWrapper = styled.div`
    height: 35.75076608784474vh;
    width: 350px;
    overflow-x: hidden;
    overflow-y: hidden;
    padding-top: 20px;
    margin-bottom: 20px;

    @media screen and (max-width: 1250px) {
        height: 250px;
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
    font-size: 1.15rem;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    color: black;
    max-width: 350px;
    text-align: center;

    @media screen and (max-width: 1250px) {

        display: none;
    }

    @media screen and (max-width: 280px) {

        width: 250px;
    }
` 

export const BodyHoursTitle = styled.h4`
    font-size: 1.15rem;
    font-family: 'Montserrat', sans-serif;
    color: black;
    max-width: 350px;
    text-align: center;

    @media screen and (max-width: 1250px) {

        display: none;
    }

    @media screen and (max-width: 280px) {

        width: 250px;
    }
` 

