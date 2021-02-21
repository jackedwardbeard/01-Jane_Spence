import {React, Component} from 'react'
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

class Location extends Component {

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
                                <Title>
                                Barry Dean Pharmacy
                                </Title>
                                <Body>
                                53 Beach Street
                                </Body>
                                <Body>
                                Frankston VIC 3199
                                </Body>
                                <Body>
                                97835201
                                </Body>
                                <MapWrapper>
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
                                <Title>
                                    Frankston Healthcare
                                </Title>
                                <Body>
                                    4/12 Young Street
                                </Body>
                                <Body>
                                    Frankston VIC 3199
                                </Body>
                                <Body>
                                    97700023
                                </Body>
                                <MapWrapper>
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
                                <Title>
                                    Skye Medical Centre
                                </Title>
                                <Body>
                                    80 McCormicks Road
                                </Body>
                                <Body>
                                    Skye VIC 3977
                                </Body>
                                <Body>
                                    97828555
                                </Body>
                                <MapWrapper>
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