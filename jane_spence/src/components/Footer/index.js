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
        Aos.init({duration: 2000})
    }, [])

    return (
        <FooterContainer>
            <FooterWrapper>
                <Row1>
                    <Column1>
                        <Title data-aos='fade-up'>
                            PAGES
                        </Title>
                        <NavLinkScroll data-aos='fade-up' to="landing" smooth={true} spy={true} offset={-80}>Home</NavLinkScroll>
                        <NavLinkScroll data-aos='fade-up' to="about" smooth={true} spy={true} offset={-80}>About</NavLinkScroll>
                        <NavLinkScroll data-aos='fade-up' to="faq" smooth={true} spy={true} offset={-80}>FAQ</NavLinkScroll>
                        <NavLinkScroll data-aos='fade-up' to="location" smooth={true} spy={true} offset={-20}>Location</NavLinkScroll>
                        <NavLinkScroll data-aos='fade-up' to="contact" smooth={true} spy={true} offset={-80}>Contact</NavLinkScroll>
                    </Column1>
                    <Column2>
                        <Title data-aos='fade-up'>
                            KEY WEBSITES
                        </Title>
                        <NavLink data-aos='fade-up' to="//google.com" target="_blank">Website 1</NavLink>
                        <NavLink data-aos='fade-up' to="//google.com" target="_blank">Website 2</NavLink>
                        <NavLink data-aos='fade-up' to="//google.com" target="_blank">Website 3</NavLink>
                        <NavLink data-aos='fade-up' to="//google.com" target="_blank">Website 4</NavLink>
                        <NavLink data-aos='fade-up' to="//google.com" target="_blank">Website 5</NavLink>
                    </Column2>
                    <Column3>
                        <Title data-aos='fade-up'>
                            OTHER
                        </Title>
                        <NavLink data-aos='fade-up' to="//google.com" target="_blank">Website 6</NavLink>
                        <NavLink data-aos='fade-up' to="//google.com" target="_blank">Website 7</NavLink>
                        <NavLink data-aos='fade-up' to="//google.com" target="_blank">Website 8</NavLink>
                        <NavLink data-aos='fade-up' to="//google.com" target="_blank">Website 9</NavLink>
                        <NavLink data-aos='fade-up' to="//google.com" target="_blank">Website 10</NavLink>
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
