import React from "react";
import { GalaxyHeader, HeaderLeft, ComingBtn, Slash, PathText, WhiteText, HeaderRight } from "./singleheader.style";
const Header = () => {
    return (
        <GalaxyHeader>
            <HeaderLeft>
                <a href="/projects"><PathText>Projects</PathText></a> <Slash>&nbsp;/&nbsp;</Slash> <WhiteText>Galaxy Fight Club</WhiteText>
            </HeaderLeft>
            <HeaderRight>
                <PathText>IDO starts on January 6th 2022, 1:00 PM UTC</PathText>
                <ComingBtn>COMING SOON</ComingBtn>
            </HeaderRight>
        </GalaxyHeader>
    );
};

export default Header;
