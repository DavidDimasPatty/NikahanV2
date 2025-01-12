import React, { useRef, useEffect, useState } from "react";
import "../assets/style/rightGallery.css"
import leftImage2 from "../assets/image/leftImage2.jpg"
import leftImage3 from "../assets/image/leftImage3.jpg"
import leftImage4 from "../assets/image/leftImage4.jpg"
import leftImage5 from "../assets/image/leftImage5.jpg"
import leftImage6 from "../assets/image/leftImage6.jpg"
import leftImage7 from "../assets/image/leftImage7.jpg"
import leftImage8 from "../assets/image/leftImage8.jpg"
import leftImage9 from "../assets/image/leftImage9.jpg"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
const RightGallery = () => {
    return (
        <div className="wrapperRightGalleryAll">
            <div className="tittleGallery">
                Gallery Wedding
            </div>
            <div className="bridgeGallery">
            </div>
            <div className="rightGalleryAll">
                <Carousel
                    showArrows={true}
                    showIndicators={true}
                    showStatus={false}
                    axis={"horizontal"}
                    autoPlay={true}
                    interval={3000}
                    infiniteLoop={true}
                    showThumbs={true}
                >
                    <div className="imageCarrouselRight">
                        <img src={leftImage2} />
                    </div>
                    <div className="imageCarrouselRight">
                        <img src={leftImage3} />
                    </div>
                    <div className="imageCarrouselRight">
                        <img src={leftImage4} />
                    </div>
                    <div className="imageCarrouselRight">
                        <img src={leftImage5} />
                    </div>
                    <div className="imageCarrouselRight">
                        <img src={leftImage6} />
                    </div>
                    <div className="imageCarrouselRight">
                        <img src={leftImage7} />
                    </div>
                    <div className="imageCarrouselRight">
                        <img src={leftImage8} />
                    </div>
                    <div className="imageCarrouselRight">
                        <img src={leftImage9} />
                    </div>
                </Carousel>
            </div>
        </div>
    )
};


export default RightGallery;