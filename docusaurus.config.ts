import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// Import plugins from an external file
import { plugins } from './plugins';

const config: Config = {
  title: 'VUI Simplify Your Velero Backups Management',
  tagline: 'Your all-in-one dashboard for Velero backups',
  favicon: 'img/favicon.svg',

  // Set the production url of your site here
  url: 'https://vui.seriohub.com/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'seriohub', // Usually your GitHub org/user name.
  projectName: 'velero-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  trailingSlash: false,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: plugins,

  presets: [
    [
      //'classic',
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: null, //'https://github.com/seriohub/velero-docs/blob/main/',
          path: 'docs',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        /*blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/seriohub/velero-docs/blob/main/',
        },*/
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/vui-social-card.png',
    navbar: {
      title: 'VUI',
      logo: {
        alt: 'VUI Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        { to: '/releases/releases', label: 'What\'s New', position: 'left' },
        { to: '/community/contribution', label: 'Community', position: 'left' },
        { to: '/sponsors/sponsors', label: 'Sponsors', position: 'left' },
        { to: '/contacts/contacts', label: 'Contacts', position: 'left' },
        {
          href: 'https://github.com/orgs/seriohub/repositories',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            {
              label: 'Introduction',
              to: '/docs/intro',
            },
            {
              label: 'Installation',
              to: '/docs/getting-started/helm-installation',
            },
          ],
        },
        /*{
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },*/
        {
          title: 'Github',
          items: [
            /*{
              label: 'Blog',
              to: '/blog',
            },*/
            {
              label: 'Helm',
              href: 'https://github.com/seriohub/velero-helm',
            },
            {
              label: 'API',
              href: 'https://github.com/seriohub/velero-api',
            },
            {
              label: 'Watchdog',
              href: 'https://github.com/seriohub/velero-watchdog',
            },
            {
              label: 'UI',
              href: 'https://github.com/seriohub/velero-ui',
            },

            {
              label: 'Docs',
              href: 'https://github.com/seriohub/velero-docs',
            },
          ],
        },
        {
          title: 'Contact',
          items: [
            {
              label: 'info@seriohub.com',
              href: 'mailto:info@seriohub.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SerioHub. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    matomo: {
      matomoUrl: 'https://matomo.serio.cloud/',
      siteId: '3',
    },
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */

    /*announcementBar: {
      id: 'test',
      content:
        'test',
      backgroundColor: '#20232a',
      textColor: '#fff',
      isCloseable: false,
    },*/
    
  } satisfies Preset.ThemeConfig,

};

export default config;
