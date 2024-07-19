import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import MainNav from "./components/mainNav/MainNav";
import Footer from "./components/footer/Footer";
import { Helmet } from "react";

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        {`
          function loadScript(a) {
            var b = document.getElementsByTagName("head")[0],
              c = document.createElement("script");
            c.type = "text/javascript";
            c.src = "https://tracker.metricool.com/resources/be.js";
            c.onreadystatechange = a;
            c.onload = a;
            b.appendChild(c);
          }
          loadScript(function() {
            beTracker.t({ hash: "5072ba0c61061951d87eb34665ca5e4e" });
          });
        `}
      </Helmet>
      <GlobalStyles />
      <MainNav />
      <main style={{ minHeight: "100vh" }}>{children}</main>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
