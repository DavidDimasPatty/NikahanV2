import React, { useRef, useEffect, useState } from "react";
import namaWoman from "../assets/image/namaWoman.png"
import "../assets/style/rightLocation.css"
import leftFlower from "../assets/image/BackgroundImage/leftFlower.png"
import rightFlower from "../assets/image/BackgroundImage/rightFlower.png"
import gifLove2 from "../assets/gif/gifLove2.gif"
import littleDoll from "../assets/gif/littletdoll.gif"
const RightLocation = () => {

    return (
        <div  className="wrapperLocationRight d-flex justify-content-center align-items-center">
            <div className="littleDoll">
                <img src={littleDoll} className="littleDollImg" />
            </div>
            <div className="gifLove2">
                <img src={gifLove2} className="gifLove2Img" />
            </div>
            <div className="gifLove22">
                <img src={gifLove2} className="gifLove22Img" />
            </div>
            <div className="locationRight animate-on-scroll">
                <div>
                    <div className="leftFlower">
                        <img src={leftFlower} className="leftFlowerImg" />
                    </div>
                    <div className="rightFlower">
                        <img src={rightFlower} className="rightFlowerImg" />
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
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
                                        <button className="buttonPemberkatan"> <i className="bi bi-geo-fill me-2" />Lokasi</button>
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
                                        <button className="buttonResepsi"> <i className="bi bi-geo-fill me-2" />Lokasi</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default RightLocation;