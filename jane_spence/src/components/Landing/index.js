import {React, useEffect} from 'react'
import {
    LandingContainer,
    LandingBackground,
    LandingImg,
    LandingText,
    LandingTitle,
    LandingSubText,
    LearnMoreBtnWrapper,
    LearnMoreBtn,
    GlobalStyle
} from './LandingComponents'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Landing = ({id}) => {

    useEffect(() => {
        Aos.init({duration: 1000})
    }, [])

    return (
        <LandingContainer id={id}>
            <GlobalStyle/>
            <LandingBackground>
                <LandingImg></LandingImg>
            </LandingBackground>
            <LandingText>
                <LandingTitle data-aos='fade-right'>
                Jane Spence Diabetes Education
                </LandingTitle>
                <LandingSubText data-aos='fade-left'>
                Seek professional advice from a Consultant Pharmacist and Diabetes Educator
                </LandingSubText>
                <LearnMoreBtnWrapper>
                    <LearnMoreBtn to="about" smooth={true} spy={true} offset={-80} data-aos='fade-up'>
                    Learn More {String.fromCharCode(10140)}
                    </LearnMoreBtn>
                </LearnMoreBtnWrapper>
            </LandingText>  
        </LandingContainer>
        
    )
}

export default Landing
