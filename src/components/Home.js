import React, { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Cover from "./Cover";
import RightWelcome from "./RightWelcome";
import Floating from "./Floating";
import RightQuotes from "./RightQuotes";
import RightCouple from "./RightCouple";
import RightLocation from "./RightLocation";
import RightAmplop from "./RightAmplop";
import RightGallery from "./RightGallery";
import RightComment from "./RightComment";
import RightFooter from "./RightFooter";
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
import backSound from "../assets/song/backSoundTemp.mp3"
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Home = () => {
    const [frontWelcome, setFrontWelcome] = useState(true);
    const [loadingScr, setloadingScr] = useState(false);
    const path = window.location.pathname;
    const segment = path.split('/').filter(Boolean);
    const [isDown, setIsDown] = useState(true);
    const scrollContainerRef = useRef(null);
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);

    const toggleFront = () => {
        setFrontWelcome(!frontWelcome);
        playAudio();
    }

    const toggleLoading = () => {
        setloadingScr(true);
    }

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleScroll = () => {
        const scrollThresholdInVh = 50;
        const thresholdInPx = (scrollThresholdInVh / 100) * window.innerHeight;
        const scrollTop = scrollContainerRef.current.scrollTop;
        setIsDown((prevIsDown) => {
            const newValue = scrollTop <= thresholdInPx;
            return newValue;
        });
    };

    const playAudio = async () => {
        try {
            await audioRef.current.play();
            setIsPlaying(true);
        } catch (error) {
            console.error("Auto-play dicegah oleh browser:", error);
        }
    };

    useEffect(() => {
        const leftContent = document.querySelector(".leftContent");
        const rightContent = document.querySelector(".rightContent");
        const scrollContainer = scrollContainerRef.current;
        if (scrollContainer) {
            scrollContainer.addEventListener('scroll', handleScroll);
        }

        const handleLeftScroll = (event) => {
            event.preventDefault();
            if (rightContent) {
                const deltaY = event.deltaY;
                rightContent.scrollTop += deltaY;
            }
        };

        if (leftContent) {
            leftContent.addEventListener("wheel", handleLeftScroll);
        }

        const elements = document.querySelectorAll(".animate-on-scroll");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    } else {
                        entry.target.classList.remove("visible");
                    }
                });
            },
            { threshold: 0.5 }
        );

        elements.forEach((element) => {
            observer.observe(element);
        });

        if (document.readyState == "complete") {
            toggleLoading();
        }

        return () => {

            if (scrollContainer) {
                scrollContainer.removeEventListener('scroll', handleScroll);
            }
            elements.forEach((element) => {
                observer.unobserve(element);
            });

            if (leftContent) {
                leftContent.removeEventListener("wheel", handleLeftScroll);
            }
         };

    }, []);

    return (
        <div className="homeAll">
            <Cover onDone={toggleFront} frontWelcome={frontWelcome} guest={segment} loadScreen={loadingScr}/>
            <Floating scroll={isDown} scrollContainerRef={scrollContainerRef} tooglePlay={togglePlay} isPlaying={isPlaying} />
            <div className="contentAll">
                <audio ref={audioRef} src={backSound} preload="auto" autoPlay loop />
                <div className="leftContent">
                    <div className="colCarrousel">
                        <div className="contentLeft">
                            <div>
                                <div className="leftTop">
                                    <div className="leftTopTop">
                                        Our Wedding Invitation
                                    </div>
                                    <div className="leftMidTop">
                                        Efendy Santoso & Bumi Ayu
                                    </div>
                                </div>
                                <div className="leftMid">
                                    <div className="leftMidBottom">

                                    </div>
                                </div>
                                <div className="leftBottom">
                                    <div className="leftBottomTop">
                                        Kepada Yth. Bapak / Ibu /Saudara/i
                                    </div>
                                    <div className="leftBottomBottom">
                                        {segment}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <Carousel
                            showArrows={false}
                            showIndicators={false}
                            showStatus={false}
                            axis={"horizontal"}
                            autoPlay={true}
                            interval={3000}
                            infiniteLoop={true}
                            showThumbs={false}
                        > */}
                        {/* <div className="imageCarrousel">
                                <img src={leftImage2} />
                            </div> 
                             <div className="imageCarrousel">
                                <img src={leftImage3} />
                            </div> *
                             <div className="imageCarrousel">
                                <img src={leftImage4} />
                            </div>
                            <div className="imageCarrousel">
                                <img src={leftImage5} />
                            </div> */}
                        <div className="imageCarrousel">
                            <img src={leftImage6} />
                        </div>
                        {/* <div className="imageCarrousel">
                                <img src={leftImage7} />
                            </div>
                            <div className="imageCarrousel">
                                <img src={leftImage8} />
                            </div>
                            <div className="imageCarrousel">
                                <img src={leftImage9} />
                            </div>  */}
                        {/* </Carousel> */}
                    </div>
                </div>
                <div className="rightContent" ref={scrollContainerRef} >
                    <RightWelcome />
                    <RightQuotes />
                    <RightCouple />
                    <RightLocation />
                    <RightAmplop />
                    <RightGallery />
                    <RightComment guest={segment[0]} />
                    <RightFooter />
                </div>
            </div>
        </div>
    );
}


export default Home;