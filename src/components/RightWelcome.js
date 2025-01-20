import React, { useRef, useEffect, useState } from "react";
import leftImage2 from "../assets/image/rightWelcome2.jpg"
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
                <div>
                    <div className="textWelcomeRight">
                        <div className="rightWelcomeMid">
                            Efendy Santoso
                            <div className="d-flex justify-content-center align-items-center">
                                &
                            </div>
                            Bumi Ayu
                        </div>
                        <div className="rightWelcomeBottom">
                            2 Febuari 2024
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
            </div>
        </div>
    );
}


export default RightWelcome;