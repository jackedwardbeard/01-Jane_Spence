# Jane Spence Diabetes Education
## By Jack Beard - www.github.com/jackedwardbeard

## Website URL
www.janespencediabetesed.com.au

## Initial Loading Times
The first visit to the website will be fairly slow to boot. This is because the website is hosted on Heroku, using the free tier plan. As such, to save dynos, the website basically shuts down after 30 minutes of inactivity. Simply visiting the site (from any device), will boot the website, and subsequent visits will be much quicker (unless it's inactive for 30 minutes again in which case it'll shut down).

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

## To Start Front-End

```bash
* cd jane_spence
* npm install
* npm start
```

## To Start Back-End

```bash
* cd 01-Jane_Spence (root folder)
* npm install
* start with nodemon refreshing: npm backend
* start without nodemon: npm start
```

## To Start Front-End AND Back-End Concurrently (cd root folder // 01-Jane_Spence)

```bash
npm run dev
```


