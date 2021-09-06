import { React, useEffect, useState } from 'react';
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
    DescriptionWrapper,
    Description,
    SubTitleWrapper,
    SubTitle,
    GlobalStyle
} from './ContactComponents';
import contact from '../../images/contact.svg';
import axios from 'axios';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const Contact = () => {

    useEffect(() => {
        Aos.init({duration: 1000})
    }, [])

    // state used for keeping track of contact form values/inputs
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [enquiry, setEnquiry] = useState('');

    // state for managing input validation error messages
    const [nameErrorText, setNameErrorText] = useState('');
    const [phoneErrorText, setPhoneErrorText] = useState('');
    const [emailErrorText, setEmailErrorText] = useState('');
    const [enquiryErrorText, setEnquiryErrorText] = useState('');

    // for dialog pop-up (to confirm email submission)
    const [open, setOpen] = useState(false);
    const [emailDialogText, setDialogText] = useState('');

    // open dialog pop-up
    const handleOpen = () => {
        setOpen(true);
    }

    // close dialog pop-up
    const handleClose = () => {
        setOpen(false);
    }

    // on submitting the form, send a POST request to our backend
    const onSubmit = () => {
        
        // if required fields are given, and valid (i.e. no errors), POST
        if (
            (nameErrorText === '' && phoneErrorText === '') && 
            (email !== '' && emailErrorText === '') && 
            (enquiry !== '' && enquiryErrorText === '')
            ) 
        {
            const data = {
                name: name,
                phone: phone,
                email: email,
                enquiry: enquiry
            }
    
            axios.post('/api/sendMail', data)
            
            // clear the form upon submitting
            setName('');
            setPhone('');
            setEmail('');
            setEnquiry('');
    
            // open pop-up confirmation
            setDialogText('Thanks for your enquiry! I will be in touch shortly.');
            handleOpen();
        }

        // don't POST if required fields are not given or have errors
        else {

            let issues = [];

            if (nameErrorText !== '') {
                issues.push('invalid name');
            }
            if (phoneErrorText !== '') {
                issues.push('invalid phone number');
            }
            if (email === '') {
                issues.push('email address required');
            }
            if (emailErrorText !== '') {
                issues.push('invalid email address');
            }
            if (enquiry === '') {
                issues.push('enquiry required');
            }

            setDialogText('Error: ' + issues.join(', '));
            handleOpen();
        }
    }

    // on changing an input field on the contact form, validate and update
    const handleChange = (e) => {
        e.preventDefault();
        console.log(process.env.DEST_EMAIL);
        // validate and update name field
        if (e.target.name === 'name') {
            //eslint-disable-next-line -- ignores regex warning
            const lettersOnlyPattern = new RegExp(/^[A-Za-z\s\-]+$/);
            // input matches name regex and isn't empty
            if (!lettersOnlyPattern.test(e.target.value) && e.target.value !== '') {
                setNameErrorText('Invalid Name');
            }
            else {
                setNameErrorText('');
            }
            setName(e.target.value);
        }

        // validate and update phone field
        if (e.target.name === 'phone') {
            //eslint-disable-next-line -- ignores regex warning
            const phonePattern = new RegExp(/^\({0,1}((0|\+61)(2|4|3|7|8)){0,1}\){0,1}(\ |-){0,1}[0-9]{2}(\ |-){0,1}[0-9]{2}(\ |-){0,1}[0-9]{1}(\ |-){0,1}[0-9]{3}$/);
            if (!phonePattern.test(e.target.value) && e.target.value !== '') {
                setPhoneErrorText('Invalid Phone Number');
            }
            else {
                setPhoneErrorText('');
            }
            setPhone(e.target.value);
        }

        // validate and update email field
        if (e.target.name === 'email') {
            //eslint-disable-next-line -- ignores regex warning
            const emailPattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!emailPattern.test(e.target.value) && e.target.value !== '') {
                setEmailErrorText('Invalid Email Address');
            }
            else{
                setEmailErrorText('');
            }
            setEmail(e.target.value);
        }

        // validate and update enquiry field
        if (e.target.name === 'enquiry') {
            if (e.target.value === '') {
                setEnquiryErrorText('Error')
            }
            setEnquiry(e.target.value)
        }
    }

    return (
        <InformationContainer id='contact'>
            <GlobalStyle/>
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
                                <Item data-aos='fade-left'>P: 0417 389 257</Item>
                                <Item data-aos='fade-right'>F: 5971 4686</Item>
                                <Item data-aos='fade-left'>E: jane.spence@bigpond.com</Item>
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
                                >
                                </Input>
                                {
                                    nameErrorText === '' ?
                                    <></>
                                    :
                                    <Error data-aos='fade'>{nameErrorText}</Error>
                                }
                                <Input onChange={handleChange} 
                                value={phone}
                                type='text' 
                                placeholder='Phone' 
                                name='phone'
                                data-aos='fade-right'
                                >
                                </Input>
                                {
                                    phoneErrorText === '' ?
                                    <></>
                                    :
                                    <Error data-aos='fade'>{phoneErrorText}</Error>
                                }
                                <Input onChange={handleChange}
                                value={email} 
                                type='text' 
                                placeholder='* Email' 
                                name='email' 
                                data-aos='fade-left'
                                >
                                </Input>
                                {
                                    emailErrorText === '' ?
                                    <></>
                                    :
                                    <Error data-aos='fade'>{emailErrorText}</Error>
                                }
                                <InputLarge type='text' 
                                onChange={handleChange} 
                                value={enquiry}
                                placeholder='* Enquiry' 
                                name='enquiry' 
                                data-aos='fade-right'
                                >
                                </InputLarge>
                                <Dialog
                                    PaperProps={{
                                        style: {
                                        backgroundColor: 'white',
                                        },
                                    }}
                                    open={open}
                                    onClose={handleClose}
                                >
                                    <DialogTitle> </DialogTitle>
                                    <DialogContent>
                                        <DialogContentText>
                                            { emailDialogText }
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleClose} color='primary'>
                                            Okay
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                            </ContactForm>
                        </ContactWrap>
                        <BtnWrapper>    
                            <SubmitBtn 
                                type='submit' 
                                data-aos='fade-right'
                                onClick={onSubmit} 
                            >
                                Submit {String.fromCharCode(10140)}
                            </SubmitBtn>  
                        </BtnWrapper>
                    </Column1>
                    <Column2>
                        <SubTitleWrapper data-aos='fade-down'>
                            <SubTitle>
                                Booking A Consultation
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