import styled, { keyframes } from "styled-components";

export const GoNear = styled.div`
    display: flex;
  width: 1200px;
  margin: 120px 0 0 0;
    @media screen and (max-width: 1220px) {
        & {
          flex-direction: column !important;
            align-items: center !important;
            height: 400px !important;
            width: 100% !important;
            margin-top: 30px !important;
        }
    }
`;
export const GoNearLeft = styled.div`
    display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width:1220px){
   & {
       text-align: center !important;
   }   
  }
  @media screen and (max-width:660px){
    & {
        align-items: center !important;
    }
  }
`;
export const GoLeftHeader = styled.div`
    color: white;
  font-size: 60px;
  font-weight: 800;
  width: 550px;
  line-height: 70px;
  @media screen and (max-wdith:660px) {
    & {
        font-size: 25px !important;
        display: flex;
        width: auto !important;
        justify-content: center !important;
    }   
  }
`;
export const Early = styled.div`
    @media screen and (max-width:550px){
        & {
            width: auto !important;
            font-size: 30px !important;
        }
    }
    @media screen and (max-width:455px){
      & {
        line-height: 30px !important;
      }   
    }
`;
export const GoLetter = styled.span`
    color: #717cd6;
`;
export const GoLeftSubTitle = styled.div`
    color: rgb(255,255,255,0.55);
    font-weight: 400;
    font-size: 20px;
    width: 550px;
    margin: 30px 0;
    @media screen and (max-width:660px){
        & {
            width: 95% !important;
            font-size: 16px !important;
        }
    }
`;
export const FeatureBtn = styled.div`
    color: #a1abb9;
  margin-bottom: 15px;
`;
export const GoBtns = styled.div`
    display: flex;
    border: 1ox a;
    @media screen and (max-width:1220px){
     & {
         justify-content: center !important;
         margin-bottom: 50px !important;
     }   
    }
    @media screen and (max-width:660px){
        & {
            flex-direction: column !important;
            align-items: center !important;
        }
    }
`;
export const GoBtn = styled.div`
    position: relative;
    width: 205px;
    overflow: hidden;
    height: 57px;
    /* *{
        width:90% !important;
        margin: auto !important;
    } */
    background-color: white;
    border-radius: 20px;
    font-size: 20px !important;
    font-weight: 800;
    margin-right: 10px;
    cursor: pointer;
    @media screen and (max-width:660px) {
        & {
            margin: 5px 0 !important;
        }   
    }
`;
export const GoNearRight = styled.div`
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
`;