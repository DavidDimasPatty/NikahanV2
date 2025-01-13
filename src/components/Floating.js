import React, { useEffect, useRef, useState } from 'react';
import arrowDown from "../assets/image/arrowDown.png"
import "../assets/style/floating.css";

const Floating = ({ scroll, scrollContainerRef,tooglePlay,isPlaying }) => {
   

    const scrollToTop = () => {
        const scrollContainer = scrollContainerRef.current;
        if (scrollContainer) {
            scrollContainer.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="logoFloat">

            <div className="logoMusic">
                <button onClick={tooglePlay}>   {isPlaying ? <i className="bi bi-volume-up-fill" /> : <i className="bi bi-volume-mute-fill" />}</button>
            </div>

            <div className={`logo-circ rowUpDiv ${scroll ? '' : 'active'}`}>
                <a onClick={scrollToTop}><img src={arrowDown} className="rowUp" /></a>
            </div>
        </div>
    );
}


export default Floating;