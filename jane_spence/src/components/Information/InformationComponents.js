import styled from 'styled-components'
// used for links that redirect using smooth scroll (i.e. all pages except for enquire)
import { Link as LinkScroll } from 'react-scroll'

export const InformationContainer = styled.div`
    background: ${({darkBackground}) => (darkBackground ? 'black' : 'white')};
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
    
    @media screen and (max-width: 375px) {
        height: 1000px;
    }
`

export const Row1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
`

export const Column1 = styled.div`
    margin-bottom: -30px;
    margin-left: 70px;
    padding: 0 15px;
    grid-area: col1;
    margin-right: 100px;
    text-align: center;
    
    @media screen and (max-width: 1400px) {
        padding-left: 0px;
    }

    @media screen and (max-width: 1024px) {
        margin-right: 0px;
        display: grid;
        align-items: center;
        justify-content: center;
        padding-left: 0;
    }

    @media screen and (max-width: 768px) { 
        margin-left: 30px;
        margin-top: -30px;
    }

    @media screen and (max-width: 414px) { 
        margin-left: 50px;
        margin-top: -30px;
    }

    @media screen and (max-width: 375px) { 
        margin-left: 20px;
        margin-right: -25px;
        margin-top: -30px;
    }

    @media screen and (max-width: 280px) { 
        margin-left: 0px;
        margin-right: -45px;
        margin-top: -30px;
    }

`

export const Title = styled.h1`
    font-size: 2rem;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    color: ${({darkText}) => (darkText ? 'black' : 'pink')}
    
   

`

export const Subtitle = styled.h1`
    margin-top: 40px;
    font-size: 1.5rem;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    color: ${({darkText}) => (darkText ? 'black' : 'pink')}
    display: ${({showSubtitle}) => (showSubtitle ? '' : 'none')};

    
`

export const Body = styled.p`
    margin-top: 15px;
    font-size: 1.25rem;
    font-family: 'Montserrat', sans-serif;
    color: ${({darkText}) => (darkText ? 'black' : 'white')}


`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;

    @media screen and (max-width: 900px) {
        display: none;
    }
`

export const Img = styled.img`
    width: 100%;
    height: 100%;
    padding-right: 0px;
    margin: 0 0 10px 0;
`

export const ButtonWrapper = styled.div`
    display: flex;
    padding-top: 40px;
    align-items: center;
    font-family: 'Montserrat', sans-serif;

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

    @media screen and (max-width: 320px) { 
        display: none;
    }

    &:hover {
        transition: all 0.2s ease-in-out;
        background: white;
        color: black;
    }
`
