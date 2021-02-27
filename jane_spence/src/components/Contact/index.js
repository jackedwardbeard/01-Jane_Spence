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
    Error
} from './ContactComponents'
import contact from '../../images/contact.svg'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {useForm} from 'react-hook-form'

const Contact = ({id}) => {

    useEffect(() => {
        Aos.init({duration: 1000})
    }, [])

    const {register, handleSubmit, errors} = useForm();

    const []

    const onSubmit = (data) => {
        console.log(data);
    }

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
                                <Item data-aos='fade-left'>📞 0417 389 257</Item>
                                <Item data-aos='fade-right'>📠 5971 4686</Item>
                                <Item data-aos='fade-left'>📧 jane.spence@bigpond.com</Item>
                            </Body>
                        </TextWrapper>
                        <ContactWrap>
                            <ContactForm data-aos='fade-up' onSubmit={handleSubmit(onSubmit)}>
                                <Label>ENQUIRE NOW</Label>
                                <Input type='text' placeholder='Name' name='name' ref={register({required: true})}></Input>
                                <Error>{errors.name && "Your name is required"}</Error>
                                <Input type='number' placeholder='Phone' name='phone' ref={register({required: false, maxLength: 10})}></Input>
                                <Error>{errors.phone && "Invalid phone number"}</Error>
                                <Input type='text' placeholder='E-mail' name='email' ref={register({required: true})}></Input>
                                <Error>{errors.email && "Your e-mail is required"}</Error>
                                <InputLarge type='text' placeholder='Your Enquiry' name='enquiry' ref={register({required: "Enquiry Required", maxLength: {value: 500, message: "Enquiry exceeds 500 characters"}})}></InputLarge>
                                <Error>{errors.enquiry && errors.enquiry.message}</Error>
                                <BtnWrapper>
                                    <SubmitBtn 
                                    type='submit' 
                                    onClick={}
                                    onSubmit={handleSubmit(onSubmit)}>Submit {String.fromCharCode(10140)}
                                    </SubmitBtn>
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