import React, { ReactNode } from "react";
// layout
import Header from "./Header";
import Footer from "./Footer";
// styled components
import { LayoutWrapper } from "./AppLayout.style";
// -----------------------------------------------------------

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      {children}
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;
