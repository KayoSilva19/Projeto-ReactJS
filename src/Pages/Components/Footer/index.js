import React from "react";

import './styles.css';

import Logo from '../../../Assets/Images/Logo-BRANCA.png';
import LogoEmpresa from '../../../Assets/Images/clickweb.png';
import IconEmail from '../../../Assets/Images/IconEmail.png';
import IconFaceBook from '../../../Assets/Images/IconFaceBook.png';
import IconInsta from '../../../Assets/Images/IconInsta.png';
import IconTikTok from '../../../Assets/Images/IconEmail.png';

export default function Footer() {
    return (
        <div className="containerFooter">
            <div className="sectionOne">
                <div className="contenOne">
                    <h1>Assine nossa newsletter e receba <br /> novidades em seu e-mail</h1>
                    <div className="ContentForm">

                        <form>
                            <span>NOME</span>
                            <input type="text"
                                placeholder="Nome"
                            />
                            <span>E-MAIL</span>
                            <input type="email"
                                placeholder="E-mail"
                            />
                        </form>
                        <button
                            className="buttonOne1"
                            type="submit"
                        >
                            <span>ASSINAR NEWSLETTER</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="sectionTwo">
                <div className="contentSocial">
                    <ul>
                        <li>
                            <img className="imgIcon" src={IconEmail} />
                            <a href="/">atendimento@rcagropecuaria.com.br</a>
                        </li>
                        <li>
                            <img className="imgIcon" src={IconFaceBook} />
                            <a href="/">RC Agropecuaria</a>
                        </li>
                        <li>
                            <img className="imgIcon" src={IconInsta} />
                            <a href="/">@rcagropecuaria
                            </a></li>
                        <li>
                            <img className="imgIcon" src={IconTikTok} />
                            <a href="/">rcagropecuaria</a>
                        </li>
                    </ul>
                </div>
                <div className="contentLogo">
                    <img src={Logo} alt="Logo" />
                </div>
                <div className="contentInfo">
                    <ul>
                        <li><a href="/">SOBRE NÓS</a></li>
                        <li><a href="/">FAZENDAS</a></li>
                        <li><a href="/">GADO DE CORTE</a></li>
                        <li><a href="/">FENO DA VILLA</a></li>
                        <li><a href="/">GUZERÁ</a></li>
                    </ul>
                    <ul className="ul2">
                        <li> <a href="/">LEILÕES</a></li>
                        <li><a href="/">NOTÍCIAS</a></li>
                        <li><a href="/">GALERIA</a></li>
                        <li><a href="/">FALE CONOSCO</a></li>
                    </ul>
                </div>
            </div>
            <div className="footerByDev">
                <div className="contentByDev">
                    <span>Todos os direitos reservados, 2021</span>
                    <img src={LogoEmpresa} alt="Logo Empresa" />
                </div>
            </div>
        </div>
    );
}
