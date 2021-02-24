import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom' 


export const FooterContainer = styled.div`
    background: #111a26;
    height: 400px;
`

export const FooterWrapper = styled.div`
    height: 360px;
`

export const Row1 = styled.div`
    
`

export const Column1 = styled.div`
    
`

export const Column2 = styled.div`
    
`

export const Column3 = styled.div`
    
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

`