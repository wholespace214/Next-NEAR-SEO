import styled from "styled-components";


export const LearnCardBottomTitle = styled.div`
    color: #3333cc;
    margin: 0 0 0 20px;
    font-size: 20px;
    font-weight: 800;
`;
export const VisitOpenRoleBtn = styled.div`
  margin: 40px 20px;
  width: 150px;
  height:50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  border-radius: 8px;
  cursor: pointer;
  font-size: 17px;
`;
export const LearnMoreOut = styled.div`
    width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0 50px 0;
`;
export const LearnMoreHeader = styled.div`
    width: 1200px;
    @media screen and (max-width:1240px) {
      & {
        width: 100% !important;
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
    &{
        justify-content: center !important;
        text-align: center !important;
    }
  }
`;
export const UpCards = styled.div`
      width: 1200px;
    display: flex;
    justify-content: space-between;
    margin: 20px 0 50px 0;
    cursor: pointer;
  @media screen and (max-width: 1240px) {
        & {
            flex-direction: column !important;
            justify-content: center !important;
            align-items: center !important;
            width: 100% !important;
        }
    }
`;
export const UpCard = styled.div`
      width: 381px;
    height: 500px;
    margin: 10px;
    color: #fff;
    font-size: 17px;
    cursor: pointer;
    position: relative;
    border-radius: 10px;
    border: 1px solid #a1abb9;
    transition: all 0.3s;
    overflow: hidden;
    background-color:  #202124;
  :hover {
    margin-top: -10px;
  }
  @media screen and (max-width: 1240px) {
        & {
            margin-top: 20px;
        }
    }
  @media screen and (max-width: 400px) {
        & {
            width: 90% !important;
            height: auto !important;
        }
    }
`;
export const CardImg = styled.div`
  border-bottom: 1px solid #a1abb9;
  width: 380px;
  height: 230px;
  overflow: hidden;
  position: relative;
  border-radius: 10px 10px 0 0;
  @media screen and (max-width:400px){
    & {
      width: 100% !important;
      border-style: none !important;
    }
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
  height: 93px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  @media screen and (max-width:400px){
   & {
      margin: 15px 20px 0 20px !important;
      height: 110px !important;
   } 
  }
`;
export const IconGroup = styled.div`
   margin:10px 0;
`;  