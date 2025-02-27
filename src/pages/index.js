import React from "react";
import Layout from "../Layout";
import Styles from "./index.styled";
import Logo from "../images/web-logo.png";
import { SEO } from "../components/seo";
import SubButton from "../components/subscribeButton/subButton";
import LatestEpisode from "../components/latestEpisode/latest-episode";
import Inner from "../components/inner/inner";
import ScrollArrow from "../components/scrollArrow/scrollArrow";
import ContactForm from "../components/contact-form/contactForm";

const HomePage = () => {
  return (
    <Layout>
      <Styles>
        <section className="hero-section">
          <Inner>
            <div className="logo-container">
              <img src={Logo} alt="Overwhelemed Gamer Podcast" />
              <p className="description">
                🎮 Retro & Homebrew Gaming Aficionado | Dive into the classics
                and discover new gems with me! 🕹️
              </p>
            </div>

            {/* <div className="social-branding">
              <SubButton
                icon="fa-brands fa-youtube"
                platform="@overwhelmed-gamer"
                listen={false}
                backgroundHover="#FF0000"
                backgroundHover2="#FFFFFF"
                to="https://www.youtube.com/@overwhelmed-gamer"
              />
              <SubButton
                icon="fa-brands fa-x-twitter"
                platform="@OverwhelmedGame"
                listen={false}
                backgroundHover="#000000"
                backgroundHover2="#FFFFFF"
                to="https://x.com/OverwhelmedGame"
              />
              <SubButton
                icon="fa-brands fa-twitch"
                platform="@TheOverwhelmedGamer"
                listen={false}
                backgroundHover="#6441a5"
                backgroundHover2="#f1f1f1"
                to="https://www.twitch.tv/theoverwhelmedgamer"
              />
              <SubButton
                icon="fa-brands fa-tiktok"
                platform="@overwhelmed.gamer"
                listen={false}
                backgroundHover="#fe2858"
                backgroundHover2="#2af0ea"
                to="https://www.tiktok.com/@overwhelmed.gamer"
              />
            </div> */}

            {/* <LatestEpisode />
            <div className='sub-container'>
              <div className='sub-btns'>
                <SubButton
                  icon='fa-solid fa-podcast'
                  platform='Apple Podcasts'
                  backgroundHover='#d56dfb'
                  backgroundHover2='#872ec4'
                  to='https://podcasts.apple.com/us/podcast/overwhelmed-gamer/id1752872724'
                />

                <SubButton
                  backgroundHover='#1DB954'
                  icon='fa-brands fa-spotify'
                  platform='Spotify'
                  to='https://open.spotify.com/show/2QjYq0AzmWPuqLz6kTZIht'
                />
              </div>
            </div>

            <header className='page-heading'>
              <h1>
                <span className='the'>The</span>Overwelmed Gamer
              </h1>
            </header> */}

            <ScrollArrow />
          </Inner>
        </section>
      </Styles>

      <LatestEpisode />

      <ContactForm/>

      
      
    </Layout>
  );
};

export default HomePage;

export const Head = () => <SEO />;
