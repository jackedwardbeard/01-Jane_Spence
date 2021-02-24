import React from 'react'
import {
    FooterContainer,
    FooterWrapper,
    Row1,
    Column1,
    Column2,
    Column3,
    SubFooterContainer,
    LeftText,
    RightText
} from './FooterComponents'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <Row1>
                    <Column1>
                    </Column1>
                    <Column2>
                    </Column2>
                    <Column3>
                    </Column3>
                </Row1>
            </FooterWrapper>
            <SubFooterContainer>
                <LeftText>
                    Jane Spence Diabetes Education © 2021
                </LeftText>
            
                <RightText to="//linkedin.com/in/jack-beard/">
                    Created By JACK BEARD
                </RightText>
                
            </SubFooterContainer>
        </FooterContainer>
    )
}

export default Footer
