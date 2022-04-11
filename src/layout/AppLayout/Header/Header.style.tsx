import styled from "styled-components";

export const HomeHeader = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 3;
  background-color:  #202124;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
export const HomeHeaderLeft = styled.div`
  display: flex;
  align-items: center;
  margin: 0 30px;
  position: relative;
`;

export const HomeHeaderText = styled.div`
  position: relative;
  font-size: 15px;
  line-height: 2rem;
  margin-right: 25px;
  color: #a1abb9;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #717CD6;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
  }
  :hover::before {
    visibility: visible;
    transform: scaleX(1);
  }
  :hover {
    color: white;
  }
  @media screen and (max-width: 902px) {
    & {
      display: none !important;
    }
  }
  .subMenu {
    position: relative;
  }
`;
export const TokenModal = styled.div`
  position: absolute;
  background-color: rgba(50, 50, 50, 0.8);
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 10px;
  /* padding: 0.5rem; */
  border-radius: 10px;
  width: 150px;
  top: 35px;
  grid-gap: 10px;
  * {
    color: white;
    font-weight: 600;
    padding: 5px 0;
  }
  @media screen and (max-width: 902px) {
    background-color: transparent;
  }
`;
export const CompanyModal = styled.div`
  position: absolute;
  background-color: rgba(50, 50, 50, 0.8);
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 10px;
  /* padding: 0.5rem; */
  border-radius: 10px;
  width: 150px;
  top: 35px;
  grid-gap: 10px;
  * {
    color: white;
    font-weight: 600;
    padding: 5px 0;
  }
  @media screen and (max-width: 902px) {
    background-color: transparent;
  }
`;
export const SubHeaderText = styled.div`
.newWindow{
  margin-right:10px;
  height:41px;
  *{stroke: #a1abb9 !important;}
}
  font-size: 15px;
  color: #93a2b6;
  display: flex;
  padding-left: 10px;
  align-items: center;
  cursor: pointer;

  :hover {
    background-color: rgba(100, 100, 100, 0.5);
    border-radius: 3px;
  }
`;
export const ResponsiveBar = styled.div`
  display: none;
  @media screen and (max-width: 902px) {
    & {
      display: flex !important;
    }
  }
`;
export const ResChannel = styled.div`
  font-size: 28px;
  transition: all 0.3s;
  width: 100%;
  top: 70px;
  position: fixed;
  z-index: 2;
  background-color:  #202124;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 20px 0;
  @media screen and (min-width: 902px) {
    & {
      display: none !important;
    }
  }
`;
export const HeaderTabRes = styled.div`
  width: 200px;
  font-size: 25px;
  line-height: 1.25rem;
  margin-bottom: 30px;
  color: #a1abb9;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
`;
export const ConnectWalletRes = styled.div`
    width: 170px;
    height: 50px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    outline: none;
    color: #fff;
    font-size: 17px;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 5px;
    border: 1px solid #a1abb9;
`;
export const ResChannelBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
export const ConnectWalletBtn = styled.div`
    width: 120px;
    height: 38px;
    border: none;
    margin: 10px;
    outline: none;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 5px;
    border: 1px solid #a1abb9;
  @media screen and (max-width: 902px) {
    & {
      display: none !important;
    }
  }
`;
export const IconContainer = styled.i`
  class: ${(props) => props.className};
`;
