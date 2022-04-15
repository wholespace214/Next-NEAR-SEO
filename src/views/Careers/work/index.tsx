import React from "react";
import { Gonear, GonearLeft, GoLetter, GoLeftHeader, Early, GoLeftSubTitle, FeatureBtn, GoBtns, GoBtn } from "./work.style";
export default function index() {
    return (
        <>
            <div className="IDOgonearout">
                <Gonear>
                    <GonearLeft>
                        <GoLeftHeader>
                            <Early>
                                Work alongside an ambitious
                                team in a <GoLetter>fast-paced</GoLetter> &nbsp;
                                environment.
                            </Early>
                        </GoLeftHeader>
                        <GoLeftSubTitle>
                            Build the future of finance. We’re here to create a free and open financial
                            system for the world. We built Gonear to bring economic freedom to
                            millions — and we’re hiring.
                        </GoLeftSubTitle>
                        <GoBtns>
                            <GoBtn>View open roles</GoBtn>
                        </GoBtns>
                    </GonearLeft>
                </Gonear>
            </div>
        </>
    );
}
