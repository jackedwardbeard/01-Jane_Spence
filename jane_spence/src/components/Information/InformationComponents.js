import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom' 
// used for links that redirect using smooth scroll (i.e. all pages except for enquire)
import { Link as LinkScroll } from 'react-scroll'

export const InformationContainer = styled.div`
    background: ${({darkBackground}) => (darkBackground ? 'black' : 'pink')};

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

export const InformationWrapper = styled.div`
    z-index: 1;
    height: 800px;
    width: 100%;
    display: grid;
    padding: 0 20px;
    justify-content: center;
    margin-right: auto;
    margin-left: auto;
`

export const Row1 = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imageLeft}) => (imageLeft ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imageLeft}) => (imageLeft ? `'col2' 'col1'` : `'col1' 'col1' 'col2 col2'`)}; 
    }
`

export const Column1 = styled.div`
    width: 50%;
    padding: 0 15px;
    grid-area: col1;
`

export const Title = styled.h1`
    font-size: 3rem;
    font-family: 'Montserrat', sans-serif;
    color: ${({darkText}) => (darkText ? 'black' : 'pink')}
`

export const Body = styled.p`
    font-size: 1.5rem;
    font-family: 'Montserrat', sans-serif;
    color: ${({darkText}) => (darkText ? 'black' : 'white')}
`

export const Column2 = styled.div`
    Width: 50%;
    padding: 0 50px;
    grid-area: col2;
`

export const Image = styled.image`
    width: 100%;
    padding-right: 0;
`

export const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    font-family: 'Montserrat', sans-serif;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const Button = styled(LinkScroll)`
    display: ${({showButton}) => (showButton ? '' : 'none')};
    border-radius: 50px;
    background: ${({darkButton}) => (darkButton ? 'black' : 'pink')};
    white-space: nowrap;
    padding: 10px 22px;
    color: ${({darkButtonText}) => (darkButtonText ? 'black' : 'white')};;
    font-size: 1rem;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: white;
        color: black;
    }
`