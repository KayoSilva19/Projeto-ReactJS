import React from "react";

import CarouselBoi from "../CarouselBoi";

import './styles.css';

export default function SectionBoi() {
    return (
        <>
            <div className="containerSectionBoi" >
                <div className="containerCard">
                    <div className="Card1">
                        <h1>Rebanho comercial</h1>
                        <span>Gado de alto padrão <br />
                            e qualidade</span>
                        <button className="buttonBigCards" type="submit">
                            <span>SAIBA MAIS</span>
                        </button>
                    </div>
                </div>
                <div className="containerCard">
                    <div className="Card2">
                        <h1>Seleção Guzerá</h1>
                        <span>O melhor da pecuária mineira <br />
                            você encontra aqui</span>
                        <button className="buttonBigCards" type="submit">
                            <span>SAIBA MAIS</span>
                        </button>
                    </div>
                </div>
                <div className="containerCard">
                    <div className="Card3">
                        <h1>Feno da Villa</h1>
                        <span>Alimentação de alta qualidade <br />
                            para o seu plantel</span>
                        <button className="buttonBigCards" type="submit">
                            <span>SAIBA MAIS</span>
                        </button>
                    </div>
                </div>

            </div>
            <div className="carouselBoi">
                <CarouselBoi />
            </div>

        </>
    );
}
