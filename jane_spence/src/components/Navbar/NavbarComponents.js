// styled components involve building components in in-built CSS
import styled from 'styled-components'
// used for links that do not use smooth scroll (i.e. enquire)
import { Link as LinkRouter } from 'react-router-dom' 
// used for links that redirect using smooth scroll (i.e. all pages except for enquire)
import { Link as LinkScroll } from 'react-scroll' 

export const Nav = styled.nav`
    background: black;
    height: 80px;
    /*margin-top: -80px;*/
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
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

export const NavLogo = styled(LinkRouter)`
    color: white;
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-family: 'Dosis', sans-serif;
    font-weight: bold;
    text-decoration: none;
    position: relative;
    font-size: 2em;
    overflow: hidden;
    background: linear-gradient(to right, pink, pink 50%, white 50%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% 100%;
    background-position: 100%;
    transition: background-position 275ms ease;
    text-decoration: none; // text decorations are clipped in WebKit browsers
    
    &:hover {
        background-position: 0 100%;
    
`;

export const MobileIcon = styled.div`
    display: none;

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
    margin-right: -22px;
`;

export const NavItem = styled.li`
    height: 80px;
    margin: 30px;
    font-size: 1rem;
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
    padding; 0 1rem;
    height: 100%;
    cursor: pointer;

    &:active {
        border-bottom: 4px solid pink;
    }

    &:hover {
        border-bottom: 4px solid pink;
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

export const NavBtnLink = styled(LinkRouter)`
    border-radius: 50px;
    background: pink;
    white-space: nowrap;
    padding: 10px 22px;
    color: black;
    font-size: 1rem;
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