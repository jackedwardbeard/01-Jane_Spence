// our .env (environment variables) file stores our private email login details
require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const mailer = require("nodemailer");

// create the express app/backend/server
const app = express();

// body parser is used to receive our POST request as req.body
// we can then easily extract our data from this req.body variable
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// other heroku things
const whitelist = ['http://localhost:3000'​, 'http://localhost:5000'​, 'https://shrouded-journey-38552.heroku.com']
const corsOptions = {
  origin: function (origin, callback) {
    console.log("** Origin of request " + origin)
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log("Origin acceptable")
      callback(null, true)
    } else {
      console.log("Origin rejected")
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(corsOptions))

// our server side POST, used to send an email with data received from the client side (contact form)
app.post("/api/sendMail", (req, res) => {

    // the data received from the client side POST request (using axios)
    const data = req.body;

    // the email address that will send the email from our contact form
    const smtpTransport = mailer.createTransport({
        service: "Gmail", // hostname
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    // the data we wish to send in our e-mail
    // these will be delivered to whichever inbox we choose to use
    const mail = {
        from: `${data.name} (${data.email})`, // sender address (who sends)
        to: process.env.DEST_EMAIL, // list of receivers (who receives)
        subject: `Message from ${data.name}`, // Subject line
        text: `${data.name} (${data.phone}) (${data.email}) says: ${data.enquiry}`
    }

    // the sending of the e-mail
    smtpTransport.sendMail(mail, function(error, response) {
        if(error) {
            console.log(error)
        } else {
            console.log( "E-mail sent successfully!")
        }
        smtpTransport.close();
    })

})

// shows the react app in the browser upon visiting index.html in our build folder
const path = require('path');
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'jane_spence/build')));
// Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'jane_spence/build', 'index.html'));
  });
}

// the express server is running & listening for requests on PORT 5000
app.listen(5000,  () => {
    console.log("The backend is running on PORT 5000!");
})