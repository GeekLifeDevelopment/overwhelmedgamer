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
              <h2>A podcast about video games</h2>
            </header>
            <p className='description'>
              Dive into weekly game reviews, where we explore classics from the
              backlog, delve into modern releases, and uncover the magic of
              homebrew games.
            </p>
            <div className='sub-container'>
              <div className='sub-btns'>
                <SubButton
                  icon='fa-solid fa-podcast'
                  platform='Apple Podcasts'
                  backgroundHover='#d56dfb'
                  backgroundHover2='#872ec4'
                />

                <SubButton
                  backgroundHover='#1DB954'
                  icon='fa-brands fa-spotify'
                  platform='Spotify'
                />
              </div>
              <div className='social-btns'>
                <a
                  href='https://www.facebook.com/profile.php?id=61553936004598'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i class='fa-brands fa-square-facebook'></i>
                </a>
                <a
                  href='https://www.instagram.com/overwhelmed_gamer/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i class='fa-brands fa-instagram'></i>
                </a>
                <a
                  href='https://twitter.com/OverwhelmedGame'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i class='fa-brands fa-x-twitter'></i>
                </a>
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
