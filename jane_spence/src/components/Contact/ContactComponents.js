import styled from 'styled-components'

export const InformationContainer = styled.div`
    background: black;
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
`

export const Row1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
`

export const Column1 = styled.div`
    padding: 0 1vmin;
    margin-right: 5vmin;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1024px) {
        margin-right: 0;
        margin-top: 0;
    }

    
`

export const Title = styled.h1`
    font-size: max(2rem, 4.5vmin);
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    color: thistle;
`

export const Body = styled.ul`
    
    font-size: max(0.75rem, 1.5vmin);
    font-family: 'Open Sans', sans-serif;
    color: white;
    margin-bottom: max(0.5vmin, 5px);
`

export const Column2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 0.75vw;
    width: 50%;
    height: 700px;

    @media screen and (max-width: 1024px) {
        display: none;
    }
`

export const TextWrapper = styled.div`
    padding-top: 0;
    padding-bottom: max(30px, 3vmin);
`

export const ImgWrap = styled.div`
    height: 100%;
`

export const Img = styled.img`
    width: 100%;
    height: 88%;
    margin-top: 3vmin;
`

export const Item = styled.div`
    font-size: max(1rem, 2vmin);
    color: white;
    margin-top: max(10px, 1vmin);
    margin-bottom: max(10px, 1vmin);
`

export const ContactWrap = styled.div`
    display: flex;
`

export const ContactForm = styled.form`
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`


export const ContactTitle = styled.h2`
    color: thistle;
`

export const Label = styled.div`
    color: white;
    font-family: 'Montserrat', sans-serif;
    margin-top: max(20px, 2vmin);
    margin-bottom: max(10px, 1vmin);
    font-weight: 500;
    font-size: max(1.25rem, 2.5vmin);
`

export const Input = styled.input`
    height: max(40px, 4vmin);
    width: max(265px, 20vmin);
    font-size: max(1.2rem, 2vmin);
    font-family: 'Montserrat', sans-serif;
    padding-left: max(5px, 0.5vmin);
    margin-top: max(5px, 1vmin);

    @media screen and (max-width: 280px) {
        width: max(250px, 13.1vmin);
    }
`

export const InputLarge = styled.textarea`
    font-family: 'Montserrat', sans-serif;
    padding-top: max(5px, 1vmin);
    type: textarea;
    height: max(100px, 10vmin);
    font-size: max(1.2rem, 2vmin);
    width: max(265px, 20vmin);
    padding-left: max(5px, 0.5vmin);
    margin-top: max(5px, 1vmin);

    @media screen and (max-width: 280px) {
        width: max(250px, 13.1vmin);
    }
`

export const BtnWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Montserrat', sans-serif;
`

export const SubmitBtn = styled.button`
    
    border-radius: max(30px, 5vmin);
    background: thistle;
    white-space: nowrap;
    padding: max(5px, 0.75vmin) max(2.25vmin, 20px);
    color: black;
    font-size: max(1.25rem, 2.5vmin);
    font-weight: 450;
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

export const Error = styled.p`
    color: red;
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
    padding-top: 5px;
    font-size: max(0.825rem, 1.75vmin);
    width: max(265px, 20vmin);
    margin-left: 
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

`

export const SubmissionMessage = styled.p`
    margin-top: max(10px, 1vmin);
    margin-bottom: max(10px, 1vmin);
    height: max(50px, 5vmin);
    width: 100%;
    width: max(265px, 20vmin);
    font-family: 'Montserrat', sans-serif;
    font-size: max(0.75rem, 1.5vmin);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`

export const DescriptionWrapper = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 100%;
    line-height: 1;

    @media screen and (max-width: 1024px) {
        display: none;
    }
`

export const Description = styled.p`
    color: white;
    font-size: max(1.1rem, 2.2vmin);
    font-weight: 300;
    font-family: 'Open Sans', sans-serif;
`

export const SubTitleWrapper = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1024px) {
        display: none;
    }
`

export const SubTitle = styled.h3`
    color: white;
    font-size: max(1.3rem, 2.6vmin);
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
    margin-bottom: max(20px, 2vmin);
    margin-top: max(30px, 3vmin);
`