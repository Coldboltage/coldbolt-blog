module.exports = {
  siteMetadata: {
    title: `Alan Reid's wee blog`,
    description: `This website houses all the thoughts of Alan Reid and the prep for his new work he'll do in the future`,
    author: `@itscoldbolt`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon/android-chrome-512x512.png`, // This path is relative to the root of the site.
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown-pages`,
        name: `markdown-pages`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              withWebp: true,
              tracedSVG: true,
              wrapperStyle: "margin: 20px"
            }
          },
        ]
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google2: [
            {
              family: `Cardo`,
            }
          ]
        }
      }
    },
    // Adding WordPress stuff here. 11/08/2021
    // Decided to comment out wordpress stuff for now. Will migrate another time
    // {
    //   resolve: "gatsby-source-wordpress",
    //   options: {
    //     url: "https://coldboltseobackup.com/graphql",
    //     schema: {
    //       requestConcurrency: 4,
    //       timeout: 240000,
    //       perPage: 20,
    //       previewRequestConcurrency: 2
    //     }
    //   },
    // },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "SpaceX",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "spacex",
        // Url to query from
        url: "https://api.spacex.land/graphql/",
      },
    },
    {
      resolve: 'gatsby-plugin-graphql-image',
      options: {
        schemaName: "SpaceX",
        imageFieldName: "image",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
