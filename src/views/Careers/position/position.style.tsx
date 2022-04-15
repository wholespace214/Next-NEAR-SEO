import styled from "styled-components";

export const UpcomOut = styled.div`
  margin: 50px 0;
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
    height: 50px;
    cursor: pointer;
    border: 1px solid #a1abb9;
    margin-top: 20px;
    border-radius: 10px;
    align-items: center;
    @media screen and (max-width:600px){
        width: 97% !important;
        flex-direction: column !important;
        /* padding: 0 10px !important; */
        align-items: center !important;
        height: auto !important;
    }
`;
export const ComItemIcon = styled.div`
    width: 100px;
`;
export const ComIconDiv = styled.div`
    width: 170px;
    height: 30px;
    border: none;
    margin: 10px;
    text-align: center;
    outline: none;
    color: #fff;
    font-size: 17px;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
    border: 1px solid #a1abb9;
    background-color:  #202124;
    @media screen and (max-width:600px){
        margin: 10px 0 !important;
    }
`;
export const ComItemRight = styled.div`
    width: 480px;
    margin-left: 20px;
    @media screen and (max-width:600px){
        width:100% !important;
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
        margin-left: 0 !important;
    }
    @media screen and (max-width:460px){

    }
`;
export const ComItemHeader = styled.div`
        color: white;
        font-weight: 800;
        @media screen and (max-width:600px){
         text-align: center !important;   
        }
        @media screen and (max-width:460px){
            margin-top: 10px !important;
        }
`;
export const ComSubTitle = styled.div`
  color: #a6b5ca;
  font-weight: 400;
  font-size: 20px;
  margin: 20px 0;
`;