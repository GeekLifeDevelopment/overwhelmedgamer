import React from "react";
import Layout from "../Layout";
import Styles from "./episodes.styled";
import Podcasts from "../components/podcasts/Podcasts";

const EpisodePage = () => {
  return (
    <Layout>
      <Styles>
        <div className='inner'>
          <h1>Episodes</h1>
          <Podcasts />
        </div>
      </Styles>
    </Layout>
  );
};

export default EpisodePage;
