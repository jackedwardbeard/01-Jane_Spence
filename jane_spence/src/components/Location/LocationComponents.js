import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom' 
// used for links that redirect using smooth scroll (i.e. all pages except for enquire)
import { Link as LinkScroll } from 'react-scroll'

export const InformationContainer = styled.div`
    background: white;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 768px) {
        padding: 100px 0;
        width: 100%;
        overflow-x: hidden;
    }
`

export const InformationWrapper = styled.div`
    z-index: 1;
    height: 900px;
    display: flex;
`

export const Row1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;

    @media screen and (max-width: 1250px) {

        display: block;

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
    font-family: 'Montserrat', sans-serif;
    color: black;
    outline: solid 2px yellow;
    max-width: 350px;
`

export const Body = styled.p`
    font-size: 1.5rem;
    font-family: 'Montserrat', sans-serif;
    color: black;
    align-text: center;
    max-width: 350px;
    outline: solid 2px blue;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
    padding-right: 50px;
`

export const Column3 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

export const MapWrapper = styled.div`
    outline: solid 2px blue;
    height: 500px;
    width: 350px;
    overflow-x: hidden;
    overflow-y: hidden;

    @media screen and (max-width: 1250px) {

        height: 200px;
    }
    

`

