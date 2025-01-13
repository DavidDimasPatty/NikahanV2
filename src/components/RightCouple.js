import React, { useRef, useEffect, useState } from "react";
import "../assets/style/rightCouple.css"
import womanPhoto from "../assets/image/leftImage8.jpg"
import manPhoto from "../assets/image/leftImage9.jpg"
import namaMan from "../assets/image/namaMan.png"
import namaWoman from "../assets/image/namaWoman.png"

const RightCouple = () => {

    return (
        <div className="wrapperCoupleRight d-flex justify-content-center align-items-center">
            <div className="coupleRight">
                <div className="titleCoupleRight d-flex justify-content-center align-items-center">
                    <div>
                        By The Grace of God
                        <br />
                        with the blessing of our parents
                        <br />
                        We request the honour of your presence at the marriage of
                    </div>
                </div>

                <div className="manRight">
                    <div className="manPhotoWrapper d-flex justify-content-center align-items-center">
                        <img src={manPhoto} className="manPhoto" />
                    </div>

                    <div className="descManRight mt-4 d-flex justify-content-center align-items-center">
                        Fendy Santoso
                    </div>

                    <div className="parentManRightWrapper mt-4 d-flex justify-content-center align-items-center">
                        <div className="parentManRight">
                            <div>Anak Tercinta Dari</div>
                            <div>Mr. Fam Djan Lim (Alm.) & Mrs. Bong Djan Lie</div>
                        </div>
                    </div>
                </div>

                <div className="rightAnd text-center">
                    &
                </div>

                <div className="womanRight">
                    <div className="womanPhotoWrapper d-flex justify-content-center align-items-center">
                        <img src={womanPhoto} className="manPhoto" />
                    </div>

                    <div className="descWomanRight mt-4 d-flex justify-content-center align-items-center">
                        Bumi Ayu
                    </div>

                    <div className="parentWomanRightWrapper mt-4 d-flex justify-content-center align-items-center">
                        <div className="parentWomanRight">
                            <div>Anak Tercinta Dari</div>
                            <div>Mr. Fam Djan Lim (Alm.) & Mrs. Bong Djan Lie</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default RightCouple;