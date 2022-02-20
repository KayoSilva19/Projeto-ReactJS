import React from "react";

import Carousel from 'react-elastic-carousel';

import ImageOne from '../../../Assets/Images/sliderImage1.png';
import ImageTwo from '../../../Assets/Images/silderImg2.png';
import ImageThree from '../../../Assets/Images/silderImg3.png';

import {
    Container,
    Center,
    Item,
    Card,
    ContainerText,
    Text,
    CenterDiv,
    CenterDivBottom
} from "./styles";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];

export default function CarouselInlineFooter() {
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
                                <CenterDiv>
                                    <p>01, setembro de 2021</p>
                                    <Text>13º terceiro leilão Qualidade Total já tem
                                        data definida para 2022</Text>
                                </CenterDiv>
                                <CenterDivBottom>

                                    <a href="#">LEIA MAIS</a>
                                </CenterDivBottom>
                            </ContainerText>
                        </Card>
                        <Card>
                            <Item>
                                <img src={ImageTwo} alt=" Carousel" />
                            </Item>
                            <ContainerText>
                                <CenterDiv>
                                    <p>01, setembro de 2021</p>
                                    <Text>BFazenda Villa Canabrava se torna a maior <br />
                                        do norte de Minas após investimento
                                    </Text>
                                </CenterDiv>
                                <CenterDivBottom>
                                    <a href="#">LEIA MAIS</a>
                                </CenterDivBottom>
                            </ContainerText>
                        </Card>
                        <Card>
                            <Item>
                                <img src={ImageThree} alt=" Carousel" />
                            </Item>
                            <ContainerText>
                                <CenterDiv>
                                    <p>01, setembro de 2021</p>
                                    <Text>Pecuária brasileira alcança recorde <br /> histórico durante a pandemi</Text>
                                </CenterDiv>
                                <CenterDivBottom>
                                    <a href="#">LEIA MAIS</a>
                                </CenterDivBottom>
                            </ContainerText>
                        </Card>
                    </Carousel>
                </Container>
            </Center >
        </>
    );
}
