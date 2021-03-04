import styled from 'styled-components'
// used for links that redirect using smooth scroll (i.e. all pages except for enquire)
import { Link as LinkScroll } from 'react-scroll'

export const InformationContainer = styled.div`
    background: ${({darkBackground}) => (darkBackground ? 'black' : 'white')};
    display: flex;
    flex-direction: column;
    overflow: hidden;

    @media screen and (max-width: 768px) {
        padding: 100px 0;
        width: 100%;
        overflow-x: hidden;
    }
`

export const InformationWrapper = styled.div`
    z-index: 1;
    height: 100vh;
    display: flex;
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

    @media screen and (max-width: 540px) and (min-height: 720px) {
        margin-left: 40px;
    }

    @media screen and (max-width: 414px) { 
        margin-left: 37px;
        margin-top: -30px;
    }


    @media screen and (max-width: 375px) { 
        margin-left: 20px;
        margin-right: -25px;
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
    margin-top: 40px;
    font-family: 'Montserrat', sans-serif;
    color: ${({darkText}) => (darkText ? 'black' : 'thistle')};

    @media screen and (min-height: 720px) {
        margin-top: 0px;
    }

    @media screen and (max-width: 768px) {
        font-size: 1.75rem;
    }
    
    @media screen and (max-width: 540px) and (max-height: 720px) {
        margin-top: 20px;
    }

    @media screen and (max-width: 414px) and (max-height: 736px) {
        margin-top: 12px;
    }

    @media screen and (max-width: 411px) and (max-height: 823px) {
        margin-top: 10px;
    }

    @media screen and (max-width: 411px) and (max-height: 731px) {
        margin-top: 10px;
    }

    @media screen and (max-width: 360px) and (max-height: 640px) {
        margin-top: 15px;
    }
`

export const Subtitle = styled.h1`
    margin-top: 40px;
    font-size: 1.5rem;
    text-transform: uppercase;
    font-family: 'Open Sans', sans-serif;
    color: ${({darkText}) => (darkText ? 'black' : 'thistle')};
    display: ${({showSubtitle}) => (showSubtitle ? '' : 'none')};

    
`

export const Body = styled.p`
    margin-top: 15px;
    font-size: 1.25rem;
    font-family: 'Montserrat', sans-serif;
    color: ${({darkText}) => (darkText ? 'black' : 'white')};
    display: ${({showBody}) => (showBody ? '' : 'none')};
    padding-left: 20px;
    padding-right: 20px;

    @media screen and (max-width: 1440px) {
        font-size: 1.1rem;
    }

    @media screen and (max-width: 1024px) and (min-height: 1366px) {
        font-size: 1.5rem;
        margin-top: 40px;
        margin-bottom: 40px;
    }

    @media screen and (max-height: 720px) {
        font-size: 1rem;
    }

    @media screen and (max-width: 768px) and (max-height: 1024px) {
        font-size: 1.25rem;
    }

    @media screen and (max-width: 550px) {
        font-size: 1.15rem;
    }

    @media screen and (max-width: 540px) and (max-height: 720px) {
        font-size: 1.1rem;
    }

    @media screen and (max-width: 414px) and (max-height: 736px) {
        font-size: 1rem;
    }

    @media screen and (max-width: 411px) and (max-height: 823px) {
        font-size: 1rem;
    }

    @media screen and (max-width: 411px) and (max-height: 731px) {
        font-size: 1rem;
    }

    @media screen and (max-width: 375px) and (max-height: 812px) {
        font-size: 1rem;
    }

    @media screen and (max-width: 375px) and (max-height: 667px) {
        font-size: 1rem;
    }

    @media screen and (max-width: 360px) and (max-height: 640px) {
        font-size: 0.95rem;
    }

    @media screen and (max-width: 280px) {
        font-size: 0.9rem;
        padding-left: 25px;
        padding-right: 25px;
    }

`

export const SubBody = styled.p`
    margin-top: 15px;
    font-size: 1.3rem;
    font-family: 'Montserrat', sans-serif;
    color: ${({darkText}) => (darkText ? 'black' : 'white')};
    display: ${({showBody}) => (showBody ? '' : 'none')};
    padding-left: 20px;
    padding-right: 20px;
    
    @media screen and (max-width: 1440px) {
        font-size: 1.1rem;
    }

    @media screen and (max-width: 1024px) and (max-height: 1366px) {
        font-size: 1.5rem;
    }

    @media screen and (max-height: 720px) {
        font-size: 1rem;
    }

    @media screen and (max-width: 768px) {
        font-size: 1.25rem;
    }

    @media screen and (max-width: 550px) {
        font-size: 1.15rem;
    }

    @media screen and (max-width: 540px) and (max-height: 720px) {
        font-size: 1.1rem;
    }

    @media screen and (max-width: 414px) and (max-height: 736px) {
        font-size: 1rem;
    }

    @media screen and (max-width: 411px) and (max-height: 823px) {
        font-size: 1rem;
    }

    @media screen and (max-width: 411px) and (max-height: 731px) {
        font-size: 1rem;
    }

    @media screen and (max-width: 375px) and (max-height: 812px) {
        font-size: 1rem;
    }

    @media screen and (max-width: 375px) and (max-height: 667px) {
        font-size: 1rem;
    }

    @media screen and (max-width: 360px) and (max-height: 640px) {
        font-size: 0.95rem;
    }

    @media screen and (max-width: 280px) {
        font-size: 0.9rem;
        padding-left: 25px;
        padding-right: 25px;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const ImgWrap = styled.div`
    width: 30vw;
    height: 30vw;

    @media screen and (max-width: 1024px) {
        display: none;
    }
