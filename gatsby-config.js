/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Overwhlmed_Gamer`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": "M65cMHVAwBLwMRzHA9NgiyI35OO8dHUi5_S1q1PeiAk",
      "spaceId": "5d4sk1hmrihb"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-styled-components", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};