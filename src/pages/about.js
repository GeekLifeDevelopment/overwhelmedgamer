import React from "react";
import Styles from "./about.styled";
import Layout from "../Layout";
import Inner from "../components/inner/inner";
import ContactForm from "../components/contact-form/contactForm";

const AboutPage = () => {
  return (
    <Layout>
      <Styles>
        <Inner>
        <div className='content-container inner'>
          <h1>About Overwhelmed Gamer</h1>
          <p>
            Welcome to the Overwhelmed Gamer, where we dive into the world of
            video games, covering everything from modern releases to classic
            gems and even the hidden treasures of homebrew creations. Our
            mission is to bring you insightful reviews, the latest gaming news,
            and a weekly roundup of our game pickups, all delivered with a
            satirical twist and a few drinks!
          </p>
          <h2>Who am I?</h2>
          <h3>Meet the host</h3>
          <h4>Jason Sorenson</h4>
          <p>
            Iv'e been a long time video game fan since I can remember. My first
            home console was Atari 2600, followed by Colecovision before moving
            into NES days.
          </p>
          <p>
            I have owned just about every console up to around the middle of the
            PS2's life. I had a large gap of not playing until about two years
            ago when I finally jumped in and purchased a PS4 already at the end
            of it's life. Less then a year later the PS5 became more readily
            available. As you can imagine my backlog of games to go back and try
            is HUGE. Hence the name for the podcast. Overwhelmed Gamer.
          </p>
          <h2>What to excpect</h2>
          <h3>Game Reviews</h3>
          <p>
            Each week myself and a guest review a wide array of games. From
            classic retro, modern, arcade, games from my backlog and even
            homebrews.
          </p>
          <h3>Gaming News</h3>
          <p>I give my take on the lastest gaming news each week.</p>
          <h3>Game Pickups</h3>
          <p>
            I love to thrift for games! Each week we will talk about game
            pickups if there were any that week or discuss past pick ups that I
            happened to come across.
          </p>
          <h2>Connect with us</h2>
          <p>
            We love engaging with our community! Connect with us on social
            media, Share your thoughts, questions, and game recommendations.
            Your feedback is invaluable, and we're always thrilled to hear from
            fellow gamers.
          </p>
        </div>
        </Inner>
        <ContactForm/>
      </Styles>
      
    </Layout>
  );
};

export default AboutPage;
