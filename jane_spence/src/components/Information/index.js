import React from 'react'
import {
    InformationContainer,
    InformationWrapper,
    Row1,
    Column1,
    TextWrapper,
    Title,
    Body,
    Column2,
    Img,
    ImgWrap,
    ButtonWrapper,
    Button
} from './InformationComponents'


const Information = ({darkBackground, darkText, darkButton, showButton, darkButtonText, buttonText, buttonLocation, id, title, body, img}) => {
    return (
        <InformationContainer darkBackground={darkBackground} id={id}>
            <InformationWrapper>
                <Row1>
                    <Column1>
                        <TextWrapper>
                            <Title darkText={darkText}>
                                {title}
                            </Title>
                            <Body darkText={darkText}>
                                {body}
                            </Body>
                            <ButtonWrapper>
                                <Button to='contact' darkButton={darkButton} darkButtonText={darkButtonText} showButton={showButton}>
                                {buttonText}
                                </Button>
                            </ButtonWrapper>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img}/>
                        </ImgWrap>
                    </Column2>
                </Row1>
            </InformationWrapper>
        </InformationContainer>
    )
};


export default Information
