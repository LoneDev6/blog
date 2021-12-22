// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'LoneDev\'s Blog',
  tagline: '🍺Beer is good',
  url: 'https://blog.devs.beer/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'lonedev6', // Usually your GitHub org/user name.
  projectName: 'blog', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          //editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          //editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'LoneDev\'s Blog',
        logo: {
          alt: 'logo',
          src: 'img/logo.png',
        },
        items: [
          /*{
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },*/
          
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://devs.beer',
            label: 'Homepage',
            position: 'left',
            target: ''
          },
          {
            href: 'https://github.com/LoneDev6',
            label: 'GitHub',
            position: 'left',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          /*{
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },*/
          {
            title: 'More',
            items: [
              {
                label: 'Discord',
                href: 'http://a.devs.beer/blog-discord',
              },
              {
                label: 'Privacy Policy',
                href: 'https://devs.beer/privacy/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} LoneDev. <p style="color: #868686;display:inline;">Built with Docusaurus.</p>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: "dark"
      }
    }),
    plugins: [
      [
        require.resolve("@easyops-cn/docusaurus-search-local"),
        {
          // ... Your options.
          // `hashed` is recommended as long-term-cache of index file is possible.
          hashed: true,
          // For Docs using Chinese, The `language` is recommended to set to:
          // ```
          // language: ["en", "zh"],
          // ```
          // When applying `zh` in language, please install `nodejieba` in your project.
        },
      ],
    ],
};

module.exports = config;
