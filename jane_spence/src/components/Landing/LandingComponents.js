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
    height:800px;
    background: white;

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
`

export const LandingSubText = styled.div`
    font-size: 1.5rem;
`

export const LearnMoreBtnWrapper = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
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

    &:hover {
        transition: all 0.2s ease-in-out;
        background: white;
        color: black;
    }
`