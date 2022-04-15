import React from 'react'
import { UpcomOut, Upcom, UpComTitle, Communication, ComSubTitle, ComItemHeader, ComItemRight, ComIconDiv, ComItemIcon, ComItem, ComItemLine, UpComTitleLeftOne, GoLeftSubTitle } from "./culture.style";
import { AiOutlineMessage } from "react-icons/ai";
import { MdHighQuality } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { SiFastly } from "react-icons/si";
export default function UpcomingView() {
    return (
        <UpcomOut>
            <Upcom>
                <UpComTitle>
                    <UpComTitleLeftOne>Our culture</UpComTitleLeftOne>
                </UpComTitle>
                <GoLeftSubTitle>
                    Our culture is how we treat each other and operate day-to-day at Gonear. Outlining our
                    culture helps everyone — from candidates to new leaders to veteran employees —
                    understand how we interact and get work done in service of our mission.
                </GoLeftSubTitle>
                <GoLeftSubTitle>
                    Some of our cultural tenets are more aspirational than others, meaning they represent
                    where we would like to be, not necessarily where we are today. Our goal as a team is to
                    continually get closer to this ideal.
                </GoLeftSubTitle>
                <Communication>
                    <ComItemLine>
                        <ComItem>
                            <ComItemIcon>
                                <ComIconDiv><AiOutlineMessage size={50} /></ComIconDiv>
                            </ComItemIcon>
                            <ComItemRight>
                                <ComItemHeader>Clear communication</ComItemHeader>
                                <ComSubTitle>We are direct and succinct. We share information
                                    efficiently, improving collaboration and
                                    productivity. We practice active listening.
                                </ComSubTitle>
                            </ComItemRight>
                        </ComItem>
                        <ComItem>
                            <ComItemIcon>
                                <ComIconDiv><MdHighQuality size={60} /></ComIconDiv>
                            </ComItemIcon>
                            <ComItemRight>
                                <ComItemHeader>Efficient execution</ComItemHeader>
                                <ComSubTitle>We have a bias for action. We complete high
                                    quality work quickly. We focus on the 20% of
                                    work that will get us 80% of the impact.
                                </ComSubTitle>
                            </ComItemRight>
                        </ComItem>
                    </ComItemLine>
                    <ComItemLine>
                        <ComItem>
                            <ComItemIcon>
                                <ComIconDiv><FaBook size={50} /></ComIconDiv>
                            </ComItemIcon>
                            <ComItemRight>
                                <ComItemHeader>Act like an owner</ComItemHeader>
                                <ComSubTitle>We take 100% responsibility for achieving the mission. We seek to improve all aspects of our company even in ways that are not explicitly part of our job.
                                </ComSubTitle>
                            </ComItemRight>
                        </ComItem>
                        <ComItem>
                            <ComItemIcon>
                                <ComIconDiv><SiFastly size={50} /></ComIconDiv>
                            </ComItemIcon>
                            <ComItemRight>
                                <ComItemHeader>Continuous learning</ComItemHeader>
                                <ComSubTitle>We're humble, and value learning over being right. We embrace delivering and receiving candid feedback, and see every setback as an opportunity to learn.
                                </ComSubTitle>
                            </ComItemRight>
                        </ComItem>
                    </ComItemLine>
                </Communication>
            </Upcom>
        </UpcomOut>
    );
}  
