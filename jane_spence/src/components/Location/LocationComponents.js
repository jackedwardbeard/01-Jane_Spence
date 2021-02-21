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
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
    padding-right: 50px;
`

export const Title = styled.h1`
    font-size: 3rem;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    color: black;
`

export const Body = styled.p`
    font-size: 1.5rem;
    font-family: 'Montserrat', sans-serif;
    color: black;
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
    

`
