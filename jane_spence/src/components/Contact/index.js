import {React, useEffect, useState} from 'react'
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
import axios from 'axios'

const Contact = ({id}) => {

    useEffect(() => {
        Aos.init({duration: 1000})
    }, [])

    // state used for form validation (react hook form)
    const {register, errors} = useForm();

    // state used for keeping track of contact form values/inputs
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [enquiry, setEnquiry] = useState('');

    // on submitting the form, send a POST request to our backend
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const data = {
            name: name,
            phone: phone,
            email: email,
            enquiry: enquiry
        }

        axios.post("/api/sendMail", data)

    }

    // on changing an input field on the contact form, update its value
    const handleChange = (e) => {
        e.preventDefault();

        if(e.target.name === "name") {
            setName(e.target.value)
        }
        else if(e.target.name === "phone") {
            setPhone(e.target.value)
        }
        else if(e.target.name === "email") {
            setEmail(e.target.value)
        }
        else {
            setEnquiry(e.target.value)
        }
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
                            <ContactForm data-aos='fade-up'>
                                <Label>ENQUIRE NOW</Label>
                                <Input onChange={handleChange} 
                                value={name}
                                type='text' 
                                placeholder='Name' 
                                name='name' 
                                ref={register({required: true})}>
                                </Input>
                                <Error>{errors.name && "Your name is required"}</Error>
                                <Input onChange={handleChange} 
                                value={phone}
                                type='number' 
                                placeholder='Phone' 
                                name='phone' 
                                ref={register({required: true, maxLength: {value: 10, message: "Number is too long"}, minLength: {value: 8, message: "Number is too short"}})}>
                                </Input>
                                <Error>{errors.phone && errors.phone.message}</Error>
                                <Input onChange={handleChange}
                                value={email} 
                                type='text' 
                                placeholder='E-mail' 
                                name='email' 
                                ref={register({required: true})}>
                                </Input>
                                <Error>{errors.email && "Your e-mail is required"}</Error>
                                <InputLarge type='text' 
                                onChange={handleChange} 
                                value={enquiry}
                                placeholder='Your Enquiry' 
                                name='enquiry' 
                                ref={register({required: "Enquiry Required", maxLength: {value: 500, message: "Enquiry exceeds 500 characters"}})}>
                                </InputLarge>
                                <Error>{errors.enquiry && errors.enquiry.message}</Error>
                                <BtnWrapper>
                                    <SubmitBtn 
                                    type='submit' 
                                    onClick={handleSubmit} 
                                    >Submit {String.fromCharCode(10140)}
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