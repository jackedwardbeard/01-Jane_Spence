import styled from 'styled-components'

export const InformationContainer = styled.div`
    background: black;
    display: flex;
    flex-direction: column;
    overflow: hidden;

`

export const InformationWrapper = styled.div`
    z-index: 1;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1024px) {
        height: 130vh;
    }
`

export const Row1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    height: 70vh;
    width: 90vw;
`

export const Column1 = styled.div`
    padding: 0 1vw;
    margin-right: 2.5vw;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1024px) {
        margin-right: 0vw;
        margin-top: 0vh;
    }

    
`

export const Title = styled.h1`
    font-size: 5vh;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    color: thistle;
`

export const Body = styled.ul`
    
    font-size: 1.5rem;
    font-family: 'Open Sans', sans-serif;
    color: white;
    margin-bottom: 5px;
`

export const Column2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 0.75vw;
    grid-area: col1;
    width: 50vw;

    @media screen and (max-width: 1024px) {
        display: none;
    }
`

export const TextWrapper = styled.div`
    padding-top: 0;
    padding-bottom: 3vh;
`

export const ImgWrap = styled.div`
    height: 100%;
`

export const Img = styled.img`
    width: 50vw;
    height: 50vh;
    padding-right: 0px;
    margin: 0 0 10px 0;
    margin-top: 3vh;
`

export const Item = styled.div`
    font-size: 2vh;
    color: white;
    margin-top: 1vh;
    margin-bottom: 1vh;

    @media screen and (max-width: 1024px) {
        font-size: 1.3rem;
    }

    @media screen and (max-width: 768px) {
        font-size: 1rem;
    }
`

export const ContactWrap = styled.div`
    display: flex;
`

export const ContactForm = styled.form`
    color: white;
    display: flex;
    flex-direction: column;
`


export const ContactTitle = styled.h2`
    color: thistle;
`

export const Label = styled.div`
    color: white;
    font-family: 'Montserrat', sans-serif;
    margin-top: 1vh;
    margin-bottom: 1vh;
    font-weight: 500;
    font-size: 2.5vh;

    @media screen and (max-width: 1366px) {
        font-size: 1.2rem;
        margin-top: -10px;
    }

    @media screen and (max-width: 1280px) {
        font-size: 1.2rem;
    }

    @media screen and (max-width: 1024px) {
        font-size: 1.7rem;
    }

    @media screen and (max-width: 414px) {
        font-size: 1.4rem;
        
    }
`

export const Input = styled.input`
    height: 4vh;
    width: 14.6vw;
    font-size: 2vh;
    font-family: 'Montserrat', sans-serif;
    padding-left: 0.5vw;
    margin-top: 1vh;

    @media screen and (max-width: 1024px) {
        height: 40px;
        width: 280px;
        font-size: 1.2rem;
        padding-left: 5px;
    }

    @media screen and (max-width: 320px) {
        width: 250px;
        
    }

    @media screen and (max-width: 280px) {
        width: 240px;
        
    }
`

export const InputLarge = styled.textarea`
    height: 12vh;
    font-size: 2vh;
    font-family: 'Montserrat', sans-serif;
    padding-left: 0.5vw;
    padding-top: 1vh;
    width: 14.6vw;
    margin-top: 1vh;
    type: textarea;

    @media screen and (max-width: 1024px) {
        height: 100px;
        font-size: 1.2rem;
        width: 280px;
        padding-left: 5px;
    }

    @media screen and (max-width: 320px) {
        width: 250px; 
    }

    @media screen and (max-width: 280px) {
        width: 240px; 
    }
`

export const BtnWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Montserrat', sans-serif;
`

export const SubmitBtn = styled.button`
    
    border-radius: 5vh;
    background: thistle;
    white-space: nowrap;
    padding: 0.75vh 2.25vw;
    color: black;
    font-size: 2.5vh;
    font-weight: 450;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    @media screen and (max-width: 1024px) {
        font-size: 1.25rem;
        padding: 10px 35px;
        border-radius: 40px;
    }

    &:hover {
        transition: all 0.2s ease-in-out;
        background: white;
        color: black;
    }
    
`

export const Error = styled.p`
    color: red;
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
    padding-top: 5px;
    font-size: 1.75vh;
    max-width: 14.6vw;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    @media screen and (max-width: 1024px) {
        max-width: 100%;
        width: 280px;
        font-size: 1.2rem;
    }

    @media screen and (max-width: 768px) {
        font-size: 1rem;
    }

    @media screen and (max-width: 320px) {
        width: 250px;
        
    }

    @media screen and (max-width: 280px) {
        width: 240px;
        
    }

`

export const SubmissionMessage = styled.p`
    margin-top: 1vh;
    margin-bottom: 1vh;
    height: 5vh;
    width: 100%;
    max-width: 14.6vw;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5vh;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    @media screen and (max-width: 1024px) {
        max-width: 100%;
        width: 280px;
        font-size: 1.25rem;
    }

    @media screen and (max-width: 768px) {
        font-size: 1rem;
    }

    @media screen and (max-width: 767px) {
        font-size: 1rem;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    @media screen and (max-width: 320px) {
        width: 250px;
        
    }

    @media screen and (max-width: 280px) {
        width: 240px;
        
    }

`

export const DescriptionWrapper = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 100%;
    line-height: 1;

    @media screen and (max-width: 1270px) {
        display: none;
    }
`

export const Description = styled.p`
    color: white;
    font-size: 1.9vh;
    font-weight: 300;
    font-family: 'Montserrat', sans-serif;
`

export const SubTitleWrapper = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1270px) {
        display: none;
    }
`

export const SubTitle = styled.h3`
    color: white;
    font-size: 2.5vh;
    font-weight: 600;
    font-family: 'Open Sans', sans-serif;
    margin-bottom: 2vh;
    margin-top: 2vh;

    @media screen and (max-width: 1600px) {
        font-size: 1rem;
    }

    @media screen and (max-width: 1366px) {
        margin-bottom: 10px;
    }
`