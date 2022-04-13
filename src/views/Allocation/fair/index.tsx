import React, { useEffect, useState, useRef } from "react";
import RINGS from "vanta/dist/vanta.globe.min";
import { Gonear, GonearLeft, GoLeftHeader, Early, GoLeftSubTitle, AllBlue } from "./fair.style";
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
            <div className="ggonearout" ref={myRef}>
                <Gonear>
                    <GonearLeft>
                        <GoLeftHeader>
                            <Early>
                                A fair & inclusive tiered <AllBlue>approach</AllBlue> to project <AllBlue>allocations.</AllBlue>
                            </Early>
                        </GoLeftHeader>
                        <GoLeftSubTitle>
                            Gonear’s approach to decentralized token launches demands a fair & inclusive approach to user allocations with the community at our core. Tiered staking ensures that there is an affordable entry point for all, while incentivizing long-term and engaged community members.
                        </GoLeftSubTitle>
                    </GonearLeft>
                </Gonear>
            </div>
        </>
    );
}
