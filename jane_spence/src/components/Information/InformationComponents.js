import styled from 'styled-components'
// used for links that redirect using smooth scroll (i.e. all pages except for enquire)
import { Link as LinkScroll } from 'react-scroll'

export const InformationContainer = styled.div`
    background: ${({darkBackground}) => (darkBackground ? 'white' : 'rgb(245,245,245)')};
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
    margin-left: 3vmin;
    margin-right:  -2vmin;

    @media screen and (max-width: 1024px) {
        margin-top: 0;
        margin-left: 15px;
        margin-right: 15px;
        padding: 0 max(5px, 0.5vw);
    }
`

export const Title = styled.h1`
    font-size: max(2.2rem, 4.8vmin);
    font-weight: 800;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    color: ${({darkText}) => (darkText ? 'black' : 'thistle')};
`

export const Subtitle = styled.h1`
    margin-top: 2.5vh;
    font-size: max(1.75rem, 3.5vmin);
    font-weight: 800;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    color: ${({darkText}) => (darkText ? 'black' : 'thistle')};
    display: ${({showSubtitle}) => (showSubtitle ? '' : 'none')}; 
`

export const Body = styled.p`
    margin-top: 1vh;
    font-size: max(1rem, 2vmin);
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    color: ${({darkText}) => (darkText ? '#696969' : 'white')};
    display: ${({showBody}) => (showBody ? '' : 'none')};
    white-space: pre-wrap;

    @media screen and (max-width: 1024px) {
        font-size: max(0.85rem, 2vmin);
    }
`

export const SubBody = styled.p`
    margin-top: max(20px, 2vmin);
    font-size: max(1rem, 2vmin);
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    color: ${({darkText}) => (darkText ? '#696969' : 'white')};
    display: ${({showBody}) => (showBody ? '' : 'none')};

    @media screen and (max-width: 1024px) {
        font-size: max(0.85rem, 2vmin);
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
    width: 100%;
    height: 80%;
`

export const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Open Sans', sans-serif;
    width: 100%;
    margin-top: max(10px, 2vmin);

`

export const Button = styled(LinkScroll)`
    display: ${({showButton}) => (showButton ? '' : 'none')};
    border-radius: max(30px, 5vmin);
    background: ${({darkButton}) => (darkButton ? 'black' : 'thistle')};
    white-space: nowrap;
    padding: max(12.5px, 1.15vmin) max(25px, 2.4vmin);
    color: ${({darkButtonText}) => (darkButtonText ? 'black' : 'white')};
    font-size: max(0.85rem, 2vmin);
    font-weight: 700;
    outline: none;
    border: none;
    cursor: pointer;
    text-decoration: none; 

    &:hover {
        color: thistle;
    }

    @media screen and (max-width: 320px) {
        font-size: 0.8rem;
    }

    @media screen and (max-width: 280px) {
        font-size: 0.7rem;
    }

    
`

export const AccordionWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    font-family: 'Open Sans', sans-serif;
    margin-top: max(15px, 1.5vmin);
    margin-bottom: max(15px, 1.5vmin);
    overflow: hidden;
    padding-left: max(10px, 2vmin);
    padding-right: max(10px, 2vmin);
    width: 100%;
    display: ${({showAccordion}) => (showAccordion ? '' : 'none')};
`


export const Accordion = styled.div`
    color: white;
    width: 100%;
`

export const QuestionWrapper = styled.div`
    
    background: rgb(13,16,22,0.05);
    border-radius: 5vmin;
    padding: max(2.5vmin, 25px);
    cursor: pointer;
    font-size: max(1rem, 1.25vw);
    height: max(60px, 6vmin);
    display: flex;
    font-family: 'Open Sans', sans-serif;
    justify-content: space-between;
    text-align: left;
    align-items: center;
    margin-bottom: max(20px, 2vmin);
    color: black;

    @media screen and (max-width: 280px) {
        font-size: max(0.8rem, 1.25vw);
    }

    &:hover {
        background: rgb(13,16,22,0.1);
    }
    
`

export const AnswerWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: max(20px, 2vmin);
    font-size: max(0.8rem, 2vmin);
    color: black;
    font-weight: 500;

`

export const DescriptionWrapper = styled.div`
    display: flex;
    text-align: center;
    width: 80%;
    justify-content: center;
    align-items: center;
    margin-top: max(20px, 2vmin);
    margin-bottom: max(20px, 2vmin);
    padding-left: max(20px, 2vmin);
    padding-right: max(20px, 2vmin);
    display: ${({showDescription}) => (showDescription ? '' : 'none')};

    @media screen and (max-width: 1024px) {
        width: 90%;
    }
`

export const Description = styled.p`
    color: #696969;
    font-size: max(0.85rem, 2vmin);
    font-weight: 400;
    font-family: 'Open Sans', sans-serif;
`