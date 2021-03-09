import styled from 'styled-components'
import { Link as LinkScroll } from 'react-scroll'
import { Link as LinkRouter } from 'react-router-dom' 


export const FooterContainer = styled.div`
    background: rgb(37,36,42);
    height: max(570px, 57vmin);
    overflow: hidden;

    @media screen and (max-width: 1024px) {
        height: max(550px, 55vmin);
    }
`

export const FooterWrapper = styled.div`
    height: max(450px, 45vmin);
    display: flex;
    flex-direction: column;
    width: 100%;
    font-family: 'Open Sans', sans-serif;
    overflow: hidden;
`

export const Row1 = styled.div`
    height: 80%;
    justify-content: center;
    display: flex;
    align-items: top;
    padding-top: max(2%, 5vmin);
`

export const Column1 = styled.div`
    width: 30%;
    height: 100%;
    float: left;
    display: flex;
    flex-direction: column;
    align-items: top;
    justify-content: top;
    text-align: center;
    overflow: hidden;
`

export const Column2 = styled.div`
    width: 30%;
    height: 100%;
    float: left;
    display: flex;
    flex-direction: column;
    align-items: top;
    justify-content: top;
    text-align: center;
    overflow: hidden;
    padding: 0 max(5px, 0.5vmin);
`

export const Column3 = styled.div`
    width: 30%;
    height: 100%;
    float: left;
    display: flex;
    flex-direction: column;
    align-items: top;
    justify-content: top;
    text-align: center;
    overflow: hidden;
    padding: 0 max(10px, 1vmin);

    @media screen and (max-width: 320px) {
        padding: 0 max(5px, 0.5vmin);
    }
`

export const PreFooterWrapper = styled.div`
    background: rgb(0,0,0, 0.1);
    height: max(80px, 8vmin);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-weight: 450;
    font-size: max(1.25rem, 2.5vmin);
    padding-left: max(10vw, 200px);
    padding-right: max(10vw, 200px);
    overflow: hidden;

    @media screen and (max-width: 1024px) {
        font-size: 1.4rem;
        height: 80px;
        font-size: 1.5rem;
        padding: 30px 20px;
        font-weight: 500;
    }

    @media screen and (max-width: 768px) {
        font-size: 1.2rem;
    }

    @media screen and (max-width: 414px) {
        font-size: 1.1rem;
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

export const SubFooterContainer = styled.div`
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

export const SubSubFooterContainer = styled.div`
    background: rgb(0,0,0,0.3);
    height: max(80px, 8vmin);
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
    font-size: max(1.1rem, 2.5vmin);
    font-weight: 500;
    font-family: 'Open Sans', sans-serif;
    margin-top: max(20px, 1.5vmin);

    @media screen and (max-width: 1024px) {
        font-weight: 600;
    }

    @media screen and (max-width: 768px) {
        font-size: max(0.8rem, 2.5vmin);
    }
`

export const NavLinkScroll = styled(LinkScroll)`
    color: white;
    font-family: 'Open Sans', sans-serif;
    font-size: max(1rem, 1.75vmin);
    font-weight: 350;
    margin-top: max(15px, 1.5vmin);
    display: grid;
    text-decoration: none;
    cursor: pointer;

    @media screen and (max-width: 1024px) {
        font-weight: 450;
    }


    @media screen and (max-width: 767px) {
        font-size: max(0.9rem, 1.75vmin);
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
        font-weight: 500;
        color: rgb(241,167,82);
    }
`

export const NavLink = styled(LinkRouter)`
    color: white;
    font-family: 'Open Sans', sans-serif;
    font-size: max(1rem, 1.75vmin);
    font-weight: 350;
    margin-top: max(15px, 1.5vmin);
    display: grid;
    text-decoration: none;
    cursor: pointer;

    @media screen and (max-width: 1024px) {
        font-weight: 450;
    }

    @media screen and (max-width: 767px) {
        font-size: max(0.9rem, 1.75vmin);
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
        font-weight: 500;
        color: rgb(241,167,82);
    }
`

export const SubSubText = styled(LinkRouter)`
    color: white;
    font-size: max(1.25rem, 2.5vmin);
    font-weight: 300;
    font-family: 'Montserrat', sans-serif;
    background: transparent;
    border: none;
    text-decoration: none;
    cursor: pointer;
    outline: none;
    transition: all 0.2s ease-in-out;

    @media screen and (max-width: 1024px) {
        font-weight: 450;
    }

    &:hover {
        transition: all 0.2s ease-in-out;
        color: rgb(241,167,82);
        font-size: max(1.4rem, 2.7vmin);
    }
`

export const SubText = styled.span`
    color: white;
    font-weight: 300;
    font-family: 'Montserrat', sans-serif;
    font-size: max(0.6rem, 1.5vmin);

    @media screen and (max-width: 1024px) {
        font-weight: 450;
    }

    @media screen and (max-width: 320px) {
        font-size: max(0.55rem, 1.5vmin);
    }

    @media screen and (max-width: 280px) {
        font-size: max(0.5rem, 1.5vmin);
    }
`