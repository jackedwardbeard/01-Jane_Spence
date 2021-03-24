import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap');
`

export const InformationContainer = styled.div`
    background: rgb(242,243,244);
    display: flex;
    flex-direction: column;
    overflow: hidden;

`

export const InformationWrapper = styled.div`
    z-index: 1;
    height: max(90vh, 800px);
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1024px) {
        height: 100%;
    }
`

export const Row1 = styled.div`
    display: flex;
    align-items: top;
    justify-content: center;
    margin: auto;
`

export const Column1 = styled.div`
    padding: 0 1vmin;
    margin-right: 10vmin;
    margin-left: 3vmin;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1024px) {
        margin-right: 0;
        margin-left: 0;
        margin-top: max(100px, 10vmin);
        margin-bottom: max(100px, 10vmin);
    }

    
`

export const Title = styled.h1`
    font-size: max(2.2rem, 4.8vmin);
    font-weight: 500;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    color: #696969;
    border-bottom: solid 1px black;
    padding-bottom: max(10px, 1vmin);
    width: 100%;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: max(2.5rem, 5.4vmin);
    }
`

export const Body = styled.ul`
    
    font-size: max(0.75rem, 1.5vmin);
    font-family: 'Montserrat', sans-serif;
    color: #696969;
    padding-bottom: 10px;
    padding-top: 10px;
    text-align: center;
`

export const Column2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 0.75vw;
    width: 50%;
    height: max(77.5vh, 700px);

    @media screen and (max-width: 1024px) {
        display: none;
    }
`

export const TextWrapper = styled.div`
    padding-top: 0;
    padding-bottom: max(30px, 3vmin);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const ImgWrap = styled.div`
    height: 100%;
`

export const Img = styled.img`
    width: 100%;
    height: 100%;
`

export const Item = styled.div`
    font-size: max(1rem, 2vmin);
    color: #696969;
    font-weight: 400;
    font-family: 'Montserrat';
    margin-top: max(7.5px, 0.75vmin);
    margin-bottom: max(7.5px, 0.75vmin);

    @media screen and (max-width: 768px) {
        font-size: max(1rem, 2vmin);
    }
`

export const ContactWrap = styled.div`
    display: flex;
`

export const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`


export const ContactTitle = styled.h2`
    color: thistle;
`

export const Label = styled.div`
    color: #696969;
    font-family: 'Montserrat', sans-serif;
    margin-top: -10px;
    margin-bottom: max(10px, 1vmin);
    font-weight: 400;
    font-size: max(1.4rem, 2.8vmin);
    text-align: center;
    width: max(300px, 30vmin);

    @media screen and (max-width: 767px) {
        width: max(265px, 20vmin);
    }

    @media screen and (max-width: 280px) {
        width: max(250px, 13.1vmin);
    }
`

export const Input = styled.input`
    height: max(40px, 4vmin);
    width: max(300px, 30vmin);
    font-size: max(1.2rem, 2vmin);
    font-weight: 400;
    font-family: 'Montserrat', sans-serif;
    padding-left: max(10px, 1vmin);
    margin-top: max(5px, 1vmin);
    outline: none;
    border: none;
    border-radius: 10px;
    box-shadow: 5px 5px 5px rgb(69,74,88);
    -webkit-appearance: none;
    
    @media screen and (max-width: 767px) {
        width: max(265px, 20vmin);
    }

    ::-webkit-inner-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }
    ::-webkit-outer-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }  

    @media screen and (max-width: 280px) {
        width: max(250px, 13.1vmin);
    }
`

export const InputLarge = styled.textarea`
    font-family: 'Montserrat', sans-serif;
    padding-top: max(5px, 1vmin);
    type: textarea;
    font-weight: 400;
    height: max(100px, 10vmin);
    font-size: max(1.2rem, 2vmin);
    width: max(300px, 30vmin);
    padding-left: max(10px, 1vmin);
    margin-top: max(5px, 1vmin);
    outline: none;
    border: none;
    resize: none;
    border-radius: 10px;
    box-shadow: 5px 5px 5px rgb(69,74,88);
    -webkit-appearance: none;

    @media screen and (max-width: 767px) {
        width: max(265px, 20vmin);
    }

    @media screen and (max-width: 280px) {
        width: max(250px, 13.1vmin);
    }
`

export const BtnWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-family: 'Montserrat', sans-serif;
`

export const SubmitBtn = styled.button`
    
    border-radius: max(30px, 3vmin);
    background: thistle;
    white-space: nowrap;
    margin-top: max(10px, 1vmin);
    padding: max(10px, 1.1vmin) max(30px, 2.5vmin);
    color: black;
    font-size: max(1.25rem, 2.5vmin);
    font-family: 'Montserrat';
    font-weight: 500;
    outline: none;
    border: none;
    cursor: pointer;
    text-decoration: none;
    transition: 0.2s;
    width: max(250px, 25vmin);
    box-shadow: 8px 8px 8px rgb(69,74,88); 


    &:hover {
        background: white;
        transition: 0.2s;
    }

    @media screen and (max-width: 768px) {
        box-shadow: 5px 5px 5px rgb(69,74,88);
    }
    
`

export const Error = styled.p`
    color: rgb(190,0,50);
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    padding-top: 5px;
    font-size: max(0.825rem, 1.75vmin);
    width: max(265px, 20vmin);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

`

export const SubmissionMessage = styled.p`
    margin-top: max(10px, 1vmin);
    margin-bottom: max(10px, 1vmin);
    height: max(50px, 5vmin);
    width: max(300px, 30vmin);
    font-family: 'Montserrat', sans-serif;
    font-size: max(0.6rem, 1.2vmin);
    font-weight: 400;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    @media screen and (max-width: 767px) {
        font-size: max(0.75rem, 1.5vmin);
    }
`

export const DescriptionWrapper = styled.div`
    display: flex;
    text-align: left;
    justify-content: center;
    align-items: center;
    width: 100%;

    @media screen and (max-width: 1024px) {
        display: none;
    }
`

export const Description = styled.p`
    color: #696969;
    font-weight: 400;
    font-size: max(1rem, 2vmin);
    font-family: 'Montserrat', sans-serif;
    line-height: 1;
`

export const SubTitleWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;

    @media screen and (max-width: 1024px) {
        display: none;
    }
`

export const SubTitle = styled.h3`
    color: #696969;
    display: flex;
    text-align: right;
    font-size: max(1.4rem, 2.8vmin);
    font-weight: 400;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    margin-bottom: max(20px, 2vmin);
    margin-top: max(20px, 2vmin);
`