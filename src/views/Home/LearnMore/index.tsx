import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import Loading from 'component/LearnMoreLoading';
import ImgLoading from 'component/ImageLoading';
import Learn1 from "assets/image/coming.jpg";
import Learn2 from "assets/image/coming.jpg";
import Learn3 from "assets/image/coming.jpg";
import { LearnMoreOut, LearnMoreHeader, LearnMoreHeaderTitle, GoLetter, UpcomTitleLeft, UpcomTitleRight, LearnMoreVisitBtn, Upcards, Upcard, CardImg, LearnCardTitle, LearnCardSubTitle } from "./learn.style";
export default function LearnMore() {
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
                    <UpcomTitleLeft>
                        <div>Learn more about </div>
                        <div>&nbsp;<GoLetter>Go</GoLetter>near</div>
                    </UpcomTitleLeft>
                    <UpcomTitleRight>
                        <LearnMoreVisitBtn>Visit the blog</LearnMoreVisitBtn>
                    </UpcomTitleRight>
                </LearnMoreHeaderTitle>
            </LearnMoreHeader>
            <Upcards>
                <Upcard>
                    <ImgLoading />
                    {/* {loading ? <ImgLoading /> : <>
                        <CardImg>
                            <Image src={Learn1} layout='fill' objectPosition='cover' draggable={false} />
                        </CardImg>
                    </>}*/}
                    {loading ? <Loading /> :
                        <>
                            <LearnCardTitle>What is the most important in Blockchain?</LearnCardTitle>
                            <LearnCardSubTitle>A blockchain is a distributed database that is shared among the nodes of a computer network. As a database, a blockchain stores information electronically in digital format. Blockchains are best known for their crucial role in cryptocurrency systems, such as Bitcoin, for maintaining a secure and decentralized record of transactions.</LearnCardSubTitle>
                        </>}
                </Upcard>
                <Upcard>
                    <ImgLoading />
                    {/* {loading ? <ImgLoading /> : <>
                        <CardImg>
                            <Image src={Learn2} layout='fill' objectPosition='cover' draggable={false} />
                        </CardImg>
                    </>}*/}
                    {loading ? <Loading /> :
                        <>
                            <LearnCardTitle>What is the most important in Blockchain?</LearnCardTitle>
                            <LearnCardSubTitle>
                                A blockchain is a distributed database that is shared among the nodes of a computer network. As a database, a blockchain stores information electronically in digital format. Blockchains are best known for their crucial role in cryptocurrency systems, such as Bitcoin, for maintaining a secure and decentralized record of transactions.
                            </LearnCardSubTitle>
                        </>}

                </Upcard>
                <Upcard>
                    <ImgLoading />
                    {/* {loading ? <ImgLoading /> : <>
                        <CardImg>
                            <Image src={Learn3} layout='fill' objectPosition='cover' draggable={false} />
                        </CardImg>
                    </>}*/}
                    {loading ? <Loading /> :
                        <>
                            <LearnCardTitle>What is the most important in Blockchain?</LearnCardTitle>
                            <LearnCardSubTitle>A blockchain is a distributed database that is shared among the nodes of a computer network. As a database, a blockchain stores information electronically in digital format. Blockchains are best known for their crucial role in cryptocurrency systems, such as Bitcoin, for maintaining a secure and decentralized record of transactions.</LearnCardSubTitle>
                        </>}
                </Upcard>
            </Upcards>
        </LearnMoreOut>
    );
}

