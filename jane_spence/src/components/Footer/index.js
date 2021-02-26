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
    NavLinkScroll
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
                <Row1>
                    <Column1>
                        <Title data-aos='fade-up'>
                            PAGES
                        </Title>
                        <NavLinkScroll data-aos='fade-right' to="landing" smooth={true} spy={true} offset={-80}>Home</NavLinkScroll>
                        <NavLinkScroll data-aos='fade-left' to="about" smooth={true} spy={true} offset={-80}>About</NavLinkScroll>
                        <NavLinkScroll data-aos='fade-right' to="faq" smooth={true} spy={true} offset={-80}>FAQ</NavLinkScroll>
                        <NavLinkScroll data-aos='fade-left' to="location" smooth={true} spy={true} offset={-20}>Location</NavLinkScroll>
                        <NavLinkScroll data-aos='fade-right' to="contact" smooth={true} spy={true} offset={30}>Contact</NavLinkScroll>
                    </Column1>
                    <Column2>
                        <Title data-aos='fade-up'>
                            HELPFUL
                        </Title>
                        <NavLink data-aos='fade-right' to="//diabetesaustralia.com.au" target="_blank">Diabetes Australia</NavLink>
                        <NavLink data-aos='fade-left' to="//ndss.com.au" target="_blank">NDSS</NavLink>
                        <NavLink data-aos='fade-right' to="//baker.edu.au/health-hub/fact-sheets/carbohydrates-gi" target="_blank">Baker Institute</NavLink>
                    </Column2>
                    <Column3>
                        <Title data-aos='fade-up'>
                            OTHER
                        </Title>
                        <NavLink data-aos='fade-right' to="//google.com" target="_blank">Website 6</NavLink>
                        <NavLink data-aos='fade-left' to="//google.com" target="_blank">Website 7</NavLink>
                        <NavLink data-aos='fade-right' to="//google.com" target="_blank">Website 8</NavLink>
                        <NavLink data-aos='fade-left' to="//google.com" target="_blank">Website 9</NavLink>
                        <NavLink data-aos='fade-right' to="//google.com" target="_blank">Website 10</NavLink>
                    </Column3>
                </Row1>
            </FooterWrapper>
            <SubFooterContainer>
                <LeftText>
                    Jane Spence Diabetes Education © 2021
                </LeftText>
            
                <RightText to="//linkedin.com/in/jack-beard/" target="_blank">
                    Created By JACK BEARD
                </RightText>
                
            </SubFooterContainer>
        </FooterContainer>
    )
}

export default Footer
