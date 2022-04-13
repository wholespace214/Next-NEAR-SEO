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
                                Join the <GoLetter>Go</GoLetter>near Council
                            </Early>
                        </GoLeftHeader>
                        <GoLeftSubTitle>
                            The Gonear council is active in moving the platform forward, helping on key
                            decisions and primarily vetting projects that apply to do an IDO on Gonear.
                        </GoLeftSubTitle>
                        <GoLeftSubTitle>
                            The council is initially composed of 9 independent members from various
                            backgrounds and expertise within the digital asset industry. The council will be
                            extended to 17 members in Q3 2022.
                        </GoLeftSubTitle>
                        <GoLeftSubTitle>
                            Would you be interested in joining the Gonear council, you can apply as an
                            individual or an organisation below.
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
