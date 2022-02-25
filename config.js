const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://javascript.ac',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://cdn.svgporn.com/logos/javascript.svg',
    logoLink: 'https://javascript.ac',
    title:
      "<a href='https://javascript.ac/'>Javascript</a>",
    githubUrl: 'https://github.com/sundoforce/javascript',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="https://www.facebook.com/groups/gcpkr" target="_blank" rel="facebook">
		      <div class="twitterBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Facebook'}/>
		      </div>
		    </a>
		  </li>
			<li>
		    <a href="https://www.facebook.com/groups/azurekr" target="_blank" rel="facebook">
		      <div class="discordBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/discord-brands-block.svg' alt={'FaceBook'}/>
		      </div>
		    </a>
		  </li>`,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/data-structures', // add trailing slash if enabled above
      '/algorithm',
      '/problem-solving',
      '/react',
    ],
    collapsedNav: [
      '/data-structures', // add trailing slash if enabled above
      '/algorithm', // add trailing slash if enabled above
      '/problem-solving', // add trailing slash if enabled above
    ],
    links: [{ text: 'Amazon Group', link: 'https://www.facebook.com/groups/awskr'},
            { text: 'Azure Group', link: 'https://www.facebook.com/groups/azurekr' },
            { text: 'GCP Group', link: 'https://www.facebook.com/groups/gcpkr'},
            { text: 'Terraform Group', link: 'https://www.facebook.com/groups/terraform'}],
    frontline: false,
    ignoreIndex: true,
    title:
      "<a href='https://cloud.sdk.xyz'>cloud</a><div class='greenCircle'></div><a href='https://javascript.ac'>Javascript</a>",
  },
  siteMetadata: {
    title: 'Cloud | sdk',
    description: 'Documentation built with mdx. Powering https://sdk.xyz',
    ogImage: null,
    docsLocation: 'https://github.com/sundoforce/javascript/tree/master/content',
    favicon: 'https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Cloud',
      short_name: 'Cloud',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
