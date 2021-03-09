import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa' // exit symbol
import {Link as LinkScroll} from 'react-scroll' // router for smooth scroll
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat|Open+Sans');
`

export const MobileMenuContainer = styled.aside`
    position: fixed;
    z-index: 1000; // puts this menu in front of everything else
    width: 100%;
    height: 100%;
    display: grid;
    align-items: center:
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    background: black;
    opacity: ${({clicked}) => (clicked ? '100%' : '0%')}; // show menu if its been opened, else do not show it
    top: ${({clicked}) => (clicked ? '0' : '-100%')};

`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    outline: none;
`

export const CloseIcon = styled(FaTimes)`
    color: white;
    cursor: pointer;

    &:hover {
        color: thistle;
        transition: 0.2s ease-in-out;
    }
`

export const MobileMenuWrapper = styled.div`
    color: white;
    display: grid;
    align-content: center;
    justify-content: center;
    
`

export const MobileMenu = styled.ul`
    display: grid;
    justify-content: center;
    align-content: center;
    
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`

export const MobileMenuLink = styled(LinkScroll)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3vh;
    font-family: 'Montserrat', sans-serif;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: white;
    cursor: pointer;

    &:hover {
        color: thistle;
        transition: 0.2s ease-in-out;
    }
`

export const MobileBtnWrapper = styled.div`
    display: flex;
    justify-content: center;
    
`

export const MobileMenuBtn = styled(LinkScroll)`
    border-radius: 3vh;
    background: thistle;
    white-space: nowrap;
    padding: 1.6vh 5vw;
    color: black;
    font-size: 2.5vh;
    font-weight: 450;
    font-family: 'Montserrat', sans-serif;
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