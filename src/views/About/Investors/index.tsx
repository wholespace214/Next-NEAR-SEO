import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import { LearnMoreOut, LearnMoreHeader, InquireBtn, UpComTitleLeft, LogoTwo, LearnMoreHeaderTitle, LogoGroup, LogoLine, LogoBtn } from "./investor.style";
import CoinDesk from "../../../assets/svg/coindesklogo.svg";
import Coin from "../../../assets/svg/cointelegraphlogo.svg";
import Yahoo from "../../../assets/svg/Yahoologo.svg";
import Youtube from "../../../assets/svg/YouTubeLogo.svg";
import { BitcoinLogo } from "../../../assets/icon/LogoIcon";
import Loading from "../../../component/LogoLoading";
export default function Investor() {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);
    return (
        <LearnMoreOut>
            <LearnMoreHeader>
                <LearnMoreHeaderTitle>
                    <UpComTitleLeft>Early Investors</UpComTitleLeft>
                </LearnMoreHeaderTitle>
                <LogoGroup>
                    <LogoLine>
                        <LogoTwo>
                            <LogoBtn>
                                <Loading width={250} height={78} />  {/* {loading ? <Loading /> : <BitcoinLogo />} */}
                            </LogoBtn>
                            <LogoBtn>
                                <Loading width={250} height={78} />
                                {/* {loading ? <Loading /> : <Image src={Coin} layout='fill' objectFit='cover' />} */}
                            </LogoBtn>
                        </LogoTwo>
                        <LogoTwo>
                            <LogoBtn>
                                <Loading width={250} height={78} />
                                {/* {loading ? <Loading /> : <Image src={CoinDesk} layout='fill' objectFit='cover' />} */}
                            </LogoBtn>
                            <LogoBtn>
                                <Loading width={250} height={78} />
                                {/* {loading ? <Loading /> : <Image src={Yahoo} layout='fill' objectFit='cover' />} */}
                            </LogoBtn>
                        </LogoTwo>
                    </LogoLine>
                    <LogoLine>
                        <LogoTwo>
                            <LogoBtn>
                                <Loading width={250} height={78} />
                                {/* {loading ? <Loading /> : <Image src={CoinDesk} layout='fill' objectFit='cover' />} */}
                            </LogoBtn>
                            <LogoBtn>
                                <Loading width={250} height={78} />
                                {/* {loading ? <Loading /> : <Image src={Youtube} layout='fill' objectFit='cover' />} */}
                            </LogoBtn>
                        </LogoTwo>
                        <LogoTwo>
                            <LogoBtn>
                                <Loading width={250} height={78} />
                                {/* {loading ? <Loading /> : <BitcoinLogo />} */}
                            </LogoBtn>
                            <InquireBtn>INQUIRE</InquireBtn>
                        </LogoTwo>
                    </LogoLine>
                </LogoGroup>
            </LearnMoreHeader>

        </LearnMoreOut>
    );
}

