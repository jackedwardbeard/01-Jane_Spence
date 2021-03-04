import styled from 'styled-components'
import { Link as LinkScroll } from 'react-scroll'
import { Link as LinkRouter } from 'react-router-dom' 


export const FooterContainer = styled.div`
    background: rgb(230,230,250);
    height: 57vh;
    overflow: hidden;

    @media screen and (max-width: 1024px) {
        height: 570px;
    }
`

export const FooterWrapper = styled.div`
    height: 45vh;
    display: grid;
    width: 100%;
    font-family: 'Open Sans', sans-serif;
    overflow: hidden;

    @media screen and (max-width: 1024px) {
        height: 450px;
    }
`

export const Row1 = styled.div`
    height: 100%;
    justify-content: center;
    display: flex;
    align-items: center;
`

export const Column1 = styled.div`
    width: 30%;
    height: 40vh;
    float: left;
    text-align: center;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4vh;
    margin-bottom: 4vh;
    margin-left: -3vw;

    @media screen and (max-width: 1024px) {
        margin-left: -40px;
        height: 400px;
        margin-top: 40px;
        margin-bottom: 40px;
        margin-left: -60px;
    }

    @media screen and (max-width: 768px) {
        margin-left: -35px;
    }

    @media screen and (max-width: 414px) {
        margin-left: -20px;
    }

    @media screen and (max-width: 411px) {
        margin-left: -20px;
    }

    @media screen and (max-width: 360px) {
        margin-left: -20px;
    }

    @media screen and (max-width: 320px) {
        margin-left: -15px;
    }
`

export const Column2 = styled.div`
    width: 30%;
    height: 40vh;
    padding-left: 7.5vw;
    padding-right: 7.5vw;
    float: left;
    text-align: center;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4vh;
    margin-bottom: 4vh;

    @media screen and (max-width: 1024px) {
        height: 400px;
        padding-left: 15px;
        padding-right: 15px;
        margin-top: 40px;
        margin-bottom: 40px;
    }
`

export const Column3 = styled.div`
    width: 30%;
    height: 40vh;
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    overflow: hidden;
    margin-top: 4vh;
    margin-bottom: 4vh;

    @media screen and (max-width: 1024px) {
        height: 400px;
        margin-top: 40px;
        margin-bottom: 40px;
    }

    @media screen and (max-width: 1024px) and (min-height: 1366px) {
        padding-left: 60px;
        padding-right: 60px;
    }

    @media screen and (max-width: 768px) and (max-height: 1024px) {
        padding-left: 30px;
        padding-right: 30px;
    }

    @media screen and (max-width: 411px) and (max-height: 823px) {
        padding-left: 10px;
        padding-right: 10px;
    }

    @media screen and (max-width: 414px) and (max-height: 736px) {
        padding-left: 15px;
        padding-right: 15px;
    }

    @media screen and (max-width: 411px) and (max-height: 731px) {
        padding-left: 10px;
        padding-right: 10px;
    }

    @media screen and (max-width: 375px) and (max-height: 667px) {
        padding-left: 5px;
        padding-right: 5px;
    }

    @media screen and (max-width: 360px) and (max-height: 640px) {
        padding-left: 10px;
        padding-right: 10px;
    }

    @media screen and (max-width: 320px) and (max-height: 568px) {
        padding-left: 10px;
        padding-right: 10px;
    }
`

export const PreFooterWrapper = styled.div`
    background: rgb(0,0,0, 0.1);
    height: 8vh;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    font-weight: 500;
    font-size: 2.5vh;
    padding-left: 10vw;
    padding-right: 10vw;
    overflow: hidden;

    @media screen and (max-width: 1024px) {
        font-size: 1.4rem;
        height: 80px;
        font-size: 1.5rem;
        padding: 0 20px;
    }

    @media screen and (max-width: 768px) {
        font-size: 1.2rem;
    }

    @media screen and (max-width: 414px) {
        font-size: 1.1rem;
    }

    @media screen and (max-width: 411px) {
        font-size: 1.05rem;
    }

    @media screen and (max-width: 375px) {
        font-size: 0.95rem;
    }

    @media screen and (max-width: 360px) {
        font-size: 0.92rem;
    }

    @media screen and (max-width: 320px) {
        font-size: 0.8rem;
    }

    @media screen and (max-width: 280px) {
        font-size: 0.7rem;
    }
`

