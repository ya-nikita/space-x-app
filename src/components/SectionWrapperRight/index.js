import React from "react";

import './index.css'

function SectionWrapperRight() {
    return (
        <div className="section-wrapper__right">
            <div className="section-wrapper__profits">
                <div className="section-wrapper__profit section-wrapper__profit1">
                    <span>мы</span>
                    <h1>1</h1>
                    <span>на рынке</span>
                </div>
                <div className="section-wrapper__profit section-wrapper__profit2">
                    <span>гарантируем</span>
                    <h1>50%</h1>
                    <span>безопасность</span>
                </div>
                <div className="section-wrapper__profit section-wrapper__profit3">
                    <span>календарик за</span>
                    <h1>2001<small>г.</small></h1>
                    <span>в подарок</span>
                </div>
                <div className="section-wrapper__profit section-wrapper__profit4">
                    <span>путешествие</span>
                    <h1>597</h1>
                    <span>дней</span>
                </div>
            </div>
        </div>
    )
}

export default SectionWrapperRight