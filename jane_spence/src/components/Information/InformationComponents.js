import styled from 'styled-components'
// used for links that redirect using smooth scroll (i.e. all pages except for enquire)
import { Link as LinkScroll } from 'react-scroll'

export const InformationContainer = styled.div`
    background: ${({darkBackground}) => (darkBackground ? 'black' : 'white')};
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
    height: max(90vh, 700px);
`

export const Row1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    overflow-x: hidden;

    @media screen and (max-width: 1366px) {
        margin-top: -10vmin;
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
    margin-left: 3vmin;
    margin-right:  2vmin;

    @media screen and (max-width: 1024px) {
        margin-left: 15px;
        margin-right: 15px;
    }
`

export const Title = styled.h1`
    font-size: max(1.75rem, 4.5vmin);
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    color: ${({darkText}) => (darkText ? 'black' : 'thistle')};
`

export const Subtitle = styled.h1`
    margin-top: 2vh;
    font-size: max(1.5rem, 3.5vmin);
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    color: ${({darkText}) => (darkText ? 'black' : 'thistle')};
    display: ${({showSubtitle}) => (showSubtitle ? '' : 'none')}; 
`

export const Body = styled.p`
    margin-top: 1vh;
    font-size: max(1.2rem, 1.8vmin);
    font-family: 'Open Sans', sans-serif;
    color: ${({darkText}) => (darkText ? 'black' : 'white')};
    display: ${({showBody}) => (showBody ? '' : 'none')};
    white-space: pre-wrap;

    @media screen and (max-width: 1500px) {
        font-size: max(0.9rem, 1.8vmin);
    }
`

export const SubBody = styled.p`
    margin-top: 1vh;
    font-size: max(1.2rem, 1.8vmin);
    font-family: 'Open Sans', sans-serif;
    color: ${({darkText}) => (darkText ? 'black' : 'white')};
    display: ${({showBody}) => (showBody ? '' : 'none')};

    @media screen and (max-width: 1500px) {
        font-size: max(0.9rem, 1.8vmin);
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
    outline: solid 2px blue;
`

export const ImgWrap = styled.div`
    width: 100%;
    height: 100%;

    @media screen and (max-width: 1024px) {
        display: none;
    }
`

export const Img = styled.img`
    width: 100%;
    height: 100%;
`

export const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Open Sans', sans-serif;

`

export const Button = styled(LinkScroll)`
    display: ${({showButton}) => (showButton ? '' : 'none')};
    border-radius: max(30px, 5vmin);
    background: ${({darkButton}) => (darkButton ? 'black' : 'thistle')};
    white-space: nowrap;
    padding: max(10px, 1vmin) max(20px, 2vmin);
    color: ${({darkButtonText}) => (darkButtonText ? 'black' : 'white')};
    font-size: max(0.8rem, 2vmin);
    font-weight: 600;
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

export const AccordionWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    font-family: 'Open Sans', sans-serif;
    margin-top: 3vmin;
    margin-bottom: 3vmin;
    overflow: hidden;
    padding-left: 2vmin;
    padding-right: 2vmin;
    width: 100%;
    display: ${({showAccordion}) => (showAccordion ? '' : 'none')};
`


export const Accordion = styled.div`
    color: white;
    width: 100%;
`

export const QuestionWrapper = styled.div`
    
    background: rgb(13,16,22,0.4);
    border-radius: 5vmin;
    padding: 20px;
    cursor: pointer;
    font-size: 2.75vmin;
    height: 5vmin;
    display: flex;
    font-family: 'Open Sans', sans-serif;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2vmin;

    @media screen and (max-width: 768px) {
        font-size: 3.1vmin;
    }

    @media screen and (max-width: 280px) {
        font-size: 3vmin;
    }

    &:hover {
        color: thistle;
    }
    
`

export const AnswerWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2vmin;
    font-size: max(0.8rem, 2vmin);

`

export const DescriptionWrapper = styled.div`
    display: flex;
    text-align: center;
    width: 90%;
    justify-content: center;
    align-items: center;
    margin-top: 2vmin;
    margin-bottom: 1vmin;
    padding-left: 2vmin;
    padding-right: 2vmin;
    display: ${({showDescription}) => (showDescription ? '' : 'none')};
`

export const Description = styled.p`
    color: white;
    font-size: max(0.8rem, 2vmin);
    font-weight: 200;
    font-family: 'Open Sans', sans-serif;
`