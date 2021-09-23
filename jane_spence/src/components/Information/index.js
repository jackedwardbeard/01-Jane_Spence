import { React, useEffect, useState } from 'react';
import {
    InformationContainer,
    InformationWrapper,
    Row1,
    Column1,
    TextWrapper,
    Title,
    Subtitle,
    Body,
    SubBody,
    Column2,
    Img,
    ImgWrap,
    ButtonWrapper,
    Button,
    AccordionWrapper,
    Accordion,
    QuestionWrapper,
    AnswerWrapper,
    DescriptionWrapper,
    Description,
    GlobalStyle,
} from './InformationComponents';
import { faqs } from './faqs';
import { FiPlus, FiMinus } from 'react-icons/fi';
import Aos from 'aos';
import 'aos/dist/aos.css';


const Information = ({titleUnderline, leftAlign, maxWidth, darkBackground, darkText, darkButton, showButton, showDescription, description, darkButtonText, buttonText, buttonLocation, id, title, body, showBody, subbody, subbody2, subbody3, subbody4, subbody5, img, showSubtitle, subtext, showAccordion}) => {
    
    useEffect(() => {
        Aos.init({duration: 1000})
    }, [])

    const [clicked, setClicked] = useState(false)

    const reverseState = index => {
        // if a question is already open, close it
        if (clicked === index) {
            return setClicked(false)
        }
        // if not, open it
        else {
            setClicked(index)
        }
    }
    
    // calculates converts our input value (vh) to px
    // so we can use it in our calcNavOffset function (for responsive smooth scrolling)
    function vh(v) {
        var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        return (v * h) / 100;
    }
    
    // calculate the height of our responsive navbar
    function calcNavOffset() {
        // nav height is either 80px or 9vh, determine which
        const navHeight = Math.max(80, vh(9));
        // offset for smooth scroll is the negative of this
        const offset = -(navHeight);

        return offset; 
    }
    
    // calculate the offset needed for our responsive navbar
    const navOffset = calcNavOffset();

    return (
        <InformationContainer darkBackground={darkBackground} id={id}>
            <GlobalStyle/>
            <InformationWrapper>
                <Row1>
                    <Column1>
                        <TextWrapper>
                            <Title data-aos='fade-down' darkText={darkText} maxWidth={maxWidth} leftAlign={leftAlign} titleUnderline={titleUnderline}>
                                {title}
                            </Title>
                            <Body data-aos='fade-up' darkText={darkText} showBody={showBody}>
                                {body}
                            </Body>
                            <Subtitle data-aos='fade-up' darkText={darkText} showSubtitle={showSubtitle} >
                            {subtext}
                            </Subtitle>
                            <SubBody data-aos='fade-up' darkText={darkText} showBody={showBody}>
                                ✔ {subbody}
                            </SubBody>
                            <SubBody data-aos='fade-up' darkText={darkText} showBody={showBody}>
                                ✔ {subbody2}
                            </SubBody>
                            <SubBody data-aos='fade-up' darkText={darkText} showBody={showBody}>
                                ✔ {subbody3}
                            </SubBody>
                            <SubBody data-aos='fade-up' darkText={darkText} showBody={showBody}>
                                ✔ {subbody4} 
                            </SubBody>
                            <SubBody data-aos='fade-up' darkText={darkText} showBody={showBody}>
                                ✔ {subbody5} 
                            </SubBody>
                            <DescriptionWrapper showDescription={showDescription}>
                                <Description data-aos='fade-left'>
                                    {description}
                                </Description>
                            </DescriptionWrapper>
                                <AccordionWrapper showAccordion={showAccordion}>
                                    <Accordion>
                                        {
                                            faqs.map((item, index) => {
                                                return (
                                                <>
                                                <QuestionWrapper 
                                                onClick={() => reverseState(index)} 
                                                key={index}
                                                data-aos='fade-right'
                                                >
                                                <p>{item.question}</p>
                                                <span>{clicked === index ? <FiMinus/> : <FiPlus/>}</span>
                                                </QuestionWrapper>
                                                {clicked === index ? (
                                                <AnswerWrapper data-aos='fade-left'>
                                                <p>{item.answer}</p>
                                                </AnswerWrapper>) : false}
                                                </>
                                                );
                                            })

                                        }
                                    </Accordion>
                                </AccordionWrapper>
                            <ButtonWrapper>
                                <Button 
                                data-aos='fade-up' 
                                to={buttonLocation} 
                                darkButton={darkButton}
                                darkButtonText={darkButtonText} 
                                showButton={showButton}
                                smooth={true} 
                                spy={true} 
                                offset={navOffset}
                                >
                                {buttonText}
                                </Button>
                            </ButtonWrapper>
                            
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img data-aos='fade-left' src={img}/>
                        </ImgWrap>
                    </Column2>
                </Row1>
            </InformationWrapper>
        </InformationContainer>
    )
};


export default Information
