import React, { useRef, useEffect, useState } from "react";
import "../assets/style/rightCouple.css"
import womanPhoto from "../assets/image/girlPhoto.jpg"
import manPhoto from "../assets/image/boyPhoto.jpg"
import coupleDiamond from "../assets/image/coupleDiamond.png"
import gifLove1 from "../assets/gif/gifLove.gif"
import gifLove2 from "../assets/gif/gifLove2.gif"
import gifLove3 from "../assets/gif/gifLove3.gif"
import pinkRibbon from "../assets/image/BackgroundImage/pinkRebon.png"
import balon1 from "../assets/image/BackgroundImage/baloon-removebg-preview.png"
import balon3 from "../assets/image/BackgroundImage/baloon3-removebg-preview.png"
const RightCouple = () => {

    return (
        <div className="wrapperCoupleRight d-flex justify-content-center align-items-center">

            {/* <div className="gif1Woman">
                <img src={gifLove1} className="gifLove1Woman" />
            </div>
            <div className="gif3Woman">
                <img src={gifLove3} className="gifLove3Woman"/>
            </div> */}

            <div className="coupleRight">
                <div className="titleCoupleRight d-flex justify-content-center align-items-center">
                    <div>
                        By The Grace of God   with the blessing of our parents
                        <br />
                        We request the honour of your presence at the marriage of
                    </div>
                </div>

                {/* <div className="pinkRibbon">
                    <img src={pinkRibbon} className="pinkRibbonImg" />
                </div> */}

                {/* <div className="balon1">
                    <img src={balon1} className="balon1Img" />
                </div>

                <div className="balon11">
                    <img src={balon1} className="balon11Img" />
                </div> */}

                {/* <div className="balon3">
                    <img src={balon3} className="balon3Img" />
                </div>

                <div className="balon31">
                    <img src={balon3} className="balon31Img" />
                </div> */}


                <div className="manRight">
                    <div className="textGroom d-flex justify-content-center align-items-center mb-4">
                        <div>
                            <div className="text-center"> <b>The Groom</b></div>
                            <div className="leftBorderGroom"></div>
                        </div>
                    </div>
                    <div className="manPhotoWrapper d-flex justify-content-center align-items-center animate-on-scroll">
                        <div>
                            <img src={manPhoto} className="manPhoto" />
                            {/* <div className="gif1Man">
                                <img src={gifLove1} className="gifLove1Man" />
                            </div>
                            <div className="gif3Man">
                                <img src={gifLove3} className="gifLove3Man" />
                            </div> */}
                        </div>
                    </div>

                    <div className="descManRight mt-4 d-flex justify-content-center align-items-center">
                        <div className="text-center"> Efendy Santoso </div>
                    </div>

                    <div className="parentManRightWrapper d-flex justify-content-center align-items-center">
                        <div className="parentManRight">
                            <div>Putra Bungsu Dari</div>
                            <div className="parentMan">Mr. Fam Djan Lim (✟) & Mrs. Bong Djan Lie</div>
                        </div>
                    </div>

                </div>

                <div className="rightAnd text-center mb-4 d-flex justify-content-center align-items-center">
                    <div className="leftBorder"></div>
                    <img src={coupleDiamond} className="coupleRing" />
                    <div className="leftBorder"></div>
                </div>

                <div className="womanRight">
                    <div className="textBride d-flex justify-content-center align-items-center mb-4">
                        <div>
                            <div className="text-center"> <b>The Bride</b></div>
                            <div className="leftBorderGroom"></div>
                        </div>
                    </div>
                    <div className="womanPhotoWrapper d-flex justify-content-center align-items-center animate-on-scroll">
                        <div>
                            <img src={womanPhoto} className="manPhoto" />
                            {/*<div className="gif1Woman">
                                <img src={gifLove1} className="gifLove1Woman" />
                            </div>
                            <div className="gif3Woman">
                                <img src={gifLove3} className="gifLove3Woman" />
                            </div> */}
                        </div>
                    </div>

                    <div className="descWomanRight mt-4 d-flex justify-content-center align-items-center">
                        <div className="text-center"> Bumi Ayu </div>
                    </div>

                    <div className="parentWomanRightWrapper d-flex justify-content-center align-items-center">
                        <div className="parentWomanRight">
                            <div>Putri Bungsu Dari</div>
                            <div>Mr. Sujono & Mrs. Lo Oi Tju</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default RightCouple;