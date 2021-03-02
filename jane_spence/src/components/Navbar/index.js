// in our index.js files we import all of our styled components which reside
// in our xxxxComponents.js file
// these are the building blocks of our overall component

import {React, useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa' // mobile menu icon
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink, 
    SubLogo,
    LogoContainer
} from './NavbarComponents'

// you can pass in state variables and functions to components
// in this case we pass in reverseState(a function to flip the state when clicked)
const Navbar = ({reverseState}) => {

    const [navTransparent, setNavTransparent] = useState(true);

    // if at the top of the page, make the navbar background transparent
    // else make it black
    const transparentNavBar = () => { 
        if (window.scrollY <= 80) {
            setNavTransparent(true);
        }
        else {
            setNavTransparent(false);
        }
     }


     // listen for the scroll event
     useEffect(() => {
        document.addEventListener('scroll', transparentNavBar)
     }, []);
     
     

    return (
        <Nav navTransparent={navTransparent}>
            <NavbarContainer>
                <LogoContainer>
                    <NavLogo to="landing">JANE SPENCE</NavLogo>
                    <SubLogo to="landing" smooth={true} spy={true} offset={-80}>Diabetes Education</SubLogo>
                </LogoContainer>
                <MobileIcon onClick={reverseState}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about" smooth={true} spy={true} offset={-80}>About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="faq" smooth={true} spy={true} offset={-80}>FAQ</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="locations" smooth={true} spy={true} offset={-20}>Locations</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="contact" smooth={true} spy={true} offset={30}>Contact</NavLinks>
                    </NavItem>
                </NavMenu>
            <NavBtn>
                <NavBtnLink to="contact" smooth={true} spy={true} offset={30}>Enquire Now</NavBtnLink>
            </NavBtn>
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar

