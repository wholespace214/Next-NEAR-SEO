import styled from "styled-components";

export const GalaxyHeader = styled.div`
    width: 1200px;
    justify-content: space-between;
    display: flex;
    position: relative;
    margin: 30px 0 50px 0;
    @media screen and (max-width:1220px){
        & {
            width: 100% !important;
            flex-direction: column !important;
            align-items: center !important;
        }
    }
`;
export const HeaderLeft = styled.div`
h2,h3{
    color: white;
    margin-left: 20px;
    text-transform: capitalize;
}
li{
    color: white;
    font-size: 16px;
}
p{
    color: white;
    font-size: 16px;
    margin-left: 20px;
}
.ant-tabs-mobile, .ant-tabs{
    overflow: visible !important;
}
.ant-tabs-tab-btn{
    font-size: 16px !important;
    color: grey!important;
     :focus {
        color: white;
    }
    :hover{
       color:white !important;
   }
}
.ant-tabs-tab-active .ant-tabs-tab-btn{
    color: white!important;
}
.ant-tabs-nav{
    position: sticky !important;
    background-color: #202124 !important;
    top: 70px !important;
}
.ant-tabs-ink-bar {
  height: 2px;
  background: white !important;
}
@media screen and (max-width:1220px) {
    & {
        width: 90% !important;
    }
}

`;
export const HeaderRight = styled.div`
    width: 400px;
    min-width: 400px;
    background-color: #171b26;
    overflow: hidden;
    height: 500px;
    min-height: 500px;
    border-radius: 10px;
    border: 1px solid #A1ABB9;
    margin-left: 30px;
    margin-top: 130px;
    position: sticky;
    top:130px;
    bottom: 130px;
    padding: 30px 0;
    @media screen and (max-width:1220px){
        & {
            position: relative !important;
            margin: 50px 0 !important;
            padding-left: 0 m !important;
            top: 0 !important;
            bottom: 0 !important;
        }
    }
    @media screen and (max-width:440px){
        & {
            width:90% !important;
            min-width: 300px !important;
        }
    }
`;
export const LogoPart = styled.div`
    display: flex;
    @media screen and (max-width:550px){
        &{
            margin-top: 20px;
        }
    }
`;
export const LogoTitle = styled.div`
    line-height: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 20px;
`;
export const MainTitle = styled.div`
    color: white;
    font-size: 40px;
    font-weight: 800;
`;
export const MainTitle1 = styled.div`
    color: white;
    font-size: 40px;
    font-weight: 800;
    margin-left: 20px;
`;
export const MainSubTitle = styled.div`
    color:#A1ABB9;
    margin-top: 20px;
    font-size: 18px;
`;
export const TokenImgTag = styled.div`
    margin: 50px 0;
`;
export const HightLight = styled.div`
    color: #A1ABB9;
    letter-spacing: 10px;
    font-size: 20px;
    margin: 20px 0 10px 20px;
`;
export const HightSub = styled.div`
    color: white;
    font-size: 19px;
    font-weight: 400;
`;
export const ULDiv = styled.ul`
    margin-left: 10px;
`;
export const ProductDiv = styled.div`
     color: white;
     font-weight: 800;
     font-size: 40px;
     margin-left: 30px;
     line-height: 40px;
`;
export const HightLightProduct = styled.div`
    color: #A1ABB9;
    letter-spacing: 10px;
    font-size: 20px;
    margin: 70px 0 10px 20px;
`;
export const HightSubGalaxy = styled.div`
     color: white;
    font-size: 19px;
    font-weight: 400;
    margin: 20px 0 20px 30px;
`;
export const RTitleLetter = styled.div`
    color: #A1ABB9;
    margin-left: 20px;
`;
export const Allo = styled.div`
    display: flex;
    margin: 20px 20px 0 20px;
    justify-content: space-between;
`;
export const Allo1 = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 20px;
`;
export const AlloRight = styled.div`
    color: white;
    font-size: 17px;
`;
export const AlloLeft = styled.div`
    color: #A1ABB9;
    font-size: 17px;
`;
export const AppBtn = styled.div`
    /* width: 100%; */   
    height: 57px;
    border: none;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    color: #fff;
    font-size: 17px;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
    border: 1px solid white;
`;
export const Howto = styled.div`
    color: white;
    text-align: center;
    margin-top: 20px;
    cursor: pointer;
    :hover{
        text-decoration: underline;
    }
`;
export const Timeline = styled.div`
    height: 120px;
    margin-top: 80px;
    padding-top: 10px;
    background-color: #303136;
`;
export const Sale = styled.div`
    color: #A1ABB9;
    text-align: center;
    letter-spacing: 5px;
    font-size: 13px;
`;
export const Times = styled.div`
    display: flex;
    justify-content: center;
`;
export const Item = styled.div`
    text-align: center;
`;
export const NumItem = styled.div`
    color: white;
    font-size: 30px;
    font-weight: 800;
`;
export const Day = styled.div`
    color: #A1ABB9;
    font-size: 13px;
`;
export const Dot = styled.div`
    color: #A1ABB9;
    margin-top: 13px;
    margin: 13px 25px 0 25px;
    @media screen and (max-width:400px){
        & {
            margin-top:13px !important;
            margin-left: 4vw !important;
            margin-right: 4vw !important;
        }
    }
`;
export const TokenSale = styled.div`
    margin: 30px 0;
    border-radius: 10px;
    overflow: hidden;
    border-top: 1px solid #A1ABB9;
    border-left: 1px solid #A1ABB9;
    border-right: 1px solid #A1ABB9;
`;
export const SaleItemHeader = styled.div`
    border-bottom: 1px solid #A1ABB9;
    height: 50px;
    background-color: #303136;
    display: flex;
    align-items: center;
    padding-left: 20px;
    color: #A1ABB9;
`;
export const SaleItem = styled.div`
    border-bottom: 1px solid #A1ABB9;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
`;
export const SaleItemLeft = styled.div`
    color: #A1ABB9;
    font-size: 16px;
`;
export const SaleItemRight = styled.div`
    color: #A1ABB9;
    font-size: 16px;
    text-align: right;
`;