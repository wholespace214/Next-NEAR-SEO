import styled from "styled-components";

export const Gonear = styled.div`
    display: flex;
    width: 1200px;
    margin-top: 170px;
    @media screen and (max-width:1240px){
       & {
           width: 100% !important;
       } 
    }
     @media screen and (max-width:460px){
       & {
           margin-top: 100px !important;
       } 
    }
`;
export const GonearLeft = styled.div`
    margin-top: 50px;
    @media screen and (max-width:1240px) {
        &{
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
        }      
    }
`;
export const GoLeftHeader = styled.div`
        color: white;
        font-size: 60px;
        font-weight: 800;
        width:900px;
        line-height: 70px;
    @media screen and (max-width: 1240px) {
            & {
                display: flex;
                justify-content: center !important;
                width: 90% !important;
            }
    }
`;
export const Early = styled.div`
    @media screen and (max-width: 1240px) {
        & {
            text-align: center !important;
        }
    }
    @media screen and (max-width: 900px) {
        & {
            font-size: 40px !important;
            line-height: 50px !important;
        }
    }
    @media screen and (max-width: 460px) {
        & {
            font-size: 30px !important;
            line-height: 40px !important;
        }
    }
`;
export const GoLeftSubTitle = styled.div`
  color: rgb(255,255,255,0.55);
  font-weight: 400;
  font-size: 20px;
  width: 650px;
  margin: 30px 0;
    @media screen and (max-width: 1240px) {
        & {
            width: 700px !important;
            text-align: center !important;
        }
    }
    @media screen and (max-width: 900px) {
        & {
            width: 500px !important;
        }
    }
    @media screen and (max-width: 510px) {
        & {
            width: 90% !important;
            font-size: 16px !important;
        }
    }
`;
export const AllBlue = styled.span`
    color: #717cd6;
    cursor: pointer;
`;