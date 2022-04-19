import styled from "styled-components";

export const GalaxyHeader = styled.div`
    width: 100%;
    height:50px; 
    margin-top: 120px;
    display: flex;
    justify-content: space-between;
    width: 1200px;
    display: flex;
    align-items: center;
    @media screen and (max-width:1200px){
        &{
            width:100% !important;
        }
    }
    @media screen and (max-width:550px){
        & {
            height: auto !important;
        }
    }
`;
export const Slash = styled.div`
    color: #A1ABB9;
    cursor: pointer;
`;
export const HeaderLeft = styled.div`
    display: flex;
    margin-left: 30px;
    @media screen and (max-width:850px){
        & {
            display: none !important;
        }
    }
`;
export const HeaderRight = styled.div`
    display: flex;
    margin-right: 10px;
    @media screen and (max-width:850px){
        &{
            width: 100% !important;
            justify-content: space-between !important;
            margin-left: 10px !important;
        }
    }
    @media screen and (max-width:550px){
        & {
            flex-direction: column !important;
            align-items: center !important;
        }
    }
`;
export const PathText = styled.div`
    color: #A1ABB9;
    cursor: pointer;
    transition: all 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    :hover{
        text-decoration: underline;
    }
    @media screen and (max-width:550px){
         & {
            text-align: center !important;
         }
    }
`;
export const WhiteText = styled.span`
    color: white;
    transition: all 0.3s;
    :hover{
        text-decoration: underline;
    }
`;
export const ComingBtn = styled.div`
    width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 800;
    height: 30px;
    background-color: white;
    border-radius: 10px;
    font-size: 13px;
    margin-left: 30px;
    @media screen and (max-width:550px){
      & {
          margin-top: 10px;
      }   
    }
`;