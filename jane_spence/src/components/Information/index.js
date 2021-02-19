import React from 'react'
import {
    InformationContainer,
    InformationWrapper,
    Row1,
    Column1,
    Title,
    Body,
    Column2,
    Img,
    ImgWrap,
    ButtonWrapper,
    Button
} from './InformationComponents'


const Information = ({darkBackground, darkText, darkButton, showButton, darkButtonText, buttonText, id, title, body, image}) => {
    return (
        <InformationContainer darkBackground={darkBackground} id={id}>
            <InformationWrapper>
                <Row1>
                    <Column1>
                        <Title darkText={darkText}>
                            {title}
                        </Title>
                        <Body darkText={darkText}>
                            {body}
                        </Body>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={image}>
                            
                            </Img>
                        </ImgWrap>
                    </Column2>
                </Row1>
                <ButtonWrapper>
                    <Button to="about" darkButton={darkButton} darkButtonText={darkButtonText} showButton={showButton}>
                    {buttonText}
                    </Button>
                </ButtonWrapper>
            </InformationWrapper>
        </InformationContainer>
    )
}

export default Information
