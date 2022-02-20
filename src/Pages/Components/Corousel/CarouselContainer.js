import React from "react";
import { Carousel } from 'react-bootstrap';

import image1 from '../../../Assets/Images/Banner01.png'
import image2 from '../../../Assets/Images/Banner02.png'

import Topo from '../Topo/index';

import './styles.css';

export default function CarouselContainer() {
    return (
        <Carousel fade={true} pause={false}>
            <Carousel.Item interval={3000}>
                <Topo />
                <img
                    className="d-block w-100"
                    src={image1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <div className="containerDiv">
                        <div className="contentDiv">
                            <h3>Há mais de 30 anos oferecendo <br />
                                o melhor da agropecuária</h3>
                            <p>Gado e feno da mais alta qualidade<br />
                                você encontra na RC Agropecuária
                            </p>
                            <button
                                className="buttonOne"
                                type="submit"
                            >
                                <span>CONHEÇA A RC AGROPECUÁRIA</span>
                            </button>
                        </div>
                    </div>


                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={50000}>
                <Topo />
                <img
                    className="d-block w-100"
                    src={image2}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <div className="containerDiv">
                        <div className="contentDiv">
                            <h3>Conheça o nosso <br /> Feno da Villa</h3>
                            <p>Alimento de qualidade <br /> para o seu rebanho</p>
                            <button
                                className="buttonOne"
                                type="submit"
                            >
                                <span>CONHEÇA A RC AGROPECUÁRIA</span>
                            </button>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    );
}
