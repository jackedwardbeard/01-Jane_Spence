import React, { Component } from 'react';
import Navbar from './Navbar/Navbar.js';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import './Locations.css';

const Locations = () => {



   
    return (
        <div className="App-header">
        
            <Navbar></Navbar>
            <div className="locationsTitle">
            <h3>
                LOCATIONS
            </h3>
                        
            </div>
        
            <div className="mapInformation">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3137.2465214005506!2d145.16715611532874!3d-38.157709879691545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad60b1b454a6771%3A0xb8da3effaaf10b0b!2sPeninsula%20Private%20Hospital!5e0!3m2!1sen!2sau!4v1611033339679!5m2!1sen!2sau" width="800" height="600" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            <ul id="list">
                <li>Peninsula Private Hospital</li>
                <li>525 McClelland Dr, Frankston VIC 3199</li>
            </ul>
            </div>
            
            
        </div>
    );
}




export default GoogleApiWrapper({
    apiKey: ("AIzaSyCutWkXPImeE_PWgJYV2vkxSiEqf_yWUWI")
  })(Locations)