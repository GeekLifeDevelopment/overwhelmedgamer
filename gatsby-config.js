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
    // {
    //   resolve: "gatsby-source-contentful",
    //   options: {
    //     accessToken: "asqh3IHo_BQlRUtj0uJ8YWjhOgogJwoPybWE4jbxEsU",
    //     spaceId: "5d4sk1hmrihb",
    //   },
    // },
    // "gatsby-plugin-image",
    // "gatsby-plugin-sharp",
    // "gatsby-transformer-sharp",
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
