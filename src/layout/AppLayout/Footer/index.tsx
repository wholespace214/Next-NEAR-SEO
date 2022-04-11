import React from "react";
import Image from "next/image";
import { useRouter } from 'next/router'
import FooterLogo from "assets/image/FooterLogo.png";
import { FaTelegramPlane } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";
import { SiTwitter } from "react-icons/si";
import {
  HomeFooterOut,
  HomeFooter,
  HomeFooterItemTitle,
  FooterTop,
  FooterTwoItem,
  FooterItem,
  FooterItemLink,
  FooterIcons,
  FooterIcon,
  FooterItemLink1,
  FooterContact,
  FooterContactLine,
  FooterItemLinkTop,
  FooterBottom,
  FooterMiddle,
} from "./Footer.style";
import Logo from "../../../assets/image/gonearlogo.png";
export default function Footer() {
  const router = useRouter();
  return (
    <HomeFooterOut>
      <HomeFooter>
        <FooterTop>
          <FooterTwoItem>
            <FooterItem>
              <HomeFooterItemTitle>
                <div onClick={() => { window.location.href = "/" }} style={{ cursor: 'pointer' }}>
                  <Image src={Logo} width={200} height={45} />
                </div>
              </HomeFooterItemTitle>
              <FooterItemLinkTop onClick={() => router.push('/about')}> About</FooterItemLinkTop>
              <br />
              <FooterItemLink onClick={() => router.push('/council')}> Council</FooterItemLink>
              <br />
              <a href="https://gonear.medium.com/">
                <FooterItemLink> Blog</FooterItemLink>
              </a>
            </FooterItem>
            <FooterItem>
              <HomeFooterItemTitle>Participate</HomeFooterItemTitle>
              <FooterItemLinkTop onClick={() => router.push('/tiers')}> Allocations & Tiers</FooterItemLinkTop>
              <br />
              <FooterItemLink onClick={() => router.push('/projects')}> Projects</FooterItemLink>
              <br />
              <a href="https://t.me/gonear_ann">
                <FooterItemLink> Get notified</FooterItemLink>
              </a>
              <br />
              <FooterItemLink onClick={() => router.push('/careers')}> Careers</FooterItemLink>
            </FooterItem>
          </FooterTwoItem>
          <FooterTwoItem>
            <FooterItem>
              <HomeFooterItemTitle>Projects</HomeFooterItemTitle>
              <a href="/ido-application" target="_blank">
                <FooterItemLinkTop> Apply for IDO</FooterItemLinkTop>
              </a>
              <br />
              <a href="https://goneario.medium.com/">
                <FooterItemLink> IDO selection process</FooterItemLink>
              </a>
              <br />
              <a href="https://docs.gonear.io/about/introduction">
                <FooterItemLink> Documentation</FooterItemLink>
              </a>
            </FooterItem>
            <FooterItem>
              <HomeFooterItemTitle>Investors</HomeFooterItemTitle>
              <FooterItemLinkTop onClick={() => router.push('/apply-to-council')}> Apply for council membership</FooterItemLinkTop>
              <br />
              <a href="/seed-inquiery" target="_blank">
                <FooterItemLink> Inquire for contribution</FooterItemLink>
              </a>
              <br />
              <a href="https://docs.gonear.io/about/introduction" target="_blank">
                <FooterItemLink> GN Token</FooterItemLink>
              </a>
            </FooterItem>
          </FooterTwoItem>
        </FooterTop>
        <FooterMiddle>
          <FooterIcons>
            <a href='https://twitter.com/goneario'><FooterIcon><SiTwitter size={20} className="footerico" /></FooterIcon></a>
            <a href='https://goneario.medium.com'><FooterIcon><BsMedium size={20} className="footerico" /></FooterIcon></a>
            <a href='https://t.me/goneario'><FooterIcon><FaTelegramPlane size={20} className="footerico" /></FooterIcon></a>
          </FooterIcons>
          <FooterContact>
            <a href="https://mailto:hello@gonear.io">
              <FooterItemLink1> hello@gonear.io</FooterItemLink1>
            </a>
            <FooterContactLine />
            <FooterItemLink1 onClick={() => router.push('/privacy-policy')}> Privacy Policy</FooterItemLink1>
          </FooterContact>
        </FooterMiddle>
        <FooterBottom>
          Copyright © 2022 Gonear. All rights reserved.
        </FooterBottom>
      </HomeFooter>
    </HomeFooterOut>
  );
}
