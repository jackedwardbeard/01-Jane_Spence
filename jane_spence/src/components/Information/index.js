import {React, useEffect} from 'react'
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
    Button,
} from './InformationComponents'
import Aos from 'aos'
import 'aos/dist/aos.css'


const Information = ({darkBackground, darkText, darkButton, showButton, darkButtonText, buttonText, buttonLocation, id, title, body, subbody, subbody2, subbody3, subbody4, subbody5, img, showSubtitle, subtext}) => {
    
    useEffect(() => {
        Aos.init({duration: 1500})
    }, [])
    
    return (
        <InformationContainer darkBackground={darkBackground} id={id}>
            <InformationWrapper>
                <Row1>
                    <Column1>
                        <TextWrapper>
                            <Title data-aos='fade-down' darkText={darkText}>
                                {title}
                            </Title>
                            <Body data-aos='fade-up' darkText={darkText}>
                                {body}
                            </Body>
                            <Subtitle data-aos='fade-up' darkText={darkText} showSubtitle={showSubtitle} >
                            {subtext}
                            </Subtitle>
                            <Body data-aos='fade-up' darkText={darkText}>
                                <li> {subbody} </li>
                            </Body>
                            <Body data-aos='fade-up' darkText={darkText}>
                                <li> {subbody2} </li>
                            </Body>
                            <Body data-aos='fade-up' darkText={darkText}>
                                <li> {subbody3} </li>
                            </Body>
                            <Body data-aos='fade-up' darkText={darkText}>
                                <li> {subbody4} </li>
                            </Body>
                            <Body data-aos='fade-up' darkText={darkText}>
                                <li> {subbody5} </li>
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
                            <Img data-aos='fade-up' src={img}/>
                        </ImgWrap>
                    </Column2>
                </Row1>
            </InformationWrapper>
        </InformationContainer>
    )
};


export default Information
