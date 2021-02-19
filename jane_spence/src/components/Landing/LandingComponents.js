import styled from 'styled-components'

export const LandingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #171717;
    z-index: 1;
    padding: 0 20px;
    position: relative;
    height:800px;

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