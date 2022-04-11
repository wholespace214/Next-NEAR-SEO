import styled from "styled-components";

export const LearnMoreOut = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 50px 0;
`;
export const LearnMoreHeader = styled.div`
    width: 1200px;
    @media screen and (max-width:1220px){
     & {
         width: 95% !important;
     }   
    }
`;
export const LearnMoreHeaderTitle = styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 30px;
  @media screen and (max-width:560px){
   & {
       flex-direction: column !important;
       justify-content: center !important;
       align-items: center !important;
   }   
  }
`;
export const GoLetter = styled.span`
    color: #717cd6;
    cursor: pointer;
`;
export const UpcomTitleLeft = styled.div`
      display: flex;
    align-items: center;
    color: white;
    line-height: 10px;
    font-weight: 800;
    width: 100%;
    font-size: 35px;
  @media screen and (max-width:650px){
   & {
           font-size: 30px !important;
        display: flex !important;
        justify-content: center !important;
        line-height:30px !important;
        /* margin-bottom: 20px !important; */
   }   
  }
  @media screen and (max-width:420px){
    & {
        width: 300px;
        flex-direction: column;
    }
  }
  @media screen and (max-width:400px){
   & {
       font-size: 30px !important;
   }   
  }
`;
export const UpcomTitleRight = styled.div`
    
`;
export const LearnMoreVisitBtn = styled.div`
    width: 130px;
    height: 40px;
    border: none;
    margin: 10px;
    outline: none;
    color: #fff;
    cursor: pointer;
    position: relative;
    z-index: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: 1px solid #a1abb9;
    transition: all 0.3s;
`;
export const Upcards = styled.div`
      width: 1200px;
  display: flex;
  justify-content: space-between;
  margin: 20px 0 50px 0;
  cursor: pointer;
  @media screen and (max-width:1220px){
   & {
       flex-direction: column !important;
        align-items: center !important;
        width: 95% !important;
   }   
  }
`;
export const Upcard = styled.div`
      width: 381px;
    height: 480px;
    margin: 10px;
    color: #fff;
    font-size: 17px;
    cursor: pointer;
    position: relative;
    border-radius: 10px;
    border: 1px solid #a1abb9;
    transition: all 0.3s;
    background-color:  #202124;
  :hover {
    margin-top: -10px;
  }
    @media screen and (max-width:1220px){
        & {
            margin: 10px 0 !important;
        }   
    }
    @media screen and (max-width:380px){
     & {
         width: 100% !important;
     }   
    }
`;
export const CardImg = styled.div`
      border: 1px solid #a1abb9;
  width: 380px;
  height: 230px;
  position: relative;
  overflow: hidden;
  border-radius: 10px 10px 0 0;
  @media screen and (max-width: 390px){
   width:100%; 
  }
`;
export const LearnCardTitle = styled.div`
     color: white;
  font-weight: 800;
  font-size: 25px;
  margin: 20px 0 0 20px;
`;
export const LearnCardSubTitle = styled.div`
      color: #a1abb9;
        margin: 15px 50px 0 20px;
        font-size: 17px;
        height: 110px;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
  @media screen and (max-width:380px){
   & {
       margin-right: 20px !important;
   }   
  }
`;