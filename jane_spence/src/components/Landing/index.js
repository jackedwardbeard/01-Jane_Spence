import React from 'react'
import {
    LandingContainer,
    LandingBackground,
    LandingImg,
    LandingText,
    LandingTitle,
    LandingSubText,
    LearnMoreBtnWrapper,
    LearnMoreBtn,
} from './LandingComponents'

const Landing = ({id}) => {
    return (
        <LandingContainer id={id}>
            <LandingBackground>
                <LandingImg></LandingImg>
            </LandingBackground>
            <LandingText>
                <LandingTitle>
                Jane Spence Diabetes Education
                </LandingTitle>
                <LandingSubText>
                Seek professional advice from a Consultant Pharmacist and Diabetes Educator
                </LandingSubText>
                <LearnMoreBtnWrapper>
                    <LearnMoreBtn to="about" smooth={true} spy={true} offset={-40}>
                    Learn More {String.fromCharCode(10140)}
                    </LearnMoreBtn>
                </LearnMoreBtnWrapper>
            </LandingText>  
        </LandingContainer>
        
    )
}

export default Landing
