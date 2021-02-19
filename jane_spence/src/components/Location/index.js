import React from 'react'
import {
    LocationContainer,
    LocationWrapper,
    Title,
    
} from './LocationComponents'


const Location = ({id}) => {
    return (
        <LocationContainer id={id}>
            <LocationWrapper>
                <Title>
                Locations
                </Title>
                
            </LocationWrapper>
        </LocationContainer>
    )
}

export default Location