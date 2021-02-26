import styled from 'styled-components'
import {Link as LinkScroll} from 'react-scroll'

export const LandingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    z-index: 1;
    padding: 0 40px;
    position: relative;
    height: 1000px;
    background: white;

    @media screen and (max-width: 768px) {
        width: 100%;
        overflow-x: hidden;

    }

    @media screen and (max-width: 1024px) and (max-height: 1366px) {
        height: 1366px;
    }

    @media screen and (max-width: 768px) and (max-height: 1024px) {
        height: 1024px;
    }

    @media screen and (max-width: 360px) and (max-height: 640px) {
        height: 640px;
    }

    @media screen and (max-width: 411px) and (max-height: 731px) {
        height: 731px;
    }

    @media screen and (max-width: 411px) and (max-height: 823px) {
        height: 823px;
    }

    @media screen and (max-width: 320px) and (max-height: 568px) {
        height: 568px;
    }

    @media screen and (max-width: 375px) and (max-height: 667px) {
        height: 667px;
    }

    @media screen and (max-width: 414px) and (max-height: 736px) {
        height: 736px;
    }

    @media screen and (max-width: 375px) and (max-height: 812px) {
        height: 736px;
    }

    @media screen and (max-width: 540px) and (max-height: 720px) {
        height: 720px;
    }

    @media screen and (max-width: 280px) and (max-height: 653px) {
        height: 653px;
    }
    

`

export const LandingBackground = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;
`

export const VideoLoop = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
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
    font-size: 4rem;
    

    @media screen and (max-width: 540px) {
        font-size: 2.5rem;
    }

    @media screen and (max-width: 360px) {
        font-size: 2.2rem;
    }

    @media screen and (max-width: 320px) {
        font-size: 2.2rem;
    }

    @media screen and (max-width: 280px) {
        font-size: 1.8rem;
    }

`

export const LandingSubText = styled.div`
    font-size: 1.5rem;
    padding-top: 10px;

    @media screen and (max-width: 540px) {
        font-size: 1rem;
    }

    @media screen and (max-width: 360px) {
        font-size: 0.88rem;
    }

    @media screen and (max-width: 320px) {
        font-size: 0.8rem;
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
    border-radius: 50px;
    background: pink;
    white-space: nowrap;
    padding: 10px 22px;
    color: black;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    z-index: 999;

    @media screen and (max-width: 540px) {
        font-size: 1rem;
    }

    @media screen and (max-width: 360px) {
        font-size: 0.9rem;
    }

    @media screen and (max-width: 320px) {
        font-size: 0.8rem;
    }

    &:hover {
        transition: all 0.2s ease-in-out;
        background: white;
        color: black;
    }
`
