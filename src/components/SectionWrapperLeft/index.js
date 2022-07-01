import React from "react";
import { useState } from "react";

import './index.css'
import BtnLine from "../BtnLine";

function SectionWrapperLeft() {
    const [screenWidth, setScreenWidth] = useState(window.screen.availWidth)
    let svgWidth = 431

    window.addEventListener('resize', () => setScreenWidth(window.screen.availWidth))

    screenWidth < 400 ? svgWidth = 300 : svgWidth = 431
    return (
        <div className="section-wrapper__left">
            <BtnLine />
            <div className="section-wrapper__mask-background"></div>
            {/* Supported in all browsers */}
            <svg height="110" width={svgWidth} className="section-wrapper__headings">
                <defs>
                    <linearGradient id="linearGradient" gradientUnits="userSpaceOnUse">
                        <stop stopColor="rgb(255, 255, 255)" offset="0" />
                        <stop stopColor="rgb(255, 64, 5)" offset="1" />
                    </linearGradient>
                </defs>
                <g>
                    <text className="section-wrapper__h1" x="0" y="45" fill="url(#linearGradient)">
                        Путешествие
                    </text>
                    <text className="section-wrapper__h3" x="0" y="75" fill="url(#linearGradient)">
                        на красную планету
                    </text>
                </g>
            </svg>
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