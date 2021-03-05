import styled from 'styled-components'
import {Link as LinkScroll} from 'react-scroll'
import image from '../../images/landingImg.jpg'

export const LandingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    z-index: 1;
    padding: 0 40px;
    position: relative;
    height: 100vh;
    background: black;
    overflow: hidden;
`

export const LandingBackground = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;
`

export const LandingImg = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

export const LandingText = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    font-family: 'Montserrat', sans-serif;
    justify-content: center;
    align-items: center;
    z-index: 999;


`

export const LandingTitle = styled.div`
    font-size: 6.5vh;
    font-weight: 375;
    
    @media screen and (max-width: 1024px) {
        font-size: 6rem;
        font-weight: 500;
    }

    @media screen and (max-width: 768px) {
        font-size: 4.5rem;
        font-weight: 500;
    }

    @media screen and (max-width: 540px) {
        font-size: 3rem;
        font-weight: 500;
    }

    @media screen and (max-width: 414px) {
        font-size: 2.3rem;
        font-weight: 500;
    }

    @media screen and (max-width: 375px) {
        font-size: 2rem;
        font-weight: 500;
    }

    @media screen and (max-width: 360px) {
        font-size: 2rem;
        font-weight: 500;
    }

    @media screen and (max-width: 320px) {
        font-size: 1.7rem;
        font-weight: 500;
    }

    @media screen and (max-width: 280px) {
        font-size: 1.4rem;
        font-weight: 500;
    }

`

export const LandingSubText = styled.div`
    font-size: 2.2vh;
    font-weight: 300;
    padding-top: 10px;

    @media screen and (max-width: 1024px) {
        font-size: 1.8rem;
        padding-left: 10px;
        padding-right: 10px;
    }

    @media screen and (max-width: 768px) {
        font-size: 1.3rem;
        font-weight: 300;
        padding-left: 10px;
        padding-right: 10px;
    }

    @media screen and (max-width: 540px) {
        font-size: 1rem;
    }

    @media screen and (max-width: 414px) {
        font-size: 1rem;
        font-weight: 290;
    }

    @media screen and (max-width: 411px) {
        font-size: 1rem;
        font-weight: 290;
    }

    @media screen and (max-width: 411px) {
        font-size: 1rem;
        font-weight: 290;
    }

    @media screen and (max-width: 360px) {
        font-size: 0.88rem;
        font-weight: 350;
    }

    @media screen and (max-width: 320px) {
        font-size: 0.8rem;
        font-weight: 280;
    }

    @media screen and (max-width: 280px) {
        font-size: 0.7rem;
        font-weight: 295;
    }
`

export const LearnMoreBtnWrapper = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    margin-top: 20px;
`

export const LearnMoreBtn = styled(LinkScroll)`
    border-radius: 3vh;
    background: thistle;
    white-space: nowrap;
    padding: 1.1vh 2.2vh;
    color: black;
    font-size: 1.85vh;
    font-weight: 450;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    z-index: 999;
    margin-top: 3vh;

    @media screen and (max-width: 1024px) {
        font-size: 1.25rem;
        padding: 10px 35px;
        border-radius: 40px;
    }

    &:hover {
        transition: all 0.2s ease-in-out;
        background: white;
        color: black;
    }
`
