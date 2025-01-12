import React from "react";
import "../assets/style/cover.css"
const Cover = ({onDone,frontWelcome}) => {

    const handleClick = () => {
        onDone();
    };

    return (
        <div className={`coverAll${frontWelcome?" ":" done"} d-flex justify-content-center align-items-center`}>
            <div className="coverWrapper">
                <div className="coverTop d-flex justify-content-center">
                    THE WEDDING OF
                </div>
                <div className="coverMid d-flex justify-content-center">
                    NAMA COWO & NAMA CEWE
                </div>
                <div className="coverBottom d-flex justify-content-center">
                    SPECIAL INVITATION TO
                </div>
                <div className="coverGuest d-flex justify-content-center">
                    NAMA GUEST
                </div>
                <div className="coverButton d-flex justify-content-center">
                    <button className="buttonInvitation" onClick={handleClick}><i className="bi bi-envelope-open me-1"></i> Open Invitation</button>
                </div>
            </div>
        </div>
    )
}


export default Cover;