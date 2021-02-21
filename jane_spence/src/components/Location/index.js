import React from 'react'
import {
    InformationContainer,
    InformationWrapper,
    Row1,
    Column1,
    TextWrapper,
    Title,
    Body,
    Column2,
    Img,
    ImgWrap,
    SectionFooter
} from './LocationComponents'


const Location = ({id}) => {
    return (
        <InformationContainer id={id}>
            <InformationWrapper>
                <Row1>
                    <Column1>
                        <TextWrapper>
                            <Title>
                                Location
                            </Title>
                            <Body>
                                
                            </Body>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img/>
                        </ImgWrap>
                    </Column2>
                </Row1>
            </InformationWrapper>
            <SectionFooter/>
        </InformationContainer>
    )
};


export default Location