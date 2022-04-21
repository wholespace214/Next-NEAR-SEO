import React, { useState, useEffect } from "react";
import Image from "next/image";
import { GoNearOut, GoNear, GoBtnsGroup, GoNearLeft, GoNearRight, GoBtn, GoBtns } from "./Meet.style";
import CoinDesk from "../../../assets/svg/coindesklogo.svg";
import Coin from "../../../assets/svg/cointelegraphlogo.svg";
import Yahoo from "../../../assets/svg/Yahoologo.svg";
import Youtube from "../../../assets/svg/YouTubeLogo.svg";
import { BitcoinLogo } from "../../../assets/icon/LogoIcon";
import Loading from "../../../component/LogoLoading";
export default function index() {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);
    return (
        <GoNearOut>
            <GoNear>
                <GoNearLeft>
                    <GoBtnsGroup>
                        <GoBtns>
                            <GoBtn>
                                <Loading width={200} height={70} />  {/* {loading ? <Loading /> : <Image src={Yahoo} layout="fill" objectFit="cover" />} */}
                            </GoBtn>
                            <GoBtn>
                                <Loading width={200} height={70} />   {/* {loading ? <Loading /> : <Image src={Youtube} layout="fill" objectFit="cover" />} */}
                            </GoBtn>
                            <GoBtn>
                                <Loading width={200} height={70} />  {/* {loading ? <Loading /> : <BitcoinLogo />} */}
                            </GoBtn>
                            <GoBtn>
                                <Loading width={200} height={70} />   {/* {loading ? <Loading /> : <Image src={CoinDesk} layout="fill" objectFit="cover" />} */}
                            </GoBtn>
                            <GoBtn>
                                <Loading width={200} height={70} /> {/* {loading ? <Loading /> : <Image src={Youtube} layout="fill" objectFit="cover" />} */}
                            </GoBtn>
                        </GoBtns>
                        <GoBtns>
                            <GoBtn>
                                <Loading width={200} height={70} />  {/* {loading ? <Loading /> : <BitcoinLogo />} */}
                            </GoBtn>
                            <GoBtn>
                                <Loading width={200} height={70} />  {/* {loading ? <Loading /> : <Image src={Coin} layout="fill" objectFit="cover" />} */}
                            </GoBtn>
                            <GoBtn>
                                <Loading width={200} height={70} />  {/* {loading ? <Loading /> : <Image src={CoinDesk} layout="fill" objectFit="cover" />} */}
                            </GoBtn>
                            <GoBtn>
                                <Loading width={200} height={70} />   {/* {loading ? <Loading /> : <Image src={Yahoo} layout="fill" objectFit="cover" />} */}
                            </GoBtn>
                            <GoBtn>
                                <Loading width={200} height={70} />{/* {loading ? <Loading /> : <Image src={Coin} layout="fill" objectFit="cover" />} */}
                            </GoBtn>
                        </GoBtns>
                    </GoBtnsGroup>
                </GoNearLeft>
                <GoNearRight />
            </GoNear>
        </GoNearOut>
    );
}
