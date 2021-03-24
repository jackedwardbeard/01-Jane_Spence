import styled from 'styled-components'
import {Link as LinkScroll} from 'react-scroll'
import image from '../../images/landingImg.jpg'
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap');
`

export const LandingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    z-index: 1;
    padding: 0 40px;
    position: relative;
    height: max(100vh, 400px);
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
    background-size: 100% 100%;

    @media screen and (max-width: 1024px) {
        background-size: cover;
    }
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
    font-size: max(6.5vmin, 1.75rem);
    font-weight: 300;

    @media screen and (max-width: 1024px) {
        font-weight: 500;
    }

    @media screen and (max-width: 540px) {
        font-size: max(8vmin, 2.5rem);
    }

    @media screen and (max-width: 414px) {
        font-size: max(6.5vmin, 2rem);
    }

    @media screen and (max-width: 375px) {
        font-size: max(6.5vmin, 1.75rem);
    }
`

export const LandingSubText = styled.div`
    font-size: max(0.8rem, 2.2vmin);
    font-weight: 300;
    margin-top: max(10px, 1vmin);

    @media screen and (max-width: 1024px) {
        line-height: max(17.5px, 3vmin);
        padding-left: max(4vw, 20px);
        padding-right: max(4vw, 20px);
    }
`

export const LearnMoreBtnWrapper = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    margin-top: max(20px, 2vmin);
`

export const LearnMoreBtn = styled(LinkScroll)`
    border-radius: max(30px, 3vmin);;
    background: thistle;
    white-space: nowrap;
    padding: max(10px, 1.1vmin) max(20px, 2.2vmin);
    color: black;
    font-size: max(1rem, 1.85vmin);
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    z-index: 999;
    margin-top: max(5px, 3vh);

    &:hover {
        transition: all 0.2s ease-in-out;
        background: white;
        color: black;
    }
`
