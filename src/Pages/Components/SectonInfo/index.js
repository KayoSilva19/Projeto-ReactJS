import React from "react";

import './styles.css';

import CarouselInline from "../CarouselInline";

export default function SectionCarouselFooter() {
    return (
        <div className="containerSection">
            <div className="contentTitle">
                <h1>Veja nossas últimas publicações</h1>
                <ul className="ContentUl">
                    <li class="Facebook"></li>
                    <li class="Instagram"></li>
                    <li class="Tiktok"></li>
                </ul>
            </div>
            <section className="sectionCarousel">
                <CarouselInline />
            </section>
        </div>
    );
}
