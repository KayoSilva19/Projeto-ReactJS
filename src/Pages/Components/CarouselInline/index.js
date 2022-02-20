import React from "react";

import Carousel from 'react-elastic-carousel';

import ImageOne from '../../../Assets/Images/ImgOne.png';
import ImageTwo from '../../../Assets/Images/ImageTwo.png';
import ImageThree from '../../../Assets/Images/ImageThree.png';

import {
    Container,
    Center,
    Item,
    Card,
    ContainerText,
    Text,
    ButtonOne,
    CenterButton
} from "./styles";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];

export default function CarouselInline() {
    return (
        <>
            <Center>

                <Container>
                    <Carousel breakPoints={breakPoints}>
                        <Card>
                            <Item>
                                <img src={ImageOne} alt=" Carousel" />
                            </Item>
                            <ContainerText>
                                <a href="#">#fazendavillacanabrava</a>
                                <Text>Confinamento garrotada GUZONEL, aos 23 meses,
                                    rastreada no SISBOV.</Text>
                                <a href="#">#rcagropecuaria</a>
                            </ContainerText>
                        </Card>
                        <Card>
                            <Item>
                                <img src={ImageTwo} alt=" Carousel" />
                            </Item>
                            <ContainerText>
                                <a href="#">#fazendavillacanabrava</a>
                                <Text>Bezerras 11 meses, neste final de seca, com bom
                                    escore, à pasto + sal mineral ureado.
                                </Text>
                                <a href="#">#rcagropecuaria</a>
                            </ContainerText>
                        </Card>
                        <Card>
                            <Item>
                                <img src={ImageThree} alt=" Carousel" />
                            </Item>
                            <ContainerText>
                                <a href="#">#fazendavillacanabrava</a>
                                <Text>Confinamento 2021, vacas e novilhas para engorda.</Text>
                                <a href="#">#rcagropecuaria</a>
                            </ContainerText>
                        </Card>
                    </Carousel>
                    <CenterButton>
                    <ButtonOne>
                        <span>VISITAR O FACEBOOK DA RC AGROPECUÁRIA</span>
                    </ButtonOne>
                    </CenterButton>
                </Container>
            </Center>
        </>
    );
}
