import React from "react";

import './index.css'
import BtnLine from "../BtnLine";

function SectionWrapperLeft() {
    return (
        <div className="section-wrapper__left">
            <BtnLine />
            <div className="section-wrapper__mask-background"></div>
            <div className="section-wrapper__heading">
                <h1>Путешествие</h1>
                <h3>на красную планету</h3>
            </div>
            <div className="section-wrapper__button-start_border-block1"></div>
            <div className="section-wrapper__button-start_border-block2"></div>
            <div className="section-wrapper__button-start_border-block3"></div>
            <button className="section-wrapper__button-start">
                Начать путешествие
            </button>
        </div>
    )
}

export default SectionWrapperLeft