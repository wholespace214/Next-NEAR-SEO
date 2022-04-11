import styled from "styled-components";
export const FundOut = styled.div`
 width: 95% !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
`;
export const UpCom = styled.div`
width: 1200px;
  margin-bottom: 20px;
  @media screen and (max-width:1220px){
   & {
       width: 95% !important;
   }   
  }
`;
export const FundHeaderTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 100px 0 30px 0;
  @media screen and (max-width: 1000px) {
  & {
    flex-direction: column !important;
    align-items: center !important;
  }
}
`;
export const UpComTitleLeftFunds = styled.div`
  display: flex;
  align-items: center;
  color: white;
  font-weight: 800;
  width: 100%;
  font-size: 35px;
  @media screen and (max-width:1000px){
   & {
    margin-bottom: 30px !important;
    justify-content: center !important;
  }   
  }
`;
export const FundHeaderRight = styled.div`
    display: flex;
    @media screen and (max-width: 660px) {
    & {
        flex-direction: column !important;
    }
    }
`;
export const FundBtn = styled.div`
    width: 190px;
    height: 70px;
    display: flex;
    padding: 0 10px;
    justify-content: space-between;
    border: none;
    margin: 10px;
    outline: none;
    color: #fff;
    font-size: 17px;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
    border: 1px solid #a1abb9;
    background-color:  #202124;
    transition: all 0.3s;
    :hover{
      margin-top: -1px ;
    }

  @media screen and (max-width:660px){
   & {
       margin: 5px 0 !important;
   }   
  }
`;
export const FundBtnLeft = styled.div`
    margin-top: 10px;
`;
export const FundBtnNum = styled.div`
  color: white;
  text-align: right;
  margin-top: 5px;
  font-size: 17px;
  font-weight: 800;
`;
export const FundBtnRight = styled.div`

`;
export const FundBtnText = styled.div`
  font-size: 12px;
  color: #e5ce4c;
  margin-top: 10px;
`;
export const UniqBtnText = styled.div`
  font-size: 12px;
  color: #21b3bd;
  margin-top: 10px;
`;
export const UpCards = styled.div`
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
export const UpCard = styled.div`
        width: 381px;
    height: 450px;
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
export const UpCardBtn = styled.div`
    display: flex;
  width: 110px;
  height: 30px;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  position: absolute;
  cursor: pointer;
  z-index: 1;
  top: 10px;
  right: 10px;
  background-color: #10dc95;
`;
export const UpCardCircle = styled.div`
 width: 13px;
  height: 13px;
  border-radius: 50px;
  background-color: yellow;
  margin-left: 10px;
`;
export const UpCardCircleLetter = styled.div`
    color: #202124;
    font-weight: 700;
    font-size: 14px;
    margin-right: 10px;
`;
export const UpCardLogo = styled.div`
      border: 5px solid #202124;
  width: 90px;
  height: 90px;
  position: absolute;
  border-radius: 10px;
  z-index: 1;
  overflow: hidden;
  top: 170px;
  left: 20px;
  background-color: #303136;
`;
export const CardImg = styled.div`
 border: 1px solid #a1abb9;
  width: 380px;
  height: 230px;
  overflow: hidden;
  position: relative;
  border-radius: 10px 10px 0 0;
  @media screen and (max-width:390px){
   width : 100% !important;
  }
`;
export const FundTitle = styled.div`
  color: white;
  font-weight: 800;
  font-size: 30px;
  margin: 60px 0 0 20px;
`;
export const UpCardSubTitle = styled.div`
  color: #a1abb9;
  font-weight: 600;
  font-size: 18px;
  margin-left: 20px;
`;
export const FundTotalRaise = styled.div`
  width: 350px;
  margin: 40px 0 0 10px;
  height: 30px;
  display: flex;
  font-size: 20px;
  justify-content: space-between;
  color: white;
  font-weight: 800;
  @media screen and (max-width: 380px) {
  & {
    width: 100% !important;
  }
}
`;
export const RaisedBtnText = styled.div`
  color: #4351c3;
  font-size: 12px;
  margin-top: 10px;
  text-align: right;
`;
export const UpCardLineLeft = styled.div`
  width: 230px;
  display: flex;
  align-items: center;
  font-size: 18px;
  padding-left: 10px;
  @media screen and (max-width:380px){
     & {
            width: 60% !important;   
        }
    }
`;
export const UpCardLineRight = styled.div`
display: flex;
  align-items: center;
  padding-left: 10px;
  @media screen and (max-width:380px){
   & {
       width: 30% !important;
   }   
  }
`;
export const ViewAllProjectsOut = styled.div`
    display: flex;
  justify-content: center;
`;
export const ViewAllProjects = styled.div`
    width: 130px;
    height: 45px;
    border: none;
    margin: 10px 0 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    color: #fff;
    font-size: 13px;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
    border: 1px solid #a1abb9;
    background-color:  #202124;
  ::before {
    content: '';
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: "glowing" 6s linear forwards 1;
    animation-iteration-count:infinite;
    opacity: 0;
    transition: opacity .85s ease-in-out;
    border-radius: 10px;
  }
  :hover::before {
    opacity: 1;
  }
  ::after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 10px;
    background-color:  #202124;
  }
`;