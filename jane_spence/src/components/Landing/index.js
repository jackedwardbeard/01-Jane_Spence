import React from 'react'
import {
    LandingContainer,
    LandingBackground,
    VideoLoop,
    LandingText,
    LandingTitle,
    LandingSubText,
    LearnMoreBtnWrapper,
    LearnMoreBtn,
} from './LandingComponents'
import Video from '../../videos/landingVideo.mp4'

const Landing = ({id}) => {
    return (
        <LandingContainer id={id}>
            <LandingBackground>
                <VideoLoop autoPlay loop muted src={Video} type='video/mp4'></VideoLoop>
            </LandingBackground>
            <LandingText>
                <LandingTitle>
                Jane Spence Diabetes Education
                </LandingTitle>
                <LandingSubText>
                Seek professional advice from a Consultant Pharmacist and Diabetes Educator
                </LandingSubText>
                <LearnMoreBtnWrapper>
                    <LearnMoreBtn to="about" smooth={true} spy={true} offset={-80}>
                    Learn More {String.fromCharCode(10140)}
                    </LearnMoreBtn>
                </LearnMoreBtnWrapper>
            </LandingText>  
        </LandingContainer>
        
    )
}

export default Landing
