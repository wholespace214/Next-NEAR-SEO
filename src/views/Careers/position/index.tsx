import React from 'react'
import { UpcomOut, Upcom, UpComTitle, Communication, ComSubTitle, ComItemHeader, ComItemRight, ComIconDiv, ComItemIcon, ComItem, ComItemLine, UpComTitleLeftOne, GoLeftSubTitle } from "./position.style";
export default function UpcomingView() {
    return (
        <UpcomOut>
            <Upcom>
                <UpComTitle>
                    <UpComTitleLeftOne>Open Positions</UpComTitleLeftOne>
                </UpComTitle>
                <Communication>
                    <ComItemLine>
                        <ComItem>
                            <ComItemRight>
                                <ComItemHeader>Community Lead (ENG) - Remote</ComItemHeader>
                            </ComItemRight>
                            <ComIconDiv>Apply</ComIconDiv>
                        </ComItem>
                        <ComItem>
                            <ComItemRight>
                                <ComItemHeader>Public Relations (ENG) - Remote</ComItemHeader>
                            </ComItemRight>
                            <ComIconDiv>Apply</ComIconDiv>
                        </ComItem>
                    </ComItemLine>
                    <ComItemLine>
                        <ComItem>
                            <ComItemRight>
                                <ComItemHeader>Community Assistant (ENG) - Remote </ComItemHeader>
                            </ComItemRight>
                            <ComIconDiv>Apply</ComIconDiv>
                        </ComItem>
                        <ComItem>
                            <ComItemRight>
                                <ComItemHeader>Partnerships Lead (ENG) - Remote</ComItemHeader>
                            </ComItemRight>
                            <ComIconDiv>Apply</ComIconDiv>
                        </ComItem>
                    </ComItemLine>
                    <ComItemLine>
                        <ComItem>
                            <ComItemRight>
                                <ComItemHeader>Senior Solidity Developer (ENG) - Remote</ComItemHeader>
                            </ComItemRight>
                            <ComIconDiv>Apply</ComIconDiv>
                        </ComItem>
                        <ComItem>
                            <ComItemRight>
                                <ComItemHeader>Project Manager (ENG) - Remote</ComItemHeader>
                            </ComItemRight>
                            <ComIconDiv>Apply</ComIconDiv>
                        </ComItem>
                    </ComItemLine>
                    <ComItemLine>
                        <ComItem>
                            <ComItemRight>
                                <ComItemHeader>Senior Front End / React Engineer (ENG) - Remote</ComItemHeader>
                            </ComItemRight>
                            <ComIconDiv>Apply</ComIconDiv>
                        </ComItem>
                    </ComItemLine>
                </Communication>
            </Upcom>
        </UpcomOut >
    );
}  