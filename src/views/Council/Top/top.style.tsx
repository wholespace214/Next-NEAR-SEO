import styled, { keyframes } from "styled-components";
export const GoNearOut = styled.div`
  width: 100%;
  height: 700px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width:1100px) {
    height: auto !important;
  }
`;
export const ApplyBtn = styled.div`
    width: 200px;
    border-radius: 10px;
    cursor: pointer;
    height: 50px;
    border: 1px solid #a1abb9;
    display:flex;
    justify-content: center;
    align-items: center;
        color:white;
    font-size: 18px;
    font-weight: 400;
    transition: all 0.3s;
    margin-bottom: 20px;
    :hover {
        background-color: #303136;
    }
`;
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
            margin: 30px 0 50px 0 !important;
        }
    }
`;
export const GoNearLeft = styled.div`
    display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  width: 800px;
  line-height: 70px;
  @media screen and (max-width:820px){
    & {
        /* font-size: 40px !important; */
        display: flex !important;
        width: 100% !important;
        line-height: 60px !important;
        justify-content: center !important;
    }   
  }
`;
export const Early = styled.div`
    @media screen and (max-width:820px){
        & {
            width: auto !important;
            font-size: 60px !important;
        }
    }
    @media screen and (max-width:490px){
        & {
            width: 95% !important;
            font-size: 30px !important;
            line-height: 40px !important;
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
    width: 800px;
    margin: 30px 0;
    @media screen and (max-width:820px){
        & {
            width: 95% !important;
            font-size: 16px !important;
        }
    }
`;
export const FeatureBtn = styled.div`
    color: #a1abb9;
  margin: 20px 0;
  width: 800px;
  @media screen and (max-width:1220px){
    width: auto !important;
    margin-top: 0 !important;
  }
`;
export const GoBtns = styled.div`
    display: flex;
    width:800px;
    @media screen and (max-width:1220px){
     & {
         justify-content: center !important;
         margin-bottom: 20px !important;
     }   
    }
    @media screen and (max-width:820px){
        & {
          width: 100% !important;
            flex-direction: column !important;
            align-items: center !important;
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
    border-radius: 10px;
    border:1px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
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