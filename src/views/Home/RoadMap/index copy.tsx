import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useMediaQuery } from 'react-responsive'
import Data from "./data.json";
import { RoadMapOut, RoadMapHeader, RectIcon, Item, EachArrowBtn, RectCard, CheckIcon, Description, CheckCard, ArrowI, RoadMapHeaderLeft, ArrowBtn, GoLetter } from "./roadmap.style";
type Props = {
  pos?: number;
};

export const Mainroadline = styled.div<Props>`
  border-top: 1px solid #a1abb9;
  width: 3000px;
  height: 50px;
  margin: 60px 0 100px 0;

  display: flex;
  position: absolute;
  top: 160px;
  align-items: flex-start;
  transition: all 0.85s;
  /* left: ${(props: any) => props.pos}px; */
    left: ${(props: any) => props.pos + 350}px;
  @media screen and (max-width: 1300px) {
    left: ${(props: any) => props.pos + 250}px;
  }
  @media screen and (max-width: 900px) {
    left: ${(props: any) => props.pos + 150}px;
  }
  @media screen and (max-width: 600px) {
    left: ${(props: any) => props.pos + 10}px;
  }
  @media screen and (max-width: 500px) {
    left: ${(props: any) => props.pos}px;
  }
`;

export default function RoadMap() {
  const [pos_val, setPos_val] = useState(0);
  const [data, setData] = useState(Data);
  const [count, setCount] = useState(0);
  // const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  // const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  useEffect(() => {
    setCount(data.length);
  }, [])
  const handlechange = (val: any) => {
    let screenwidth = window.innerWidth;
    let sreenlength = count * 250;
    let sum = val + 350 + pos_val;
    if (sum > (2500 - sreenlength) && sum < 400) {
      setPos_val(pos_val + val);
    }
    // if (screenWidth >= 900 && screenWidth < 1300) {
    //   let sum = val + 250 + pos_val;
    //   if (sum > -10 && sum < 400) {
    //     setPos_val(pos_val + val);
    //   }
    // }
    // if (screenWidth >= 768 && screenWidth < 900) {
    //   let sum = val + 150 + pos_val;
    //   if (sum > -10 && sum < 300) {
    //     setPos_val(pos_val + val);
    //   }
    // }
    // if ((screenWidth) => 460 && screenWidth < 768) {
    //   let sum = val + 50 + pos_val;
    //   if (sum > -260 && sum < 200) {
    //     setPos_val(pos_val + val);
    //   }
    // }
    // if (screenWidth < 460) {
    //   let sum = val + 10 + pos_val;
    //   if (sum > -350 && sum < 200) {
    //     setPos_val(pos_val + val);
    //   }
    // }
    // if (screenWidth < 380) {
    //   let sum = val + 10 + pos_val;
    //   if (sum > -400 && sum < 200) {
    //     setPos_val(pos_val + val);
    //   }
    // }
    // if (screenWidth < 360) {
    //   let sum = val + 10 + pos_val;
    //   if (sum > -450 && sum < 200) {
    //     setPos_val(pos_val + val);
    //   }
    // }
  };

  return (
    <RoadMapOut>
      <RoadMapHeader>
        <RoadMapHeaderLeft>
          The &nbsp;<GoLetter>Go</GoLetter>near roadmap
        </RoadMapHeaderLeft>
        <ArrowBtn>
          <EachArrowBtn onClick={() => handlechange(200)}>
            <ArrowI className="fa fa-chevron-left" />
          </EachArrowBtn>
          <EachArrowBtn onClick={() => handlechange(-200)}>
            <ArrowI className="fa fa-chevron-right" />
          </EachArrowBtn>
        </ArrowBtn>
      </RoadMapHeader>
      <Mainroadline pos={pos_val}>
        {data.map((item: any, key: any) => {
          if (item.type == "checkicon") {
            { item.name }
            return <CheckCard key={key}>
              <CheckIcon />
              <Description><Item>{item.name}</Item></Description>
            </CheckCard>
          }
          else {
            return <RectCard key={key}>
              <RectIcon>{item.num}</RectIcon>
              <Description>
                <Item>{item.name}</Item>
              </Description>
            </RectCard>
          }
        })}
      </Mainroadline>
    </RoadMapOut>
  );
}
