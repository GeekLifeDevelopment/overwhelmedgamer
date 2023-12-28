import React from "react";
import Layout from "../Layout";
import Styles from "./index.styled";
import Logo from "../images/web-logo.png";
import { SEO } from "../components/seo";
import SubButton from "../components/subscribeButton/subButton";

const HomePage = () => {
  return (
    <Layout>
      <Styles>
        <section className='hero-section'>
          <div className='left-content-container'>
            <header className='podcast-heading'>
              <h2>Just another gaming podcast.</h2>
            </header>
            <p className='description'>
              My backlog is bigger than your backlog. Let's have some drinks and
              talk about it. Oh yea I have a podcast and like to stream
              home-brew video games.
            </p>
            <div className='sub-container'>
              <div className='sub-btns'>
                <SubButton
                  icon='fa-solid fa-podcast'
                  platform='Apple Podcasts'
                  backgroundHover='#d56dfb'
                  backgroundHover2='#872ec4'
                  to='https://podcasts.apple.com/us/podcast/overwhelmed-gamer/id1717549866'
                />

                <SubButton
                  backgroundHover='#1DB954'
                  icon='fa-brands fa-spotify'
                  platform='Spotify'
                  to='https://open.spotify.com/show/2QjYq0AzmWPuqLz6kTZIht'
                />
              </div>
            </div>
          </div>
          <div className='right-content-container'>
            <header className='page-heading'>
              <h1>
                <span className='the'>The</span>Overwelmed Gamer
              </h1>
            </header>
            <div className='logo-container'>
              <img src={Logo} alt='Overwhelemed Gamer Podcast' />
            </div>
          </div>
        </section>
      </Styles>
    </Layout>
  );
};

export default HomePage;

export const Head = () => <SEO />;
