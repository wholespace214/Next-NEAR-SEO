import styled from "styled-components";

export const TierOut = styled.div`
    height: auto;
    width: 1300px;
    margin: 100px 0;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width:1400px){
        display: flex;
        flex-direction: column !important;
        align-items: center !important;
        width: 100% !important;
  }
    @media screen and (max-width:550px){
        margin: 0 !important;
    }
`;
export const TierCard = styled.div`
    .trees{
      z-index: 1;
    }
    align-items: center;
    width: 250px;
    height: 410px;
    margin: 10px;
    overflow: hidden;
    color: #fff;
    display: flex;
    flex-direction: column;
    padding: 10px;
    font-size: 17px;
    cursor: pointer;
    position: relative;
    border-radius: 10px;
    /* border: 1px solid #a1abb9; */
    transition: all 0.3s;
    background-color:  #202124;
  :hover {
    margin-top: -10px;
  }
  @media screen and (max-width:1400px){
    margin: 20px 20px !important;
    width: 300px !important;
  }
  @media screen and (max-width:860px){
    margin: 10px 0 !important;
  }
`;
export const CardImg = styled.div`
    width: 100%;
    height: 200px;
    min-height: 200px;
    overflow: hidden;
    border: 1px solid #A1ABB9;
    border-radius: 10px;
    margin: 20px 0;
`;
export const TierTitle = styled.div`
    color: white;
    width: 120px;
    height: 40px;
    font-size: 17px;
    border-radius: 5px;
    display: flex;
    position: absolute;
    top: 10px;
    right: 10px;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 2;

`;
export const GonearBtn = styled.div`
    position: absolute;
    bottom: 0;
    width: 80%;
    height: 40px;
    margin-bottom: 150px;
    border-bottom: 1px solid  rgba(161, 171, 185,0.4);
    display: flex;
    font-size: 14px;
    justify-content: center;
    align-items: center;
    color: white;
    z-index: 2;

`;
export const Tickets = styled.div`
      position: absolute;
      bottom: 0;
      width: 80%;
      height: 40px;
      font-size: 15px;
      margin-bottom: 110px;
      border-bottom: 1px solid rgba(161, 171, 185,0.4);
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      z-index: 2;
`;
export const TierGroup = styled.div`
    display: flex;
    @media screen and (max-width:1020px){
        flex-direction: column !important;
    }
`;
export const SubBack = styled.div`
  z-index: 2;
   position: absolute;
  bottom: 0;
  transform: rotate(-180deg);
  left: 0;
  width: 100%;
  height: 100%;
  background: hsla(150, 25%, 10%, .5);
  clip-path: polygon(0 20%, 100% 40%, 100% 100%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 60%);
`;