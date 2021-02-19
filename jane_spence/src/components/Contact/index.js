import React from 'react'
import {
    ContactContainer,
    ContactWrapper,
    Title
} from './ContactComponents'


const Contact = ({id}) => {
    return (
        <ContactContainer id={id}>
            <ContactWrapper>
                <Title>
                Contact
                </Title>
                
            </ContactWrapper>
        </ContactContainer>
    )
}

export default Contact