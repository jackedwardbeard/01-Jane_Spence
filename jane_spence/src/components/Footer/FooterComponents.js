import styled from 'styled-components'
import { Link as LinkScroll } from 'react-scroll'
import { Link as LinkRouter } from 'react-router-dom' 


export const FooterContainer = styled.div`
    background: lavender;
    height: 490px;
    overflow: hidden;
`

export const FooterWrapper = styled.div`
    height: 450px;
    display: grid;
    width: 100%;
    font-family: 'Open Sans', sans-serif;
    overflow: hidden;
`

export const Row1 = styled.div`
    height: 100%;
    justify-content: center;
    display: flex;
    align-items: center;
`

export const Column1 = styled.div`
    width: 30%;
    height: 400px;
    float: left;
    text-align: center;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 40px;
    margin-left: -60px;

    @media screen and (max-width: 1024px) {
        margin-left: -40px;
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
    height: 400px;
    padding-left: 15px;
    padding-right: 15px;
    float: left;
    text-align: center;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 40px;
`

export const Column3 = styled.div`
    width: 30%;
    height: 400px;
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    overflow: hidden;
    margin-top: 40px;
    margin-bottom: 40px;

    @media screen and (max-width: 1024px) and (max-height: 1366px) {
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
    height: 80px;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    font-weight: 500;
    font-size: 1.5rem;
    padding-left: 20px;
    padding-right: 20px;
    overflow: hidden;

    @media screen and (max-width: 1024px) {
        font-size: 1.4rem;
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
    background: rgba(0,0,0,0.2);
    height: 40px;
    overflow: hidden;
    display: space-between;


`

export const Title = styled.h3`
    color: black;
    font-size: 1.25rem;
    font-weight: 700;
    font-family: 'Open Sans', sans-serif;
    margin-top: 25px;

    @media screen and (max-width: 1024px) {
        margin-top: 10px;
    }

    @media screen and (max-width: 768px) {
        margin-top: 25px;
    }

    @media screen and (max-width: 540px) {
        font-size: 0.9rem;
        margin-top: 0px;
    }

    @media screen and (max-width: 414px) {
        font-size: 0.8rem;
        margin-top: 0px;
    }

    @media screen and (max-width: 360px) {
        font-size: 0.9rem;
        margin-top: 5px;
    }

    @media screen and (max-width: 320px) {
        font-size: 0.7rem;

    }

    @media screen and (max-width: 280px) {
        font-size: 0.75rem;
        margin-top: 20px;
    }
`

export const NavLinkScroll = styled(LinkScroll)`
    color: black;
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    margin-top: 20px;
    display: grid;
    cursor: pointer;

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
        color: mediumorchid;
    }
`

export const NavLink = styled(LinkRouter)`
    color: black;
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    margin-top: 20px;
    display: grid;
    text-decoration: none;
    cursor: pointer;

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
        color: mediumorchid;
    }
`

export const LeftText = styled.span`
    color: black;
    font-weight: 600;
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    padding-right: 20px;
    margin-left: 20px;
    margin-top: 12px;
    float: left;

    @media screen and (max-width: 1024px) and (max-height: 1366px) {
        font-size: 1.1rem;
        margin-left: 20px;
        margin-top: 8px;
    }

    @media screen and (max-width: 768px) and (max-height: 1024px) {
        font-size: 0.8rem;
        margin-left: 20px;
        margin-top: 11px;
    }

    @media screen and (max-width: 520px) {
        font-size: 0.6rem;
        margin-top: 14px;
    }

    @media screen and (max-width: 414px) and (max-height: 736px) {
        font-size: 0.6rem;
        margin-left: 20px;
        margin-top: 14px;
    }

    @media screen and (max-width: 411px) and (max-height: 823px) {
        font-size: 0.6rem;
        margin-left: 20px;
        margin-top: 14px;
    }

    @media screen and (max-width: 411px) and (max-height: 731px) {
        font-size: 0.6rem;
        margin-left: 20px;
        margin-top: 14px;
    }

    @media screen and (max-width: 400px) {
        font-size: 0.4rem;
        margin-top: 17px;
    }

    @media screen and (max-width: 375px) and (max-height: 812px) {
        font-size: 0.55rem;
        margin-left: 20px;
        margin-top: 14px;
    }

    @media screen and (max-width: 375px) and (max-height: 667px) {
        font-size: 0.55rem;
        margin-left: 20px;
        margin-top: 14px;
    }

    @media screen and (max-width: 360px) and (max-height: 640px) {
        font-size: 0.5rem;
        margin-left: 20px;
        margin-top: 14px;
    }

    @media screen and (max-width: 320px) and (max-height: 568px) {
        font-size: 0.45rem;
        margin-left: 20px;
        margin-top: 14px;
    }

    @media screen and (max-width: 280px) and (max-height: 653px) {
        font-size: 0.7rem;
        margin-left: 28px;
        margin-top: 12px;
    }
`

export const RightText = styled(LinkRouter)`
    color: black;
    font-size: 1rem;
    font-weight: 600;
    font-family: 'Open Sans', sans-serif;
    background: transparent;
    border: none;
    text-decoration: none;
    cursor: pointer;
    outline: none;
    float: right;
    margin-right: 20px;
    margin-top: 9px;

    @media screen and (max-width: 1024px) and (max-height: 1366px) {
        font-size: 1.1rem;
        margin-right: 20px;
        margin-top: 8px;
    }

    @media screen and (max-width: 768px) and (max-height: 1024px) {
        font-size: 0.8rem;
        margin-right: 20px;
        margin-top: 11px;
    }

    @media screen and (max-width: 540px) and (max-height: 720px) {
        font-size: 0.75rem;
        margin-right: 20px;
        margin-top: 10px;
    }

    @media screen and (max-width: 520px) {
        font-size: 0.6rem;
        margin-top: 14px;
    }

    @media screen and (max-width: 414px) and (max-height: 736px) {
        font-size: 0.6rem;
        margin-right: 20px;
        margin-top: 14px;
    }

    @media screen and (max-width: 411px) and (max-height: 823px) {
        font-size: 0.6rem;
        margin-right: 20px;
        margin-top: 14px;
    }

    @media screen and (max-width: 411px) and (max-height: 731px) {
        font-size: 0.6rem;
        margin-right: 20px;
        margin-top: 14px;
    }

    @media screen and (max-width: 400px) {
        font-size: 0.4rem;
        margin-top: 15px;
    }

    @media screen and (max-width: 375px) and (max-height: 812px) {
        font-size: 0.55rem;
        margin-right: 20px;
        margin-top: 14px;
    }

    @media screen and (max-width: 375px) and (max-height: 667px) {
        font-size: 0.55rem;
        margin-right: 20px;
        margin-top: 14px;
    }

    @media screen and (max-width: 360px) and (max-height: 640px) {
        font-size: 0.5rem;
        margin-right: 20px;
        margin-top: 14px;
    }

    @media screen and (max-width: 320px) and (max-height: 568px) {
        font-size: 0.45rem;
        margin-right: 20px;
        margin-top: 14px;
    }

    @media screen and (max-width: 280px) {
        display: none;
    }

    &:hover {
        font-weight: 700;
        background: -webkit-linear-gradient(red, black);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
    }

`