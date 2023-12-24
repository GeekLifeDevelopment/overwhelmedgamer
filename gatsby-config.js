/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Overwhlmed_Gamer`,
    siteUrl: `https://www.overwhelmedgamer.show`,
    description: `Overwhelmed Gamer Podcast Web Site`,
    twitterUsername: `@OverwhelmedGame`,
    image: `/web-logo.png`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
