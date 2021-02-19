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
    ContactWrap,
    ContactForm,
    Img,
    ImgWrap,
    Item,
    Label,
    Input,
    InputLarge,
    SubmitBtn,
    BtnWrapper
} from './ContactComponents'
import contact from '../../images/contact.svg'


const Contact = ({id}) => {
    return (
        <InformationContainer id={id}>
            <InformationWrapper>
                <Row1>
                    <Column1>
                        <TextWrapper>
                            <Title>
                                Contact
                            </Title>
                            <Body>
                                <Item>PO BOX 5049</Item>
                                <Item>Frankston South 3199</Item>
                                <Item>T: 0417 389 257</Item>
                                <Item>F: 5971 4686</Item>
                                <Item>E: jane.spence@bigpond.com</Item>
                            </Body>
                        </TextWrapper>
                        <ContactWrap>
                            <ContactForm>
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
                                    <SubmitBtn>Submit</SubmitBtn>
                                </BtnWrapper>
                            </ContactForm>
                        </ContactWrap>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={contact}/>
                        </ImgWrap>
                    </Column2>
                </Row1>
            </InformationWrapper>
        </InformationContainer>
    )
};


export default Contact