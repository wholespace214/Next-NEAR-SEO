import React, { useEffect, useState, useRef } from "react";
import RINGS from "vanta/dist/vanta.net.min";
import {
  GoNear,
  GoNearLeft,
  GoLeftSubTitle,
  GoLeftHeader,
  FeatureBtn,
  GoBtn,
  GoBtns,
  GoNearRight,
  GoLetter,
  Early,
} from "./top.style";
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
      <div className="gonearOut" ref={myRef}>
        <GoNear>
          <GoNearLeft>
            <GoLeftHeader>
              <Early>
                Meet the <GoLetter>Go</GoLetter>near council members
              </Early>
            </GoLeftHeader>
            <GoLeftSubTitle>
              The Gonear Council is a group of independent companies, projects, and individuals that
              take part in the Gonear selection process and help guide the development of the platform.
            </GoLeftSubTitle>
            <GoBtns>
              <GoBtn>Apply to Council</GoBtn>
            </GoBtns>
            <FeatureBtn>Learn more about the Gonear <a href="https://goneario.medium.com/"><GoLetter>IDO selection process.</GoLetter></a>
            </FeatureBtn>
          </GoNearLeft>
          <GoNearRight />
        </GoNear>
      </div>
    </>
  );
}
