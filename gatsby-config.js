module.exports = {
  siteMetadata: {
    title: "My_Portfolio_Site",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-source-filesystem`,
  ],
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
  ],
};
