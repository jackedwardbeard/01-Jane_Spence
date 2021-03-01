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
    BodyHours,
    BodyHoursTitle
} from './LocationsComponents'
import Aos from 'aos'
import 'aos/dist/aos.css'

class Locations extends Component {

   componentDidMount() {
    Aos.init({duration: 1000});
   }

   componentDidUpdate() {
    Aos.init({duration: 1000});
   }
   


    render() {

        return (
            <InformationContainer id='locations'>
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
                                
                                <iframe title="map1" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3137.9188847061473!2d145.1279344153283!3d-38.14207907969426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad674d1a78b391d%3A0x7c22bbe52ae2c55e!2sBarry%20Dean%20Pharmacy!5e0!3m2!1sen!2sau!4v1614170400241!5m2!1sen!2sau" width="350" height="350" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
                                

                                </MapWrapper>
                                <BodyHoursTitle data-aos='fade-right'>
                                    Opening Hours
                                </BodyHoursTitle>
                                <BodyHours data-aos='fade-left'>
                                    Weekdays: 9am-7pm
                                </BodyHours>
                                <BodyHours data-aos='fade-right'>
                                    Saturday: 9am-1pm
                                </BodyHours>
                                <BodyHours data-aos='fade-left'>
                                    Sunday: 10am-12pm
                                </BodyHours>
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
                                
                                <iframe title="map2" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6275.511791798076!2d145.12146862642606!3d-38.14586866877413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad674d992c0c45d%3A0xbdd3f0051709a27f!2sFrankston%20Healthcare%20Medical%20Centre!5e0!3m2!1sen!2sau!4v1614171327851!5m2!1sen!2sau" width="350" height="350" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>


                                </MapWrapper>
                                <BodyHoursTitle data-aos='fade-right'>
                                    Opening Hours
                                </BodyHoursTitle>
                                <BodyHours data-aos='fade-left'>
                                    Weekdays: 8am-5pm
                                </BodyHours>
                                <BodyHours data-aos='fade-right'>
                                    Friday: 8am-4pm
                                </BodyHours>
                                <BodyHours data-aos='fade-left'>
                                    Saturday: 9am-3pm
                                </BodyHours>
                                <BodyHours data-aos='fade-right'>
                                    Sunday: 9am-12pm
                                </BodyHours>
                                
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
                                
                                <iframe title="map3" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d392.4139859699536!2d145.19540835917348!3d-38.10967787772698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad60c44615f3937%3A0x14f06cbcba6d4636!2sSkye%20Medical%20Centre!5e0!3m2!1sen!2sau!4v1614171252514!5m2!1sen!2sau" width="350" height="350" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>

                                </MapWrapper>
                                <BodyHoursTitle data-aos='fade-right'>
                                    Opening Hours
                                </BodyHoursTitle>
                                <BodyHours data-aos='fade-left'>
                                    Weekdays: 8:30am-5:30pm
                                </BodyHours>
                                <BodyHours data-aos='fade-right'>
                                    Saturday: 9am-5pm
                                </BodyHours>
                                <BodyHours data-aos='fade-left'>
                                    Sunday: 9am-5pm
                                </BodyHours>
                            </Column3>

                    </Row1>
                </InformationWrapper>
            </InformationContainer>
        )
    }
};


export default Locations;