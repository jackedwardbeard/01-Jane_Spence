import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom' 
// used for links that redirect using smooth scroll (i.e. all pages except for enquire)
import { Link as LinkScroll } from 'react-scroll'

export const ContactContainer = styled.div`
    background: pink;
    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

export const ContactWrapper = styled.div`
    z-index: 1;
    height: 800px;
    display: flex;
    flex-direction: column;
    font-family: 'Montserrat', sans-serif;
    justify-content: center;
    align-items: center;
`

export const Title = styled.h1`
    font-size: 3rem;
    align-items: center;
    justify-content: center;
    font-family: 'Montserrat', sans-serif;
    color: 'black';
`