import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import RINGS from "vanta/dist/vanta.globe.min";
import CoinLogo from "../../../assets/svg/cointelegraphlogo.svg";
import CoinDeskLogo from "../../../assets/svg/coindesklogo.svg";
import Loading from "../../../component/LogoLoading";
import { Gonear, GonearLeft, GoLeftHeader, GoLetter, Early, GoLeftSubTitle, FeatureBtn, GoBtns, GoBtn } from "./pion.style";
export default function index() {
  const myRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [vantaEffect, setVantaEffect] = useState(0);
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 10000000);
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
      <div className="ggonearout" ref={myRef}>
        <Gonear>
          <GonearLeft>
            <GoLeftHeader>
              <Early>
                A pioneering decentralized
                fundraising platform on <GoLetter>Near Protocol</GoLetter>
              </Early>
            </GoLeftHeader>
            <GoLeftSubTitle>
              Be the first to join Gonear, a Protocol built for token pools and auctions,
              enabling projects to raise capital on a decentralized and secure
              environment based on Near Protocol.
            </GoLeftSubTitle>
            <FeatureBtn>As Featured on</FeatureBtn>
            <GoBtns>
              <GoBtn>
                <Loading width={210} height={57} />
                {/* {loading ? <Loading /> : <Image src={CoinDeskLogo} objectFit="cover" layout="fill" />} */}
              </GoBtn>
              <GoBtn>
                <Loading width={210} height={57} />
                {/* {loading ? <Loading /> : <Image src={CoinLogo} objectFit="cover" layout="fill" />} */}
              </GoBtn>
            </GoBtns>
          </GonearLeft>
        </Gonear>
      </div>
    </>
  );
}