export const SubFooterContainer = styled.div`
    background: thistle;
    height: 4vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1024px) {
        height: 40px;
    }

`

export const SubSubFooterContainer = styled.div`
    background: rgb(0,0,0,0.9);
    height: 8vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1024px) {
        height: 80px;
    }

`

export const Title = styled.h3`
    color: black;
    font-size: 2.5vh;
    font-weight: 700;
    font-family: 'Open Sans', sans-serif;
    margin-top: 30px;

    @media screen and (max-width: 1024px) {
        margin-top: 15px;
        font-size: 1.25rem;
    }

    @media screen and (max-width: 768px) {
        margin-top: 30px;
    }

    @media screen and (max-width: 685px) {
        font-size: 1rem;
        margin-top: 8px;
    }

    @media screen and (max-width: 540px) {
        font-size: 0.9rem;
        margin-top: 5px;
    }

    @media screen and (max-width: 414px) {
        font-size: 0.8rem;
        margin-top: 0px;
    }

    @media screen and (max-width: 411px) {
        margin-top: 5px;
    }

    @media screen and (max-width: 360px) {
        font-size: 0.9rem;
        margin-top: 5px;
    }

    @media screen and (max-width: 320px) {
        font-size: 0.7rem;
        margin-top: 15px;

    }

    @media screen and (max-width: 280px) {
        font-size: 0.75rem;
        margin-top: 30px;
    }
`

export const NavLinkScroll = styled(LinkScroll)`
    color: black;
    font-family: 'Open Sans', sans-serif;
    font-size: 1.75vh;
    font-weight: 400;
    margin-top: 1vh;
    display: grid;
    cursor: pointer;

    @media screen and (max-width: 1024px) {
        margin-top: 10px;
        font-size: 1rem;
    }

    @media screen and (max-width: 768px) {
        font-size: 0.85rem;
    }

    @media screen and (max-width: 600px) {
        font-size: 0.8rem;
    }

    @media screen and (max-width: 540px) and (max-height: 720px) {
        font-size: 0.8rem;
    }

    @media screen and (max-width: 414px) {
        font-size: 0.8rem;
    }

    @media screen and (max-width: 320px) {
        font-size: 0.7rem;
    }

    @media screen and (max-width: 280px) {
        font-size: 0.6rem;
    }


    &:hover {
        font-weight: 700;
    }
`

export const NavLink = styled(LinkRouter)`
    color: black;
    font-family: 'Open Sans', sans-serif;
    font-size: 1.75vh;
    font-weight: 400;
    margin-top: 1.5vh;
    display: grid;
    text-decoration: none;
    cursor: pointer;

    @media screen and (max-width: 1024px) {
        margin-top: 15px;
        font-size: 1rem;
    }

    @media screen and (max-width: 768px) {
        font-size: 0.85rem;
    }

    @media screen and (max-width: 600px) {
        font-size: 0.8rem;
    }

    @media screen and (max-width: 540px) and (max-height: 720px) {
        font-size: 0.8rem;
    }

    @media screen and (max-width: 414px) {
        font-size: 0.8rem;
    }

    @media screen and (max-width: 375px) and (max-height: 812px) {
        font-size: 0.75rem;
    }

    @media screen and (max-width: 320px) {
        font-size: 0.7rem;
    }

    @media screen and (max-width: 280px) {
        font-size: 0.6rem;
    }

    

    &:hover {
        font-weight: 700;
    }
`

export const SubSubText = styled(LinkRouter)`
    color: white;
    font-size: 2.5vh;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
    background: transparent;
    border: none;
    text-decoration: none;
    cursor: pointer;
    outline: none;
    float: right;

    @media screen and (max-width: 1024px) {
        font-size: 1.25rem;
    }

    &:hover {
        color: thistle;
    }
`

export const SubText = styled.span`
    color: black;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5vh;
    float: left;

    @media screen and (max-width: 1024px) {
        font-size: 0.8rem;
    }

    @media screen and (max-width: 768px) {
        font-size: 0.6rem;
    }

    @media screen and (max-width: 280px) {
        font-size: 0.5rem;
    }
`