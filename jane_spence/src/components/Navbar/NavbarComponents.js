// styled components involve building components in in-built CSS
import styled from 'styled-components'
// used for links that redirect using smooth scroll (i.e. all pages except for enquire)
import { Link as LinkScroll } from 'react-scroll' 

export const Nav = styled.nav`
    background: ${({navTransparent}) => (navTransparent ? 'transparent' : 'black')};
    height: 9vh;
    margin-top: -9vh;
    overflow: hidden;
    display: ${({showNav}) => (showNav ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 999;
    transition: 0.5s all ease;
    
    @media screen and (max-width: 1024px) {
        height: 80px;
        margin-top: -80px;
    }

    @media screen and (max-width: 960px) {
        width: 100%;
        overflow-x: hidden;
    }
    
` ;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 9vh;
    z-index; 1;
    width: 100%;
    padding: 0 0.5vw; 

    @media screen and (max-width: 1024px) {
        height: 80px;
        padding: 0 24px; 
        max-width: 1100px;
    }
    
`;

export const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: -0.5vh;
    margin-left: 3vw;

    @media screen and (max-width: 1024px) {
        margin-top: -5px;
    }
    
`

export const NavLogo = styled(LinkScroll)`
    color: white;
    justify-self: flex-start;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    text-decoration: none;
    position: relative;
    font-size: 3.5vh;
    overflow: hidden;

    @media screen and (max-width: 1024px) {
        font-size: 1.5rem;
    }

`;

export const SubLogo = styled(LinkScroll)`
    color: white;
    justify-self: flex-start;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    text-decoration: none;
    position: relative;
    font-size: 1.3vh;
    overflow: hidden;

    @media screen and (max-width: 1024px) {
        font-size: 0.8rem;
    }
`

export const MobileIcon = styled.div`
    display: none;
    margin-top: 4px;

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

    @media screen and (max-width: 280px) {
        padding-top: 5px;
        font-size: 1.4rem;
    }
`;

export const NavMenu = styled.ul`
    display: flex; 
    align-items: center;
    list-style: none;
    text-align: center;
`;

export const NavItem = styled.li`
    height: 8vh;
    margin: 2vw;
    font-size: 2vh;
    font-family: 'Montserrat', sans-serif;
    
    @media screen and (max-width: 1024px) {
        font-size: 1rem;
        height: 80px;
        margin: 30px;
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavLinks = styled(LinkScroll)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding; 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 0.35vh solid thistle;
    }

    &:hover {
        border-bottom: 0.35vh solid thistle;
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
    border-radius: 3vh;
    margin-right: 3vw;
    background: thistle;
    white-space: nowrap;
    padding: 1.1vh 2.2vh;
    color: black;
    font-size: 1.9vh;
    font-weight: 450;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    @media screen and (max-width: 1024px) and (min-height: 1366px) {
        padding: 0.65vh 1.5vh;
        font-size: 1.2vh;
    }

    &:hover {
        transition: all 0.2s ease-in-out;
        background: white;
        color: black;
    }
`