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
    @media screen and (max-width: 1220px) {
    & {
        width: 95% !important;
    }
}
`;
export const LearnMoreHeaderTitle = styled.div`
 display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;
export const UpComTitleLeft = styled.div`
display: flex;
  align-items: center;
  color: white;
  font-weight: 800;
  width: 100%;
  font-size: 35px;
  @media screen and (max-width: 1240px) {
  & {
    font-size: 40px !important;
    text-align: center !important;
    display: flex;
    justify-content: center;
  }
  }
`;
export const LogoGroup = styled.div`
    margin-top: 50px;
`;
export const LogoLine = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media screen and (max-width:1240px) {
     &{
         flex-direction: column !important;
         align-items: center !important;
         margin-bottom: 0 !important;
     }   
    }
`;
export const LogoBtn = styled.div`
    width: 250px;
    min-width: 250px;
    cursor: pointer;
        *{
        /* width:90% !important; */
        margin: auto !important;
    }
    border-radius: 10px;
    height: 80px;
    display: flex;
    justify-content: center;
    color:white;
    font-size: 20px;
    font-weight: 400;
    align-items: center;
    border: 1px solid #a1abb9;
    position: relative;
    background-color: white;
    overflow: hidden;
    .logoloading{
        width: 250px;
        height: 78px;
        line-height: unset !important;
    }
    @media screen and (max-width:580px){
        & { 
            margin-bottom: 10px !important;
        }   
    }
`;
export const LogoTwo = styled.div`
    display: flex;
    width: 50%;
    justify-content: space-around;
    @media screen and (max-width:1240px){
        &{
            margin-bottom: 20px !important;
            width: 550px !important;
        }   
    }
    @media screen and (max-width:580px){
        &{
           flex-direction: column !important;
           align-items: center !important;
           width: 100% !important;
           margin-bottom: 0 !important;
        }   
    }
`;
export const InquireBtn = styled.div`
  width: 250px;
  height: 80px;
  border-radius: 10px;
  cursor: pointer;
  border: 1px solid white;
  color: white;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
`;