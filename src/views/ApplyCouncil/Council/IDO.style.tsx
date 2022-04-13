import styled from "styled-components";

export const Gonear = styled.div`
    display: flex;
    width: 1200px;
    margin-top: 100px;
    @media screen and (max-width:1240px){
       & {
           width: 100% !important;
           margin-top: 100px !important;
       } 
    }
`;
export const GoLetter = styled.span`
    color: #717cd6;
    cursor: pointer;
`;
export const GonearLeft = styled.div`
    margin-top: 50px;
    @media screen and (max-width:1240px) {
        &{
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            width: 100% !important;
        }      
    }
`;
export const GoLeftHeader = styled.div`
        color: white;
        font-size: 60px;
        font-weight: 800;
        width:1100px;
        line-height: 70px;
    @media screen and (max-width: 1240px) {
            & {
                display: flex;
                justify-content: center !important;
                width: 90% !important;
            }
    }
`;
export const Early = styled.div`
    @media screen and (max-width: 1240px) {
        & {
            text-align: center !important;
        }
    }
    @media screen and (max-width: 900px) {
        & {
            font-size: 40px !important;
            line-height: 50px !important;
        }
    }
    @media screen and (max-width: 460px) {
        & {
            font-size: 30px !important;
            line-height: 40px !important;
        }
    }
`;
export const GoLeftSubTitle = styled.div`
  color: #a6b5ca;
  font-weight: 400;
  font-size: 20px;
  width: 750px;
  margin: 30px 0;
    @media screen and (max-width: 1240px) {
        & {
            width: 700px !important;
            text-align: center !important;
            margin: 20px 0 !important;
        }
    }
    @media screen and (max-width: 900px) {
        & {
            width: 500px !important;
        }
    }
    @media screen and (max-width: 510px) {
        & {
            width: 90% !important;
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
    margin-bottom: 100px;
    @media screen and (max-width:1240px){
        & {
            margin-bottom: 50px;
        }
    }
    @media screen and (max-width:800px){
        & {
            flex-direction: column !important;
        }
    }
`;
export const GoBtn = styled.div`
  position: relative;
    width: 250px;
    height: 57px;
    font-size: 20px !important;
    font-weight: 800;
    margin-right: 10px;
    cursor: pointer;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: 1px solid white;
    @media screen and (max-width:800px) {
    & {
        margin-bottom: 10px !important;
    }   
  }
`;
