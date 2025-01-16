import React, { useRef, useEffect, useState } from "react";
import leftImage2 from "../assets/image/leftImage2.jpg"
import "../assets/style/rightWelcome.css"
const RightWelcome = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    function calculateTimeLeft() {
        const now = new Date().getTime();
        const difference = new Date("2025-02-02T13:59:59") - now;

        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="rightWelcome">
            <div className="imgWelcomeRight">
                <img src={leftImage2} className="welcomeRightImg" />
            </div>
            <div className="wrapperTextWelcomeRight">

                <div className="textWelcomeRight">
                    <div className="rightWelcomeTop">
                        <svg width="300" height="100" viewBox="0 0 200 100">
                            <path id="curve" d="M 10 100 Q 100 -10 250 100" fill="transparent" />
                            <text>
                                <textPath href="#curve" startOffset="50%" text-anchor="middle" class="stroked-text">
                                    Our Weeding
                                </textPath>
                            </text>
                        </svg>
                    </div>
                    <div className="rightWelcomeMid">
                        Fendy Santoso & Bumi Ayu
                    </div>
                    <div className="rightWelcomeBottom">
                        2 Febuari 2024
                    </div>
                </div>
            </div>
            <div className="countdownRight">
                <div className="time-box">
                    <div>
                        <span>{timeLeft.days}</span>
                        <div>Hari</div>
                    </div>
                </div>
                <div className="time-box">
                    <div>
                        <span>{timeLeft.hours}</span>
                        <div>Jam</div>
                    </div>
                </div>
                <div className="time-box">
                    <div>
                        <span>{timeLeft.minutes}</span>
                        <div>Menit</div>
                    </div>
                </div>
                <div className="time-box">
                    <div>
                        <span>{timeLeft.seconds}</span>
                        <div>Detik</div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default RightWelcome;