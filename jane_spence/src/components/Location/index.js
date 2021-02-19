import React from 'react'
import {
    LocationContainer,
    LocationWrapper,
    Row1, 
    Column1,
    Title,
    Body,
    Map,
    ButtonWrapper, 
    Button,
    Column2
} from './LocationComponents'


const Location = ({darkBackground, darkText, darkButton, buttonLocation, darkButtonText, buttonText, id, title, body, image}) => {
    return (
        <LocationContainer>
            <LocationWrapper>
                <Title>
                Locations
                </Title>
                
            </LocationWrapper>
        </LocationContainer>
    )
}

export default Location