import styled from 'styled-components'
import { Link as LinkScroll } from 'react-scroll'
import { Link as LinkRouter } from 'react-router-dom' 


export const FooterContainer = styled.div`
    background: rgb(19,24,33);
    height: 550px;
`

export const FooterWrapper = styled.div`
    height: 510px;
    display: grid;
    width: 100%;
    font-family: 'Montserrat', sans-serif;
`

export const Row1 = styled.div`
    height: 80%;
    justify-content: center;
    margin-top: 36px;
    margin-bottom: 36px;
`

export const Column1 = styled.div`
    width: 30%;
    margin-left: 14px;
    height: 100%;
    float: left;
    text-align: center;
    overflow: hidden;
`

export const Column2 = styled.div`
    width: 30%;
    height: 100%;
    padding-left: 8px;
    padding-right: 8px;
    float: left;
    text-align: center;
    overflow: hidden;
`

export const Column3 = styled.div`
    width: 30%;
    height: 100%;
    float: left;
    text-align: center;
    overflow: hidden;
`

export const PreFooterWrapper = styled.div`
    background: rgb(0,0,0, 0.1);
    height: 80px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
    font-size: 1.5rem;
    padding-left: 20px;
    padding-right: 20px;

    @media screen and (max-width: 1024px) {
        font-size: 1.3rem;
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

    @media screen and (max-width: 280px) {
        font-size: 0.7rem;
    }
`

export const SubFooterContainer = styled.div`
    background: rgba(0,0,0,0.2);
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
    font-weight: 300;
    font-family: 'Montserrat', sans-serif;
    text-align: left;
    padding-top: 15px;
    
`

export const RightText = styled(LinkRouter)`
    color: white;
    font-size: 1rem;
    font-weight: 300;
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
        color: pink;
    }

`

export const Title = styled.h3`
    color: white;
    font-size: 1.25rem;
    font-weight: 500;
    font-family: 'Open Sans', sans-serif;
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
    color: white;
    font-family: 'Open Sans', sans-serif;
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
    color: white;
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