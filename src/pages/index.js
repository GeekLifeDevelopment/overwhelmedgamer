import React from "react";
import Layout from "../Layout";
import Styles from "./index.styled";
import Logo from "../images/web-logo.png";

const HomePage = () => {
  return (
    <Layout>
      <Styles>
        <h1>Here is my heading</h1>
        <img src={Logo} />
      </Styles>
    </Layout>
  );
};

export default HomePage;
