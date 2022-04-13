import React from 'react'
import Image from 'next/image';
import { TierOut, TierCard, TierGroup, TierTitle, SubBack, GonearBtn, Tickets } from "./tier.style";
import ThemeImg from "../../../assets/image/tier.png";
export default function TierView() {
    return (
        <TierOut>
            <TierGroup>
                <TierCard>
                    <Image src={ThemeImg} layout='fill' objectPosition='cover' className='trees' />
                    <SubBack />
                    <TierTitle>Tier 1</TierTitle>
                    <GonearBtn>GONEAR</GonearBtn>
                    <Tickets>Tickets</Tickets>
                </TierCard>
                <TierCard>
                    <TierTitle>Tier 1</TierTitle>
                    <SubBack />
                    <Image src={ThemeImg} layout='fill' objectPosition='cover' />
                    <GonearBtn>GONEAR</GonearBtn>
                    <Tickets>Tickets</Tickets>
                </TierCard>
                <TierCard>
                    <TierTitle>Tier 1</TierTitle>
                    <SubBack />
                    <Image src={ThemeImg} layout='fill' objectPosition='cover' />
                    <GonearBtn>GONEAR</GonearBtn>
                    <Tickets>Tickets</Tickets>
                </TierCard>
            </TierGroup>
            <TierGroup>
                <TierCard>
                    <TierTitle>Tier 1</TierTitle>
                    <SubBack />
                    <Image src={ThemeImg} layout='fill' objectPosition='cover' />
                    <GonearBtn>GONEAR</GonearBtn>
                    <Tickets>Tickets</Tickets>
                </TierCard>
                <TierCard>
                    <TierTitle>Tier 1</TierTitle>
                    <SubBack />
                    <Image src={ThemeImg} layout='fill' objectPosition='cover' />
                    <GonearBtn>GONEAR</GonearBtn>
                    <Tickets>Tickets</Tickets>
                </TierCard>
            </TierGroup>
        </TierOut>
    );
}  
