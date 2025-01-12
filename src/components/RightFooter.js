import React, { useRef, useEffect, useState } from "react";
import "../assets/style/rightFooter.css"

const RightFooter = () => {

    return (
        <div className="wrapperFooterAll">
            <div className="footerAll d-flex justify-content-center align-items-center">
                <div className="contentFooter">
                    <div className="text-center">
                        Made With ♥ By:
                    </div>
                    <div className="text-center">
                        iKōdora
                    </div>
                    <div className="text-center mt-3">
                        Backsound By:
                    </div>
                    <div className="text-center">
                        Nama Lagu - Nama Artis
                    </div>
                </div>
            </div>
            <div className="footerRightFooter d-flex justify-content-center align-items-center">
                © all rights reserved by iKōdora.
            </div>
        </div>
    );
};

export default RightFooter;