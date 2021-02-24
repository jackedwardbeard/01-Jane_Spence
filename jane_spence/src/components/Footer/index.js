import React from 'react'
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

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <Row1>
                    <Column1>
                        <Title>
                            PAGES
                        </Title>
                        <NavLinkScroll to="landing" smooth={true} spy={true} offset={-80}>Home</NavLinkScroll>
                        <NavLinkScroll to="about" smooth={true} spy={true} offset={-80}>About</NavLinkScroll>
                        <NavLinkScroll to="faq" smooth={true} spy={true} offset={-80}>FAQ</NavLinkScroll>
                        <NavLinkScroll to="location" smooth={true} spy={true} offset={-80}>Location</NavLinkScroll>
                        <NavLinkScroll to="contact" smooth={true} spy={true} offset={-80}>Contact</NavLinkScroll>
                    </Column1>
                    <Column2>
                        <Title>
                            IMPORTANT WEBSITES
                        </Title>
                        <NavLink to="//google.com" target="_blank">Website 1</NavLink>
                        <NavLink to="//google.com" target="_blank">Website 2</NavLink>
                        <NavLink to="//google.com" target="_blank">Website 3</NavLink>
                        <NavLink to="//google.com" target="_blank">Website 4</NavLink>
                        <NavLink to="//google.com" target="_blank">Website 5</NavLink>
                    </Column2>
                    <Column3>
                        <Title>
                            OTHER
                        </Title>
                        <NavLink to="//google.com" target="_blank">Website 6</NavLink>
                        <NavLink to="//google.com" target="_blank">Website 7</NavLink>
                        <NavLink to="//google.com" target="_blank">Website 8</NavLink>
                        <NavLink to="//google.com" target="_blank">Website 9</NavLink>
                        <NavLink to="//google.com" target="_blank">Website 10</NavLink>
                    </Column3>
                </Row1>
            </FooterWrapper>
            <SubFooterContainer>
                <LeftText>
                    Jane Spence Diabetes Education © 2021
                </LeftText>
            
                <RightText to="//linkedin.com/in/jack-beard/">
                    Created By JACK BEARD
                </RightText>
                
            </SubFooterContainer>
        </FooterContainer>
    )
}

export default Footer
