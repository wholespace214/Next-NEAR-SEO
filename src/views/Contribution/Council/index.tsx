import React, { useEffect, useState, useRef } from "react";
import RINGS from "vanta/dist/vanta.globe.min";
import { Gonear, GonearLeft, GoLetter, GoLeftHeader, Early, GoLeftSubTitle, FeatureBtn, GoBtns, GoBtn } from "./IDO.style";
export default function index() {
    const myRef = useRef(null);
    const [vantaEffect, setVantaEffect] = useState(0);
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                RINGS({
                    el: myRef.current,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: true,
                    minHeight: 200.0,
                    minWidth: 200.0,
                    scale: 1.0,
                    scaleMobile: 1.0,
                    size: 1.0,
                    backgroundColor: '#202124',
                    color: '#717cd6'
                })
            );
        }
        return () => { };
    }, [vantaEffect]);
    return (
        <>
            <div className="IDOgonearout" ref={myRef}>
                <Gonear>
                    <GonearLeft>
                        <GoLeftHeader>
                            <Early>
                                Inquire to contribute to the <GoLetter>Go</GoLetter>near token
                            </Early>
                        </GoLeftHeader>
                        <GoLeftSubTitle>
                            Play a key role within the Gonear and Near Protocol ecosystem by
                            joining our earliest fundraising campaign.
                        </GoLeftSubTitle>
                        <GoBtns>
                            <GoBtn>Start Application</GoBtn>
                            <GoBtn>The Council</GoBtn>
                        </GoBtns>
                    </GonearLeft>
                </Gonear>
            </div>
        </>
    );
}
