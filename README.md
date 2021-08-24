# Jane Spence Diabetes Education
## By Jack Beard - www.github.com/jackedwardbeard

## Website URL
www.janespencediabetesed.com.au

## Project Description

This project is an interactive React.js website built for client Jane Spence. The front-end uses React/JavaScript styled components. The front-end is also fully responsive. I started not knowing anything about vh/vw/vmin/vmax units, and started my first iterations using px. I soon learned that px simply didn't cut it when it came to having a fully responsive design, so I made the switch and re-factored the website using primarily vh/vw units. It now works on all google mobile view mobiles, as well as scaling up and down for most (if not all) common screen sizes. The back-end server uses Express.js/Node.js, and several other dependencies are listed below. The back-end server is needed for our contact page, where our contact form is to send an e-mail upon submission. Finally, the react/node/express app is hosted on heroku, using a custom domain name. Cloudflare is then hooked up to this domain to provide SSL encryption. This was my first time building a website, and my first time building a full-stack (minus the DB) application. I have learned A LOT. Feel free to message me if you're interested in any part of this project.


## Stack
#### Front-End 

```bash
React.js
```
#### Back-End

```bash
Node/Express.js
```

## To Start Front-End (cd jane_spence)

```bash
npm start

OR

npm run start
```

## To Start Back-End (cd root folder // 01-Jane_Spence)

```bash
### Without nodemon server refreshing on code change

npm start

OR

npm run start

OR

node index.js

### With nodemon server refreshing on code change

nodemon index.js

OR

npm run backend

```

## To Start Front-End AND Back-End Concurrently (cd root folder // 01-Jane_Spence)

```bash
npm run dev
```

## Required Modules (Front-End)

### To install all packages (cd jane_spence)
```bash
npm install
```
### react-scroll
##### react-scroll lets us use smooth scroll on components that link to certain pages/divs/ids.
```bash
npm install react-scroll
```
### react-icons
##### react-icons are used for some simple icons, such as the triple bars mobile icon, as well as the plus and minus icons.
```bash
npm install react-icons
```
### styled-components
##### styled-componments let us write our CSS styling inside our .js files, rather than having to make separate .CSS files.
```bash
npm install styled-components
```
### aos
##### aos allows us to add scrolling animations to our front-end.
```bash
npm install aos
```
### react-hook-form
##### react-hook-form lets us easily add validation to our contact form fields.
```bash
npm install react-hook-form
```
### axios
##### axios allows us to make POST/GET HTTP requests between our front and back-end.
```bash
npm install axios
```
### http-server-proxy
##### allows us to set up the connection from our front-end app (localhost:3000), to our back-end server (localhost:5000).
```bash
npm install http-server-proxy
```
### react-helmet
##### allows us to modify the tab logo/description.
```bash
npm install react-helmet
```
### react/react-dom/react-router-dom
#### allows us to route to external links in the footer.
```bash
npm install react/react-dom/react-router/dom
```

## Required Modules (Back-End)

### To install all packages (cd root folder)
```bash
npm install
```
### body-parser
##### allows our back-end to receive our POST call data from the front-end react app as req.body, which makes unpacking this data extremely easy.
```bash
npm install body-parser
```
### express
##### express is built on top of Node.js, and will act as our back-end server itself.
```bash
npm install express
```
### nodemailer
##### nodemailer allows our back-end express server to actually send an e-mail with the data received from our front-end contact form.
```bash
npm install nodemailer
```
### cors
##### cors provides express middleware.
```bash
npm install cors
```
### dotenv
##### dotenv lets us use process environmental variables to store private information.
```bash
npm install dotenv
```
### concurrently
##### concurrently allows us to run multiple npm commands at the same time (i.e. npm start in our front-end folder (which runs react-scripts-start and boots up our react front-end app), and npm run backend (which runs nodemon index.js and boots up our back-end express server with nodemon refreshing)
```bash
npm install concurrently **OPTIONAL**
```
### nodemon
##### nodemon [server's file name] will restart the server everytime code is changed in said file. This is opposed to the standard npm start or Node index.js which will not have this feature.
```bash
npm install nodemon **OPTIONAL**
```


