import React, { useRef, useEffect, useState } from "react";
import "../assets/style/rightLocation.css"
import bunga from "../assets/image/BackgroundImage/bunga.png";
const RightLocation = () => {
    const locationPemberkatan = {
        latitude: -6.144820107864263,
        longitude: 106.82190209319495,
    };

    const locationWedding = {
        latitude: -6.177174631046304,
        longitude: 106.79972322327937,
    };

    const googleMapsLinkPemberkatan = `https://www.google.com/maps?q=VIHARA AVALOKITESVARA Mangga Besar`;
    const googleMapsLinkWedding = `https://www.google.com/maps?q=JAGAT OFFICE BUILDING (JOB)`;
    return (
        <div className="wrapperLocationRight d-flex justify-content-center align-items-center">
            {/* <div className="gifLove2">
                <img src={gifLove2} className="gifLove2Img" />
            </div>
            <div className="gifLove22">
                <img src={gifLove2} className="gifLove22Img" />
            </div> */}
            <div className="locationRight animate-on-scroll ">
                <div>
                    <div className="leftFlower">
                        <img src={bunga} className="leftFlowerImg" />
                    </div>
                    {/* <div className="rightFlower">
                        <img src={rightFlower} className="rightFlowerImg" />
                    </div> */}
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

                                    </div>
                                    <div className="buttonPemberkatanWrapper d-flex justify-content-start align-items-center">
                                        <button className="buttonPemberkatan" onClick={() => window.open(googleMapsLinkPemberkatan, '_blank')}> <i className="bi bi-geo-fill me-2" />Lokasi</button>
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
                                    </div>
                                    <div className="buttonResepsiWrapper d-flex justify-content-end align-items-start">
                                        <button className="buttonResepsi" onClick={() => window.open(googleMapsLinkWedding, '_blank')}> <i className="bi bi-geo-fill me-2" />Lokasi</button>
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