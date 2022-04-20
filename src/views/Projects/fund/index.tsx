import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import Upcome1 from "assets/image/coming.jpg";
import Upcome2 from "assets/image/coming.jpg";
import Upcome3 from "assets/image/coming.jpg";
import FundLogo1 from "assets/image/coming.jpg";
import FundLogo2 from "assets/image/coming.jpg";
import FundLogo3 from "assets/image/coming.jpg";
import FundProject from "assets/image/fundproject.png";
import Unique from "assets/image/uniqueparti.png";
import Raised from "assets/image/raisedCap.png";
import Loading from "../../../component/FundLoading";
import ImgLoading from "../../../component/ImageLoading";
import { FundOut, UpCom, FundHeaderTitle, RaisedBtnText, UpComTitleLeftFunds, FundHeaderRight, FundBtn, FundBtnLeft, FundBtnNum, FundBtnRight, FundBtnText, UniqBtnText, UpCards, UpCard, UpCardBtn, UpCardCircle, UpCardCircleLetter, UpCardLogo, CardImg, FundTitle, UpCardSubTitle, FundTotalRaise, UpCardLineLeft, UpCardLineRight, ViewAllProjectsOut, ViewAllProjects } from "./fund.style";
export default function Funds() {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);
    return (
        <FundOut>
            <UpCom>
                <FundHeaderTitle>
                    <UpComTitleLeftFunds>Funded Projects</UpComTitleLeftFunds>
                    <FundHeaderRight>
                        <FundBtn>
                            <FundBtnLeft><Image src={FundProject} width={50} height={50} draggable={false} /></FundBtnLeft>
                            <FundBtnRight>
                                <FundBtnText>Funded Projects</FundBtnText>
                                <FundBtnNum>0</FundBtnNum>
                            </FundBtnRight>
                        </FundBtn>
                        <FundBtn>
                            <FundBtnLeft>
                                <Image src={Unique} width={50} height={50} draggable={false} /></FundBtnLeft>
                            <FundBtnRight>
                                <UniqBtnText>Unique Participants</UniqBtnText>
                                <FundBtnNum>0</FundBtnNum>
                            </FundBtnRight>
                        </FundBtn>
                        <FundBtn>
                            <FundBtnLeft><Image src={Raised} width={50} height={50} draggable={false} /></FundBtnLeft>
                            <FundBtnRight>
                                <RaisedBtnText>Raised Capital</RaisedBtnText>
                                <FundBtnNum>0</FundBtnNum>
                            </FundBtnRight>
                        </FundBtn>
                    </FundHeaderRight>
                </FundHeaderTitle>
            </UpCom>
            <UpCards>
                <UpCard>
                    <UpCardBtn>
                        <UpCardCircle />
                        <UpCardCircleLetter>Upcoming</UpCardCircleLetter>
                    </UpCardBtn>
                    <ImgLoading />
                    {/* {loading ? <ImgLoading /> :
                        <>
                            <UpCardLogo>
                                <Image src={FundLogo1} width={500} height={500} draggable={false} className='sublogoimg' />
                            </UpCardLogo>
                            <CardImg><Image src={Upcome1} layout='fill' objectPosition='cover' draggable={false} /></CardImg>
                        </>}*/}
                    {loading ? <Loading /> : <>
                        <FundTitle>To be announced</FundTitle>
                        <UpCardSubTitle>To be announced</UpCardSubTitle>
                        <FundTotalRaise>
                            <UpCardLineLeft>Total raise  </UpCardLineLeft>
                            <UpCardLineRight>$x,xxx</UpCardLineRight>
                        </FundTotalRaise>
                    </>}
                </UpCard>
                <UpCard>
                    <UpCardBtn>
                        <UpCardCircle /><UpCardCircleLetter>Upcoming</UpCardCircleLetter>
                    </UpCardBtn>
                    <ImgLoading />
                    {/* {loading ? <ImgLoading /> :
                        <>
                            <UpCardLogo>
                                <Image src={FundLogo2} width={500} height={500} draggable={false} />
                            </UpCardLogo>
                            <CardImg><Image src={Upcome2} layout='fill' objectPosition='cover' draggable={false} /></CardImg>
                        </>}*/}
                    {loading ? <Loading /> : <>
                        <FundTitle>To be announced</FundTitle>
                        <UpCardSubTitle>To be announced</UpCardSubTitle>
                        <FundTotalRaise>
                            <UpCardLineLeft>Total raise  </UpCardLineLeft>
                            <UpCardLineRight>$x,xxx</UpCardLineRight>
                        </FundTotalRaise>
                    </>}
                </UpCard>
                <UpCard>
                    <UpCardBtn>
                        <UpCardCircle /><UpCardCircleLetter>Upcoming</UpCardCircleLetter>
                    </UpCardBtn>
                    <ImgLoading />
                    {/* {loading ? <ImgLoading /> :
                        <>
                            <UpCardLogo>
                                <Image src={FundLogo3} width={500} height={500} draggable={false} />
                            </UpCardLogo>
                            <CardImg><Image src={Upcome3} layout='fill' objectPosition='cover' draggable={false} /></CardImg>
                        </>}*/}
                    {loading ? <Loading /> : <>
                        <FundTitle>To be announced</FundTitle>
                        <UpCardSubTitle>To be announced</UpCardSubTitle>
                        <FundTotalRaise>
                            <UpCardLineLeft>Total raise  </UpCardLineLeft>
                            <UpCardLineRight>$x,xxx</UpCardLineRight>
                        </FundTotalRaise>
                    </>}
                </UpCard>
            </UpCards>
            <ViewAllProjectsOut>
                <ViewAllProjects>View all projects</ViewAllProjects>
            </ViewAllProjectsOut>
        </FundOut>
    );
}  
