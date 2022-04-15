import styled from "styled-components";

export const UpcomOut = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Upcom = styled.div`
      width: 1200px;
      margin-bottom: 20px;
      @media screen and (max-width:1240px){
          width: 100% !important;
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
      }
`;
export const UpComTitle = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
`;
export const UpComTitleLeftOne = styled.div`
    display: flex;
  align-items: center;
  color: white;
  font-weight: 800;
  width: 100%;
  font-size: 35px;
`;
export const GoLeftSubTitle = styled.div`
  color: #a6b5ca;
  font-weight: 400;
  font-size: 20px;
  width: 900px;
  margin: 30px 0;
  @media screen and (max-width:940px){
    width: 90% !important;
  }
 @media screen and (max-width:500px){
    width: 90% !important;
    font-size: 16px !important;
    margin: 10px 0 !important;
    text-align: center !important;
  }
`;

export const Communication = styled.div`
    margin-top: 50px;
`;
export const ComItemLine = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    @media screen and (max-width:1240px){
        flex-direction: column !important;
        align-items: center !important;
    }
`;
export const ComItem = styled.div`
    width: 590px;
    display: flex;
    margin-top: 20px;
    @media screen and (max-width:600px){
        width: 97% !important;
    }
    @media screen and (max-width:460px){
        flex-direction: column !important;
        align-items: center !important;
    }
`;
export const ComItemIcon = styled.div`
    width: 100px;
`;
export const ComIconDiv = styled.div`
    width: 100px;
    height: 100px;
    border: 1px solid #a6b5ca;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 20px;
`;
export const ComItemRight = styled.div`
    width: 480px;
    margin-left: 20px;
    @media screen and (max-width:600px){
        width:100% !important;
    }
    @media screen and (max-width:460px){
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
    }
`;
export const ComItemHeader = styled.div`
      color: white;
        font-weight: 800;
        font-size: 25px;
        @media screen and (max-width:460px){
            margin-top: 10px !important;
        }
`;
export const ComSubTitle = styled.div`
  color: #a6b5ca;
  font-weight: 400;
  font-size: 20px;
  margin: 20px 0;
  @media screen and (max-width:500px){
   font-size:16px !important;   
   width: 95% !important;
   text-align: center !important;
  }
`;