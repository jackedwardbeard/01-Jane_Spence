// dependencies
const path = require('path');
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

// enable environment variables
require('dotenv').config()

// create the server, set port to env variable (e.g. on heroku), or port 5000 locally
const app = express();
const PORT = process.env.PORT || 5000;

// allows us to access req.body
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// enables CORS
app.use(cors());

// tells backend to serve files from the build folder
app.use(express.static(path.join(__dirname, 'jane_spence/build')));

// redirect all 'stray' requests to index.html react file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/jane_spence/build/index.html'));
});

// our server side POST
app.post('/api/sendMail', (req, res) => {

    // the data received from the client side POST request (using axios)
    const data = req.body;

    // create an SMTP email transport channel using the given gmail account as the sender
    const smtpTransport = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    })

    // create the email
    let email = {};

    // if no name given, but phone/email/enquiry given
    if (data.name === '' && data.phone !== '') {
        email = {
            from: `${data.name} (${data.email})`, // sender address
            to: process.env.DEST_EMAIL, // receiver address(es)
            subject: `Enquiry from ${data.email}`, // subject line
            text: `You have received an enquiry from ${data.email}. Their phone number is ${data.phone}. Their enquiry is: ${data.enquiry}` // email body
        }
    }

    // if no phone given, but name/email/enquiry given
    else if (data.name !== '' && data.phone === '') {
        email = {
            from: `${data.email}`, // sender address
            to: process.env.DEST_EMAIL, // receiver address(es)
            subject: `Enquiry from ${data.name} (${data.email})`, // subject line
            text: `You have received an enquiry from ${data.name}. Their phone number was not given. Their enquiry is: ${data.enquiry}` // email body
        }
    }

    // if no phone or name given, but email/enquiry given
    else if (data.name === '' && data.phone === '') {
        email = {
            from: `${data.email}`, // sender address
            to: process.env.DEST_EMAIL, // receiver address(es)
            subject: `Enquiry from ${data.email}`, // subject line
            text: `You have received an enquiry from ${data.email}. Their phone number was not given. Their enquiry is: ${data.enquiry}` // email body
        }
    }

    // if all fields were provided
    else {
        email = {
            from: `${data.name} (${data.email})`, // sender address
            to: process.env.DEST_EMAIL, // receiver address(es)
            subject: `Enquiry from ${data.name}`, // subject line
            text: `You have received an enquiry from ${data.name}. Their phone number is ${data.phone}. Their enquiry is: ${data.enquiry}` // email body
        }
    }

    // send the email
    smtpTransport.sendMail(email, (error, response) => {

        // if unsuccessful
        if (error) 
        {
            console.log(error);
            res.send(error);
        } 

        // if successful
        else 
        {
            console.log('Email sent successfully!', response);
            res.send('Email sent successfully!');
        }

        smtpTransport.close();
    })

})

// the express server is running & listening for requests on PORT 5000
app.listen(PORT,  () => {
    console.log('The backend is running on PORT', PORT);
})