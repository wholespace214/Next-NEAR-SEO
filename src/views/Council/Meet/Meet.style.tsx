import styled from "styled-components";


export const GoNearOut = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  @media screen and (max-width:1100px) {
    height: auto !important;
  }
`;
export const GoNear = styled.div`
      display: flex;
      width: 1200px;
  @media screen and (max-width:1240px) {
    & {
        width: 95% !important;
    }   
  }
`;
export const GoNearLeft = styled.div`
      display: flex;
      flex-direction: column;
      /* justify-content: center; */
      margin-bottom: 70px !important;
      width: 100%;
  @media screen and (max-width:850px) {
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
  @media screen and (max-width:850px){
      & {
         width: 100% !important;
      }
  }
`;
export const Early = styled.div`
      @media screen and (max-width:850px){
      & {
          text-align: center !important;
      }
      @media screen and (max-width:530px){
      & {
          font-size: 30px !important;
          line-height: 35px !important;
      }
    }
  }
`;
export const GoLetter = styled.span`
    color: #717cd6;
    cursor: pointer;
    transition: all 0.3s;
    :hover{
      color: white;
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
export const GoLeftSubTitle = styled.div`
  color: #a1abb9;
  font-weight: 400;
  font-size: 20px;
  width: 830px;
  margin: 30px 0;
  @media screen and (max-width:850px){
     width:100% !important;
     text-align: center !important;
  }
  @media screen and (max-width:500px){
      & {
        font-size: 16px !important;
      }
  }
`;
export const FeatureBtn = styled.div`
  color: #a1abb9;
  margin-bottom: 15px;
  @media screen and (max-width:405px){
      & {
          width: 220px !important;
        }
  }
`;
export const GoBtns = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    @media screen and (max-width:1100px){
        flex-direction: column !important;
        margin: 20px 10px !important;
    }
    @media screen and (max-width:440px){
        flex-direction: column !important;
        margin:0 !important;
    }
`;
export const GoBtn = styled.div`
    width: 200px;
    overflow: hidden;
    min-width: 200px;
    position: relative;
    border-radius: 10px;
    cursor: pointer;
    height: 70px;
    display: flex;
    justify-content: center;
    color:white;
    font-size: 20px;
    font-weight: 400;
    align-items: center;
    transition: all 0.3s;
    border: 1px solid #a1abb9;
    background-color: white;
    /* *{
      padding:  10px !important;
    } */
    @media screen and (max-width:1100px){
        margin-bottom: 10px !important;
    }
`;
export const GoNearRight = styled.div`
      height: 50px;
`;
export const GoBtnsGroup = styled.div`
    @media screen  and (max-width:1100px){
        display: flex !important;
        justify-content: center !important;
    }   
      @media screen  and (max-width:440px){
        flex-direction: column !important;
    }  
`;