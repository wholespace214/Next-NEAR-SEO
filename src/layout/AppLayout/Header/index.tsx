import React, { useState, useEffect, useRef } from "react";
import { useRouter } from 'next/router'
import Image from "next/image";
import {
  HomeHeader,
  HomeHeaderLeft,
  HomeHeaderText,
  ConnectWalletBtn,
  ResponsiveBar,
  ResChannel,
  ResChannelBody,
  ConnectWalletRes,
  HeaderTabRes,
  IconContainer,
  TokenModal,
  SubHeaderText,
  CompanyModal,
} from "./Header.style";
import LogoIcon from "../../../assets/image/gonearlogo.png";
import { GrNewWindow } from "react-icons/gr";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
export default function Header() {
  const router = useRouter();
  const [resflag, setResflag] = useState(false);
  const [show_token, setShowToken] = useState(false);
  const [show_company, setShowCompany] = useState(false);
  const [gntokenArrow, setGntokenArrow] = useState(false);
  const [companyArrow, setCompanyArrow] = useState(false);
  const dropMenuRef = useRef(null);
  const handleClickOutside = (e) => {
    //@ts-ignore
    if (dropMenuRef.current && dropMenuRef.current.contains(e.target)) {  //&& dropMenuRef.current.contains(e.target)
      return;
    }
    setShowToken(false);
    setShowCompany(false);
  };
  useEffect(() => {
    if (show_token || show_company) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show_token, show_company]);

  return (
    <>
      <HomeHeader>
        <HomeHeaderLeft>
          <div onClick={() => { window.location.href = "/" }} style={{ marginRight: "70px", cursor: 'pointer' }}>
            <Image src={LogoIcon} width={140} height={30} />
            {/* <LogoIcon /> */}
          </div>
          <HomeHeaderText onClick={() => router.push('/projects')}>Projects</HomeHeaderText>
          <HomeHeaderText onClick={() => router.push('/tiers')}>Tiers</HomeHeaderText>
          <HomeHeaderText onClick={() => router.push('/apply-to-council')}>Stake</HomeHeaderText>
          <HomeHeaderText
            className="subMenu"
            onClick={() => {
              setShowToken(!show_token);
              setShowCompany(false);
            }}
          >
            GN Token {show_token ? <IoMdArrowDropup className="hearderArrow" /> : <IoMdArrowDropdown className="hearderArrow" />}
            {show_token && (
              <TokenModal ref={dropMenuRef}>
                <a href="/ido-application" target="_blank">
                  <SubHeaderText>
                    <div className="newWindow"><GrNewWindow size={30} /></div>Purchase
                  </SubHeaderText>
                </a>
                <a href="/seed-inquiery" target="_blank">
                  <SubHeaderText><div className="newWindow"><GrNewWindow color="#a1abb9" size={30} /></div>Economics</SubHeaderText>
                </a>
                <a href="/singleproject" target="_blank">
                  <SubHeaderText><div className="newWindow"><GrNewWindow color="#a1abb9" size={30} /></div>Utility</SubHeaderText>
                </a>
              </TokenModal>
            )}
          </HomeHeaderText>
          <HomeHeaderText
            className="subMenu"
            onClick={() => {
              setShowToken(false);
              setShowCompany(!show_company);
            }}
          >
            Company {show_company ?
              <IoMdArrowDropup className="hearderArrow" /> :
              <IoMdArrowDropdown className="hearderArrow" />}
            {show_company && (
              <CompanyModal ref={dropMenuRef}>
                <SubHeaderText onClick={() => router.push('/about')}>About</SubHeaderText>
                <SubHeaderText onClick={() => router.push('/council')}>The Council</SubHeaderText>
                <SubHeaderText onClick={() => router.push('/careers')}>Careers</SubHeaderText>
              </CompanyModal>
            )}
          </HomeHeaderText>
        </HomeHeaderLeft>
        <HomeHeaderLeft>
          <ResponsiveBar onClick={() => setResflag(!resflag)}>
            <IconContainer className="fa fa-reorder" />
          </ResponsiveBar>
          <ConnectWalletBtn >Connect wallet</ConnectWalletBtn>
        </HomeHeaderLeft>
      </HomeHeader>
      {resflag === true && (
        <ResChannel>
          <ResChannelBody>
            <HeaderTabRes onClick={() => router.push('/projects')}>Projects</HeaderTabRes>
            <HeaderTabRes onClick={() => router.push('/tiers')}>Tiers</HeaderTabRes>
            <HeaderTabRes onClick={() => router.push('/apply-to-council')}>Stake</HeaderTabRes>
            <HeaderTabRes
              onClick={() => {
                setShowToken(!show_token);
                setShowCompany(false);
              }}
            >
              GN Token {show_token ? <IoMdArrowDropup className="hearderArrow" /> : <IoMdArrowDropdown className="hearderArrow" />}
            </HeaderTabRes>
            {show_token && (
              <>
                <a href="/ido-application" target="_blank">
                  <HeaderTabRes>Purchase</HeaderTabRes>
                </a>
                <a href="/seed-inquiery" target="_blank">
                  <HeaderTabRes>Economics</HeaderTabRes>
                </a>
                <a href="/singleproject" target="_blank">
                  <HeaderTabRes>Utility</HeaderTabRes>
                </a>
              </>
            )}
            <HeaderTabRes
              onClick={() => {
                setShowToken(false);
                setShowCompany(!show_company);
              }}
            >
              Company {show_company ?
                <IoMdArrowDropup className="hearderArrow" /> :
                <IoMdArrowDropdown className="hearderArrow" />}
            </HeaderTabRes>
            {show_company && (
              <>
                <HeaderTabRes onClick={() => router.push('/about')}>About</HeaderTabRes>
                <HeaderTabRes onClick={() => router.push('/council')}>The Council</HeaderTabRes>
                <HeaderTabRes onClick={() => router.push('/careers')}>Careers</HeaderTabRes>
              </>
            )}
            <ConnectWalletRes >Connect wallet</ConnectWalletRes>
          </ResChannelBody>
        </ResChannel>
      )}
    </>
  );
}
