import React from 'react'
import {
    InformationContainer,
    InformationWrapper,
    Row1,
    Column1,
    TextWrapper,
    Title,
    Subtitle,
    Body,
    Column2,
    Img,
    ImgWrap,
    ButtonWrapper,
    Button
} from './InformationComponents'


const Information = ({darkBackground, darkText, darkButton, showButton, darkButtonText, buttonText, buttonLocation, id, title, body, subbody, subbody2, subbody3, subbody4, subbody5, img, showSubtitle, subtext}) => {
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
                            <Subtitle darkText={darkText} showSubtitle={showSubtitle} >
                            {subtext}
                            </Subtitle>
                            <Body darkText={darkText}>
                                {subbody}
                            </Body>
                            <Body darkText={darkText}>
                                {subbody2}
                            </Body>
                            <Body darkText={darkText}>
                                {subbody3}
                            </Body>
                            <Body darkText={darkText}>
                                {subbody4}
                            </Body>
                            <Body darkText={darkText}>
                                {subbody5}
                            </Body>
                            <ButtonWrapper>
                                <Button 
                                to={buttonLocation} 
                                darkButton={darkButton}
                                darkButtonText={darkButtonText} 
                                showButton={showButton}
                                smooth={true} 
                                spy={true} 
                                offset={-80}
                                >
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
