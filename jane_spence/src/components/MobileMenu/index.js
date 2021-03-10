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
    MobileMenuBtn,
    MobileMenu,
    GlobalStyle
} 
from './MobileMenuComponents'

// to make our smooth scroll offset responsive,
// we need to use the window height to calculate the responsive height of the navbar, and then calculate
// the respective offset from said height
function calcNavOffset() {
    const height = window.innerHeight;

    return height;
}

const height = calcNavOffset();
const calculatedOffset = -(height*0.08171603677221654);

// you can pass in state variables and functions to components
// in this case we pass in clicked (the state), and reverseState (a function to flip the state when clicked)
const MobileSideMenu = ({clicked, reverseState}) => {
    return (
        <MobileMenuContainer clicked={clicked} onClick={reverseState}>
            <GlobalStyle/>
            <Icon onClick={reverseState}>
                <CloseIcon/>
            </Icon>
            <MobileMenuWrapper>
                <MobileMenu>
                    <MobileMenuLink to="landing" onClick={reverseState} smooth={true} spy={true} offset={0}>Home</MobileMenuLink>
                    <MobileMenuLink to="about" onClick={reverseState} smooth={true} spy={true} offset={calculatedOffset}>About</MobileMenuLink>
                    <MobileMenuLink to="faq" onClick={reverseState} smooth={true} spy={true} offset={calculatedOffset}>FAQ</MobileMenuLink>
                    <MobileMenuLink to="locations" onClick={reverseState} smooth={true} spy={true} offset={calculatedOffset}>Locations</MobileMenuLink>
                    <MobileMenuLink to="contact" onClick={reverseState} smooth={true} spy={true} offset={calculatedOffset}>Contact</MobileMenuLink>
                </MobileMenu>
                <MobileBtnWrapper>
                    <MobileMenuBtn to="contact" onClick={reverseState} smooth={true} spy={true} offset={calculatedOffset}>Enquire Now</MobileMenuBtn>
                </MobileBtnWrapper>
            </MobileMenuWrapper>
        </MobileMenuContainer>
    )
}

export default MobileSideMenu;
