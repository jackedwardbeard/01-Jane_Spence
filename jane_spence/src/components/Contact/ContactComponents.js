import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom' 
// used for links that redirect using smooth scroll (i.e. all pages except for enquire)
import { Link as LinkScroll } from 'react-scroll'

export const InformationContainer = styled.div`
    background: black;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

export const InformationWrapper = styled.div`
    z-index: 1;
    height: 800px;
    display: flex;
`

export const Row1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
    margin-right: 100px;
`

export const Title = styled.h1`
    font-size: 3rem;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    color: pink;
`

export const Body = styled.ul`
    
    font-size: 1.5rem;
    font-family: 'Montserrat', sans-serif;
    color: white;
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
`

export const Img = styled.img`
    width: 100%;
    height: 100%;
    padding-right: 0px;
    margin: 0 0 10px 0;
`

export const Item = styled.div`
    color: white;
    margin-top: 10px;
    margin-bottom: 10px;
`

export const ContactWrap = styled.div`
    display: flex;
    justify-content: left;
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5rem;
`

export const ContactForm = styled.div`
    color: white;
    margin-top: 10px;
    margin-bottom: 10px;
`


export const ContactTitle = styled.h2`
    color: pink;
    margin-top: 10px;
    margin-bottom: 10px;
`

export const Label = styled.div`
    color: white;
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 5px;
    margin-top: 10px;
`

export const Input = styled.input`
    height: 25px;
    width: 200%;
`

export const InputLarge = styled.input`
    height: 80px;
    width: 200%;
    margin-top: 10px;
`

export const BtnWrapper = styled.div`
    display: flex;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    margin-top: 40px;
`

export const SubmitBtn = styled.button`
    
    border-radius: 50px;
    background: pink;
    white-space: nowrap;
    padding: 10px 50px;
    color: black;
    font-size: 1rem;
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
