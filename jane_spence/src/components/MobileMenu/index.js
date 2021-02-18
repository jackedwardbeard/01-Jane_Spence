import React from 'react'
import {
    MobileMenuContainer,
    Icon,
    CloseIcon,
    MobileMenuWrapper,
    MobileMenuLink,
    MobileBtnWrapper,
    MobileMenuRoute,
    MobileMenu
} 
from './mobileMenuElements'

const MobileSideMenu = () => {
    return (
        <MobileMenuContainer>
            <Icon>
                <CloseIcon/>
            </Icon>
            <MobileMenuWrapper>
                <MobileMenu>
                    <MobileMenuLink to="home">Home</MobileMenuLink>
                    <MobileMenuLink to="about">About</MobileMenuLink>
                    <MobileMenuLink to="faq">FAQ</MobileMenuLink>
                    <MobileMenuLink to="location">Location</MobileMenuLink>
                    <MobileMenuLink to="contact">Contact</MobileMenuLink>
                </MobileMenu>
                <MobileBtnWrapper>
                    <MobileMenuRoute to="/enquire">Enquire Now</MobileMenuRoute>
                </MobileBtnWrapper>
            </MobileMenuWrapper>
        </MobileMenuContainer>
    )
}

export default MobileSideMenu;
