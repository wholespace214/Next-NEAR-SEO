import React from "react";
import { GalaxyHeader, HeaderLeft, PathText, WhiteText, HeaderRight } from "./description.style";
const Introduce = () => {
    return (
        <GalaxyHeader>
            <HeaderLeft>
                <PathText>Projects / <WhiteText>Galaxy Fight Club</WhiteText></PathText>
            </HeaderLeft>
            <HeaderRight></HeaderRight>
        </GalaxyHeader>
    );
};

export default Introduce;
