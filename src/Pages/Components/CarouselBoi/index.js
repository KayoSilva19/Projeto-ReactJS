import React from "react";

import Carousel from 'react-elastic-carousel';

import ImageOne from '../../../Assets/Images/BG-Gado1.png';
import ImageTwo from '../../../Assets/Images/BG-Gado2.png';
import ImageThree from '../../../Assets/Images/BG-feno3.png';

import {
    Container,
    Center,
    Item,
    Card,
    ContainerText,
    CenterDiv,
} from "./styles";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 999, itemsToShow: 1 },
    { width: 999, itemsToShow: 1 },
    { width: 999, itemsToShow: 1 },
];

export default function CarouselBoi() {
    return (
        <>
            <Center>

                <Container>
                    <Carousel breakPoints={breakPoints}>
                        <Card>
                            <Item>
                                <img src={ImageOne} alt=" Carousel" />
                                <ContainerText>
                                    <CenterDiv>
                                        <h1>Rebanho comercial</h1>
                                        <span>Gado de alto padrão <br />
                                            e qualidade</span>
                                        <button className="buttonBigCards" type="submit">
                                            <span>SAIBA MAIS</span>
                                        </button>
                                    </CenterDiv>
                                </ContainerText>
                            </Item>
                        </Card>
                        <Card>
                            <Item>
                                <img src={ImageTwo} alt=" Carousel" />
                                <ContainerText>
                                    <CenterDiv>
                                        <h1>Rebanho comercial</h1>
                                        <span>Gado de alto padrão <br />
                                            e qualidade</span>
                                        <button className="buttonBigCards" type="submit">
                                            <span>SAIBA MAIS</span>
                                        </button>
                                    </CenterDiv>
                                </ContainerText>
                            </Item>
                        </Card>
                        <Card>
                            <Item>
                                <img src={ImageThree} alt=" Carousel" />
                                <ContainerText>
                                    <CenterDiv>
                                        <h1>Rebanho comercial</h1>
                                        <span>Gado de alto padrão <br />
                                            e qualidade</span>
                                        <button className="buttonBigCards" type="submit">
                                            <span>SAIBA MAIS</span>
                                        </button>
                                    </CenterDiv>
                                </ContainerText>
                            </Item>
                        </Card>
                    </Carousel>
                </Container>
            </Center >
        </>
    );
}
