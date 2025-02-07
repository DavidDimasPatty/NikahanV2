import React from "react";
import "../assets/style/cover.css"
import namaMan from "../assets/image/namaMan.png"
import namaWoman from "../assets/image/namaWoman.png"
import coverImageTemp from "../assets/image/coverImageTemp.jpg"
const Cover = ({ onDone, frontWelcome, guest, loadScreen }) => {

    const handleClick = () => {
        onDone();
    };

    return (
        <div className={`coverAll${frontWelcome ? " " : " done"} d-flex justify-content-center align-items-center`}>
            <div className={`loadScreen ${loadScreen ? " " : " done"} d-flex justify-content-center align-items-center`}>
                <div className="loadScreenContent">
                    Please Wait.....
                </div>
            </div>
            <div className="coverImage">
                <img src={coverImageTemp} className="coverImageImg" loading="lazy" />
            </div>
            <div className="coverWrapper">
                <div className="coverTop d-flex justify-content-center">
                    THE WEDDING OF
                </div>
                <div className="coverMid d-flex justify-content-center">
                    <div>
                        <div className="nameManCoverMid">
                            {/* <img src={namaMan} className="nameManCover" /> */}
                            Efendy Santoso
                        </div>
                        <div className="bridgeCoverMid">
                            &
                        </div>
                        <div className="nameWomanCoverMid">
                            {/* <img src={namaWoman} className="nameFemaleCover" /> */}
                            Bumi Ayu
                        </div>
                    </div>
                </div>
                <div className="coverBottom d-flex justify-content-center">
                    SPECIAL INVITATION TO
                </div>
                <div className="coverGuest d-flex justify-content-center">
                    {guest}
                </div>
                <div className="coverButton d-flex justify-content-center">
                    <button className="buttonInvitation" onClick={handleClick}><i className="bi bi-envelope-open me-1"></i> Open Invitation</button>
                </div>
            </div>
        </div>
    )
}


export default Cover;