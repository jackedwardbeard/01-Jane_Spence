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