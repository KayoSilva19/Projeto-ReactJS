import React, { useState } from "react";
import Hamburger from 'hamburger-react'

import './styles.css';

export default function Topo() {
    return (

        <div className="containerHeader">
            <div className="contentHeader">
            <div className="img">
            </div>
                <ul>
                    <li><a href="#">SOBRE NÓS</a></li>
                    <li><a href="#">FAZENDAS</a></li>
                    <li><a href="#">REBANHO COMERCIAL</a></li>
                    <li><a href="#">FENO DA VILLA</a></li>
                    <li><a href="#">GUZERÁ</a></li>
                    <li><a href="#">LEILÕES</a></li>
                    <li><a href="#">NOTÍCIAS</a></li>
                    <li><a href="#">GALERIA</a></li>
                </ul>
                <button
                    className="buttonContato"
                    type="submit"
                >
                    <span>FALE CONOSCO</span>
                </button>
            </div>

        </div>
       
    );
}
