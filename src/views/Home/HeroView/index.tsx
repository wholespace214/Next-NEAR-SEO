import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import RINGS from "vanta/dist/vanta.globe.min";
import YahooLogo from "../../../assets/svg/Yahoologo.svg";
import CoinLogo from "../../../assets/svg/cointelegraphlogo.svg";
import CoinDeskLogo from "../../../assets/svg/coindesklogo.svg";
import Loading from "../../../component/LogoLoading";
import { GoNear, GoNearLeft, GoLeftSubTitle, FeatureBtn, GoBtn, GoBtns, GoNearRight, GoLetter, Early } from "./Heroview.style";
export default function index() {
  const myRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [vantaEffect, setVantaEffect] = useState(0);
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
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
            <div className="goleftheader">
              <Early>
                Early access to ideas that &nbsp;
                <GoLetter>Go</GoLetter>near
              </Early>
            </div>
            <GoLeftSubTitle>
              Highly-vetted ideas and teams you can trust. Supported by
              industry-leading creators and funds.
            </GoLeftSubTitle>
            <FeatureBtn>As Featured on</FeatureBtn>
            <GoBtns>
              <GoBtn>
                <Loading width={210} height={57} />
                {/* {loading ? <Loading width={210} height={57} /> : <Image src={YahooLogo} blurDataURL="svg" layout="fill" />} */}
              </GoBtn>
              <GoBtn>
                <Loading width={210} height={57} />
                {/* {loading ? <Loading width={210} height={57} /> : <Image src={CoinLogo} blurDataURL="svg" objectFit="cover" layout="fill" />} */}
              </GoBtn>
              <GoBtn>
                <Loading width={210} height={57} />
                {/* {loading ? <Loading width={210} height={57} /> : <Image src={CoinDeskLogo} blurDataURL="svg" objectFit="cover" layout="fill" />} */}
              </GoBtn>
            </GoBtns>
          </GoNearLeft>
          <GoNearRight />
        </GoNear>
      </div>
    </>
  );
}
