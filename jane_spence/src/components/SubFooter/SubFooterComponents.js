import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom' 

export const SubFooterContainer = styled.div`
    background: pink;
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
    color: black;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
    text-align: left;
    padding-top: 15px;
    
`

export const RightText = styled(LinkRouter)`
    color: black;
    font-size: 1rem;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
    float: right;
    background: pink;
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

`
