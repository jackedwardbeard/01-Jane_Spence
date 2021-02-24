import React, {useState} from 'react'
import MobileMenu from '../components/MobileMenu'
import Navbar from '../components/Navbar'
import LandingBackground from '../components/Landing';
import Information from '../components/Information';
import { About, FAQ } from '../components/Information/pages';
import Location from '../components/Location'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import SubFooter from '../components/SubFooter'

const Home = ({toggle}) => {

    // react hooks to use state without needing a class

    // this is our state variable
    const [clicked, setClicked] = useState(false)

    // function to change the state to its opposite state when clicked
    const reverseState = () => { setClicked(!clicked) }

    return (
        <>
        <MobileMenu clicked={clicked} reverseState={reverseState}/>
        <Navbar reverseState={reverseState}/>
        <LandingBackground id="landing"/>
        <Information {...About}/>
        <Information {...FAQ}/>
        <Location id="location"/>
        <Contact id="contact"/>
        <Footer id="footer"/>
        <SubFooter id="subfooter"/>
        
        </>
    )
};

export default Home
