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
                                <GoLetter>Go</GoLetter>near IDO Application
                            </Early>
                        </GoLeftHeader>
                        <GoLeftSubTitle>
                            Welcome to the future of decentralised fundraising on Gonear. Our mission is to bring the highest
                            quality projects together with investors to enable the launch of innovative startups and
                            technology. With this goal, it is the responsibility of the Gonear Council to act as a governance
                            board to ensure quality and due diligence for the projects we launch.
                        </GoLeftSubTitle>
                        <GoLeftSubTitle>
                            The Council will review and vote on your application for launch on Gonear. Each application is
                            submitted to a thorough and rigorous review during the due diligence process, and then
                            evaluated based on objective merits.
                        </GoLeftSubTitle>
                        <GoLeftSubTitle>
                            Each of the Council members will cast their vote, and projects having greater than 60% of the
                            Council's vote are approved for launch. If approved, projects will be provided with detailed
                            instructions on how to prepare for and execute their launch on Gonear.
                        </GoLeftSubTitle>
                        <GoBtns>
                            <GoBtn>Start Application</GoBtn>
                            <GoBtn>The Council</GoBtn>
                            <GoBtn>IDO Selection Process</GoBtn>
                        </GoBtns>
                    </GonearLeft>
                </Gonear>
            </div>
        </>
    );
}
