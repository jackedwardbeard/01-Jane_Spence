import React, { useState } from 'react'
import MobileMenu from '../components/MobileMenu'
import Navbar from '../components/Navbar'
import LandingBackground from '../components/Landing'
import Information from '../components/Information'
import { About, FAQ } from '../components/Information/pages';
import Locations from '../components/Locations';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

const Home = () => {

    // open/close mobile menu
    const [clicked, setClicked] = useState(false)
    const reverseState = () => { setClicked(!clicked) }

    return (
        <>
        <Helmet>
            <meta name='Home' content='Welcome to Jane Spence Diabetes Education!'/>
            <title>Jane Spence Diabetes Education</title>
        </Helmet>
        <MobileMenu clicked={clicked} reverseState={reverseState}/>
        <Navbar reverseState={reverseState}/>
        <LandingBackground id='landing'/>
        <Information {...About}/>
        <Information {...FAQ}/>
        <Locations id='locations'/>
        <Contact id='contact'/>
        <Footer id='footer'/>
        </>
    )
};

export default Home
