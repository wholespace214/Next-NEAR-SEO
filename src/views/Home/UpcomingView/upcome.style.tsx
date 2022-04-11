import styled from "styled-components";
export const UpComOut = styled.div`
    margin-top: 50px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
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
export const UpComTitle = styled.div`
    margin-top: 50px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width:455px){
   & {
        flex-direction: column !important;
        align-items: center !important;
        padding: 0 !important;
   }   
  }
`;
export const UpcomTitleLeftOne = styled.div`
 display: flex;
  align-items: center;
  color: white;
  font-weight: 800;
  width: 100%;
  font-size: 35px;
  @media screen and (max-width:1220px){
   & {
       display: flex !important;
    font-size: 40px !important;
    justify-content: center !important;
   }   
  }
  @media screen and (max-width:455px) {
   & {
       font-size: 30px !important;
   }   
  }
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
    @media screen and (max-width:381px){
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
 border-bottom: 1px solid #a1abb9;
  width: 379px;
  height: 230px;
  position: relative;
  overflow: hidden;
  border-radius: 10px 10px 0 0;
  @media screen and (max-width:381px){
      width: 100% !important;
  }
`;
export const UpCardTitle = styled.div`
 color: white;
  font-weight: 800;
  font-size: 30px;
  margin: 50px 0 0 20px;
`;
export const UpCardSubTitle = styled.div`
color: #a1abb9;
  font-weight: 600;
  font-size: 18px;
  margin-left: 20px;
`;
export const UpCardLine1 = styled.div`
  width: 350px;
  margin: 20px 0 0 10px;
  height: 30px;
  display: flex;
  font-size: 18px;
  justify-content: space-between;
  color: white;
  font-weight: 800;
  @media screen and (max-width:380px){
   & {
       width: 100% !important;
   }   
  }
`;
export const UpCardLine2 = styled.div`
  width: 350px;
  margin: 0 10px;
  height: 30px;
  justify-content: space-between;
  display: flex;
  font-size: 18px;
  color: white;
  font-weight: 800;
@media screen and (max-width:380px){
   & {
       width: 100% !important;
   }   
  }
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
   &{
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
    margin: 10px;
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
