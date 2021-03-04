import {React, useEffect} from 'react'
import {
    FooterContainer,
    FooterWrapper,
    Row1,
    Column1,
    Column2,
    Column3,
    SubFooterContainer,
    LeftText,
    RightText,
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
                        <Title data-aos='fade-up'>
                            PAGES
                        </Title>
                        <NavLinkScroll data-aos='fade-up' to="landing" smooth={true} spy={true} offset={-80}>Home</NavLinkScroll>
                        <NavLinkScroll data-aos='fade-up' to="about" smooth={true} spy={true} offset={-40}>About</NavLinkScroll>
                        <NavLinkScroll data-aos='fade-up' to="faq" smooth={true} spy={true} offset={-20}>FAQ</NavLinkScroll>
                        <NavLinkScroll data-aos='fade-up' to="locations" smooth={true} spy={true} offset={-20}>Locations</NavLinkScroll>
                        <NavLinkScroll data-aos='fade-up' to="contact" smooth={true} spy={true} offset={30}>Contact</NavLinkScroll>
                    </Column1>
                    <Column2>
                        <Title data-aos='fade-up'>
                            HELPFUL WEBSITES
                        </Title>
                        <NavLink data-aos='fade-up' to="//diabetesaustralia.com.au" target="_blank">Diabetes Australia</NavLink>
                        <NavLink data-aos='fade-up' to="//ndss.com.au" target="_blank">NDSS</NavLink>
                        <NavLink data-aos='fade-up' to="//baker.edu.au/health-hub/fact-sheets" target="_blank">Baker Institute</NavLink>
                    </Column2>
                    <Column3>
                        <Title data-aos='fade-up'>
                            TOPICS
                        </Title>
                        <NavLink data-aos='fade-up' to="//diabetesaustralia.com.au/about-diabetes/what-is-diabetes/" target="_blank">What Is Diabetes?</NavLink>
                        <NavLink data-aos='fade-up' to="//ndss.com.au/about-diabetes/newly-diagnosed/" target="_blank">Newly Diagnosed?</NavLink>
                        <NavLink data-aos='fade-up' to="//ndss.com.au/living-with-diabetes/managing-diabetes/blood-glucose-monitoring/" target="_blank">Blood Glucose Monitoring</NavLink>
                        <NavLink data-aos='fade-up' to="//baker.edu.au/-/media/documents/fact-sheets/baker-institute-factsheet-carbohydrates-and-glycaemic-index.pdf" target="_blank">Low GI Carbohydrates</NavLink>
                        <NavLink data-aos='fade-up' to="//baker.edu.au/-/media/documents/fact-sheets/baker-institute-supermarket-shopping-guide.pdf" target="_blank">Supermarket Shopping Guide</NavLink>
                    </Column3>
                </Row1>
            </FooterWrapper>
            <SubFooterContainer>
                
                <LeftText>
                    Jane Spence Diabetes Education © 2021
                </LeftText>
                
                <RightText to="//linkedin.com/in/jackedwardbeard/" target="_blank">
                    Design By JACK BEARD
                </RightText>
               
            </SubFooterContainer>
        </FooterContainer>
    )
}

export default Footer
