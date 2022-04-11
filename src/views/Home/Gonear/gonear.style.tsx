import styled from "styled-components";

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
            margin-top: 30px !important;
        }
    }
`;
export const GoNearLeft = styled.div`
    display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width:1220px){
   & {
       text-align: center !important;
       align-items: center !important;
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
  width: 550px;
  line-height: 70px;
  @media screen and (max-wdith:660px) {
    & {
        font-size: 25px !important;
        display: flex;
        width: auto !important;
        justify-content: center !important;
    }   
  }
`;
export const Early = styled.div`
    @media screen and (max-width:550px){
        & {
            width: auto !important;
            
        }
    }
    @media screen and (max-width:455px){
      & {
        line-height: 30px !important;
      }   
    }
`;
export const GoLetter = styled.span`
    color: #717cd6;
`;
export const GoLeftSubTitle = styled.div`
    color: rgb(255,255,255,0.55);
    z-index: 3;
    font-weight: 400;
    font-size: 20px;
    width: 550px;
    margin: 30px 0;
    /* @media screen and (max-width:1220px){
        & {
            width: 100% !important;

        }
    } */
    @media screen and (max-width:660px){
        & {
            width: auto !important;
        }
    }
`;
export const FeatureBtn = styled.div`
    color: #a1abb9;
  margin-bottom: 15px;
`;
export const GoBtns = styled.div`
    display: flex;
    @media screen and (max-width:1220px){
     & {
         justify-content: center !important;
         margin-bottom: 50px !important;
     }   
    }
    @media screen and (max-width:660px){
        & {
            flex-direction: column !important;
            align-items: center !important;
        }
    }
`;
export const GoBtn = styled.div`
    position: relative;
    width: 205px;
    height: 57px;
    font-size: 20px !important;
    font-weight: 800;
    margin-right: 10px;
    border: 1px solid white;
    color: white;
    background-color: transparent;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  cursor: pointer;
    @media screen and (max-width:660px) {
        & {
            margin: 5px 0 !important;
            width: 305px !important;
        }   
    }
    @media screen and (max-width:380px) {
        & {
            width: 280px !important;
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
export const ApplyHeader = styled.div`
    color: white;
    font-size: 60px;
    font-weight: 800;
    width: 900px;
    line-height: 70px;
    @media screen and (max-width:900px){
     & {
            font-size: 40px !important;
            width: auto !important;
            justify-content: center;
            align-items: center;
            display: flex;
     }   
    }
    @media screen and (max-width: 570px) {
        & {
            font-size: 30px !important;
        }
    }
    @media screen and (max-width: 430px) {
        & {
            font-size: 20px !important;
        }
    }
`;
export const InquireBtn = styled.div`
     position: relative;
    width: 305px;
    height: 57px;
    font-size: 20px !important;
    font-weight: 800;
    margin-right: 10px;
    cursor: pointer;
    border-radius: 10px;
    border: 1px solid white;
    color: white;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    
  @media screen and (max-width:660px){
      & {
          margin-right: 0 !important;
      }
  }
  @media screen and (max-width:380px){
   & {
       width: 280px !important;
   }   
  }
`;