import React, {useState} from 'react'
import MobileMenu from '../components/MobileMenu'
import Navbar from '../components/Navbar'
import LandingBackground from '../components/Landing';
import Information from '../components/Information';
import { About, FAQ } from '../components/Information/pages';
import Location from '../components/Location'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import {Helmet} from "react-helmet"

const Home = ({toggle}) => {

    // react hooks to use state without needing a class

    // this is our state variable
    const [clicked, setClicked] = useState(false)

    // function to change the state to its opposite state when clicked
    const reverseState = () => { setClicked(!clicked) }

    return (
        <>
        <Helmet>
                <meta name="Home" content="Welcome to Jane Spence Diabetes Education!"/>
                <title>Jane Spence Diabetes Education</title>
        </Helmet>
        <MobileMenu clicked={clicked} reverseState={reverseState}/>
        <Navbar reverseState={reverseState}/>
        <LandingBackground id="landing"/>
        <Information {...About}/>
        <Information {...FAQ}/>
        <Location id="location"/>
        <Contact id="contact"/>
        <Footer id="footer"/>
        </>
    )
};

export default Home
