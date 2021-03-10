import {React, useEffect} from 'react'
import {
    FooterContainer,
    FooterWrapper,
    Row1,
    Column1,
    Column2,
    Column3,
    SubFooterContainer,
    SubSubFooterContainer,
    SubText,
    SubSubText,
    Title,
    NavLink,
    NavLinkScroll,
    PreFooterWrapper,
} from './FooterComponents'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

    useEffect(() => {
        Aos.init({duration: 1000})
    }, [])

    return (
        <FooterContainer>
            <FooterWrapper>
                <PreFooterWrapper data-aos='fade'>
                    For further information, visit the websites listed below or book a consultation @ 0417 389 257.
                </PreFooterWrapper>
                <Row1>
                    <Column1>
                        <Title data-aos='fade-right'>
                            PAGES
                        </Title>
                        <NavLinkScroll data-aos='fade-left' to="landing" smooth={true} spy={true} offset={-80}>Home</NavLinkScroll>
                        <NavLinkScroll data-aos='fade-right' to="about" smooth={true} spy={true} offset={-80}>About</NavLinkScroll>
                        <NavLinkScroll data-aos='fade-left' to="faq" smooth={true} spy={true} offset={-80}>FAQ</NavLinkScroll>
                        <NavLinkScroll data-aos='fade-right' to="locations" smooth={true} spy={true} offset={-80}>Locations</NavLinkScroll>
                        <NavLinkScroll data-aos='fade-left' to="contact" smooth={true} spy={true} offset={-80}>Contact</NavLinkScroll>
                    </Column1>
                    <Column2>
                        <Title data-aos='fade-right'>
                            HELPFUL WEBSITES
                        </Title>
                        <NavLink data-aos='fade-left' to="//diabetesaustralia.com.au" target="_blank">Diabetes Australia</NavLink>
                        <NavLink data-aos='fade-right' to="//ndss.com.au" target="_blank">NDSS</NavLink>
                        <NavLink data-aos='fade-left' to="//baker.edu.au/health-hub/fact-sheets" target="_blank">Baker Institute</NavLink>
                    </Column2>
                    <Column3>
                        <Title data-aos='fade-right'>
                            TOPICS
                        </Title>
                        <NavLink data-aos='fade-left' to="//diabetesaustralia.com.au/about-diabetes/what-is-diabetes/" target="_blank">What Is Diabetes?</NavLink>
                        <NavLink data-aos='fade-right' to="//ndss.com.au/about-diabetes/newly-diagnosed/" target="_blank">Newly Diagnosed?</NavLink>
                        <NavLink data-aos='fade-left' to="//ndss.com.au/living-with-diabetes/managing-diabetes/blood-glucose-monitoring/" target="_blank">Blood Glucose Monitoring</NavLink>
                        <NavLink data-aos='fade-right' to="//baker.edu.au/-/media/documents/fact-sheets/baker-institute-factsheet-carbohydrates-and-glycaemic-index.pdf" target="_blank">Low GI Carbohydrates</NavLink>
                        <NavLink data-aos='fade-left' to="//baker.edu.au/-/media/documents/fact-sheets/baker-institute-supermarket-shopping-guide.pdf" target="_blank">Supermarket Shopping Guide</NavLink>
                    </Column3>
                </Row1>
            </FooterWrapper>

            <SubSubFooterContainer>

                <SubSubText to="//linkedin.com/in/jackedwardbeard/" target="_blank">
                    Design By JACK BEARD
                </SubSubText>

            </SubSubFooterContainer>

            <SubFooterContainer>
                
                <SubText>
                    Jane Spence Diabetes Education © 2021 | All Rights Reserved
                </SubText>
               
            </SubFooterContainer>
            
        </FooterContainer>
    )
}

export default Footer
