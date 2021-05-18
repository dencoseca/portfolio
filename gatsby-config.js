module.exports = {
  siteMetadata: {
    title: `Leon Brown`,
    description: `Hi, I'm a developer based in the UK.`,
    author: `Leon Brown`,
    siteUrl: `https://leonbrown.dev`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Leon Brown`,
        short_name: `Leon Brown`,
        background_color: `#fff`,
        theme_color: `#1d1d1d`,
        display: `standalone`,
        icon: `${__dirname}/src/images/icon.png`,
        icon_options: {
          purpose: `any maskable`,
        },
        lang: `en`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
      __key: `images`,
    },
  ],
}
