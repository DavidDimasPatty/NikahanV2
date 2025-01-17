import React, { useRef, useEffect, useState } from "react";
import "../assets/style/rightQuotes.css"

const RightQuotes = () => {

    return (
        <div className="wrapperQuotesRight">
            <div className="contentQuotesRight animate-on-scroll">
                <div className="quotesRight">
                    “Cinta tidak hanya tentang saling memandang,
                    tetapi melihat bersama ke arah yang sama.”
                </div>
                <div className="authorRight">
                    - Antoine de Saint-Exupery
                </div>
            </div>
        </div>
    );
}


export default RightQuotes;