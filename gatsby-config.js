/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Overwhlmed Gamer`,
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
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "episodes",
        path: "./src/episodes/", // This is where your XML files will be located
      },
      __key: "episodes",
    },
    {
      resolve: "gatsby-transformer-xml",
      options: {
        typeName: "PodcastEpisodes", // This will be the GraphQL type name for your podcast episodes
      },
    },
    "gatsby-plugin-react-helmet", // Optional for managing head tags
  ],
};
