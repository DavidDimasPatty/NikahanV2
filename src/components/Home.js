import React, { useRef, useEffect, useState } from "react";
import Cover from "./Cover";
import RightWelcome from "./RightWelcome";
import RightQuotes from "./RightQuotes";
import RightCouple from "./RightCouple";
import RightLocation from "./RightLocation";
import RightAmplop from "./RightAmplop";
import RightGallery from "./RightGallery";
import "../assets/style/home.css"
import { Carousel } from 'react-responsive-carousel';
import leftImage2 from "../assets/image/leftImage2.jpg"
import leftImage3 from "../assets/image/leftImage3.jpg"
import leftImage4 from "../assets/image/leftImage4.jpg"
import leftImage5 from "../assets/image/leftImage5.jpg"
import leftImage6 from "../assets/image/leftImage6.jpg"
import leftImage7 from "../assets/image/leftImage7.jpg"
import leftImage8 from "../assets/image/leftImage8.jpg"
import leftImage9 from "../assets/image/leftImage9.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Home = () => {
    const [frontWelcome, setFrontWelcome] = useState(true);

    const toggleFront = () => {
        setFrontWelcome(!frontWelcome);
    }
    return (
        <div className="homeAll">
            <Cover onDone={toggleFront} frontWelcome={frontWelcome} />
            <div className="contentAll">
                <div className="leftContent">
                    <div className="colCarrousel">
                        <Carousel
                            showArrows={false}
                            showIndicators={false}
                            showStatus={false}
                            axis={"horizontal"}
                            autoPlay={true}
                            interval={3000}
                            infiniteLoop={true}
                            showThumbs={false}
                        >
                            <div className="imageCarrousel">
                                <img src={leftImage2} />
                            </div>
                            <div className="imageCarrousel">
                                <img src={leftImage3} />
                            </div>
                            <div className="imageCarrousel">
                                <img src={leftImage4} />
                            </div>
                            <div className="imageCarrousel">
                                <img src={leftImage5} />
                            </div>
                            <div className="imageCarrousel">
                                <img src={leftImage6} />
                            </div>
                            <div className="imageCarrousel">
                                <img src={leftImage7} />
                            </div>
                            <div className="imageCarrousel">
                                <img src={leftImage8} />
                            </div>
                            <div className="imageCarrousel">
                                <img src={leftImage9} />
                            </div>
                        </Carousel>
                    </div>
                </div>
                <div className="rightContent">
                    <RightWelcome/>
                    <RightQuotes/>
                    <RightCouple/>
                    <RightLocation/>
                    <RightAmplop/>
                    <RightGallery/>
                </div>
            </div>
        </div>
    );
}


export default Home;