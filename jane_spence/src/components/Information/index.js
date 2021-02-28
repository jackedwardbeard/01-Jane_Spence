import {React, useEffect, useState} from 'react'
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
    AnswerWrapper
} from './InformationComponents'
import {faqs} from './faqs'
import {IconContext} from 'react-icons'
import {FiPlus, FiMinus} from 'react-icons/fi'
import Aos from 'aos'
import 'aos/dist/aos.css'


const Information = ({darkBackground, darkText, darkButton, showButton, darkButtonText, buttonText, buttonLocation, id, title, body, showBody, subbody, subbody2, subbody3, subbody4, subbody5, img, showSubtitle, subtext, showAccordion}) => {
    
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
    
    return (
        <InformationContainer darkBackground={darkBackground} id={id}>
            <InformationWrapper>
                <Row1>
                    <Column1>
                        <TextWrapper>
                            <Title data-aos='fade-down' darkText={darkText}>
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
                            <IconContext.Provider value={{ color: 'pink', size: '20px'}}>
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
                                                <h4>{item.question}</h4>
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
                            </IconContext.Provider>
                            <ButtonWrapper>
                                <Button 
                                data-aos='fade-up' 
                                to={buttonLocation} 
                                darkButton={darkButton}
                                darkButtonText={darkButtonText} 
                                showButton={showButton}
                                smooth={true} 
                                spy={true} 
                                offset={30}
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
