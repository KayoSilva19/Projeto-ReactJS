import React from "react";

import CarouselInlineFooter from '../CarouselInlineFooter/'

import './styles.css';



export default function SectionCarouselFooter() {
  return (
    <div className="containerSectionFooter">
      <div className="contentSectionFooter">
        <h1>Últimas notícias</h1>
        <CarouselInlineFooter />
        <button className="buttonCarouselFooter" type="submit">
          <span> VER MAIS NOTÍCIAS</span>
        </button>
      </div>
    </div>

  );
}
