import { React, useEffect } from 'react';
import {
    FooterContainer,
    FooterWrapper,
    Row1,
    Column1,
    Column2,
    Column3,
    BottomFooterContainer,
    TopFooterContainer,
    SubText,
    SubSubText,
    Title,
    NavLink,
    NavLinkScroll,
    PreFooterWrapper,
    GlobalStyle
} from './FooterComponents';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {

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
        <FooterContainer>
            <GlobalStyle/>
            <FooterWrapper>
                <PreFooterWrapper data-aos='fade'>
                    For further information, visit the websites listed below or book a consultation @ 0417 389 257
                </PreFooterWrapper>
                <Row1>
                    <Column1>
                        <Title data-aos='fade-right'>
                            NAVIGATION
                        </Title>
                        <NavLinkScroll data-aos='fade-left' to='landing' smooth={true} spy={true} offset={navOffset}>Home</NavLinkScroll>
                        <NavLinkScroll data-aos='fade-right' to='about' smooth={true} spy={true} offset={navOffset}>About</NavLinkScroll>
                        <NavLinkScroll data-aos='fade-left' to='faq' smooth={true} spy={true} offset={navOffset}>FAQ</NavLinkScroll>
                        <NavLinkScroll data-aos='fade-right' to='locations' smooth={true} spy={true} offset={navOffset}>Locations</NavLinkScroll>
                        <NavLinkScroll data-aos='fade-left' to='contact' smooth={true} spy={true} offset={navOffset}>Contact</NavLinkScroll>
                    </Column1>
                    <Column2>
                        <Title data-aos='fade-right'>
                            HELPFUL WEBSITES
                        </Title>
                        <NavLink data-aos='fade-left' to='//diabetesaustralia.com.au' target='_blank'>Diabetes Australia</NavLink>
                        <NavLink data-aos='fade-right' to='//ndss.com.au' target='_blank'>NDSS</NavLink>
                        <NavLink data-aos='fade-left' to='//baker.edu.au/health-hub/fact-sheets' target='_blank'>Baker Institute</NavLink>
                    </Column2>
                    <Column3>
                        <Title data-aos='fade-right'>
                            TOPICS
                        </Title>
                        <NavLink data-aos='fade-left' to='//diabetesaustralia.com.au/about-diabetes/what-is-diabetes/' target='_blank'>What Is Diabetes?</NavLink>
                        <NavLink data-aos='fade-right' to='//ndss.com.au/about-diabetes/newly-diagnosed/' target='_blank'>Newly Diagnosed?</NavLink>
                        <NavLink data-aos='fade-left' to='//ndss.com.au/living-with-diabetes/managing-diabetes/blood-glucose-monitoring/' target='_blank'>Blood Glucose Monitoring</NavLink>
                        <NavLink data-aos='fade-right' to='//baker.edu.au/-/media/documents/fact-sheets/baker-institute-factsheet-carbohydrates-and-glycaemic-index.pdf' target='_blank'>Low GI Carbohydrates</NavLink>
                        <NavLink data-aos='fade-left' to='//baker.edu.au/-/media/documents/fact-sheets/baker-institute-supermarket-shopping-guide.pdf' target='_blank'>Supermarket Shopping Guide</NavLink>
                    </Column3>
                </Row1>
            </FooterWrapper>
            <BottomFooterContainer>
                <SubText>
                    Jane Spence Diabetes Education © 2021 - All Rights Reserved
                </SubText>
            </BottomFooterContainer>
        </FooterContainer>
    )
}

export default Footer
