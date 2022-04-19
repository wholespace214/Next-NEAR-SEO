import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Tabs } from "antd";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { GalaxyHeader, HeaderLeft, HeaderRight, AppBtn, SaleItemRight, SaleItemLeft, SaleItem, SaleItemHeader, TokenSale, Times, Item, NumItem, Day, Dot, Timeline, Sale, MainTitle1, Howto, AlloLeft, AlloRight, Allo, Allo1, ULDiv, HightSubGalaxy, RTitleLetter, HightLight, HightLightProduct, ProductDiv, HightSub, LogoPart, TokenImgTag, LogoTitle, MainTitle, MainSubTitle } from "./galaxy.style";
import Uplogo from "../../../assets/image/coming.jpg";
import TokenImg from "../../../assets/image/coming.jpg";
import { } from "../../../component/ImageLoading";
const { TabPane } = Tabs;
const Introduce = () => {

    const calculateTimeLeft = () => {
        let year = new Date().getFullYear();
        const difference = +new Date(`${year}-10-1`) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)) < 10 ? '0' + Math.floor(difference / (1000 * 60 * 60 * 24)) : Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24) < 10 ? '0' + Math.floor((difference / (1000 * 60 * 60)) % 24) : Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60) < 10 ? '0' + Math.floor((difference / 1000 / 60) % 60) : Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60) < 10 ? '0' + Math.floor((difference / 1000) % 60) : Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());


    useEffect(() => {
        setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return;
        }
        //@ts-ignore
        timerComponents.push(<>{timeLeft[interval]}</>);
    });

    return (
        <GalaxyHeader>
            <HeaderLeft>
                <LogoPart>
                    {/* <Image src={Uplogo} width={80} height={80} /> */}
                    <Skeleton duration={2} borderRadius={5} baseColor='grey' width={80} style={{ lineHeight: 'unset' }} height={80} />
                    <LogoTitle>
                        <MainTitle>To be announced</MainTitle>
                        <MainSubTitle>To be announced</MainSubTitle>
                    </LogoTitle>
                </LogoPart>
                <TokenImgTag>
                    {/* <Image loading="lazy" src={TokenImg} placeholder="blur" width={1480} height={833} /> */}
                    <Skeleton duration={2} borderRadius={5} baseColor='grey' width={800} style={{ lineHeight: 'unset' }} height={400} />
                </TokenImgTag>
                <Tabs className="custom_tab" defaultActiveKey="1">
                    <TabPane tab="Description" key="1">
                        {/* -------------------please write text here------------- */}
                    </TabPane>
                    <TabPane tab="Token Sale" key="2">
                        <TokenSale>
                            <SaleItemHeader>
                                Project Key Metrics
                            </SaleItemHeader>
                            <SaleItem>
                                <SaleItemLeft>Sale Price</SaleItemLeft>
                                <SaleItemRight>1 GCOIN = $0.5</SaleItemRight>
                            </SaleItem>
                            <SaleItem>
                                <SaleItemLeft>Sale Start Time (UTC)</SaleItemLeft>
                                <SaleItemRight>January 6th 2022, 3:00</SaleItemRight>
                            </SaleItem>
                            <SaleItem>
                                <SaleItemLeft>Sale End Time (UTC)</SaleItemLeft>
                                <SaleItemRight>January 6th 2022, 3:00</SaleItemRight>
                            </SaleItem>
                            <SaleItem>
                                <SaleItemLeft>Token Distribution (UTC)</SaleItemLeft>
                                <SaleItemRight>January 6th 2022, 3:00</SaleItemRight>
                            </SaleItem>
                            <SaleItem>
                                <SaleItemLeft>Initial Market Cap</SaleItemLeft>
                                <SaleItemRight>$1,687,500</SaleItemRight>
                            </SaleItem>
                            <SaleItem>
                                <SaleItemLeft>Initial Token Circulation</SaleItemLeft>
                                <SaleItemRight>3,375,000</SaleItemRight>
                            </SaleItem>
                        </TokenSale>
                    </TabPane>
                </Tabs >
            </HeaderLeft >
            <HeaderRight>
                <RTitleLetter>Fundraise Goal</RTitleLetter>
                <MainTitle1>$2,000</MainTitle1>
                <Allo>
                    <AlloLeft>Allocation</AlloLeft>
                    <AlloRight>$500 Max</AlloRight>
                </Allo>
                <Allo1>
                    <AlloLeft>Price per token</AlloLeft>
                    <AlloRight>$0.5</AlloRight>
                </Allo1>
                <AppBtn>Connect Wallet</AppBtn>
                <Howto>My allocation : 0</Howto>
                <Timeline>
                    <Sale>SALE STARTS IN</Sale>
                    <Times>
                        <Item>
                            <NumItem>{timerComponents[0]}</NumItem>
                            <Day>Days</Day>
                        </Item>
                        <Dot>:</Dot>
                        <Item>
                            <NumItem>{timerComponents[1]}</NumItem>
                            <Day>Hours</Day>
                        </Item>
                        <Dot>:</Dot>
                        <Item>
                            <NumItem>{timerComponents[2]}</NumItem>
                            <Day>Minutes</Day>
                        </Item>
                        <Dot>:</Dot>
                        <Item>
                            <NumItem>{timerComponents[3]}</NumItem>
                            <Day>Seconds</Day>
                        </Item>
                    </Times>
                </Timeline>
            </HeaderRight>

        </GalaxyHeader >
    );
};

export default Introduce;
