import React from "react";
import { } from 'react-icons';

import Carousel from '../Components/Corousel/CarouselContainer';

import SectionInfo from '../Components/SectonInfo';
import SectionFazenda from "../Components/SectionFazenda";
import SectionBoi from "../Components/SectionBoi";
import SectionCarouselFooter from '../Components/SectionCarouselFooter';
import Footer from '../Components/Footer';

import {
    Container,
    Content,
    Header,
} from './styles';


export default function Home() {
    return (

        <Container>
            <Content>
                <Header>
                    <Carousel />
                </Header>
                <SectionInfo />
                <SectionBoi />
                <SectionFazenda />
                <SectionCarouselFooter />
                <Footer />
            </Content>
        </Container>
    );
}