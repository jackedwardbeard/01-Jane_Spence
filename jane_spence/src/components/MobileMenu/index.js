// in our index.js files we import all of our styled components which reside
// in our xxxxComponents.js file
// these are the building blocks of our overall component

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
from './MobileMenuComponents'

// you can pass in state variables and functions to components
// in this case we pass in clicked (the state), and reverseState (a function to flip the state when clicked)
const MobileSideMenu = ({clicked, reverseState}) => {
    return (
        <MobileMenuContainer clicked={clicked} onClick={reverseState}>
            <Icon onClick={reverseState}>
                <CloseIcon/>
            </Icon>
            <MobileMenuWrapper>
                <MobileMenu>
                    <MobileMenuLink to="landing" onClick={reverseState} smooth={true} spy={true} offset={-80}>Home</MobileMenuLink>
                    <MobileMenuLink to="about" onClick={reverseState} smooth={true} spy={true} offset={-80}>About</MobileMenuLink>
                    <MobileMenuLink to="faq" onClick={reverseState} smooth={true} spy={true} offset={-80}>FAQ</MobileMenuLink>
                    <MobileMenuLink to="location" onClick={reverseState} smooth={true} spy={true} offset={-20}>Location</MobileMenuLink>
                    <MobileMenuLink to="contact" onClick={reverseState} smooth={true} spy={true} offset={-80}>Contact</MobileMenuLink>
                </MobileMenu>
                <MobileBtnWrapper>
                    <MobileMenuRoute to="contact" onClick={reverseState} smooth={true} spy={true} offset={-80}>Enquire Now</MobileMenuRoute>
                </MobileBtnWrapper>
            </MobileMenuWrapper>
        </MobileMenuContainer>
    )
}

export default MobileSideMenu;
