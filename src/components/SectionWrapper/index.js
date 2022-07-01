import React from "react";

import './index.css'
import SectionWrapperLeft from "../SectionWrapperLeft";
import SectionWrapperRight from "../SectionWrapperRight";

function SectionWrapper() {
    return (
        <div className='main-section__container'>
            <div className="wrapper section-wrapper">
                <SectionWrapperLeft />
                <SectionWrapperRight />
            </div>
        </div>
    )
}

export default SectionWrapper