import {React, Component, useEffect} from 'react'
import {
    InformationContainer,
    InformationWrapper,
    Row1,
    Column1,
    Title,
    Body,
    Column2,
    Column3,
    MapWrapper,
} from './LocationComponents'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import Aos from 'aos'
import 'aos/dist/aos.css'

class Location extends Component {

   componentDidMount() {
    Aos.init({duration: 1500});
   }

   componentDidUpdate() {
    Aos.init({duration: 1500});
   }


    render() {
        const mapStyles = {
            maxWidth: "350px",
            height: "500px",
            overflowX: "hidden",
            overflowY: "hidden"
            
          };

          const containerStyles = {
            maxWidth: "350px",
            height: "500px",
            
          };
        return (
            <InformationContainer id='location'>
                <InformationWrapper>
                    <Row1>
                            <Column1>
                                <Title data-aos='fade-right'>
                                Barry Dean Pharmacy
                                </Title>
                                <Body data-aos='fade-left'>
                                53 Beach Street
                                </Body>
                                <Body data-aos='fade-right'>
                                Frankston VIC 3199
                                </Body>
                                <Body data-aos='fade-left'>
                                97835201
                                </Body>
                                <MapWrapper data-aos='flip-up'>
                                    <Map
                                    google={this.props.google}
                                    zoom={18}
                                    style={mapStyles}
                                    containerStyle={{position: 'relative'}}
                                    initialCenter={{ lat: -38.142076655050225, lng: 145.13012378286646 }}
                                    >
                                        <Marker position={{ lat: -38.142076655050225, lng: 145.13012378286646 }} />
                                    </Map>

                                </MapWrapper>
                            </Column1>
                            <Column2>
                                <Title data-aos='fade-right'>
                                    Frankston Healthcare
                                </Title>
                                <Body data-aos='fade-left'>
                                    4/12 Young Street
                                </Body>
                                <Body data-aos='fade-right'>
                                    Frankston VIC 3199
                                </Body>
                                <Body data-aos='fade-left'>
                                    97700023
                                </Body>
                                <MapWrapper data-aos='flip-up'>
                                    <Map
                                    google={this.props.google}
                                    zoom={18}
                                    style={mapStyles}
                                    containerStyle={{position: 'relative'}}
                                    initialCenter={{ lat: -38.14249285232113, lng: 145.125669697881 }}
                                    >
                                        <Marker position={{ lat: -38.14249285232113, lng: 145.125669697881 }} />
                                    </Map>

                                </MapWrapper>
                            </Column2>
                            <Column3>
                                <Title data-aos='fade-right'>
                                    Skye Medical Centre
                                </Title>
                                <Body data-aos='fade-left'>
                                    80 McCormicks Road
                                </Body>
                                <Body data-aos='fade-right'>
                                    Skye VIC 3977
                                </Body>
                                <Body data-aos='fade-left'>
                                    97828555
                                </Body>
                                <MapWrapper data-aos='flip-up'>
                                    <Map
                                    google={this.props.google}
                                    zoom={18}
                                    style={mapStyles}
                                    containerStyle={{position: 'relative'}}
                                    initialCenter={{ lat: -38.10979428463753, lng: 145.19578315383433 }}
                                    >
                                        <Marker position={{ lat: -38.10979428463753, lng: 145.19578315383433 }} />
                                    </Map>
                                </MapWrapper>
                            </Column3>

                    </Row1>
                </InformationWrapper>
            </InformationContainer>
        )
    }
};


export default GoogleApiWrapper({
    apiKey: ("AIzaSyCutWkXPImeE_PWgJYV2vkxSiEqf_yWUWI")
})(Location)