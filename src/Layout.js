import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import MainNav from "./components/mainNav/MainNav";
import Footer from "./components/footer/Footer";

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainNav />
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
