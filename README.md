# Jane Spence Diabetes Education
## By Jack Beard - www.github.com/JackBeard1

## Project Description

This project is an interactive React.js website built for client Jane Spence. The front-end uses React/javascript and uses styled components. The back-end server is made from Express.js/Node.js, and several other dependencies are listed below. This was my first time building a website. I have learned A LOT.


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

## To Start Back-End (cd backend)

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

## To Start Front-End AND Back-End Concurrently (cd backend)

```bash
npm run dev
```

## Required Modules (Front-End)

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
##### react-ook-orm lets us easily add validation to our contact form fields.
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

## Required Modules (Back-End)

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

