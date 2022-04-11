import React, { useEffect, useState, useRef } from "react";
import RINGS from "vanta/dist/vanta.rings.min";
import { GoNear, GoNearLeft, GoLeftSubTitle, InquireBtn, ApplyHeader, GoLeftHeader, FeatureBtn, GoBtn, GoBtns, GoNearRight, GoLetter, Early } from "./gonear.style";
export default function Gonear() {
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
          backgroundColor: '#202125'
        })
      );
    }
    return () => {
      // if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div className="gonearOut" ref={myRef}>
      <GoNear>
        <GoNearLeft>
          <ApplyHeader>
            Apply to the &nbsp;
            <GoLetter>Go</GoLetter>near council
          </ApplyHeader>
          <GoLeftSubTitle>
            Join our council of industry experts and have your say on what ideas
            are launched through gonear.
          </GoLeftSubTitle>
          <GoBtns>
            <GoBtn>Apply to council</GoBtn>
            <InquireBtn>Inquire for contribution</InquireBtn>
          </GoBtns>
        </GoNearLeft>
        <GoNearRight></GoNearRight>
      </GoNear>
    </div>
  );
}
