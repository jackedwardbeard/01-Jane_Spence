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
    Error,
    SubmissionMessage,
    DescriptionWrapper,
    Description,
    SubTitleWrapper,
    SubTitle
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
    const {register, handleSubmit, errors} = useForm({ mode: 'onBlur' });

    // state used for keeping track of contact form values/inputs
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [enquiry, setEnquiry] = useState('');

    // state used to display a 'thanks for your enquiry' message after form submission
    const [thanks, setThanks] = useState('');

    // on submitting the form, send a POST request to our backend
    const onSubmit = (e) => {
        
        const data = {
            name: name,
            phone: phone,
            email: email,
            enquiry: enquiry
        }

        axios.post("/api/sendMail", data)
        
        // clear the form upon submitting
        setName('');
        setPhone('');
        setEmail('');
        setEnquiry('');

        setThanks('Thanks for your enquiry! I will be in touch shortly.')
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
                            <Body>
                                <Item data-aos='fade-left'>PO BOX 5049</Item>
                                <Item data-aos='fade-right'>Frankston South 3199</Item>
                                <Item data-aos='fade-left'>📞 0417 389 257</Item>
                                <Item data-aos='fade-right'>📠 5971 4686</Item>
                                <Item data-aos='fade-left'>📧 jane.spence@bigpond.com</Item>
                            </Body>
                        </TextWrapper>
                        <ContactWrap>
                            <ContactForm>
                                <Label data-aos='fade-right'>ENQUIRE NOW</Label>
                                <Input onChange={handleChange} 
                                value={name}
                                type='text' 
                                placeholder='Name' 
                                name='name' 
                                data-aos='fade-left'
                                ref={register({required: true})}>
                                </Input>
                                <Error data-aos='fade'>{errors.name && "Your name is required"}</Error>
                                <Input onChange={handleChange} 
                                value={phone}
                                type='number' 
                                placeholder='Phone' 
                                name='phone' 
                                data-aos='fade-right'
                                ref={register({required: true, maxLength: {value: 10, message: "Number is too long"}, minLength: {value: 8, message: "Number is too short"}})}>
                                </Input>
                                <Error data-aos='fade'>{errors.phone && errors.phone.message}</Error>
                                <Input onChange={handleChange}
                                value={email} 
                                type='text' 
                                placeholder='E-mail' 
                                name='email' 
                                data-aos='fade-left'
                                ref={register({required: true})}>
                                </Input>
                                <Error data-aos='fade'>{errors.email && "Your e-mail is required"}</Error>
                                <InputLarge type='text' 
                                onChange={handleChange} 
                                value={enquiry}
                                placeholder='Enquiry' 
                                name='enquiry' 
                                data-aos='fade-right'
                                ref={register({required: "Enquiry required", maxLength: {value: 500, message: "Enquiry exceeds 500 characters"}})}>
                                </InputLarge>
                                <Error data-aos='fade'>{errors.enquiry && errors.enquiry.message}</Error>
                                <SubmissionMessage>{thanks}</SubmissionMessage>
                                <BtnWrapper>
                                    <SubmitBtn 
                                    type='submit' 
                                    data-aos='fade-right'
                                    onClick={handleSubmit(onSubmit)} 
                                    >Submit {String.fromCharCode(10140)}
                                    </SubmitBtn>
                                </BtnWrapper>
                            </ContactForm>
                        </ContactWrap>
                    </Column1>
                    <Column2>
                        <SubTitleWrapper data-aos='fade-down'>
                            <SubTitle>
                                Consultation Booking
                            </SubTitle>
                        </SubTitleWrapper>
                        <DescriptionWrapper data-aos='fade-left'>
                            <Description>
                                If you would like to book a consultation or speak to Jane regarding another topic, you can contact her via phone, fax or e-mail. <br></br><br></br>
                                You can also book an appointment by calling Barry Dean Pharmacy on 9783 5201, Skye Medical Centre on 9782 8555, or by calling Jane directly on 0417 389 257.
                                <br></br><br></br>Alternatively, you can use the contact form to the left to send an enquiry.<br></br><br></br>

                                If you wish to book a consultation at Frankston Healthcare, please ring 0417 389 257.
                            </Description>
                        </DescriptionWrapper>
                        <ImgWrap>
                            <Img data-aos='fade-left' src={contact}/>
                        </ImgWrap>
                    </Column2>
                </Row1>
            </InformationWrapper>
        </InformationContainer>
    )
};


export default Contact