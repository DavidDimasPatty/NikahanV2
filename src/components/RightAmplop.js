import React, { useRef, useEffect, useState } from "react";
import "../assets/style/rightAmplop.css"
import logoBCA from "../assets/image/logoBCA.png"

const RightAmplop = () => {

    return (
        <div className="wrapperAmplopAll d-flex justify-content-center align-items-center">
            <div className="amplopAll">
                <div className="animate-on-scroll">
                    <div className="amplopTitle">
                        Wedding Gift
                    </div>
                    <div className="amplopDesc d-flex justify-content-center align-items-center mb-4">
                        <b>Bagi keluarga dan sahabat yang ingin mengirimkan hadiah, silakan mengirimkannya melalui tautan berikut:</b>
                    </div>
                    <div className="wrapperAmplopCard d-flex justify-content-center align-items-center mb-3">
                        <div className="amplopCard">
                            <div className="namaBank d-flex justify-content-end align-items-center">
                                <img src={logoBCA} className="logoBank" />
                            </div>
                            <div className="atasNamaBank d-flex justify-content-center align-items-center">
                                FENDY SANTOSO
                            </div>
                            <div className="nomorRekeningBank d-flex justify-content-center align-items-center mt-3">
                                57704125789
                            </div>
                        </div>
                    </div>


                    <div className="wrapperCopyNoBankButton d-flex justify-content-center align-items-center">
                        <button className="copyNoBankButton"><i className="bi bi-clipboard-fill me-2 text-dark" />Copy No. Rekening</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default RightAmplop;