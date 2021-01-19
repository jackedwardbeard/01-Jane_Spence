import React, { Component } from 'react';
import Navbar from './Navbar/Navbar.js';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import './Locations.css';

class Locations extends Component {


    // first thing to call in the constructor(props) is always super(props),
    // this avoids errors
    constructor(props) {
        
    super(props);
    
    this.state = {lat: -38.15773518835747, lng: 145.16931797636528}
    
}


    render() {

   
    return (
        <div className="App-header">
        
            <Navbar></Navbar>
            <div className="locationsTitle">
            <h3>
                LOCATIONS
            </h3>
                        
            </div>
        
            <Map 
            className="map"
            google={this.props.google} 
            zoom={14}
            style={{top: '20%', left: '8%', width: '40%', height: '60%', position: 'fixed'}}
            initialCenter={{ lat: -38.15773518835747, lng: 145.16931797636528}}
            >
            <Marker>
                position={this.state}
            </Marker>
            </Map>

            <Map 
            className="map"
            google={this.props.google} 
            zoom={14}
            style={{top: '20%', left: '50%', width: '40%', height: '60%', position: 'fixed'}}
            initialCenter={{ lat: -38.15773518835747, lng: 145.16931797636528}}
            >
            <Marker>
                position={this.state}
            </Marker>
            </Map>

            <div className="mapInformation">
            <ul id="list">
                <li>Peninsula Private Hospital</li>
                <li>525 McClelland Dr, Frankston VIC 3199</li>
            </ul>
            </div>
            <div className="mapInformation">
            <ul id="list">
                <li>Peninsula Private Hospital</li>
                <li>525 McClelland Dr, Frankston VIC 3199</li>
            </ul>
            </div>
            
            
        </div>
    );
}
}



export default GoogleApiWrapper({
    apiKey: ("AIzaSyCutWkXPImeE_PWgJYV2vkxSiEqf_yWUWI")
  })(Locations)