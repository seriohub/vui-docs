import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const config: Config = {
  title: 'VUI Simplify Your Velero Backups Management',
  tagline: 'Your all-in-one dashboard for Velero backups',
  favicon: 'img/favicon.ico',

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

  plugins: [
    'docusaurus-plugin-matomo',
    [
      "docusaurus-plugin-remote-content",
      {
        // options here
        name: "helm-changelog", // used by CLI, must be path safe
        sourceBaseUrl: "https://raw.githubusercontent.com/seriohub/velero-helm/main/", // the base url for the markdown (gets prepended to all of the documents when fetching)
        outDir: "docs/20-guide/50-changelog", // the base directory to output to.
        documents: ["CHANGELOG.md"], // the file names to download
        modifyContent(filename, content) {
          // This is used to update a specific document. You can add more complexity here for many documents.
          //if (filename.includes("Post-Intent-System")) {
          return {
            // Match this to the name but with .md (the new file)
            filename: "01-helm.md",
            // Here we update to add a title to the page.
            // The content item contains all of the markdown from the file
            content: `---
sidebar_label: 'Helm'
sidebar_position: 1
description: HELM changelog
custom_edit_url: https://github.com/seriohub/velero-helm/blob/main/CHANGELOG.md
---
${content}`,
          };
          //}
          // we don't want to modify this item, since it doesn't contain "README" in the name
          //return undefined;
        },
      },
    ],
    [
      "docusaurus-plugin-remote-content",
      {
        // options here
        name: "api-changelog", // used by CLI, must be path safe
        sourceBaseUrl: "https://raw.githubusercontent.com/seriohub/velero-api/main/", // the base url for the markdown (gets prepended to all of the documents when fetching)
        outDir: "docs/20-guide/50-changelog", // the base directory to output to.
        documents: ["CHANGELOG.md"], // the file names to download
        modifyContent(filename, content) {
          // This is used to update a specific document. You can add more complexity here for many documents.
          //if (filename.includes("Post-Intent-System")) {
          return {
            // Match this to the name but with .md (the new file)
            filename: "02-api.md",
            // Here we update to add a title to the page.
            // The content item contains all of the markdown from the file
            content: `---
sidebar_label: 'API'
sidebar_position: 2
description: API changelog
custom_edit_url: https://github.com/seriohub/velero-api/blob/main/CHANGELOG.md
---
${content}`,
          };
          //}
          // we don't want to modify this item, since it doesn't contain "README" in the name
          //return undefined;
        },
      },
    ],
    [
      "docusaurus-plugin-remote-content",
      {
        // options here
        name: "ui-changelog", // used by CLI, must be path safe
        sourceBaseUrl: "https://raw.githubusercontent.com/seriohub/velero-ui/main/", // the base url for the markdown (gets prepended to all of the documents when fetching)
        outDir: "docs/20-guide/50-changelog", // the base directory to output to.
        documents: ["CHANGELOG.md"], // the file names to download
        modifyContent(filename, content) {
          // This is used to update a specific document. You can add more complexity here for many documents.
          //if (filename.includes("Post-Intent-System")) {
          return {
            // Match this to the name but with .md (the new file)
            filename: "03-ui.md",
            // Here we update to add a title to the page.
            // The content item contains all of the markdown from the file
            content: `---
sidebar_label: 'UI'
sidebar_position: 3
description: UI changelog
custom_edit_url: https://github.com/seriohub/velero-ui/blob/main/CHANGELOG.md
---
${content}`,
          };
          //}
          // we don't want to modify this item, since it doesn't contain "README" in the name
          //return undefined;
        },
      },
    ],
    [
      "docusaurus-plugin-remote-content",
      {
        // options here
        name: "watchdog-changelog", // used by CLI, must be path safe
        sourceBaseUrl: "https://raw.githubusercontent.com/seriohub/velero-watchdog/main/", // the base url for the markdown (gets prepended to all of the documents when fetching)
        outDir: "docs/20-guide/50-changelog", // the base directory to output to.
        documents: ["CHANGELOG.md"], // the file names to download
        modifyContent(filename, content) {
          // This is used to update a specific document. You can add more complexity here for many documents.
          //if (filename.includes("Post-Intent-System")) {
          return {
            // Match this to the name but with .md (the new file)
            filename: "04-watchdog.md",
            // Here we update to add a title to the page.
            // The content item contains all of the markdown from the file
            content: `---
sidebar_label: 'Watchdog'
sidebar_position: 4
description: Watchdog changelog
custom_edit_url: https://github.com/seriohub/velero-watchdog/blob/main/CHANGELOG.md
---
${content}`,
          };
          //}
          // we don't want to modify this item, since it doesn't contain "README" in the name
          //return undefined;
        },
      },
    ],
    [
      "docusaurus-plugin-remote-content",
      {
        // options here
        name: "helm-components", // used by CLI, must be path safe
        sourceBaseUrl: "https://raw.githubusercontent.com/seriohub/velero-helm/main/", // the base url for the markdown (gets prepended to all of the documents when fetching)
        outDir: "docs/20-guide", // the base directory to output to.
        documents: ["components.txt"], // the file names to download
        modifyContent(filename, content) {
          // This is used to update a specific document. You can add more complexity here for many documents.
          //if (filename.includes("Post-Intent-System")) {
          return {
            // Match this to the name but with .md (the new file)
            filename: "40-versions.md",
            // Here we update to add a title to the page.
            // The content item contains all of the markdown from the file
            content: `---
sidebar_label: 'Version'
sidebar_position: 15
description: 'Helm released versions'
custom_edit_url: https://github.com/seriohub/velero-helm/blob/main/components.txt
---
Below is the table of released Helm versions, application versions, and component versions.
${content}
              `,
          };
          //}
          // we don't want to modify this item, since it doesn't contain "README" in the name
          //return undefined;
        },
      },
    ],
  ],

  presets: [
    [
      //'classic',
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/seriohub/velero-docs/blob/main/',
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
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Vui',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        /*{ to: '/blog', label: 'Blog', position: 'left' },*/
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
              label: 'HELM',
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
      siteId: '6',
    },
  } satisfies Preset.ThemeConfig,

};

export default config;
