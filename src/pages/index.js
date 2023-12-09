import React from "react";
import Layout from "../Layout";
import Styles from "./index.styled";
import Logo from "../images/web-logo.png";
import { SEO } from "../components/seo";

const HomePage = () => {
  return (
    <Layout>
      <Styles>
        <h1>Here is my heading</h1>
        <img src={Logo} alt='Overwhelmed Gamer Logo' />
      </Styles>
    </Layout>
  );
};

export default HomePage;

export const Head = () => <SEO />;
