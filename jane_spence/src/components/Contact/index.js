import {React, useEffect} from 'react'
import {
    InformationContainer,
    InformationWrapper,
    Row1,
    Column1,
    TextWrapper,
    Title,
    Body,
    Column2,
    ContactWrap,
    ContactForm,
    Img,
    ImgWrap,
    Item,
    Label,
    Input,
    InputLarge,
    SubmitBtn,
    BtnWrapper,
} from './ContactComponents'
import contact from '../../images/contact.svg'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Contact = ({id}) => {

    useEffect(() => {
        Aos.init({duration: 1000})
    }, [])

    return (
        <InformationContainer id={id}>
            <InformationWrapper>
                <Row1>
                    <Column1>
                        <TextWrapper>
                            <Title data-aos='fade-down'>
                                Contact
                            </Title>
                            <Body data-aos='fade-up'>
                                <Item data-aos='fade-left'>PO BOX 5049</Item>
                                <Item data-aos='fade-right'>Frankston South 3199</Item>
                                <Item data-aos='fade-left'>T: 0417 389 257</Item>
                                <Item data-aos='fade-right'>F: 5971 4686</Item>
                                <Item data-aos='fade-left'>E: jane.spence@bigpond.com</Item>
                            </Body>
                        </TextWrapper>
                        <ContactWrap>
                            <ContactForm data-aos='fade-up'>
                                <Label>
                                Name
                                </Label>
                                <Input></Input>
                                <Label>
                                Phone
                                </Label>
                                <Input></Input>
                                <Label>
                                Enquiry
                                </Label>
                                <InputLarge></InputLarge>
                                <BtnWrapper>
                                    <SubmitBtn>Submit {String.fromCharCode(10140)}</SubmitBtn>
                                </BtnWrapper>
                            </ContactForm>
                        </ContactWrap>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img data-aos='fade-up' src={contact}/>
                        </ImgWrap>
                    </Column2>
                </Row1>
            </InformationWrapper>
        </InformationContainer>
    )
};


export default Contact