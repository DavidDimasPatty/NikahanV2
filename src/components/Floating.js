import React, { useEffect, useRef } from 'react';
import arrowDown from "../assets/image/arrowDown.png"
import "../assets/style/floating.css";

const Floating = ({scroll,scrollContainerRef}) => {
    const scrollToTop = () => {
        const scrollContainer = scrollContainerRef.current;
        if (scrollContainer) {
            scrollContainer.scrollTo({
                top: 0, 
                behavior: 'smooth', 
            });
        }
    };

    console.log(scroll);
    return (
        <div className="logoFloat">
            <div className="logoMusic">
                <button><i className="bi bi-music-note-beamed"/></button>
            </div>

            <div className={`logo-circ rowUpDiv ${scroll ? '' : 'active'}`}>
                <a onClick={scrollToTop}><img src={arrowDown} className="rowUp" /></a>
            </div>
        </div>
    );
}


export default Floating;