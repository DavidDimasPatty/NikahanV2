import React, { useRef, useEffect, useState } from "react";
import "../assets/style/rightQuotes.css"

const RightQuotes = () => {

    return (
        <div className="wrapperQuotesRight">
            <div className="contentQuotesRight animate-on-scroll">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="quotesRight d-flex justify-content-center align-items-center">
                        <p>
                            “Cinta tidak hanya tentang saling memandang,
                            tetapi melihat bersama ke arah yang sama.”
                        </p>
                    </div>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="authorRight">
                        - Antoine de Saint-Exupery
                    </div>
                </div>
            </div>
        </div>
    );
}


export default RightQuotes;