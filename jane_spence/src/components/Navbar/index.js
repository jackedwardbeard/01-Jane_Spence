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
    LogoContainer,
    GlobalStyle
} from './NavbarComponents'

// you can pass in state variables and functions to components
// in this case we pass in reverseState(a function to flip the state when clicked)
const Navbar = ({reverseState}) => {

    const [navTransparent, setNavTransparent] = useState(true);
    const [showNav, setShowNav] = useState(true)
    
    // if at the top of the page, make the navbar background transparent
    // else make it black
    const transparentNavBar = () => { 
        if (window.scrollY <= 80) {
            setNavTransparent(true);
        }
        else {
            setNavTransparent(false);
        }
     };

     // mainly for mobile. don't show navbar if we scroll past the top of the webpage.
     const displayNavBar = () => {
        if (window.scrollY < 0) {
            setShowNav(false);
        }
        else {
            setShowNav(true);
        }
     }
     // listen for the scroll event
     useEffect(() => {
        document.addEventListener('scroll', transparentNavBar);
        document.addEventListener('scroll', displayNavBar);
     }, []);

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
        <Nav navTransparent={navTransparent} showNav={showNav}>
            <GlobalStyle/>
            <NavbarContainer>
                <LogoContainer>
                    <NavLogo to="landing" smooth={true} spy={true} offset={0}>JANE SPENCE</NavLogo>
                    <SubLogo to="landing" smooth={true} spy={true} offset={0}>Diabetes Education</SubLogo>
                </LogoContainer>
                <MobileIcon onClick={reverseState}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about" smooth={true} spy={true} offset={navOffset}>About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="faq" smooth={true} spy={true} offset={navOffset}>FAQ</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="locations" smooth={true} spy={true} offset={navOffset}>Locations</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="contact" smooth={true} spy={true} offset={navOffset}>Contact</NavLinks>
                    </NavItem>
                </NavMenu>
            <NavBtn>
                <NavBtnLink to="contact" smooth={true} spy={true} offset={navOffset}>Enquire Now</NavBtnLink>
            </NavBtn>
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar

