import styled from 'styled-components'
// used for links that redirect using smooth scroll (i.e. all pages except for enquire)
import { Link as LinkScroll } from 'react-scroll'
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap');
`

export const InformationContainer = styled.div`
    background: ${({darkBackground}) => (darkBackground ? 'white' : 'rgb(242,243,244)')};
    display: flex;
    flex-direction: column;
    overflow: hidden;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
        padding: 100px 0;
        width: 100%;
        overflow-x: hidden;
    }
`

export const InformationWrapper = styled.div`
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    height: max(85vh, 700px);

    @media screen and (max-width: 768px) {
        height: 100%;
    }
`

export const Row1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    overflow-x: hidden;

    @media screen and (max-width: 1024px) {
        margin-top: 0;
    }
`

export const Column1 = styled.div`
    grid-area: col1;
    display: flex;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 100%;
    margin-left: 6vmin;
    margin-right:  -2vmin;

    @media screen and (max-width: 1024px) {
        margin-top: 0;
        margin-left: 30px;
        margin-right: 30px;
    }
`

export const Title = styled.h1`
    font-size: max(2rem, 4vmin);
    font-weight: 500;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    color: ${({darkText}) => (darkText ? '#696969' : 'thistle')};
    border-bottom: ${({titleUnderline}) => (titleUnderline ? 'solid max(1px, 0.1vmin) black' : 'none')};
    margin-bottom: ${({titleUnderline}) => (titleUnderline ? 'max(1vmin, 10px)' : 'none')};
    padding-bottom: max(10px, 1vmin);
    text-align: ${({leftAlign}) => (leftAlign ? 'left' : 'center')};
    width: ${({maxWidth}) => (maxWidth ? '100%' : 'initial')};
`

export const Subtitle = styled.h1`
    margin-top: max(25px, 2.5vmin);
    font-size: max(2rem, 4vmin);
    font-weight: 500;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    color: ${({darkText}) => (darkText ? '#696969' : 'thistle')};
    display: ${({showSubtitle}) => (showSubtitle ? '' : 'none')}; 
    border-bottom: solid 1px black;
    margin-bottom: max(1vmin, 10px);
    padding-bottom: max(10px, 1vmin);
    width: 100%;
    text-align: right;
`

export const Body = styled.p`
    margin-top: max(10px, 1vmin);
    font-size: max(0.925rem, 1.85vmin);
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    color: ${({darkText}) => (darkText ? '#696969' : 'white')};
    display: ${({showBody}) => (showBody ? '' : 'none')};
    white-space: pre-wrap;
    text-align: left;

    @media screen and (max-width: 1450px) and (min-height: 800px) {
        font-size: max(0.65rem, 1.7vmin);
    }

    @media screen and (max-width: 1024px) {
        line-height: 25px;
        font-size: max(0.85rem, 2vmin);
    }
`

export const SubBody = styled.p`
    margin-top: max(15px, 1.5vmin);
    font-size: max(0.925rem, 1.85vmin);
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    color: ${({darkText}) => (darkText ? '#696969' : 'white')};
    display: ${({showBody}) => (showBody ? '' : 'none')};
    text-align: right;
    width: 100%;

    @media screen and (max-width: 1450px) and (min-height: 800px) {
        font-size: max(0.65rem, 1.7vmin);
    }

    @media screen and (max-width: 1024px) {
        line-height: 25px;
        font-size: max(0.85rem, 2vmin);
    }

    @media screen and (max-width: 768px) {
        margin-top: max(10px, 1vmin);
    }
`

export const Column2 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 3vmin;
    height: 80%;
    width: 100%;
    padding-right: max(15px, 2.5vw);

    @media screen and (max-width: 1024px) {
        display: none;
    }
`

export const TextWrapper = styled.div`
    display: flex;
    padding: 0 2.5vw;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%:
`

export const ImgWrap = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1024px) {
        display: none;
    }
`

export const Img = styled.img`
    width: 90%;
    border-radius: 30px;
`

export const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: max(5px, 1vmin);
`

export const Button = styled(LinkScroll)`
    display: ${({showButton}) => (showButton ? '' : 'none')};
    border-radius: max(30px, 3vmin);
    background: ${({darkButton}) => (darkButton ? 'rgb(69,74,88)' : 'thistle')};
    white-space: nowrap;
    padding: max(13px, 1.2vmin) max(35px, 2.6vmin);
    color: ${({darkButtonText}) => (darkButtonText ? 'black' : 'white')};
    font-size: max(0.9rem, 2vmin);
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    outline: none;
    border: none;
    cursor: pointer;
    text-decoration: none; 
    transition: 0.1s;

    &:hover {
        background: rgb(69,74,88);
        color: rgb(216,191,216);
        transition: 0.1s;
        /* Enable hardware acceleration to fix laggy transitions */
        -webkit-transform: translateZ(0);
        -moz-transform: translateZ(0);
        -ms-transform: translateZ(0);
        -o-transform: translateZ(0);
        transform: translateZ(0);
    }

    @media screen and (max-width: 768px) {
        border-radius: max(30px, 3vmin);
        background: thistle;
        white-space: nowrap;
        padding: max(10px, 1.1vmin) max(30px, 2.5vmin);
        color: black;
        font-size: max(0.9rem, 2vmin);
        font-family: 'Montserrat';
        font-weight: 400;
        outline: none;
        border: none;
        cursor: pointer;
        text-decoration: none;
        transition: 0.1s;
        width: 100%;
    }
`

export const AccordionWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-top: max(15px, 1.5vmin);
    margin-bottom: max(15px, 1.5vmin);
    overflow: hidden;
    padding-left: max(10px, 2vmin);
    padding-right: max(10px, 2vmin);
    width: 100%;
    display: ${({showAccordion}) => (showAccordion ? '' : 'none')};
    font-family: 'Montserrat', sans-serif;
`


export const Accordion = styled.div`
    color: white;
    width: 100%;
`

export const QuestionWrapper = styled.div`
    
    background: rgb(13,16,22,0.1);
    border-radius: 5vmin;
    padding: max(2.5vmin, 25px);
    cursor: pointer;
    font-size: max(1rem, 2vmin);
    height: max(40px, 6vmin);
    display: flex;
    justify-content: space-between;
    text-align: left;
    align-items: center;
    margin-bottom: max(20px, 2vmin);
    color: #696969;
    transition: 0.5s;

    @media screen and (max-width: 1470px) and (min-height: 800px) {
        font-size: max(0.9rem, 1.25vw);
    }

    @media screen and (max-width: 767px) {
        font-size: max(0.9rem, 1.25vw);
    }

    @media screen and (max-width: 280px) {
        font-size: max(0.8rem, 1.25vw);
    }

    &:hover {
        transition: 0.1s;
        background: rgb(69,74,88);
        color: rgb(216,191,216);
        /* Enable hardware acceleration to fix laggy transitions */
        -webkit-transform: translateZ(0);
        -moz-transform: translateZ(0);
        -ms-transform: translateZ(0);
        -o-transform: translateZ(0);
        transform: translateZ(0);
    }
`

export const AnswerWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: max(20px, 2vmin);
    font-size: max(0.8rem, 1.75vmin);
    color: black;
    font-weight: 400;
`

export const DescriptionWrapper = styled.div`
    display: flex;
    text-align: center;
    width: 90%;
    justify-content: center;
    align-items: center;
    margin-bottom: max(10px, 1vmin);
    padding-left: max(20px, 2vmin);
    padding-right: max(20px, 2vmin);
    display: ${({showDescription}) => (showDescription ? '' : 'none')};

    @media screen and (max-width: 1024px) {
        width: 95%;
    }
`

export const Description = styled.p`
    color: #696969;
    font-size: max(0.85rem, 2vmin);
    font-weight: 300;
    font-family: 'Montserrat', sans-serif;

    @media screen and (max-width: 768px) {
        font-size: max(0.95rem, 2.2vmin);
    }
`