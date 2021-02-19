import React from 'react'
import {
    LandingContainer,
    LandingBackground,
    VideoLoop
} from './LandingComponents'
import Video from '../../videos/landingVideo.mp4'

const Landing = () => {
    return (
        <LandingContainer>
            <LandingBackground>
                <VideoLoop autoPlay loop muted src={Video} type='video/mp4'></VideoLoop>
            </LandingBackground>
        </LandingContainer>
    )
}

export default Landing
