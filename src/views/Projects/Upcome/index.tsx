import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import Upcome1 from "assets/image/coming.jpg";
import Upcome3 from "assets/image/coming.jpg";
import Uplogo1 from "assets/image/coming.jpg";
import Uplogo2 from "assets/image/coming.jpg";
import Uplogo3 from "assets/image/coming.jpg";
import Loading from "../../../component/UpLetterloading";
import ImgLoading from "../../../component/ImageLoading";
import { UpComOut, UpCom, UpComTitle, UpCardLogo, ViewAllProjectsOut, ViewAllProjects, UpCardLineLeft, UpCardLineRight, UpCardSubTitle, UpCardLine1, UpCardLine2, CardImg, UpCardTitle, UpCardCircle, UpCardCircleLetter, UpcomTitleLeftOne, UpCards, UpCard, UpCardBtn } from "./upcome.style";
export default function UpcomingView() {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);
    return (
        <UpComOut>
            <UpCom>
                <UpComTitle>
                    <UpcomTitleLeftOne>Upcoming projects</UpcomTitleLeftOne>
                </UpComTitle>
            </UpCom>
            <UpCards>
                <UpCard>
                    <UpCardBtn>
                        <UpCardCircle /><UpCardCircleLetter>Upcoming</UpCardCircleLetter>
                    </UpCardBtn>
                    <ImgLoading />
                    {/* {loading ? <ImgLoading /> : <>
                        <UpCardLogo>
                            <Image src={Uplogo2} width={500} height={500} draggable={false} />
                        </UpCardLogo>
                        <CardImg><Image src={Upcome1} layout="fill" objectFit="cover" draggable={false} /></CardImg>
                    </>}*/}
                    {loading ?
                        <Loading /> :
                        <>
                            <UpCardTitle>To be announced</UpCardTitle>
                            <UpCardSubTitle>To be announced</UpCardSubTitle>
                            <UpCardLine1>
                                <UpCardLineLeft>Total raise </UpCardLineLeft>
                                <UpCardLineRight>$x,xxx</UpCardLineRight>
                            </UpCardLine1>
                            <UpCardLine2>
                                <UpCardLineLeft>Individual allocation</UpCardLineLeft>
                                <UpCardLineRight>$x,xxx</UpCardLineRight>
                            </UpCardLine2>
                        </>}
                </UpCard>
                <UpCard>
                    <UpCardBtn>
                        <UpCardCircle /><UpCardCircleLetter>Upcoming</UpCardCircleLetter>
                    </UpCardBtn>
                    <ImgLoading />
                    {/* {loading ? <ImgLoading /> : <>
                        <UpCardLogo>
                            <Image src={Uplogo2} width={500} height={500} draggable={false} />
                        </UpCardLogo>
                        <CardImg><Image src={Upcome1} layout="fill" objectFit="cover" draggable={false} /></CardImg>
                    </>}*/}
                    {loading ?
                        <Loading /> :
                        <>
                            <UpCardTitle>To be announced</UpCardTitle>
                            <UpCardSubTitle>To be announced</UpCardSubTitle>
                            <UpCardLine1>
                                <UpCardLineLeft>Total raise </UpCardLineLeft>
                                <UpCardLineRight>$x,xxx</UpCardLineRight>
                            </UpCardLine1>
                            <UpCardLine2>
                                <UpCardLineLeft>Individual allocation</UpCardLineLeft>
                                <UpCardLineRight>$x,xxx</UpCardLineRight>
                            </UpCardLine2>
                        </>}
                </UpCard>
                <UpCard>
                    <UpCardBtn>
                        <UpCardCircle /><UpCardCircleLetter>Upcoming</UpCardCircleLetter>
                    </UpCardBtn>
                    <ImgLoading />
                    {/* {loading ? <ImgLoading /> : <>
                        <UpCardLogo>
                            <Image src={Uplogo2} width={500} height={500} draggable={false} />
                        </UpCardLogo>
                        <CardImg><Image src={Upcome1} layout="fill" objectFit="cover" draggable={false} /></CardImg>
                    </>}*/}
                    {loading ?
                        <Loading /> :
                        <>
                            <UpCardTitle>To be announced</UpCardTitle>
                            <UpCardSubTitle>To be announced</UpCardSubTitle>
                            <UpCardLine1>
                                <UpCardLineLeft>Total raise </UpCardLineLeft>
                                <UpCardLineRight>$x,xxx</UpCardLineRight>
                            </UpCardLine1>
                            <UpCardLine2>
                                <UpCardLineLeft>Individual allocation</UpCardLineLeft>
                                <UpCardLineRight>$x,xxx</UpCardLineRight>
                            </UpCardLine2>
                        </>}
                </UpCard>
            </UpCards>
            <ViewAllProjectsOut>
                <ViewAllProjects>View all projects</ViewAllProjects>
            </ViewAllProjectsOut>
        </UpComOut>
    );
}  
