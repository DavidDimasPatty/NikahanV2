import React, { useRef, useEffect, useState } from "react";
import "../assets/style/rightFooter.css"
import instagram from "../assets/image/instagram.png"

const RightFooter = () => {

    return (
        <div className="wrapperFooterAll">
            <div className="footerAll d-flex justify-content-center align-items-center">
                <div className="contentFooter">
                    <div className="text-center madeWith">
                        Made With ♥ By:
                    </div>
                    <div className="text-center companyUs">
                        iKōdora
                    </div>
                    <div className="logoIgWrapper text-center mt-2">
                        <img src={instagram} className="logoIg" />
                    </div>
                    <div className="text-center mt-3 backSound">
                        BACKSOUND BY:
                    </div>
                    <div className="text-center soundTittle">
                        ANDMESH - ANUGERAH TERINDAH
                    </div>
                </div>
            </div>
            <div className="footerRightFooter d-flex justify-content-center align-items-center right-reserved">
                © all rights reserved by iKōdora.
            </div>
        </div>
    );
};

export default RightFooter;