`

export const Img = styled.img`
    width: 100%;
    height: 100%;
    padding-right: 0px;
    margin: 0 0 10px 0;

    @media screen and (max-width: 1024px) {
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
    background: ${({darkButton}) => (darkButton ? 'black' : 'thistle')};
    white-space: nowrap;
    padding: 10px 22px;
    color: ${({darkButtonText}) => (darkButtonText ? 'black' : 'white')};
    font-size: 1rem;
    font-weight: 600;
    margin-top: -50px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    @media screen and (max-width: 1024px) and (max-height: 1366px) {
        font-size: 1.3rem;
        margin-top: -30px;
    }

    @media screen and (max-width: 768px) and (max-height: 1024px) {
        font-size: 1.2rem;
        margin-top: -30px;
    }

    @media screen and (max-height: 806px) {
        margin-top: -60px;
    }

    @media screen and (max-height: 768px) {
        margin-top: -75px;
    }

    @media screen and (max-width: 540px) and (max-height: 720px) {
        font-size: 1rem;
        margin-top: -30px;
    }

    @media screen and (max-width: 414px) {
        font-size: 0.9rem;
        margin-top: -50px;
    }

    @media screen and (max-width: 375px) and (max-height: 667px) {
        font-size: 0.6rem;
        margin-top: -50px;
    }

    @media screen and (max-width: 360px) {
        font-size: 0.8rem;
        margin-top: -50px;
    }

    @media screen and (max-width: 320px) {
        font-size: 0.7rem;
        margin-top: -50px;
    }

    @media screen and (max-width: 280px) {
        font-size: 0.6rem;
        margin-top: -50px;
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
    font-family: 'Open Sans', sans-serif;
    height: 400px;
    width: 500px;
    overflow: hidden;
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
    
    background: rgb(13,16,22,0.4);
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

    @media screen and (max-width: 1024px) and (max-height: 1366px) {
        font-size: 1.3rem;
    }

    @media screen and (max-width: 768px) and (max-height: 1024px) {
        font-size: 1.3rem;
    }

    @media screen and (max-height: 806px) {
        font-size: 1.15rem;
    }

    @media screen and (max-width: 575px) {
        font-size: 1.1rem;
    }

    @media screen and (max-width: 540px) {
        font-size: 1.1rem;
    }

    @media screen and (max-width: 414px) {
        font-size: 0.85rem;
    }

    @media screen and (max-width: 375px) {
        font-size: 0.8rem;
    }

    @media screen and (max-width: 360px) {
        font-size: 0.77rem;
    }

    @media screen and (max-width: 320px) {
        font-size: 0.67rem;
    }

    @media screen and (max-width: 280px) {
        font-size: 0.5rem;
    }

    &:hover {
        color: thistle;
    }
    
`

export const AnswerWrapper = styled.div`
    padding-bottom: 20px;

    @media screen and (max-width: 1024px) and (max-height: 1366px) {
        font-size: 1.2rem;
    }

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

export const DescriptionWrapper = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    padding-left: 50px;
    padding-right: 50px;
    display: ${({showDescription}) => (showDescription ? '' : 'none')};

    @media screen and (max-width: 540px) and (max-height: 720px) {
        width: 90%;
        padding-left: 5px;
        padding-right: 5px;
    }

    @media screen and (max-width: 414px) and (max-height: 736px) {
        width: 85%;
        padding-left: 5px;
        padding-right: 5px;
    }

    @media screen and (max-width: 411px) and (max-height: 823px) {
        width: 90%;
        padding-left: 5px;
        padding-right: 5px;
    }

    @media screen and (max-width: 411px) and (max-height: 731px) {
        width: 90%;
        padding-left: 5px;
        padding-right: 5px;
    }


    @media screen and (max-width: 360px) and (max-height: 640px) {
        width: 90%;
        padding-left: 5px;
        padding-right: 5px;
    }

    @media screen and (max-width: 280px) {
        font-size: 0.9rem;
        padding-left: 25px;
        padding-right: 25px;
    }
`

export const Description = styled.p`
    color: white;
    font-size: 0.9rem;
    font-weight: 200;
    font-family: 'Open Sans', sans-serif;

    @media screen and (max-height: 806px) {
        font-size: 0.85rem;
    }

    @media screen and (max-height: 806px) {
        margin-top: -10px;
        margin-bottom: -10px;
    }

    @media screen and (max-width: 1024px) and (min-height: 1366px) {
        font-size: 1.2rem;
    }
`