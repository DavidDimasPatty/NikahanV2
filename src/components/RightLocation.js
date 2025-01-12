import React, { useRef, useEffect, useState } from "react";
import namaWoman from "../assets/image/namaWoman.png"
import "../assets/style/rightLocation.css"

const RightLocation = () => {

    return (
        <div className="wrapperLocationRight d-flex justify-content-center align-items-center">
            <div className="customCardRight">
                <div className="pemberkatanRight">
                    <div>
                        <div className="titlePemberkatan">
                            HOLY MATRIMONY
                        </div>
                        <div className="descPemberkatan">
                            Minggu, 2 February 2025
                            <br />
                            Pukul 12:00 WIB
                            <br />
                            VIHARA AVALOKITESVARA
                            <br />
                            Jl.Mangga Besar Raya No 58, Jakarta Barat
                        </div>
                        <div className="buttonPemberkatanWrapper d-flex justify-content-start align-items-center">
                            <button className="buttonPemberkatan"> <i className="bi bi-geo-fill text-dark me-2" />Lokasi</button>
                        </div>
                    </div>
                </div>
                <div className="resepsiRight">
                    <div>
                        <div className="titleResepsi">
                            WEDDING RECEPTION
                        </div>
                        <div className="descResepsi">
                            Minggu, 2 February 2025
                            <br />
                            Pukul 19:00 WIB
                            <br />
                            JAGAT BUILDING
                            <br />
                            Jl. Tomang Raya No. 28, Jakarta Barat
                        </div>
                        <div className="buttonResepsiWrapper d-flex justify-content-end align-items-center">
                            <button className="buttonResepsi"> <i className="bi bi-geo-fill text-dark me-2" />Lokasi</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default RightLocation;