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
    
    @media screen and (max-width: 1024px) and (min-height: 1366px) {
        font-size: 6rem;
        font-weight: 500;
    }

    @media screen and (max-width: 768px) and (min-height: 1024px) {
        font-size: 4.5rem;
        font-weight: 500;
    }

    @media screen and (max-width: 540px) and (min-height: 720px) {
        font-size: 3rem;
        font-weight: 500;
    }

    @media screen and (max-width: 414px) and (min-height: 736px) {
        font-size: 2.3rem;
        font-weight: 500;
    }

    @media screen and (max-width: 375px) and (min-height: 667px) {
        font-size: 2rem;
        font-weight: 500;
    }

    @media screen and (max-width: 360px) and (min-height: 640px) {
        font-size: 2rem;
        font-weight: 500;
    }

    @media screen and (max-width: 320px) and (min-height: 568px) {
        font-size: 1.7rem;
        font-weight: 500;
    }

    @media screen and (max-width: 280px) and (min-height: 653px) {
        font-size: 1.4rem;
        font-weight: 500;
    }

`

export const LandingSubText = styled.div`
    font-size: 2.2vh;
    font-weight: 300;
    padding-top: 10px;

    @media screen and (max-width: 1024px) and (max-height: 1366px) {
        font-size: 1.8rem;
        padding-left: 10px;
        padding-right: 10px;
    }

    @media screen and (max-width: 768px) and (max-height: 1024px) {
        font-size: 1.3rem;
        font-weight: 300;
        padding-left: 10px;
        padding-right: 10px;
    }

    @media screen and (max-width: 540px) and (max-height: 720px) {
        font-size: 1rem;
    }

    @media screen and (max-width: 414px) and (max-height: 736px) {
        font-size: 1rem;
        font-weight: 290;
    }

    @media screen and (max-width: 411px) and (max-height: 823px) {
        font-size: 1rem;
        font-weight: 290;
    }

    @media screen and (max-width: 411px) and (max-height: 731px) {
        font-size: 1rem;
        font-weight: 290;
    }

    @media screen and (max-width: 360px) and (max-height: 640px) {
        font-size: 0.88rem;
        font-weight: 350;
    }

    @media screen and (max-width: 320px) and (max-height: 568px) {
        font-size: 0.8rem;
        font-weight: 280;
    }

    @media screen and (max-width: 280px) and (max-height: 653px) {
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
    
    @media screen and (max-width: 414px) and (max-height: 736px) {
        font-size: 2.6vh;
    }

    @media screen and (max-width: 411px) and (max-height: 731px) {
        font-size: 2.6vh;
    }

    @media screen and (max-width: 375px) and (max-height: 812px) {
        font-size: 2vh;
    }

    @media screen and (max-width: 375px) and (max-height: 667px) {
        font-size: 2.6vh;
    }

    @media screen and (max-width: 320px) and (max-height: 568px) {
        font-size: 2.6vh;
    }

    @media screen and (max-width: 360px) and (max-height: 640px) {
        font-size: 2.3vh;
    }

    &:hover {
        transition: all 0.2s ease-in-out;
        background: white;
        color: black;
    }
`
