import React from 'react'
import {
    SubFooterContainer,
    LeftText,
    RightText
} from './SubFooterComponents'



const SubFooter = () => {
    return (
        <SubFooterContainer>
                <LeftText>
                    Jane Spence Diabetes Education © 2021
                </LeftText>
            
                <RightText to="//linkedin.com/in/jack-beard/">
                    Created By JACK BEARD
                </RightText>
                
        </SubFooterContainer>
    )
}

export default SubFooter


