import React from "react";
import Footer from "./include/Footer";
import Header from "./include/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
