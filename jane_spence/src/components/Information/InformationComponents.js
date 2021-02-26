import styled from 'styled-components'
// used for links that redirect using smooth scroll (i.e. all pages except for enquire)
import { Link as LinkScroll } from 'react-scroll'

export const InformationContainer = styled.div`
    background: ${({darkBackground}) => (darkBackground ? 'black' : 'white')};
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 768px) {
        padding: 100px 0;
        width: 100%;
        overflow-x: hidden;
    }
`

export const InformationWrapper = styled.div`
    z-index: 1;
    height: 900px;
    display: flex;
    
    @media screen and (max-width: 360px) and (max-height: 640px) {
        height: 640px;
    }

    @media screen and (max-width: 411px) and (max-height: 731px) {
        height: 625px;
    }

    @media screen and (max-width: 411px) and (max-height: 823px) {
        height: 625px;
    }

    @media screen and (max-width: 320px) and (max-height: 568px) {
        height: 650px;
    }

    @media screen and (max-width: 375px) and (max-height: 667px) {
        height: 625px;
    }

    @media screen and (max-width: 414px) and (max-height: 736px) {
        height: 625px;
    }

    @media screen and (max-width: 375px) and (max-height: 812px) {
        height: 625px;
    }

    @media screen and (max-width: 280px) and (max-height: 653px) {
        height: 680px;
    }

    
    
`

export const Row1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
`

export const Column1 = styled.div`
    margin-bottom: -30px;
    margin-left: 70px;
    padding: 0 15px;
    grid-area: col1;
    overflow: hidden;
    margin-right: 100px;
    text-align: center;
    
    @media screen and (max-width: 1400px) {
        padding-left: 0px;
    }

    @media screen and (max-width: 1024px) {
        margin-right: 0px;
        display: grid;
        align-items: center;
        justify-content: center;
        padding-left: 0;
    }

    @media screen and (max-width: 768px) { 
        margin-left: 30px;
        margin-top: -30px;
    }

    @media screen and (max-width: 414px) { 
        margin-left: 37px;
        margin-top: -30px;
    }

    @media screen and (max-width: 375px) { 
        margin-left: 20px;
        margin-right: -25px;
        margin-top: -30px;
    }

    @media screen and (max-width: 280px) { 
        margin-left: 0px;
        margin-right: -45px;
        margin-top: -30px;
    }

`

export const Title = styled.h1`
    font-size: 2rem;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    color: ${({darkText}) => (darkText ? 'black' : 'pink')};
    
   

`

export const Subtitle = styled.h1`
    margin-top: 40px;
    font-size: 1.5rem;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    color: ${({darkText}) => (darkText ? 'black' : 'pink')};
    display: ${({showSubtitle}) => (showSubtitle ? '' : 'none')};

    
`

export const Body = styled.p`
    margin-top: 15px;
    font-size: 1.25rem;
    font-family: 'Montserrat', sans-serif;
    color: ${({darkText}) => (darkText ? 'black' : 'white')};
    display: ${({showBody}) => (showBody ? '' : 'none')};

    @media screen and (max-width: 280px) {
        padding-left: 0px;
        margin-left: 10px;
        margin-right: 10px;
        font-size: 1.2rem;
    }
    


`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;

    @media screen and (max-width: 900px) {
        display: none;
    }
`

export const Img = styled.img`
    width: 100%;
    height: 100%;
    padding-right: 0px;
    margin: 0 0 10px 0;

    @media screen and (max-width: 1270px) {
        display: none;
    }
`

export const ButtonWrapper = styled.div`
    display: flex;
    padding-top: 40px;
    align-items: center;
    justify-content: center;
    font-family: 'Montserrat', sans-serif;

`

export const Button = styled(LinkScroll)`
    display: ${({showButton}) => (showButton ? '' : 'none')};
    border-radius: 50px;
    background: ${({darkButton}) => (darkButton ? 'black' : 'pink')};
    white-space: nowrap;
    padding: 10px 22px;
    color: ${({darkButtonText}) => (darkButtonText ? 'black' : 'white')};
    font-size: 1rem;
    font-weight: 600;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    @media screen and (max-width: 414px) {
        font-size: 0.9rem;
    }

    @media screen and (max-width: 360px) {
        font-size: 0.8rem;
    }

    @media screen and (max-width: 320px) {
        font-size: 0.7rem;
    }

    @media screen and (max-width: 280px) {
        font-size: 0.6rem;
    }

    &:hover {
        transition: all 0.2s ease-in-out;
        background: white;
        color: black;
    }
`

export const AccordionWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    font-family: 'Montserrat', sans-serif;
    height: 400px;
    width: 500px;
    overflow: hidden;
    margin-top: 60px;
    display: ${({showAccordion}) => (showAccordion ? '' : 'none')};

    @media screen and (max-width: 575px) {
        width: 440px;
    }

    @media screen and (max-width: 414px) {
        width: 340px;
    }

    @media screen and (max-width: 375px) {
        width: 330px;
    }

    @media screen and (max-width: 360px) {
        width: 320px;
    }

    @media screen and (max-width: 320px) {
        width: 280px;
    }

    @media screen and (max-width: 280px) {
        width: 250px;
    }
`


export const Accordion = styled.div`
    color: white;
    width: 100%;
    justify-content: center;
    align-items: center;
`

export const QuestionWrapper = styled.div`
    
    background: rgba(10, 10, 10, 1);
    border-radius: 10px;
    cursor: pointer;
    font-size: 1.25rem;
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;

    @media screen and (max-width: 575px) {
        font-size: 1.2rem;
    }

    @media screen and (max-width: 414px) {
        font-size: 0.85rem;
    }

    @media screen and (max-width: 360px) {
        font-size: 0.81rem;
    }

    @media screen and (max-width: 320px) {
        font-size: 0.7rem;
    }

    @media screen and (max-width: 280px) {
        font-size: 0.6rem;
    }

    &:hover {
        color: pink;
    }
    
`

export const AnswerWrapper = styled.div`
    padding-bottom: 20px;

    @media screen and (max-width: 414px) {
        font-size: 0.85rem;
    }

    @media screen and (max-width: 360px) {
        font-size: 0.8rem;
    }

    @media screen and (max-width: 320px) {
        font-size: 0.75rem;
    }

    @media screen and (max-width: 280px) {
        font-size: 0.7rem;
    }

`