// styled components involve building components in in-built CSS
import styled from 'styled-components'
// used for links that redirect using smooth scroll (i.e. all pages except for enquire)
import { Link as LinkScroll } from 'react-scroll' 

export const Nav = styled.nav`
    background: ${({navTransparent}) => (navTransparent ? 'transparent' : 'black')};
    height: 80px;
    margin-top: -80px;
    overflow: hidden;
    display: ${({showNav}) => (showNav ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 999;
    transition: 0.5s all ease;
    
    

    @media screen and (max-width: 960px) {
        width: 100%;
        overflow-x: hidden;
    }
    
` ;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index; 1;
    width: 100%;
    padding: 0 24px; 
    max-width: 1100px;
    
`;

export const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: -5px;
    
`

export const NavLogo = styled(LinkScroll)`
    color: white;
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    text-decoration: none;
    position: relative;
    font-size: 1.9em;
    overflow: hidden;
    
    @media screen and (max-width: 925px) {
        font-size: 1.9rem;
    }

    @media screen and (max-width: 894px) {
        font-size: 1.5rem;
    }

    @media screen and (max-width: 310px) {
        margin-left: 10px;
    }

    @media screen and (max-width: 280px) {
        font-size: 1.4rem;
    }

    @media screen and (max-width: 259px) {
        margin-left: 0px;
    }

    @media screen and (max-width: 207px) {
        font-size: 0.9rem;
    }



    
`;

export const SubLogo = styled(LinkScroll)`
    color: white;
    font-size: 0.8rem;
    font-family: 'Montserrat', sans-serif;
    padding-left: 20px;
    cursor: pointer;
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
    margin-right: -22px;
`;

export const NavItem = styled.li`
    height: 80px;
    margin: 30px;
    font-size: 1rem;
    font-family: 'Montserrat', sans-serif;
    
    @media screen and (max-width: 847px) {
        font-size: 0.7rem;
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
        border-bottom: 3px solid thistle;
    }

    &:hover {
        border-bottom: 3px solid thistle;
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
    border-radius: 50px;
    background: thistle;
    white-space: nowrap;
    padding: 10px 22px;
    color: black;
    font-size: 1rem;
    font-weight: 450;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    @media screen and (max-width: 847px) {
        font-size: 0.7rem;
    }

    &:hover {
        transition: all 0.2s ease-in-out;
        background: white;
        color: black;
    }
`