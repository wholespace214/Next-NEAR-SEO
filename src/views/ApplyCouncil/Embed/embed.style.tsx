import styled from "styled-components";

export const IntroduceContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const IntroduceSection = styled.div`
  /* min-height: 30vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 1000px;
  margin: 100px 0;
  @media screen and (max-width:1030px){
    width: 95% !important;
  }
`;