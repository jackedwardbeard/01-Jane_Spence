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
import * as FaIcons from 'react-icons/fa'

// you can pass in state variables and functions to components
// in this case we pass in clicked (the state), and reverseState (a function to flip the state when clicked)
const MobileSideMenu = ({clicked, reverseState}) => {

    // calculates converts our input value (vh) to px
    // so we can use it in our calcNavOffset function (for responsive smooth scrolling)
    function vh(v) {
        var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        return (v * h) / 100;
    }
    
    // calculate the height of our responsive navbar
    function calcNavOffset() {
        // nav height is either 80px or 9vh, determine which
        const navHeight = Math.max(80, vh(9));
        // offset for smooth scroll is the negative of this
        const offset = -(navHeight);

        return offset; 
    }
    
    // calculate the offset needed for our responsive navbar
    const navOffset = calcNavOffset();

    return (
        <MobileMenuContainer clicked={clicked} onClick={reverseState}>
            <GlobalStyle/>
            <Icon onClick={reverseState}>
                <CloseIcon/>
            </Icon>
            <MobileMenuWrapper>
                <MobileMenu>
                    <MobileMenuLink to="landing" onClick={reverseState} smooth={true} spy={true} offset={0}><FaIcons.FaHome/>&nbsp;&nbsp;Home</MobileMenuLink>
                    <MobileMenuLink to="about" onClick={reverseState} smooth={true} spy={true} offset={navOffset}><FaIcons.FaInfo/>&nbsp;&nbsp;About</MobileMenuLink>
                    <MobileMenuLink to="faq" onClick={reverseState} smooth={true} spy={true} offset={navOffset}><FaIcons.FaQuestion/>&nbsp;&nbsp;FAQ</MobileMenuLink>
                    <MobileMenuLink to="locations" onClick={reverseState} smooth={true} spy={true} offset={navOffset}><FaIcons.FaMapMarkerAlt/>&nbsp;&nbsp;Locations</MobileMenuLink>
                    <MobileMenuLink to="contact" onClick={reverseState} smooth={true} spy={true} offset={navOffset}><FaIcons.FaPhoneSquare/>&nbsp;&nbsp;Contact</MobileMenuLink>
                </MobileMenu>
                <MobileBtnWrapper>
                    <MobileMenuBtn to="contact" onClick={reverseState} smooth={true} spy={true} offset={navOffset}>Enquire Now</MobileMenuBtn>
                </MobileBtnWrapper>
            </MobileMenuWrapper>
        </MobileMenuContainer>
    )
}

export default MobileSideMenu;
