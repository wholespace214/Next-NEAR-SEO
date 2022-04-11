import styled from "styled-components";

export const RoadMapOut = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0;
  height: 50vh;
  position: relative;
  overflow: hidden;
`;
export const RoadMapHeader = styled.div`
  display: flex;
  align-items: center;
  width: 1200px;
  justify-content: space-between;
  margin: 50px 0;
  @media screen and (max-width:1220px){
   &{
       width: 80% !important;
   }   
  }
  @media screen and (max-width:550px){
   & {
       flex-direction: column !important;
    align-items: center !important;
    padding: 0 !important;
    margin-top: 40px !important;
   }   
  }
`;
export const RoadMapHeaderLeft = styled.div`
  color: white;
  font-size: 30px;
  font-weight: 800;
  width: 550px;
  line-height: 70px;
  @media screen and (max-width: 550px) {
    & {
        /* font-size: 20px !important; */
        width: auto !important;
        }
    }
    @media screen and (max-width:380px) {
      & {
          width: 210px;
          line-height: 40px;
      }   
    }
`;
export const GoLetter = styled.span`
  color: #717cd6;
`;
export const ArrowBtn = styled.div`
.arrowback, .arrownext{
  color: white;
  font-size: 30px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: #A1ABB9;
}
.arrownext{
  font-size: 25px;
  margin-left: 20px;
}
  display: flex;
  @media screen and (max-width:380px){
    & {
      margin: 30px 0;

    }
  }
`;
export const EachArrowBtn = styled.div`
    width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2c3739;
  border-radius: 50px;
  cursor: pointer;
  margin: 0 10px;
`;
export const ArrowI = styled.i`
  class:${props => props.className};
  color: white;
  font-weight: 800;
  font-size: 20px;
`;
export const CheckCard = styled.div`
        margin-top: -15px;
        display: flex;
        flex-direction: column;
        margin-right: 30px;
`;
export const CheckIcon = styled.div`
   position: relative;
  width: 30px;
  height: 30px;
  align-items: center;
  display: flex;
  justify-content: center;
  background-color: rgb(0, 255, 0);
  border-radius: 50%;
  :after{
      content: "✔";
      position: absolute;
      color: white;
  }
`;
export const Description = styled.div`
  font-size: 16px;
  color: #fff;
  max-width: 200px;
  @media screen and (max-width: 900px) {
    & {
      font-size: 14px;
    }
  }
`;
export const RectCard = styled.div`
    margin-top: -10px;
  display: flex;
  flex-direction: column;
  margin-right: 30px;
`;
export const RectIcon = styled.div`
    background-color: rgb(164, 43, 20);
  border-radius: 3px;
  align-items: center;
  text-align: center;
  color: #fff;
  font-size: 14px;
  max-width: 70px;
`;
export const Item = styled.div`
  margin-left: 5px;
  margin-top: 10px;
`;