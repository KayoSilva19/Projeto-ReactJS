import React from "react";

import { Card } from 'react-bootstrap';


import './styles.css';



export default function SectionFazenda() {
    return (
        <div className="containerSectionFazenda">
            <div className="contentFazenda">
                <h1>Nossas fazendas</h1>

                <div className="contentImagesPrincipal">
                    <Card>
                        <Card.ImgOverlay>
                            <span>Bocaiúva, MG</span>
                            <h2>Villa Canabrava</h2>
                            <div className="buttonDiv">

                                <button className="buttonCardFazenda" type="submit">
                                    <span> CONHEÇA</span>
                                </button>
                            </div>

                        </Card.ImgOverlay>
                    </Card>
                </div>

                <div className="contentImages">
                    <div className="cardEditCarousel1">
                        <span>Bocaiúva, MG</span>
                        <h2>Olhos D’Água Santa maria</h2>
                    </div>
                    <div className="cardEditCarousel2">
                        <span>ENGENHEIRO NAVARRO, MG</span>
                        <h2>Fazenda Jequitaí</h2>
                    </div>
                    <div className="cardEditCarousel3">
                        <span>BOCAÍUVA, MG</span>
                        <h2>Fazenda Terra Nova</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

