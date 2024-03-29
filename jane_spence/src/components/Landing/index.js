import { React, useEffect } from 'react';
import {
    LandingContainer,
    LandingBackground,
    LandingVideo,
    LandingText,
    LandingTitle,
    LandingSubText,
    LearnMoreBtnWrapper,
    LearnMoreBtn,
    DownArrow,
    GlobalStyle
} from './LandingComponents';
import Aos from 'aos';
import 'aos/dist/aos.css';
import vid from '../../media/landingVideo.mp4'

const Landing = ({id}) => {

    useEffect(() => {
        Aos.init({duration: 1000})
    }, [])

    // calculates converts our input value (vh) to px
    // so we can use it in our calcNavOffset function (for responsive smooth scrolling)
    function vh(v) {
        var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        return (v * h) / 100;
    }
    
    // calculate the height of our responsive navbar
    function calcNavOffset() {
        // nav height is either 80px or 9vh, determine which
        const navHeight = Math.max(80, vh(9));
        // offset for smooth scroll is the negative of this
        const offset = -(navHeight);

        return offset; 
    }
    
    // calculate the offset needed for our responsive navbar
    const navOffset = calcNavOffset();

    return (
        <LandingContainer id={id}>
            <GlobalStyle/>
            <LandingBackground>
                <LandingVideo autoPlay loop muted src={vid} type='video/mp4'/>
            </LandingBackground>
            <LandingText>
                <LandingTitle data-aos='fade-right'>
                Jane Spence Diabetes Education
                </LandingTitle>
                <LandingSubText data-aos='fade-left'>
                Seek professional advice from a Consultant Pharmacist and Diabetes Educator
                </LandingSubText>
                <LearnMoreBtnWrapper to='about' smooth={true} spy={true} offset={navOffset} data-aos='fade-up'>
                    <DownArrow/>
                    <DownArrow/>
                </LearnMoreBtnWrapper>
                
            </LandingText>  
        </LandingContainer>
        
    )
}

export default Landing
