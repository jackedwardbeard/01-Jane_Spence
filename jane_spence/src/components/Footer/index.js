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
                    <Column1 data-aos='fade-up-right'>
                        <Title>
                            PAGES
                        </Title>
                        <NavLinkScroll to="landing" smooth={true} spy={true} offset={-80}>Home</NavLinkScroll>
                        <NavLinkScroll to="about" smooth={true} spy={true} offset={-80}>About</NavLinkScroll>
                        <NavLinkScroll to="faq" smooth={true} spy={true} offset={-80}>FAQ</NavLinkScroll>
                        <NavLinkScroll to="locations" smooth={true} spy={true} offset={-80}>Locations</NavLinkScroll>
                        <NavLinkScroll to="contact" smooth={true} spy={true} offset={-30}>Contact</NavLinkScroll>
                    </Column1>
                    <Column2 data-aos='fade-up'>
                        <Title>
                            HELPFUL WEBSITES
                        </Title>
                        <NavLink to="//diabetesaustralia.com.au" target="_blank">Diabetes Australia</NavLink>
                        <NavLink to="//ndss.com.au" target="_blank">NDSS</NavLink>
                        <NavLink to="//baker.edu.au/health-hub/fact-sheets" target="_blank">Baker Institute</NavLink>
                    </Column2>
                    <Column3 data-aos='fade-up-left'>
                        <Title>
                            TOPICS
                        </Title>
                        <NavLink to="//diabetesaustralia.com.au/about-diabetes/what-is-diabetes/" target="_blank">What Is Diabetes?</NavLink>
                        <NavLink to="//ndss.com.au/about-diabetes/newly-diagnosed/" target="_blank">Newly Diagnosed?</NavLink>
                        <NavLink to="//ndss.com.au/living-with-diabetes/managing-diabetes/blood-glucose-monitoring/" target="_blank">Blood Glucose Monitoring</NavLink>
                        <NavLink to="//baker.edu.au/-/media/documents/fact-sheets/baker-institute-factsheet-carbohydrates-and-glycaemic-index.pdf" target="_blank">Low GI Carbohydrates</NavLink>
                        <NavLink to="//baker.edu.au/-/media/documents/fact-sheets/baker-institute-supermarket-shopping-guide.pdf" target="_blank">Supermarket Shopping Guide</NavLink>
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
