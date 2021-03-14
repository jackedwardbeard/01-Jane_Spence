// styled components involve building components in in-built CSS
import styled from 'styled-components'
// used for links that redirect using smooth scroll (i.e. all pages except for enquire)
import { Link as LinkScroll } from 'react-scroll' 
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap');
`

export const Nav = styled.nav`
    background: ${({navTransparent}) => (navTransparent ? 'transparent' : 'rgb(11,18,36,0.75)')};
    height: max(80px, 9vh);
    margin-top: min(-80px, -9vh);
    min-height: 80px;
    overflow: hidden;
    display: ${({showNav}) => (showNav ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 999;
    transition: 0.5s all ease;
    width: 100%;
    
` ;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-around;
    height: max(80px, 9vh);
    min-height: 80px;
    align-items: center;
    z-index; 1;
    width: 100%;
    padding: 0 max(20px, 0.5vmin); 

    @media screen and (max-width: 768px) {
        justify-content: start;
    }
`;

export const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: min(-5px, -0.5vmin);
    
    @media screen and (max-width: 1024px) {
        margin-left: 10px;
    }
`

export const NavLogo = styled(LinkScroll)`
    color: white;
    justify-self: flex-start;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    text-decoration: none;
    font-weight: 700;
    position: relative;
    font-size: max(1.8rem, 3.6vmin);
    overflow: hidden;

    @media screen and (max-width: 900px) {
        font-size: max(1.1rem, 3vmin);
    }

    @media screen and (max-width: 775px) {
        font-size: max(1.1rem, 2.8vmin);
    }

    @media screen and (max-width: 768px) {
        font-size: max(1.6rem, 3.3vmin);
    }

    @media screen and (max-width: 280px) {
        font-size: max(1.3rem, 3vmin);
    }
`;

export const SubLogo = styled(LinkScroll)`
    color: white;
    justify-self: flex-start;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    text-decoration: none;
    position: relative;
    font-size: max(0.85rem, 1.4vmin);
    overflow: hidden;
`

export const MobileIcon = styled.div`
    display: none;
    margin-top: max(4.5px, 0.5vmin);

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: white;
    }
`;

export const NavMenu = styled.ul`
    display: flex; 
    align-items: center;
    list-style: none;
    text-align: center;
`;

export const NavItem = styled.li`
    font-size: max(0.8rem, 1.75vmin);
    height: max(80px, 9vh);
    margin: max(25px, 3.0643513789581207vmin);
    font-family: 'Montserrat', sans-serif;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavLinks = styled(LinkScroll)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding; 0 max(10px, 1vmin);
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: max(3px, 0.3vmin) solid thistle;
    }

    &:hover {
        border-bottom: max(3px, 0.3vmin) solid thistle;
    }

`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    font-family: 'Montserrat', sans-serif;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtnLink = styled(LinkScroll)`
    border-radius: max(30px, 3vmin);
    background: thistle;
    white-space: nowrap;
    padding: max(10px, 1.1vmin) max(20px, 2.2vmin);
    color: black;
    font-size: max(1rem, 1.85vmin);
    font-weight: 450;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: white;
        color: black;
    }
`