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
                    <MobileMenuLink to="landing" onClick={reverseState}>Home</MobileMenuLink>
                    <MobileMenuLink to="about" onClick={reverseState}>About</MobileMenuLink>
                    <MobileMenuLink to="faq" onClick={reverseState}>FAQ</MobileMenuLink>
                    <MobileMenuLink to="location" onClick={reverseState}>Location</MobileMenuLink>
                    <MobileMenuLink to="contact" onClick={reverseState}>Contact</MobileMenuLink>
                </MobileMenu>
                <MobileBtnWrapper>
                    <MobileMenuRoute to="contact" onClick={reverseState}>Enquire Now</MobileMenuRoute>
                </MobileBtnWrapper>
            </MobileMenuWrapper>
        </MobileMenuContainer>
    )
}

export default MobileSideMenu;
