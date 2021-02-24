import styled from 'styled-components'
import { Link as LinkScroll } from 'react-scroll'
import { Link as LinkRouter } from 'react-router-dom' 


export const FooterContainer = styled.div`
    background: #111a26;
    height: 400px;
`

export const FooterWrapper = styled.div`
    height: 360px;
    display: grid;
    width: 100%;
`

export const Row1 = styled.div`
    height: 80%;
    justify-content: center;
    margin-top: 36px;
    margin-bottom: 36px;
`

export const Column1 = styled.div`
    width: 33.33%;
    height: 100%;
    float: left;
    text-align: center;
`

export const Column2 = styled.div`
    width: 33.33%;
    height: 100%;
    float: left;
    text-align: center;
`

export const Column3 = styled.div`
    width: 33.33%;
    height: 100%;
    float: left;
    text-align: center;
`

export const SubFooterContainer = styled.div`
    background: rgba(0,0,0,0.35);
    height: 40px;
    align-items: center;
    padding-top 12px;
    padding-left: 20px;
    padding-right: 20px;

    @media screen and (max-width: 600px) {
        font-size: 0.8rem;
    }

    @media screen and (max-width: 414px) {
        font-size: 0.65rem;
        padding-top: 15px;

    }

    @media screen and (max-width: 375px) {
        font-size: 0.6rem;
        padding-top: 17px;

    }

    @media screen and (max-width: 360px) {
        font-size: 0.55rem;
        padding-top: 17px;

    }

    @media screen and (max-width: 320px) {
        font-size: 0.5rem;
        padding-top: 17px;

    }

    @media screen and (max-width: 280px) {
        font-size: 0.7rem;
        padding-left: 24px;
        padding-top: 14px;

    }
`

export const LeftText = styled.span`
    color: white;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
    text-align: left;
    padding-top: 15px;
    
`

export const RightText = styled(LinkRouter)`
    color: white;
    font-size: 1rem;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
    float: right;
    background: transparent;
    border: none;
    text-decoration: none;
    cursor: pointer;
    outline: none;

    @media screen and (max-width: 600px) {
        font-size: 0.8rem;
    }

    @media screen and (max-width: 414px) {
        font-size: 0.65rem;

    }

    @media screen and (max-width: 375px) {
        font-size: 0.6rem;

    }

    @media screen and (max-width: 360px) {
        font-size: 0.6rem;

    }

    @media screen and (max-width: 320px) {
        font-size: 0.5rem;

    }

    @media screen and (max-width: 280px) {
        display: none;
    }

    &:hover {
        color: #ff00da;
        transition: 0.2s ease-in;
    }

`

export const Title = styled.h3`
    color: white;
    font-size: 1.25rem;
    font-weight: 500;
    font-family: 'Montserrat', sans-serif;
    margin-top: 20px;
    margin-bottom: 40px;

    @media screen and (max-width: 414px) {
        font-size: 1rem;
        margin-top: 35px;
    }

    @media screen and (max-width: 360px) {
        font-size: 0.9rem;
    }

    @media screen and (max-width: 320px) {
        font-size: 0.85rem;
    }

    @media screen and (max-width: 280px) {
        font-size: 0.75rem;
    }
`

export const NavLinkScroll = styled(LinkScroll)`
    color: #708090;
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    font-weight: 300;
    margin-top: 20px;
    display: grid;
    cursor: pointer;

    @media screen and (max-width: 414px) {
        font-size: 0.8rem;
    }

    @media screen and (max-width: 280px) {
        font-size: 0.7rem;
    }

    &:hover {
        color: pink;
        font-size: 1.25rem;
    }
`

export const NavLink = styled(LinkRouter)`
    color: #708090;
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    font-weight: 300;
    margin-top: 20px;
    display: grid;
    text-decoration: none;
    cursor: pointer;

    @media screen and (max-width: 414px) {
        font-size: 0.8rem;
    }

    @media screen and (max-width: 280px) {
        font-size: 0.7rem;
    }

    &:hover {
        color: pink;
        font-size: 1.25rem;
    }
`