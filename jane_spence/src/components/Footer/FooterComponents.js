import styled from 'styled-components'
import { Link as LinkScroll } from 'react-scroll'
import { Link as LinkRouter } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap');
`

export const FooterContainer = styled.div`
    background: rgb(18, 18, 18);
    height: max(460px, 46vmin);
    overflow: hidden;

    @media screen and (max-width: 768px) {
        height: max(470px, 47vmin);
    }
`

export const FooterWrapper = styled.div`
    height: max(420px, 42vmin);
    display: flex;
    flex-direction: column;
    width: 100%;
    font-family: 'Open Sans', sans-serif;
    overflow: hidden;

    @media screen and (max-width: 768px) {
        height: max(430px, 43vmin);
    }
`

export const Row1 = styled.div`
    height: 80%;
    justify-content: center;
    display: flex;
    align-items: top;
    padding-top: max(2%, 5vmin);
`

export const Column1 = styled.div`
    width: 20%;
    height: 100%;
    float: left;
    display: flex;
    flex-direction: column;
    align-items: top;
    justify-content: top;
    text-align: center;
    overflow: hidden;

    @media screen and (max-width: 1024px) {
        width: 30%;
    }
`

export const Column2 = styled.div`
    width: 20%;
    height: 100%;
    float: left;
    display: flex;
    flex-direction: column;
    align-items: top;
    justify-content: top;
    text-align: center;
    overflow: hidden;
    padding: 0 max(5px, 0.5vmin);

    @media screen and (max-width: 1024px) {
        width: 30%;
    }

    @media screen and (max-width: 768px) {
        padding: 0 max(10px, 1vmin);
    }
`

export const Column3 = styled.div`
    width: 20%;
    height: 100%;
    float: left;
    display: flex;
    flex-direction: column;
    align-items: top;
    justify-content: top;
    text-align: center;
    overflow: hidden;
    padding: 0 max(10px, 1vmin);

    @media screen and (max-width: 1024px) {
        width: 30%;
    }

    @media screen and (max-width: 320px) {
        padding: 0 max(5px, 0.5vmin);
    }
`

export const PreFooterWrapper = styled.div`
    background: rgb(0,0,0, 0.1);
    height: max(80px, 8vmin);
    color: rgb(200,200,200);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: max(1.1rem, 2.2vmin);
    padding-left: max(10vw, 200px);
    padding-right: max(10vw, 200px);
    overflow: hidden;

    @media screen and (max-width: 1024px) {
        font-size: 1.4rem;
        height: 100px;
        padding: 20px 20px;
    }

    @media screen and (max-width: 768px) {
        font-size: 1.1rem;
    }

    @media screen and (max-width: 414px) {
        font-size: 1rem;
    }

    @media screen and (max-width: 411px) {
        font-size: 1.05rem;
    }

    @media screen and (max-width: 375px) {
        font-size: 0.95rem;
    }

    @media screen and (max-width: 360px) {
        font-size: 0.92rem;
    }

    @media screen and (max-width: 320px) {
        font-size: 0.8rem;
    }

    @media screen and (max-width: 280px) {
        font-size: 0.7rem;
    }
`

export const BottomFooterContainer = styled.div`
    background: rgb(0,0,0, 0.5);
    height: max(40px, 4vmin);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1024px) {
        height: 40px;
    }

`

export const TopFooterContainer = styled.div`
    background: rgb(0,0,0,0.3);
    height: max(60px, 6vmin);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1024px) {
        height: 60px;
    }
`

export const Title = styled.h3`
    color: white;
    font-size: max(0.9rem, 1.8vmin);
    font-weight: 700;
    font-family: 'Open Sans', sans-serif;
    margin-top: max(10px, 1vmin);

    @media screen and (max-width: 768px) {
        font-size: max(0.8rem, 1.6vmin);
    }

    @media screen and (max-width: 320px) {
        font-size: max(0.75rem, 1.5vmin);
    }
`

export const NavLinkScroll = styled(LinkScroll)`
    color: rgb(200,200,200);
    font-family: 'Montserrat', sans-serif;
    font-size: max(0.9rem, 1.6vmin);
    font-weight: 300;
    margin-top: max(15px, 1.5vmin);
    display: grid;
    text-decoration: none;
    cursor: pointer;

    @media screen and (max-width: 768px) {
        font-size: max(0.8rem, 1.5vmin);
        font-weight: 300;
    }

    @media screen and (max-width: 539px) {
        font-size: max(0.75rem, 1.75vmin);
    }

    @media screen and (max-width: 320px) {
        font-size: max(0.725rem, 1.75vmin);
    }

    @media screen and (max-width: 280px) {
        font-size: max(0.65rem, 1.75vmin);
    }


    &:hover {
        font-weight: bold;
    }
`

export const NavLink = styled(LinkRouter)`
    color: rgb(200,200,200);
    font-family: 'Montserrat', sans-serif;
    font-size: max(0.9rem, 1.6vmin);
    font-weight: 300;
    margin-top: max(15px, 1.5vmin);
    display: grid;
    text-decoration: none;
    cursor: pointer;

    @media screen and (max-width: 768px) {
        font-size: max(0.8rem, 1.5vmin);
        font-weight: 300;
    }

    @media screen and (max-width: 539px) {
        font-size: max(0.75rem, 1.75vmin);
    }

    @media screen and (max-width: 320px) {
        font-size: max(0.725rem, 1.75vmin);
    }

    @media screen and (max-width: 280px) {
        font-size: max(0.65rem, 1.5vmin);
    }

    &:hover {
        font-weight: bold;
    }
`

export const SubSubText = styled(LinkRouter)`
    color: white;
    font-size: max(1rem, 2vmin);
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
    background: transparent;
    border: none;
    text-decoration: none;
    cursor: pointer;
    outline: none;
    transition: all 0.2s ease-in-out;

    @media screen and (max-width: 320px) {
        font-size: max(1rem, 2vmin);
    }

    &:hover {
        transition: all 0.2s ease-in-out;
        font-size: max(1.1rem, 2.2vmin);
        /* Enable hardware acceleration to fix laggy transitions */
        -webkit-transform: translateZ(0);
        -moz-transform: translateZ(0);
        -ms-transform: translateZ(0);
        -o-transform: translateZ(0);
        transform: translateZ(0);
    }
`

export const SubText = styled.span`
    color: rgb(200,200,200);
    font-weight: 500;
    font-family: 'Montserrat', sans-serif;
    font-size: max(0.6rem, 1.5vmin);

    @media screen and (max-width: 320px) {
        font-size: max(0.55rem, 1.5vmin);
    }

    @media screen and (max-width: 280px) {
        font-size: max(0.5rem, 1.5vmin);
    }
`